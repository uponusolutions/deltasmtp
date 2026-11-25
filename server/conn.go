package server

import (
	"context"
	"crypto/tls"
	"encoding/base64"
	"errors"
	"fmt"
	"io"
	"log/slog"
	"net"
	"slices"
	"strconv"
	"strings"
	"time"

	"github.com/uponusolutions/deltasmtp"
	"github.com/uponusolutions/deltasmtp/internal/deadline"
	"github.com/uponusolutions/deltasmtp/internal/parse"
	"github.com/uponusolutions/deltasmtp/internal/smtpreader"
	"github.com/uponusolutions/deltasmtp/internal/smtpwriter"
)

// errMessageTooLarge is returned by the DATA and BDAT handlers if the message
// exceeded the maximum message size. The payload remaining on the wire was not
// consumed, so the connection is out of sync and must be closed.
var errMessageTooLarge = errors.New("smtp: maximum message size exceeded")

// errTooManyTransactions is returned by the MAIL handler if the client exceeded
// the transactions per session, it can only continue in a new session.
var errTooManyTransactions = errors.New("smtp: maximum transactions exceeded")

type state int32

const (
	stateInit                    state = 0
	stateUpgrade                 state = 1
	stateEnforceAuthentication   state = 2
	stateEnforceSecureConnection state = 3
	stateGreeted                 state = 4
	stateMail                    state = 5
)

// Conn is a connection inside a smtp server.
type Conn struct {
	ctx context.Context

	conn     net.Conn
	receiver *smtpreader.Receiver
	sender   *smtpwriter.Sender

	deadline deadline.Renewer // command deadline of conn

	state state

	server *Server

	session Session
	client  clientState // what the client negotiated
	tx      transaction // current mail transaction

	transactions int // MAIL commands in this session (RFC 9422 MAILMAX)

	data     messageReader // reads the message of DATA or BDAT
	bdatLine string        // the last BDAT command line, see commandLine
}

// messageReader holds the readers of the message content. They are reused for
// every message of a session, so receiving a message doesn't allocate them.
type messageReader struct {
	dot     smtpreader.Dot
	bdat    smtpreader.Bdat
	isBdat  bool // open returns bdat instead of dot
	started bool // DATA: the 354 reply was sent and dot is set up
	closed  bool // BDAT: the transfer failed, no further chunk is read

	// Bound to the Conn by bindMessageFuncs, the same funcs serve every
	// message of the session instead of new closures for each.
	open        func() io.Reader               // passed to Session.Data
	nextCommand func() (string, string, error) // reads the next BDAT command
}

// clientState holds what the server knows about the client. It is discarded
// after STARTTLS (RFC 3207 section 4.2).
type clientState struct {
	esmtp      bool     // EHLO was used instead of HELO
	helo       string   // domain given in HELO / EHLO
	mechanisms []string // auth mechanisms offered in EHLO
	didAuth    bool     // client is authenticated
}

// transaction holds the state of a mail transaction. It is reset by MAIL,
// RSET and after the message has been received.
type transaction struct {
	binarymime bool // BODY=BINARYMIME was given in MAIL
	smtputf8   bool // SMTPUTF8 was given in MAIL
	recipients int  // number of accepted recipients
}

// run loops until an error occurs (quit for example)
func (c *Conn) run() (err error) {
	var (
		cmd string
		arg string
	)
	c.greet()

	for {
		c.renewDeadline()
		cmd, arg, err = c.nextCommand()
		if err != nil {
			return err
		}

		err = c.handle(cmd, arg)
		if err != nil {
			// if error is a smtp status it isn't necessary to close the connection
			if smtpErr, ok := err.(*deltasmtp.Status); ok {
				// Service closing transmission channel, after quit
				if smtpErr.Code == 221 {
					return smtpErr
				}

				// ToDo: close connection on repeated errors (e.g. authentication tries)

				// fresh deadlines for the reply after a DATA or BDAT transfer
				c.renewDeadline()
				c.writeStatus(smtpErr)
				continue
			}

			return err
		}
	}
}

// nextCommand reads the next line and parses it.
// The command is always returned upper case.
func (c *Conn) nextCommand() (cmd string, arg string, err error) {
	b, err := c.receiver.ReadFullLineBytes()
	if err != nil {
		return "", "", err
	}
	line := c.commandLine(b)
	c.logger().LogAttrs(c.ctx, slog.LevelDebug, "read", slog.String("line", line))
	return parse.Cmd(line)
}

// commandLine returns the command line b as a string. A string is only
// allocated for a line it hasn't returned just before: the commands without
// arguments are constants, and the BDAT line of every full chunk of a message
// is the same (comparing string(b) doesn't allocate). Other lines aren't kept,
// e.g. an AUTH line with credentials.
func (c *Conn) commandLine(b []byte) string {
	switch string(b) {
	case "DATA":
		return "DATA"
	case "RSET":
		return "RSET"
	case "NOOP":
		return "NOOP"
	case "QUIT":
		return "QUIT"
	case c.bdatLine:
		return c.bdatLine
	}

	line := string(b)
	if len(line) > 5 && strings.EqualFold(line[:5], "BDAT ") {
		c.bdatLine = line
	}
	return line
}

// Commands are dispatched to the appropriate handler functions.
func (c *Conn) handle(cmd string, arg string) error {
	if cmd == "" {
		return deltasmtp.ErrBadSyntax
	}
	switch c.state {
	case stateInit, stateUpgrade:
		return c.handleStateInit(cmd, arg)
	case stateEnforceSecureConnection:
		return c.handleStateEnforceSecureConnection(cmd, arg)
	case stateEnforceAuthentication:
		return c.handleStateEnforceAuthentication(cmd, arg)
	case stateGreeted:
		return c.handleStateGreeted(cmd, arg)
	case stateMail:
		return c.handleStateMail(cmd, arg)
	default:
		return fmt.Errorf("unsupported state %d, how?", c.state)
	}
}

func (c *Conn) handleStateInit(cmd string, arg string) error {
	switch cmd {
	case "HELO", "EHLO":
		return c.handleGreet(cmd == "EHLO", arg)
	case "NOOP":
		return deltasmtp.Noop
	case "VRFY":
		return c.handleVrfy(arg)
	case "RSET": // Reset session
		return c.handleRSET()
	case "QUIT":
		return deltasmtp.Quit
	default:
		return c.commandUnknown(cmd)
	}
}

func (c *Conn) handleStateEnforceAuthentication(cmd string, arg string) error {
	switch cmd {
	case "HELO", "EHLO":
		return c.handleGreet(cmd == "EHLO", arg)
	case "NOOP":
		return deltasmtp.Noop
	case "VRFY":
		return c.handleVrfy(arg)
	case "RSET": // Reset session
		return c.handleRSET()
	case "QUIT":
		return deltasmtp.Quit
	case "AUTH":
		// there is always a mechanism, as it is an enforce authentication precondition
		return c.handleAuth(arg)
	case "STARTTLS":
		return c.handleStartTLS()
	// RFC 5321, always consume bdat data if capabilities were sent
	case "BDAT":
		return c.handleBdatDiscard(arg)
	default:
		return deltasmtp.ErrAuthRequired
	}
}

func (c *Conn) handleStateGreeted(cmd string, arg string) error {
	switch cmd {
	case "HELO", "EHLO":
		return c.handleGreet(cmd == "EHLO", arg)
	case "MAIL":
		return c.handleMail(arg)
	case "NOOP":
		return deltasmtp.Noop
	case "VRFY":
		return c.handleVrfy(arg)
	case "RSET": // Reset session
		return c.handleRSET()
	case "QUIT":
		return deltasmtp.Quit
	case "AUTH":
		if len(c.client.mechanisms) > 0 {
			return c.handleAuth(arg)
		}
		return deltasmtp.ErrAuthUnsupported
	case "STARTTLS":
		return c.handleStartTLS()
	// RFC 5321, always consume bdat data if capabilities were sent
	case "BDAT":
		return c.handleBdatDiscard(arg)
	default:
		return c.commandUnknown(cmd)
	}
}

func (c *Conn) handleStateMail(cmd string, arg string) error {
	switch cmd {
	case "HELO", "EHLO":
		return c.handleGreet(cmd == "EHLO", arg)
	case "RCPT":
		return c.handleRcpt(arg)
	case "NOOP":
		return deltasmtp.Noop
	case "VRFY":
		return c.handleVrfy(arg)
	case "RSET": // Reset session
		return c.handleRSET()
	case "BDAT":
		if !c.server.enableCHUNKING {
			return c.handleBdatDiscard(arg)
		}
		return c.handleBdat(arg)
	case "DATA":
		return c.handleData(arg)
	case "QUIT":
		return deltasmtp.Quit
	case "STARTTLS":
		return c.handleStartTLS()
	default:
		return c.commandUnknown(cmd)
	}
}

func (c *Conn) handleStateEnforceSecureConnection(cmd string, arg string) error {
	switch cmd {
	case "HELO", "EHLO":
		return c.handleGreet(cmd == "EHLO", arg)
	case "NOOP":
		return deltasmtp.Noop
	case "VRFY":
		return c.handleVrfy(arg)
	case "STARTTLS":
		return c.handleStartTLS()
	case "QUIT":
		return deltasmtp.Quit
	// RFC 5321, always consume bdat data if capabilities were sent
	case "BDAT":
		return c.handleBdatDiscard(arg)
	default:
		return deltasmtp.ErrSecureConnectionRequired
	}
}

func (c *Conn) commandUnknown(cmd string) *deltasmtp.Status {
	return deltasmtp.NewStatusS(502, deltasmtp.EnhancedCode{5, 5, 1},
		fmt.Sprintf("%s command unknown, state %d", cmd, c.state))
}

// Server returns the server this connection comes from.
func (c *Conn) Server() *Server {
	return c.server
}

// Close closes the connection.
func (c *Conn) Close(err error) {
	c.logger().DebugContext(c.ctx, "connection is closing")

	// flush any pending data from writer before closing connection, the
	// writer is gone if the connection was closed before
	if c.sender != nil {
		_ = c.sender.Flush()
	}

	closeErr := c.conn.Close()
	if closeErr != nil {
		if err == nil {
			err = closeErr
		} else {
			err = errors.Join(err, closeErr)
		}
	}

	if err != nil {
		c.logger().ErrorContext(c.ctx, "close error", slog.Any("err", err))
	}

	if c.session != nil {
		c.session.Close(c.ctx, err)
		c.session = nil
	}
}

// TLSConnectionState returns the connection's TLS connection state.
// Zero values are returned if the connection doesn't use TLS.
func (c *Conn) TLSConnectionState() (tls.ConnectionState, bool) {
	tc, ok := c.conn.(*tls.Conn)
	if !ok {
		return tls.ConnectionState{}, ok
	}
	return tc.ConnectionState(), true
}

// IsTLS returns if the connection is encrypted by tls.
func (c *Conn) IsTLS() bool {
	_, ok := c.conn.(*tls.Conn)
	return ok
}

// Hostname returns the name of the connected client.
func (c *Conn) Hostname() string {
	return c.client.helo
}

// Esmtp returns true if ESMTP was used (EHLO instead of HELO).
func (c *Conn) Esmtp() bool {
	return c.client.esmtp
}

// Mechanisms returns the allowed auth mechanism for this connection.
func (c *Conn) Mechanisms() []string {
	return c.client.mechanisms
}

// Conn returns the connection.
func (c *Conn) Conn() net.Conn {
	return c.conn
}

func (c *Conn) handleRSET() error {
	err := c.reset()
	if err != nil {
		return err
	}
	c.writeStatus(deltasmtp.Reset)
	return nil
}

// GREET state -> waiting for HELO
func (c *Conn) handleGreet(esmtp bool, arg string) error {
	domain, err := parse.HelloArgument(arg)
	if err != nil {
		return deltasmtp.ErrHeloArgRequired
	}

	// c.client.esmtp is populated before NewSession so
	// NewSession can access it via Conn.Esmtp.
	c.client.esmtp = esmtp

	// c.client.helo is populated before NewSession so
	// NewSession can access it via Conn.Hostname.
	c.client.helo = domain

	// RFC 5321: "An EHLO command MAY be issued by a client later in the session"
	// RFC 5321: "... the SMTP server MUST clear all buffers
	// and reset the state exactly as if a RSET command has been issued."
	if c.state != stateInit && c.state != stateEnforceSecureConnection && c.state != stateEnforceAuthentication {
		err := c.reset()
		if err != nil {
			return err
		}
	}

	if c.server.enforceSecureConnection && !c.IsTLS() {
		c.state = stateEnforceSecureConnection
	} else if c.server.enforceAuthentication && !c.client.didAuth {
		c.state = stateEnforceAuthentication
	} else {
		c.state = stateGreeted
	}

	if !esmtp {
		return deltasmtp.NewStatusS(250, deltasmtp.NoEnhancedCode, c.server.hostname+" greets "+c.client.helo)
	}

	c.client.mechanisms = c.session.AuthMechanisms(c.ctx)

	if len(c.client.mechanisms) == 0 && c.server.enforceAuthentication {
		// without any auth mechanism, no authentication can happen => deadlock
		return c.newStatusError(deltasmtp.ErrNoAuthMechanism, err)
	}

	return c.handleGreetResponse()
}

func (c *Conn) handleGreetResponse() *deltasmtp.Status {
	ext := c.server.extensions
	lines := make([]string, 0, 3+len(ext.beforeTLS)+len(ext.afterAuth))

	lines = append(lines, c.server.hostname+" greets "+c.client.helo)
	lines = append(lines, ext.beforeTLS...)
	if !c.IsTLS() && c.server.tlsConfig != nil {
		lines = append(lines, "STARTTLS")
	}
	if len(c.client.mechanisms) > 0 {
		lines = append(lines, "AUTH "+strings.Join(c.client.mechanisms, " "))
	}
	lines = append(lines, ext.afterAuth...)

	return deltasmtp.NewStatusM(250, deltasmtp.NoEnhancedCode, lines)
}

// extensions are the EHLO reply lines which only depend on the server options,
// they are built once by New. STARTTLS and AUTH depend on the connection and
// are put in between.
type extensions struct {
	beforeTLS []string
	afterAuth []string
}

func newExtensions(s *Server) extensions {
	before := []string{"PIPELINING", "8BITMIME", "ENHANCEDSTATUSCODES"}
	if s.enableCHUNKING {
		before = append(before, "CHUNKING")
	}

	var after []string
	if s.enableSMTPUTF8 {
		after = append(after, "SMTPUTF8")
	}
	// We explicit allow require tls to be set if the connection is unencrypted
	// because if the server runs in a fully trusted zone
	// then the encryption is only relevant when it leaves this zone.
	if s.enableREQUIRETLS {
		after = append(after, "REQUIRETLS")
	}
	if s.enableBINARYMIME {
		after = append(after, "BINARYMIME")
	}
	if s.enableDSN {
		after = append(after, "DSN")
	}
	if s.enableXOORG {
		after = append(after, "XOORG")
	}
	if s.maxMessageBytes > 0 {
		after = append(after, "SIZE "+strconv.FormatInt(s.maxMessageBytes, 10))
	} else {
		after = append(after, "SIZE")
	}
	if limits := limits(s); limits != "" {
		after = append(after, "LIMITS"+limits)
	}
	if s.enableRRVS {
		after = append(after, "RRVS")
	}
	if s.enableDELIVERBY {
		// maximum of nine digits
		if s.minimumDeliverInSeconds > 0 && s.minimumDeliverInSeconds < 999999999 {
			after = append(after, "DELIVERBY "+strconv.Itoa(s.minimumDeliverInSeconds))
		} else {
			after = append(after, "DELIVERBY")
		}
	}
	if s.enableMTPRIORITY {
		if s.mtPriorityProfile != deltasmtp.PriorityUnspecified {
			after = append(after, "MT-PRIORITY "+string(s.mtPriorityProfile))
		} else {
			after = append(after, "MT-PRIORITY")
		}
	}

	return extensions{beforeTLS: before, afterAuth: after}
}

// limits returns the RFC 9422 LIMITS parameters with a leading space, or ""
// if there are none. Values are only valid from 1 to 999999, a larger limit
// isn't advertised (but still enforced).
func limits(s *Server) string {
	var sb strings.Builder
	for _, l := range []struct {
		prefix string
		value  int
	}{
		{" MAILMAX=", s.maxTransactions},
		{" RCPTMAX=", s.maxRecipients},
	} {
		if l.value > 0 && l.value <= 999999 {
			sb.WriteString(l.prefix)
			sb.WriteString(strconv.Itoa(l.value))
		}
	}
	return sb.String()
}

// handleError handles error and closes the connection afterwards.
func (c *Conn) handleError(err error) {
	// e.g. after a timeout the deadline is over, the reply needs a new one
	c.renewDeadline()

	if err == io.EOF || errors.Is(err, net.ErrClosed) {
		c.Close(fmt.Errorf("connection closed unexpectedly: %w", err))
		return
	}

	if neterr, ok := err.(net.Error); ok && neterr.Timeout() {
		c.writeStatus(deltasmtp.ErrIdleTimeout)
		c.Close(fmt.Errorf("idle timeout: %w", err))
		return
	}

	if smtpErr, ok := err.(*deltasmtp.Status); ok {
		c.writeStatus(smtpErr)

		if smtpErr.Code != 221 {
			c.Close(fmt.Errorf("smtp error: %w", err))
		} else {
			c.Close(nil)
		}

		return
	}

	if errors.Is(err, errTooManyTransactions) {
		c.writeStatus(deltasmtp.ErrTooManyTransactions)
		c.Close(err)
		return
	}

	if errors.Is(err, errMessageTooLarge) {
		c.writeStatus(deltasmtp.ErrDataTooLarge)
		c.Close(err)
		return
	}

	if err == deltasmtp.ErrTooLongLine {
		c.writeStatus(deltasmtp.ErrCommandLineTooLong)
		c.Close(errors.New("line too long"))
		return
	}

	c.writeStatus(deltasmtp.ErrConnection)
	c.Close(fmt.Errorf("unknown error: %w", err))
}

func (c *Conn) logger() *slog.Logger {
	// Fallback if the connection couldn't be created or is already closed.
	if c.session == nil {
		return slog.Default()
	}
	logger := c.session.Logger(c.ctx)
	if logger == nil {
		return slog.Default()
	}
	return logger
}

// READY state -> waiting for MAIL
// nolint: revive
func (c *Conn) handleMail(arg string) error {
	// RFC 9422: every MAIL command counts, regardless of whether it succeeds.
	c.transactions++
	if c.server.maxTransactions > 0 && c.transactions > c.server.maxTransactions {
		return errTooManyTransactions
	}

	arg, ok := parse.CutPrefixFold(arg, "FROM:")
	if !ok {
		return deltasmtp.ErrMailSyntax
	}

	p := parse.Parser{S: strings.TrimSpace(arg)}
	from, err := p.ReversePath()
	if err != nil {
		return c.newStatusError(deltasmtp.ErrMailSyntax, err)
	}
	var argsBuf [8]parse.Arg
	args, err := parse.Args(argsBuf[:0], p.S)
	if err != nil {
		return c.newStatusError(deltasmtp.ErrMailParams, err)
	}

	opts := &deltasmtp.MailOptions{}

	c.tx = transaction{}
	// This is where the Conn may put BODY=8BITMIME, but we already
	// read the DATA as bytes, so it does not effect our processing.
	for _, arg := range args {
		switch arg.Key {
		case "SIZE":
			size, err := strconv.ParseUint(arg.Value, 10, 32)
			if err != nil {
				return deltasmtp.ErrMalformedSize
			}

			if c.server.maxMessageBytes > 0 && int64(size) > c.server.maxMessageBytes {
				return deltasmtp.ErrDataTooLarge
			}

			opts.Size = int64(size)
		case "XOORG":
			value, err := decodeXtext(arg.Value)
			if err != nil || value == "" {
				return deltasmtp.ErrMalformedXOORG
			}
			if !c.server.enableXOORG {
				return deltasmtp.ErrXOORGNotImplemented
			}
			opts.XOORG = &value
		case "SMTPUTF8":
			if !c.server.enableSMTPUTF8 {
				return deltasmtp.ErrSMTPUTF8NotImplemented
			}
			opts.UTF8 = true
		case "REQUIRETLS":
			if !c.server.enableREQUIRETLS {
				return deltasmtp.ErrREQUIRETLSNotImplemented
			}
			opts.RequireTLS = true
		case "BODY":
			value := strings.ToUpper(arg.Value)
			switch deltasmtp.BodyType(value) {
			case deltasmtp.BodyBinaryMIME:
				if !c.server.enableBINARYMIME {
					return deltasmtp.ErrBINARYMIMENotImplemented
				}
				c.tx.binarymime = true
			case deltasmtp.Body7Bit, deltasmtp.Body8BitMIME:
				// This space is intentionally left blank
			default:
				return deltasmtp.ErrUnknownBody
			}
			opts.Body = deltasmtp.BodyType(value)
		case "RET":
			if !c.server.enableDSN {
				return deltasmtp.ErrRETNotImplemented
			}
			value := strings.ToUpper(arg.Value)
			switch deltasmtp.DSNReturn(value) {
			case deltasmtp.DSNReturnFull, deltasmtp.DSNReturnHeaders:
				// This space is intentionally left blank
			default:
				return deltasmtp.ErrUnknownRET
			}
			opts.Return = deltasmtp.DSNReturn(value)
		case "ENVID":
			if !c.server.enableDSN {
				return deltasmtp.ErrENVIDNotImplemented
			}
			value, err := decodeXtext(arg.Value)
			if err != nil || value == "" || !parse.IsPrintableASCII(value) {
				return deltasmtp.ErrMalformedENVID
			}
			opts.EnvelopeID = value
		case "AUTH":
			value, err := decodeXtext(arg.Value)
			if err != nil || value == "" {
				return deltasmtp.ErrMalformedAUTH
			}
			if value == "<>" {
				value = ""
			} else {
				p := parse.Parser{S: value}
				value, err = p.Mailbox()
				if err != nil || p.S != "" {
					return deltasmtp.ErrMalformedAUTHMailbox
				}
			}
			opts.Auth = &value
		case "BY":
			if err := handleMailBY(c.server, opts, arg.Value); err != nil {
				return err
			}
		case "MT-PRIORITY":
			if err := handleMailMTPRIORITY(c.server, opts, arg.Value); err != nil {
				return err
			}
		default:
			return deltasmtp.ErrUnknownMailArg
		}
	}

	if !opts.UTF8 && !parse.IsASCII(from) {
		return deltasmtp.ErrNonASCIISender
	}

	// The null reverse-path is not an address.
	if from != "" {
		if err := c.validateAddress(from, deltasmtp.ErrSenderNotAccepted); err != nil {
			return err
		}
	}

	c.tx.smtputf8 = opts.UTF8

	if err := c.session.Mail(c.ctx, from, opts); err != nil {
		if smtpErr, ok := err.(*deltasmtp.Status); ok {
			// a positive response also counts as a success
			if smtpErr.Positive() {
				c.state = stateMail
			}
			return smtpErr
		}
		return c.newStatusError(deltasmtp.ErrMailNotAccepted, err)
	}

	c.state = stateMail
	c.writeOK("Roger, accepting mail from <", from, ">")
	return nil
}

func handleMailBY(server *Server, opts *deltasmtp.MailOptions, value string) error {
	if !server.enableDELIVERBY {
		return deltasmtp.ErrDELIVERBYNotImplemented
	}
	deliverBy := parseDeliverByArgument(value)
	if deliverBy == nil {
		return deltasmtp.ErrMalformedBY
	}
	if server.minimumDeliverInSeconds != 0 &&
		deliverBy.Mode == deltasmtp.DeliverByReturn &&
		deliverBy.Seconds < server.minimumDeliverInSeconds {
		return deltasmtp.ErrBYBelowMinimum
	}
	opts.DeliverBy = deliverBy
	return nil
}

// validateAddress calls the address validator of the server, if set.
// If it returns an error that is not a negative *deltasmtp.Status, the reply is
// rejected, a 553 (mailbox name not allowed, RFC 5321 section 4.2.2).
func (c *Conn) validateAddress(addr string, rejected *deltasmtp.Status) error {
	if c.server.addressValidator == nil {
		return nil
	}

	err := c.server.addressValidator(addr)
	if err == nil {
		return nil
	}

	if status, ok := err.(*deltasmtp.Status); ok && status.Positive() {
		// A positive reply would end the command without a result.
		err = errors.New("address validator returned a positive reply")
	}

	return c.newStatusError(rejected, err)
}

func handleMailMTPRIORITY(server *Server, opts *deltasmtp.MailOptions, value string) error {
	if !server.enableMTPRIORITY {
		return deltasmtp.ErrMTPRIORITYNotImplemented
	}
	mtPriority, err := strconv.Atoi(value)
	if err != nil {
		return deltasmtp.ErrMalformedMTPRIORITY
	}
	if mtPriority < -9 || mtPriority > 9 {
		return deltasmtp.ErrMTPRIORITYOutOfRange
	}
	opts.MTPriority = &mtPriority
	return nil
}

// MAIL state -> waiting for RCPTs followed by DATA
func (c *Conn) handleRcpt(arg string) error {
	arg, ok := parse.CutPrefixFold(arg, "TO:")
	if !ok {
		return deltasmtp.ErrRcptSyntax
	}

	p := parse.Parser{S: strings.TrimSpace(arg)}
	recipient, err := p.Path()
	if err != nil {
		return deltasmtp.ErrRcptSyntax
	}
	if !c.tx.smtputf8 && !parse.IsASCII(recipient) {
		return deltasmtp.ErrNonASCIIRecipient
	}

	if err := c.validateAddress(recipient, deltasmtp.ErrRcptAddressNotAccepted); err != nil {
		return err
	}

	if c.server.maxRecipients > 0 && c.tx.recipients >= c.server.maxRecipients {
		return deltasmtp.NewStatusS(452, deltasmtp.EnhancedCode{4, 5, 3},
			fmt.Sprintf("Maximum limit of %v recipients reached", c.server.maxRecipients),
		)
	}

	var argsBuf [8]parse.Arg
	args, err := parse.Args(argsBuf[:0], p.S)
	if err != nil {
		return c.newStatusError(deltasmtp.ErrRcptParams, err)
	}

	opts := &deltasmtp.RcptOptions{}

	for _, arg := range args {
		switch arg.Key {
		case "NOTIFY":
			if err := handleRcptNotify(c.server, opts, arg.Value); err != nil {
				return err
			}
		case "ORCPT":
			if err := handleRcptORCPT(c.server, opts, arg.Value); err != nil {
				return err
			}
		case "RRVS":
			if err := handleRcptRRVS(c.server, opts, arg.Value); err != nil {
				return err
			}
		default:
			return deltasmtp.ErrUnknownRcptArg
		}
	}

	if err := c.session.Rcpt(c.ctx, recipient, opts); err != nil {
		if smtpErr, ok := err.(*deltasmtp.Status); ok {
			// a positive response also counts as a success
			if smtpErr.Positive() {
				c.tx.recipients++
			}
			return smtpErr
		}
		return c.newStatusError(deltasmtp.ErrRcptNotAccepted, err)
	}

	c.tx.recipients++
	c.writeOK("I'll make sure <", recipient, "> gets this")
	return nil
}

func handleRcptNotify(server *Server, opts *deltasmtp.RcptOptions, value string) error {
	if !server.enableDSN {
		return deltasmtp.ErrNOTIFYNotImplemented
	}
	notify := []deltasmtp.DSNNotify{}
	for val := range strings.SplitSeq(value, ",") {
		notify = append(notify, deltasmtp.DSNNotify(strings.ToUpper(val)))
	}
	if err := parse.CheckNotifySet(notify); err != nil {
		return deltasmtp.ErrMalformedNOTIFY
	}
	opts.Notify = notify
	return nil
}

func handleRcptORCPT(server *Server, opts *deltasmtp.RcptOptions, value string) error {
	if !server.enableDSN {
		return deltasmtp.ErrORCPTNotImplemented
	}
	aType, aAddr, err := decodeTypedAddress(value)
	if err != nil || aAddr == "" {
		return deltasmtp.ErrMalformedORCPT
	}
	opts.OriginalRecipientType = aType
	opts.OriginalRecipient = aAddr
	return nil
}

func handleRcptRRVS(server *Server, opts *deltasmtp.RcptOptions, value string) error {
	if !server.enableRRVS {
		return deltasmtp.ErrRRVSNotImplemented
	}
	value, _, _ = strings.Cut(value, ";") // discard the no-support action
	rrvsTime, err := time.Parse(time.RFC3339, value)
	if err != nil {
		return deltasmtp.ErrMalformedRRVS
	}
	opts.RequireRecipientValidSince = rrvsTime
	return nil
}

func (c *Conn) handleVrfy(arg string) error {
	p := parse.Parser{S: strings.TrimSpace(arg)}
	vrfy, err := p.Path()
	if err != nil {
		return deltasmtp.ErrVrfySyntax
	}
	var argsBuf [8]parse.Arg
	args, err := parse.Args(argsBuf[:0], p.S)
	if err != nil {
		return c.newStatusError(deltasmtp.ErrVrfyParams, err)
	}

	opts := &deltasmtp.VrfyOptions{}

	for _, arg := range args {
		if arg.Key == "SMTPUTF8" {
			if !c.server.enableSMTPUTF8 {
				return deltasmtp.ErrSMTPUTF8NotImplemented
			}
			opts.UTF8 = true
		}
	}
	if !opts.UTF8 && !parse.IsASCII(vrfy) {
		return deltasmtp.ErrUTF8ReplyRequired
	}

	if err := c.validateAddress(vrfy, deltasmtp.ErrVrfyAddressNotAccepted); err != nil {
		return err
	}

	res := c.session.Verify(c.ctx, vrfy, opts)

	if res == nil {
		return deltasmtp.VRFY
	}

	return res
}

func (c *Conn) handleAuth(arg string) error {
	if c.client.didAuth {
		return deltasmtp.ErrAlreadyAuthenticated
	}
	parts := strings.Fields(arg)
	if len(parts) == 0 {
		return deltasmtp.ErrAuthMissingParam
	}

	mechanism := strings.ToUpper(parts[0])

	// Is mechanism allowed?
	if !slices.Contains(c.client.mechanisms, mechanism) {
		return deltasmtp.ErrAuthUnknownMechanism
	}

	// Parse client initial response if there is one
	var ir []byte
	if len(parts) > 1 {
		var err error
		ir, err = decodeSASLResponse(parts[1])
		if err != nil {
			return deltasmtp.ErrInvalidBase64
		}
	}

	sasl, err := c.session.Auth(c.ctx, mechanism)
	if err != nil {
		return c.newStatusError(deltasmtp.ErrAuthTemporaryFailure, err)
	}

	if sasl == nil {
		return c.newStatusError(deltasmtp.ErrNoAuthHandler, err)
	}

	response := ir
	for {
		challenge, done, err := sasl.Next(response)
		if err != nil {
			return c.newStatusError(deltasmtp.ErrAuthTemporaryFailure, err)
		}

		if done {
			break
		}

		encoded := ""
		if len(challenge) > 0 {
			encoded = base64.StdEncoding.EncodeToString(challenge)
		}
		c.writeStatus(deltasmtp.NewStatusS(334, deltasmtp.NoEnhancedCode, encoded))

		c.renewDeadline()
		encoded, err = c.readLine()
		if err != nil {
			return err
		}

		if encoded == "*" {
			// https://tools.ietf.org/html/rfc4954#page-4
			return deltasmtp.ErrAuthCancelled
		}

		response, err = decodeSASLResponse(encoded)
		if err != nil {
			return deltasmtp.ErrInvalidBase64
		}
	}

	c.client.didAuth = true
	if c.state == stateEnforceAuthentication {
		c.state = stateGreeted
	}

	return deltasmtp.AuthSucceeded
}

func (c *Conn) handleStartTLS() error {
	if _, isTLS := c.TLSConnectionState(); isTLS {
		return deltasmtp.ErrAlreadyTLS
	}

	if c.server.tlsConfig == nil {
		return deltasmtp.ErrTLSNotSupported
	}

	// allow the session to change tlsConfig
	tlsConfig, err := c.session.STARTTLS(c.ctx, c.server.tlsConfig)
	if err != nil {
		return c.newStatusError(deltasmtp.ErrTLSConfig, err)
	}
	if tlsConfig == nil {
		return deltasmtp.ErrTLSConfigNil
	}

	c.writeStatus(deltasmtp.StartTLS)

	// Upgrade to TLS
	tlsConn := tls.Server(c.conn, tlsConfig)

	if err := c.handshake(tlsConn); err != nil {
		// err is not a smtp error and will terminate the connection
		return err
	}

	c.conn = tlsConn
	c.receiver.Reset(tlsConn)
	c.sender.Reset(tlsConn)
	// RFC 3207 section 4.2: the server MUST discard any knowledge obtained
	// from the client, such as the argument to the EHLO command, which was
	// not obtained from the TLS negotiation itself. This also revokes the
	// authentication.
	c.client = clientState{}
	c.state = stateUpgrade // same as StateInit but calls logout/reset on ehlo/helo

	return nil
}

// DATA
func (c *Conn) handleData(arg string) error {
	// at least a single recipient needs to be set
	if c.tx.recipients == 0 {
		return deltasmtp.ErrNoRecipients
	}

	if arg != "" {
		return deltasmtp.ErrDataArgs
	}
	if c.tx.binarymime {
		return deltasmtp.ErrDataBINARYMIME
	}

	c.bindMessageFuncs()
	c.data.isBdat = false
	c.data.started = false

	uuid, err := c.session.Data(c.ctx, c.data.open)

	// an error which isn't a smtp status error will always terminate the connection
	if _, ok := err.(*deltasmtp.Status); err != nil && !ok {
		return err
	}

	// Make sure all the data has been consumed, regardless of what the backend returned.
	// The reader keeps returning ErrDataTooLarge once the limit is hit, so this also
	// detects a breach the backend swallowed. In that case the rest of the message is
	// still on the wire and the connection can't be resynchronised.
	if c.data.started {
		if _, discardErr := io.Copy(io.Discard, &c.data.dot); errors.Is(discardErr, deltasmtp.ErrDataTooLarge) {
			return errMessageTooLarge
		}
	}

	// Without a 354 the client sent no message, a rejected DATA command leaves the transaction open.
	if !c.data.started && err != nil {
		return err
	}

	// RFC 5321 4.1.1.4: the end of mail data ends the transaction, whether the message
	// was accepted or rejected. Keeping it would leave sender and recipients behind,
	// a following MAIL is refused and a pipelined RCPT/DATA reuses the old envelope.
	if resetErr := c.reset(); resetErr != nil {
		return resetErr
	}
	if err != nil {
		return err
	}
	return c.accepted(uuid)
}

// discardBdat discards a BDAT chunk that isn't processed. Like a processed
// chunk, it is limited to the maximum message size. A larger chunk isn't read,
// it stays on the wire and the connection must be closed.
func (c *Conn) discardBdat(size int64) error {
	if c.server.maxMessageBytes > 0 && size > c.server.maxMessageBytes {
		return errMessageTooLarge
	}
	_, err := c.receiver.Discard(int(size))
	return err
}

func (c *Conn) handleBdatDiscard(arg string) error {
	size, _, err := smtpreader.BdatArg(arg)
	if err != nil {
		return err
	}
	c.setDataDeadline()
	if err = c.discardBdat(size); err != nil {
		return err
	}
	if !c.server.enableCHUNKING {
		return deltasmtp.ErrCHUNKINGNotImplemented
	}
	return deltasmtp.ErrBadSequence
}

func (c *Conn) handleBdat(arg string) error {
	size, last, err := smtpreader.BdatArg(arg)
	if err != nil {
		return err
	}

	// The whole transfer, all chunks until LAST, has to finish within the data timeout.
	// The BDAT lines between chunks are read without renewing the deadline.
	c.setDataDeadline()

	// at least a single recipient needs to be set
	if c.tx.recipients == 0 {
		if err = c.discardBdat(size); err != nil {
			return err
		}
		return deltasmtp.ErrNoRecipients
	}

	c.bindMessageFuncs()
	c.data.isBdat = true
	c.data.closed = false
	c.data.bdat.Reset(size, last, c.server.maxMessageBytes, c.receiver, c.data.nextCommand)

	queueid, err := c.session.Data(c.ctx, c.data.open)

	smtpErr, isStatus := err.(*deltasmtp.Status)

	// an error which isn't a SMTPStatus error will always terminate the connection
	if err != nil && !isStatus {
		return err
	}

	if err != nil {
		// read anything left to continue after this failure
		// https://www.rfc-editor.org/rfc/rfc3030.html
		// If a 5XX or 4XX code is received by the sender-SMTP in response to a BDAT
		// chunk, the transaction should be considered failed and the sender-
		// SMTP MUST NOT send any additional BDAT segments.  If the receiver-
		// SMTP has declared support for command pipelining [PIPE], the receiver
		// SMTP MUST be prepared to accept and discard additional BDAT chunks
		// already in the pipeline after the failed BDAT.
		c.data.closed = true
	}

	// Make sure all the data has been consumed, regardless of what the backend returned.
	// The reader keeps returning ErrDataTooLarge once the limit is hit, so this also
	// detects a breach the backend swallowed. In that case the chunk is still on the
	// wire and the connection can't be resynchronised.
	if _, discardErr := io.Copy(io.Discard, &c.data.bdat); errors.Is(discardErr, deltasmtp.ErrDataTooLarge) {
		return errMessageTooLarge
	}

	if err != nil {
		// write down error after data is discarded to prevent deadlock because of pipelining
		c.writeStatus(smtpErr)
		return c.reset()
	}

	if err = c.reset(); err != nil {
		return err
	}
	return c.accepted(queueid)
}

// bindMessageFuncs binds the funcs of c.data on the first message, they serve
// every message of the session.
func (c *Conn) bindMessageFuncs() {
	if c.data.open == nil {
		c.data.open = c.messageContent
		c.data.nextCommand = c.nextBdatCommand
	}
}

// messageContent returns the reader of the message. For DATA the 354 reply is
// sent on the first call, a backend that never calls it rejects the message
// before the client sends it.
func (c *Conn) messageContent() io.Reader {
	if c.data.isBdat {
		return &c.data.bdat
	}
	if !c.data.started {
		c.data.started = true
		// We have recipients, go to accept data
		c.writeStatus(deltasmtp.StartMailInput)
		c.setDataDeadline()
		c.data.dot.Reset(c.receiver.Reader, c.server.maxMessageBytes)
	}
	return &c.data.dot
}

// nextBdatCommand reads the BDAT command of the next chunk after replying to
// the previous one.
func (c *Conn) nextBdatCommand() (cmd string, arg string, err error) {
	// if bdat is closed (error occurred)
	if c.data.closed {
		return "", "", io.EOF
	}
	// the reply between chunks isn't limited by the data deadline
	deadline.SetWrite(c.conn, c.server.commandTimeout)
	c.writeStatus(deltasmtp.BDATContinue)
	return c.nextCommand()
}

func (*Conn) accepted(queueid string) *deltasmtp.Status {
	if queueid != "" {
		// limit length if queueid is too long (< 1000)
		if len(queueid) > 977 {
			queueid = queueid[:974] + "..."
		}
		return deltasmtp.NewStatusS(250, deltasmtp.EnhancedCode{2, 0, 0}, "OK: queued as "+queueid)
	}
	return deltasmtp.Queued
}

func (c *Conn) greet() {
	c.writeStatus(c.server.greeting)
}

func (c *Conn) writeStatus(status *deltasmtp.Status) {
	c.logger().LogAttrs(c.ctx, slog.LevelDebug, "write status", slog.Any("status", status))

	_, err := status.WriteTo(c.sender)
	c.flushReply(err)
}

// writeOK writes the single line reply "250 2.0.0 " followed by the parts of
// text. Unlike writeStatus it needs neither a Status nor the joined text, the
// replies to MAIL and RCPT, which name the address, don't allocate.
func (c *Conn) writeOK(text ...string) {
	// Like a status returned to run, the reply gets a fresh deadline after
	// the session handled the command.
	c.renewDeadline()

	if logger := c.logger(); logger.Enabled(c.ctx, slog.LevelDebug) {
		logger.LogAttrs(c.ctx, slog.LevelDebug, "write status",
			slog.Any("status", deltasmtp.NewStatusS(250, deltasmtp.EnhancedCode{2, 0, 0}, strings.Join(text, ""))))
	}

	b := append(c.sender.AvailableBuffer(), "250 2.0.0 "...)
	for _, t := range text {
		b = append(b, t...)
	}
	b = append(b, '\r', '\n')

	_, err := c.sender.Write(b)
	c.flushReply(err)
}

// flushReply finishes writing a reply, err is the error of writing it.
func (c *Conn) flushReply(err error) {
	// PIPELINE support
	// If there is something buffered in c.text.R then we can assume another command is following.
	// This means the client is doing pipelining and we don't need to respond just now.
	if err == nil && c.receiver.Buffered() == 0 {
		err = c.sender.Flush()
	}

	// A failed write (e.g. write timeout) loses the reply, the session can't go on.
	// Closing the connection makes the next read fail and ends the session.
	if err != nil {
		_ = c.conn.Close()
	}
}

// newStatusError returns err if it is a status, otherwise it logs err and returns status.
func (c *Conn) newStatusError(status *deltasmtp.Status, err error) *deltasmtp.Status {
	if smtpErr, ok := err.(*deltasmtp.Status); ok {
		return smtpErr
	}
	c.logger().ErrorContext(c.ctx, status.Text(), slog.Any("err", err))
	return status
}

// renewDeadline renews the deadline to at least now plus the command timeout,
// a zero timeout means no deadline. It is called before a command line is read
// and covers the reply to the command as well.
func (c *Conn) renewDeadline() {
	c.deadline.Set(c.conn, c.server.commandTimeout)
}

// setDataDeadline sets the read and write deadline for a whole DATA or BDAT
// transfer to now plus the data timeout, a zero data timeout means no deadline.
func (c *Conn) setDataDeadline() {
	deadline.Set(c.conn, c.server.dataTimeout)
	c.deadline.Reset()
}

// handshake runs the TLS handshake within the TLS handshake timeout,
// the next renewal sets the command deadline again.
func (c *Conn) handshake(tlsConn *tls.Conn) error {
	deadline.Set(tlsConn, c.server.tlsHandshakeTimeout)
	c.deadline.Reset()
	return tlsConn.HandshakeContext(c.ctx)
}

// readLine reads a line of input.
// It doesn't touch the read deadline, the caller has to set it.
func (c *Conn) readLine() (string, error) {
	line, err := c.receiver.ReadFullLine()
	if err == nil {
		c.logger().LogAttrs(c.ctx, slog.LevelDebug, "read", slog.String("line", line))
	}
	return line, err
}

func (c *Conn) reset() error {
	// Reset state to Greeted
	if c.state == stateMail {
		c.state = stateGreeted
	}

	c.tx = transaction{}

	ctx, err := c.session.Reset(c.ctx, c.state == stateUpgrade)
	c.ctx = ctx
	return err
}
