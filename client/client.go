// Package client implements the client of the Simple Mail Transfer Protocol as defined in RFC 5321.
// It provides basic functionality you need to use deltasmtp.
//
// It also implements the following extensions:
//
//   - 8BITMIME (RFC 1652)
//   - ENHANCEDSTATUSCODES (RFC 2034)
//   - AUTH (RFC 2554)
//   - DELIVERBY (RFC 2852)
//   - CHUNKING (RFC 3030)
//   - BINARYMIME (RFC 3030)
//   - STARTTLS (RFC 3207)
//   - DSN (RFC 3461, RFC 6533)
//   - SMTPUTF8 (RFC 6531)
//   - MT-PRIORITY (RFC 6710)
//   - RRVS (RFC 7293)
//   - REQUIRETLS (RFC 8689)
//
// Additional extensions may be handled by other packages.
package client

import (
	"bytes"
	"context"
	"crypto/tls"
	"encoding/base64"
	"errors"
	"fmt"
	"net"
	"strconv"
	"strings"
	"time"

	"github.com/uponusolutions/deltasmtp"
	"github.com/uponusolutions/deltasmtp/internal/deadline"
	"github.com/uponusolutions/deltasmtp/internal/parse"
	"github.com/uponusolutions/deltasmtp/internal/smtpreader"
	"github.com/uponusolutions/deltasmtp/internal/smtpwriter"
	"github.com/uponusolutions/go-sasl"
)

// Client implements a SMTP Client with .
type Client struct {
	cfg Config

	session  session
	deadline deadline.Renewer // command deadline of session.conn
	receiver *smtpreader.Receiver
	sender   *smtpwriter.Sender

	cmdBuf bytes.Buffer // see cmdBuffer

	// The writers of the message content, reused for every message. The
	// ContentCloser of a message is done with its writer once it is closed.
	dotWriter          smtpwriter.Dot
	bdatWriter         smtpwriter.Bdat
	bdatBufferedWriter smtpwriter.BdatBuffered
	bdatReply          func() error // see bdatReplyFunc
}

// session is the state of the current or, after disconnect, the last connection.
//
// Only conn is reset on disconnect, the rest is kept to be able to use
// ServerAddress(), ServerName() and Extension() after disconnect. The whole
// session is reset when dialing, so it never describes a server of a previous
// connection.
type session struct {
	// keep a reference to the connection so it can be used to create a TLS
	// connection later, nil if disconnected
	conn       net.Conn
	address    string            // Format address:port, set on dial.
	name       string            // server greet name, set when the server greets the client
	ext        map[string]string // supported extensions of the server after ehlo
	pipelining pipeliningState   // reset when ext is set
}

type pipeliningState struct {
	// How many responses are pending?
	// Is counted up when a request is sent without retrieving the response.
	pending int
	// Marks if the group has concluded through a command which must be the last command in a group.
	// If it is set, the pending responses needs to be consumed before sending commands again.
	concluded bool
}

type pipeliningType int

const (
	pipeliningTypeForbidden pipeliningType = iota
	pipeliningTypeAnywhere
	pipeliningTypeLast
)

// New returns a new smtp client.
func New(opts ...Option) *Client {
	cfg := DefaultConfig()

	for _, o := range opts {
		o(&cfg)
	}

	return NewFromConfig(cfg)
}

// NewFromConfig returns a new smtp client from existing config.
func NewFromConfig(cfg Config) *Client {
	return &Client{
		cfg: cfg,
	}
}

// MailOptions contains parameters for the MAIL command.
type MailOptions struct {
	// Size of the body. Can be 0 if not specified by client.
	Size int64

	// TLS is required for the message transmission.
	//
	// The message should be rejected if it can't be transmitted
	// with TLS.
	RequireTLS bool

	// SMTPUTF8 sends the SMTPUTF8 parameter (RFC 6531), fails if the server
	// doesn't support it.
	SMTPUTF8 bool

	// Value of RET= argument, FULL or HDRS.
	Return deltasmtp.DSNReturn

	// Envelope identifier set by the client.
	EnvelopeID string

	// Accepted Domain from Exchange Online, e.g. from OutgoingConnector
	XOORG *string

	// The authorization identity asserted by the message sender in decoded
	// form with angle brackets stripped.
	//
	// nil value indicates missing AUTH, non-nil empty string indicates
	// AUTH=<>.
	//
	// Defined in RFC 4954.
	Auth *string

	// Value of BY= argument or nil if unset.
	DeliverBy *deltasmtp.DeliverByOptions

	// Value of MT-PRIORITY= or nil if unset.
	MTPriority *int
}

// VrfyOptions contains parameters for the VRFY command.
type VrfyOptions struct {
	// SMTPUTF8 sends the SMTPUTF8 parameter (RFC 6531), fails if the server
	// doesn't support it.
	SMTPUTF8 bool
}

// Dial returns a connection to an SMTP server at addr. The addr must
// include a port, as in "mail.example.com:smtp".
// An existing connection is closed first.
// If an error occurs, the connection is closed.
func (c *Client) Dial(ctx context.Context, addr string) error {
	return c.dial(ctx, addr, false, nil)
}

// DialTLS returns a connection to an SMTP server at addr via TLS.
// The addr must include a port, as in "mail.example.com:smtps".
//
// A nil tlsConfig is equivalent to a zero tls.Config.
// An existing connection is closed first.
// If an error occurs, the connection is closed.
func (c *Client) DialTLS(ctx context.Context, config *tls.Config, addr string) error {
	return c.dial(ctx, addr, true, config)
}

func (c *Client) dial(ctx context.Context, addr string, implicitTLS bool, config *tls.Config) error {
	_ = c.Close()
	c.session = session{}

	dialer := &net.Dialer{Timeout: c.cfg.dialTimeout, Control: c.cfg.dialControl}
	conn, err := dialer.DialContext(ctx, "tcp", addr)
	if err != nil {
		return err
	}
	c.session.address = addr

	if implicitTLS {
		host, _, _ := net.SplitHostPort(addr)
		if conn, err = c.handshake(ctx, conn, config, host); err != nil {
			return err
		}
	}

	return c.initConn(conn, true)
}

// handshake starts TLS on conn within the TLS handshake timeout, conn is closed on
// error. A nil config is equivalent to a zero tls.Config, serverName is used if the
// config has none.
func (c *Client) handshake(ctx context.Context, conn net.Conn, config *tls.Config, serverName string) (net.Conn, error) {
	if config == nil {
		config = &tls.Config{}
	}
	if config.ServerName == "" && serverName != "" {
		// Make a copy to avoid polluting argument
		config = config.Clone()
		config.ServerName = serverName
	}

	tlsConn := tls.Client(conn, config)
	deadline.Set(tlsConn, c.cfg.tlsHandshakeTimeout)
	if err := tlsConn.HandshakeContext(ctx); err != nil {
		_ = conn.Close()
		return nil, err
	}
	return tlsConn, nil
}

// initConn sets the underlying network connection for the client,
// expect greeting from the server if enabled and
// calls hello to finish basic setup
func (c *Client) initConn(conn net.Conn, expectGreet bool) error {
	c.setConn(conn)

	if expectGreet {
		if err := c.greet(); err != nil {
			return err
		}
	}

	return c.Hello()
}

// setConn sets the underlying network connection.
func (c *Client) setConn(conn net.Conn) {
	c.session.conn = conn
	c.deadline.Reset()

	if c.receiver != nil {
		c.receiver.Reset(conn)
	} else {
		c.receiver = smtpreader.NewReceiver(conn, c.cfg.readerSize, c.cfg.maxLineLength, c.cfg.maxResponseLines)
	}

	if c.sender != nil {
		c.sender.Reset(conn)
	} else {
		c.sender = smtpwriter.NewSender(conn, c.cfg.writerSize)
	}
}

// Close closes the connection.
func (c *Client) Close() (err error) {
	if c.session.conn == nil {
		return nil
	}
	c.receiver.Reset(nil)
	c.sender.Reset(nil)
	err = c.session.conn.Close()
	c.session.conn = nil
	return err
}

// receiveResponse reads a reply.
//
// Any error other than an *deltasmtp.Status reply (e.g. a malformed or too long reply,
// a timeout) may leave the rest of the reply unread. The next command would read
// it as its own reply, so the connection is closed. So it is after a 421 reply, the
// server closes the connection (RFC 5321 section 3.8).
func (c *Client) receiveResponse() (*deltasmtp.Status, error) {
	status, err := c.receiver.ReadResponse()
	if err != nil || status.Code == 421 {
		_ = c.Close()
	}
	return status, err
}

// receiveResponseValid reads a reply and returns it as error if the code isn't expected.
// The connection is closed like in receiveResponse.
func (c *Client) receiveResponseValid(expectCode int) error {
	if !smtpreader.IsCodeUnexpected(421, expectCode) { // the fast path wouldn't tell a 421
		status, err := c.receiveResponse()
		if err == nil && smtpreader.IsCodeUnexpected(status.Code, expectCode) {
			return status
		}
		return err
	}
	err := c.receiver.ReadResponseValid(expectCode)
	if st, ok := errors.AsType[*deltasmtp.Status](err); err != nil && (!ok || st.Code == 421) {
		_ = c.Close()
	}
	return err
}

// Greet reads the greeting of the server
// if an error occurred the connection is closed
func (c *Client) greet() error {
	// Initial greeting timeout. RFC 5321 recommends 5 minutes.
	c.deadline.Set(c.session.conn, c.cfg.commandTimeout)

	status, err := c.receiveResponse()
	if err != nil {
		return err
	}

	// status unexpected or no message received
	if status.Code != 220 || len(status.Lines) == 0 {
		_ = c.Close()
		return status
	}

	if idx := strings.IndexRune(status.Lines[0], ' '); idx >= 0 {
		c.session.name = status.Lines[0][:idx]
	} else {
		c.session.name = status.Lines[0]
	}

	return nil
}

// Hello runs a hello exchange
// if an error occurred the connection is closed
func (c *Client) Hello() error {
	// verify if local name is valid
	if strings.ContainsAny(c.cfg.localName, "\n\r") {
		_ = c.Close()
		return errors.New("smtp: the local name must not contain CR or LF")
	}

	err := c.ehlo()

	if status, ok := errors.AsType[*deltasmtp.Status](err); ok && (status.Code == 500 || status.Code == 502) {
		// The server doesn't support EHLO, fallback to HELO
		err = c.helo()
	}

	if err != nil {
		_ = c.Close()
	}

	return err
}

func (c *Client) setExt(ext map[string]string) {
	c.session.ext = ext
	c.session.pipelining.concluded = false
	c.session.pipelining.pending = 0
}

func (c *Client) consumeResponse() error {
	if !c.PipeliningActive() {
		return ErrPipeliningNotEnabled
	}

	if c.session.pipelining.pending == 0 {
		return ErrPipeliningNothingPending
	}

	// first consume concludes group
	c.session.pipelining.concluded = true
	c.session.pipelining.pending--

	if c.session.pipelining.pending == 0 {
		c.session.pipelining.concluded = false
	}

	return nil
}

// cmd is a convenience function that sends a command and returns the response
// does not support or handle anything related to pipelining
func (c *Client) cmd(expectCode int, message string) (*deltasmtp.Status, error) {
	if c.session.conn == nil {
		return nil, ErrNotConnected
	}

	c.deadline.Set(c.session.conn, c.cfg.commandTimeout)

	_, err := c.sender.WriteString(message)
	if err != nil {
		return nil, err
	}

	_, err = c.sender.Write(deltasmtp.Crnl)
	if err != nil {
		return nil, err
	}

	err = c.sender.Flush()
	if err != nil {
		return nil, err
	}

	status, err := c.receiveResponse()
	if err != nil {
		return nil, err
	}

	if smtpreader.IsCodeUnexpected(status.Code, expectCode) {
		return nil, status
	}

	return status, nil
}

// cmdValid is a convenience function that sends a command and returns an error if the expected code doesn't match
// can handle pipelining
func (c *Client) cmdValid(pType pipeliningType, expectCode int, message string) error {
	if err := c.cmdBegin(len(message)); err != nil {
		return err
	}
	if _, err := c.sender.WriteString(message); err != nil {
		return err
	}
	return c.cmdEnd(pType, expectCode)
}

// cmdBuffer returns the emptied buffer to build a command in, which is sent by
// cmdValidBuffer. The buffer is reused, building a command doesn't allocate.
func (c *Client) cmdBuffer() *bytes.Buffer {
	c.cmdBuf.Reset()
	return &c.cmdBuf
}

// cmdValidBuffer is cmdValid for the command built in cmdBuffer.
func (c *Client) cmdValidBuffer(pType pipeliningType, expectCode int) error {
	if err := c.cmdBegin(c.cmdBuf.Len()); err != nil {
		return err
	}
	if _, err := c.sender.Write(c.cmdBuf.Bytes()); err != nil {
		return err
	}
	return c.cmdEnd(pType, expectCode)
}

// cmdBegin prepares sending a command of length n, see cmdValid.
func (c *Client) cmdBegin(n int) error {
	if c.session.conn == nil {
		return ErrNotConnected
	}

	c.deadline.Set(c.session.conn, c.cfg.commandTimeout)

	if c.PipeliningActive() {
		// group is concluded, please consume all responses
		if c.session.pipelining.concluded {
			return ErrPipeliningGroupConcluded
		}
		// RFC 2920
		// Client SMTP implementations MAY elect to operate in a nonblocking
		// fashion, processing server responses immediately upon receipt, even
		// if there is still data pending transmission from the client's
		// previous TCP send operation. If nonblocking operation is not
		// supported, however, client SMTP implementations MUST also check the
		// TCP window size and make sure that each group of commands fits
		// entirely within the window. The window size is usually, but not
		// always, 4K octets.  Failure to perform this check can lead to
		// deadlock conditions.

		// Need to flush to prevent congestion and conclude the group forcefully.
		// If the buffer can not hold the first request, ignore congestion.
		// Typically the 4k buffio is enough to make it fast, it don't expect any buffers from tcp.
		// Outcomment to see TestClient_SendMailDirectManyRcptsPipelining failing.
		if n+2 > c.sender.Available() && c.session.pipelining.pending > 0 {
			err := c.sender.Flush()
			if err != nil {
				return err
			}
			c.session.pipelining.concluded = true
			return ErrPipeliningCongestion
		}
	}

	return nil
}

// cmdEnd finishes sending a command, see cmdValid.
func (c *Client) cmdEnd(pType pipeliningType, expectCode int) error {
	_, err := c.sender.Write(deltasmtp.Crnl)
	if err != nil {
		return err
	}

	// Only commands allowed anywhere in a pipelining group stay buffered,
	// all others need their response now or conclude the group.
	if !c.PipeliningActive() || pType != pipeliningTypeAnywhere {
		err = c.sender.Flush()
		if err != nil {
			return err
		}
	}

	if c.PipeliningActive() && pType > pipeliningTypeForbidden {
		c.session.pipelining.pending++
		if pType == pipeliningTypeLast {
			c.session.pipelining.concluded = true
		}
		return nil
	}

	return c.receiveResponseValid(expectCode)
}

// Conclude concludes the current pipelining group.
// Do not call if pipelining is not active.
func (c *Client) Conclude() error {
	if c.session.conn == nil {
		return ErrNotConnected
	}

	c.deadline.Set(c.session.conn, c.cfg.commandTimeout)

	if !c.PipeliningActive() {
		return ErrPipeliningNotEnabled
	}
	c.session.pipelining.concluded = true
	return c.sender.Flush()
}

func (c *Client) readResponseValid(expectCode int) error {
	if err := c.awaitResponse(); err != nil {
		return err
	}
	return c.receiveResponseValid(expectCode)
}

// awaitResponse consumes a pending response and flushes the commands before reading it.
func (c *Client) awaitResponse() error {
	if c.session.conn == nil {
		return ErrNotConnected
	}
	if err := c.consumeResponse(); err != nil {
		return err
	}
	c.deadline.Set(c.session.conn, c.cfg.commandTimeout)
	// Probably already flushed if the group has ended.
	return c.sender.Flush()
}

// ClearResponses consumes x pending responses from pipelining, 0 means all, -1 all
// except 1. A 421 reply is returned without reading further, the connection is closed
// (e.g. Postfix after too many errors).
func (c *Client) ClearResponses(x int) error {
	if !c.PipeliningActive() {
		return ErrPipeliningNotEnabled
	}

	if x <= 0 {
		x += c.session.pipelining.pending
	}

	for range x {
		if err := c.awaitResponse(); err != nil {
			return err
		}
		status, err := c.receiveResponse()
		if err != nil {
			return err
		}
		if status.Code == 421 {
			return status
		}
	}
	return nil
}

// helo sends the HELO greeting to the server. It should be used only when the
// server does not support ehlo.
func (c *Client) helo() error {
	c.setExt(nil)
	return c.cmdValid(pipeliningTypeForbidden, 250, "HELO "+c.cfg.localName)
}

// ehlo sends the EHLO (extended hello) greeting to the server. It
// should be the preferred greeting for servers that support it.
func (c *Client) ehlo() error {
	status, err := c.cmd(250, "EHLO "+c.cfg.localName)
	if err != nil {
		return err
	}
	ext := make(map[string]string, max(len(status.Lines)-1, 0))

	if len(status.Lines) > 1 {
		for _, line := range status.Lines[1:] {
			key, value, _ := strings.Cut(line, " ")
			ext[key] = value
		}
	}
	c.setExt(ext)
	return err
}

// StartTLS sends the STARTTLS command and encrypts all further communication.
// Only servers that advertise the STARTTLS extension support this function.
//
// A nil config is equivalent to a zero tls.Config.
//
// If the server rejects the command it returns the error and the connection is not closed.
// If the server accepts the command but the tls handshake fails, the connection is closed.
func (c *Client) StartTLS(config *tls.Config, serverName string) error {
	if c.PipeliningActive() && c.session.pipelining.pending > 0 {
		return ErrPipeliningNoPendingRequired
	}

	if err := c.cmdValid(pipeliningTypeForbidden, 220, "STARTTLS"); err != nil {
		return err
	}

	conn, err := c.handshake(context.Background(), c.session.conn, config, serverName)
	if err != nil {
		_ = c.Close()
		return err
	}

	return c.initConn(conn, false)
}

// TLSConnectionState returns the client's TLS connection state.
// The return values are their zero values if STARTTLS did
// not succeed.
func (c *Client) TLSConnectionState() (tls.ConnectionState, bool) {
	tc, ok := c.session.conn.(*tls.Conn)
	if !ok {
		return tls.ConnectionState{}, false
	}
	return tc.ConnectionState(), true
}

// PipeliningActive return if pipelining is active.
func (c *Client) PipeliningActive() bool {
	_, ok := c.session.ext["PIPELINING"]
	return ok && c.cfg.pipelining && c.session.conn != nil
}

// ChunkingActive reports whether Content and ContentResponse use BDAT instead of DATA.
// With pipelining active, Content doesn't send BDAT, ContentResponse does.
func (c *Client) ChunkingActive() bool {
	_, ok := c.session.ext["CHUNKING"]
	return ok && c.cfg.chunking
}

// Verify checks the validity of an email address on the server.
// If Verify returns nil, the server answered 250, 251 or 252 (RFC 5321 section 3.5.3).
// 252 means the server can't verify the address but accepts mail for it,
// many servers answer every VRFY with it for security reasons.
// A non-nil return does not necessarily indicate an invalid address.
//
// If server returns an error, it will be of type *deltasmtp.Status.
func (c *Client) Verify(addr string, opts *VrfyOptions) error {
	if err := validateLine(addr); err != nil {
		return err
	}

	sb := c.cmdBuffer()
	sb.WriteString("VRFY ")
	sb.WriteString(addr)

	if opts != nil && opts.SMTPUTF8 {
		if _, ok := c.session.ext["SMTPUTF8"]; !ok {
			return refusedError("smtp: server does not support SMTPUTF8")
		}
		sb.WriteString(" SMTPUTF8")
	}

	return c.cmdValidBuffer(pipeliningTypeLast, 25)
}

// VerifyResponse returns the result of previous send verify command if pipelining is enabled
func (c *Client) VerifyResponse() error {
	return c.readResponseValid(25)
}

// Auth authenticates a client using the provided authentication mechanism.
// Only servers that advertise the AUTH extension support this function.
//
// If server returns an error, it will be of type *deltasmtp.
func (c *Client) Auth(saslClient sasl.Client) error {
	if c.PipeliningActive() && c.session.pipelining.pending > 0 {
		return ErrPipeliningNoPendingRequired
	}

	if saslClient == nil {
		return refusedError("smtp: SASL client is missing")
	}

	encoding := base64.StdEncoding
	mech, resp, err := saslClient.Start()
	if err != nil {
		return err
	}
	var resp64 []byte
	if len(resp) > 0 {
		resp64 = make([]byte, encoding.EncodedLen(len(resp)))
		encoding.Encode(resp64, resp)
	} else if resp != nil {
		resp64 = []byte{'='}
	}

	var status *deltasmtp.Status

	// 512 - len("AUTH") - 2 * len(" ") - len(\r\n)
	if len(mech)+len(resp64) > 504 || len(resp64) == 0 {
		// The initial response (if any) does not fit in the 512-octet command line (RFC 5321
		// section 4.5.3.1.4), so send it as the reply to the first challenge instead
		// (RFC 4954 section 4). https://github.com/emersion/go-smtp/issues/301
		status, err = c.cmd(0, "AUTH "+mech)
		if err == nil && status.Code == 334 && len(resp64) > 0 {
			// The server must ask for the initial response with an empty challenge;
			// anything else would make us drop the initial response, so abort.
			if strings.Join(status.Lines, "") != "" {
				return c.authAbort(errors.New("smtp: server sent a challenge instead of asking for the initial response"))
			}
			status, err = c.cmd(0, string(resp64))
		}
	} else {
		status, err = c.cmd(0, "AUTH "+mech+" "+string(resp64))
	}

	if err != nil {
		return err
	}

	for {
		switch status.Code {
		case 334:
			// failed to decode answer => abort
			msg, err := encoding.DecodeString(strings.Join(status.Lines, "\n"))
			if err != nil {
				return c.authAbort(err)
			}
			// sasl returned error or nil instead
			resp, err = saslClient.Next(msg)
			if err != nil {
				return c.authAbort(err)
			}
			resp64 = make([]byte, encoding.EncodedLen(len(resp)))
			encoding.Encode(resp64, resp)
			status, err = c.cmd(0, string(resp64))
			if err != nil {
				return err
			}
		case 235:
			return nil
		default:
			// status like 501 mean authentication aborted,
			// but essentially everything except 335 and 235 can be interpreted as such.
			return status
		}
	}
}

func (c *Client) authAbort(err error) error {
	// If abort fails, the state is strange
	if errAbort := c.cmdValid(pipeliningTypeForbidden, 501, "*"); errAbort != nil {
		err = errors.Join(err, errAbort)
	}
	return err
}

// Mail issues a MAIL command to the server using the provided email address.
// If the server supports the 8BITMIME extension, Mail adds the BODY=8BITMIME
// parameter.
// This initiates a mail transaction and is followed by one or more Rcpt calls.
//
// If opts is not nil, MAIL arguments provided in the structure will be added
// to the command. Handling of unsupported options depends on the extension.
//
// If server returns an error, it will be of type *deltasmtp.
//
//nolint:revive // cognitive-complexity: one branch per MAIL parameter, splitting hides the order.
func (c *Client) Mail(from string, opts *MailOptions) error {
	if err := validateLine(from); err != nil {
		return err
	}

	sb := c.cmdBuffer()
	sb.WriteString("MAIL FROM:<")
	sb.WriteString(from)
	sb.WriteString(">")
	if _, ok := c.session.ext["8BITMIME"]; ok {
		sb.WriteString(" BODY=8BITMIME")
	}
	if _, ok := c.session.ext["SIZE"]; ok && opts != nil && opts.Size != 0 {
		var num [20]byte
		sb.WriteString(" SIZE=")
		sb.Write(strconv.AppendInt(num[:0], opts.Size, 10))
	}
	if opts != nil && opts.RequireTLS {
		if _, ok := c.session.ext["REQUIRETLS"]; !ok {
			return refusedError("smtp: server does not support REQUIRETLS")
		}
		sb.WriteString(" REQUIRETLS")
	}
	if opts != nil && opts.SMTPUTF8 {
		if _, ok := c.session.ext["SMTPUTF8"]; !ok {
			return refusedError("smtp: server does not support SMTPUTF8")
		}
		sb.WriteString(" SMTPUTF8")
	}
	if _, ok := c.session.ext["DSN"]; ok && opts != nil {
		switch opts.Return {
		case deltasmtp.DSNReturnFull, deltasmtp.DSNReturnHeaders:
			sb.WriteString(" RET=")
			sb.WriteString(string(opts.Return))
		case "":
			// This space is intentionally left blank
		default:
			return refusedError("smtp: Unknown RET parameter value")
		}
		if opts.EnvelopeID != "" {
			if !parse.IsPrintableASCII(opts.EnvelopeID) {
				return refusedError("smtp: Malformed ENVID parameter value")
			}
			sb.WriteString(" ENVID=")
			sb.WriteString(encodeXtext(opts.EnvelopeID))
		}
	}
	if opts != nil && opts.Auth != nil {
		if _, ok := c.session.ext["AUTH"]; ok {
			sb.WriteString(" AUTH=")
			sb.WriteString(encodeXtext(*opts.Auth))
		}
		// We can safely discard parameter if server does not support AUTH.
	}

	if opts != nil && opts.XOORG != nil {
		if _, ok := c.session.ext["XOORG"]; ok {
			sb.WriteString(" XOORG=")
			sb.WriteString(encodeXtext(*opts.XOORG))
		}
		// We can safely discard parameter if server does not support AUTH.
	}
	if _, ok := c.session.ext["DELIVERBY"]; ok && opts != nil && opts.DeliverBy != nil {
		if opts.DeliverBy.Mode == deltasmtp.DeliverByReturn &&
			(opts.DeliverBy.Seconds < 1 || opts.DeliverBy.Seconds > 999999999) {
			return refusedError("smtp: DELIVERBY mode must be between 1 and 999999999 with return mode")
		}
		if opts.DeliverBy.Mode == deltasmtp.DeliverByNotify &&
			(opts.DeliverBy.Seconds < -999999999 || opts.DeliverBy.Seconds > 999999999) {
			return refusedError("smtp: DELIVERBY mode must be between -999999999 and 999999999 with notify mode")
		}
		arg := fmt.Sprintf(" BY=%d;%s", opts.DeliverBy.Seconds, opts.DeliverBy.Mode)
		if opts.DeliverBy.Trace {
			arg += "T"
		}
		sb.WriteString(arg)
	}
	if _, ok := c.session.ext["MT-PRIORITY"]; ok && opts != nil && opts.MTPriority != nil {
		if *opts.MTPriority < -9 || *opts.MTPriority > 9 {
			return refusedError("smtp: MT-PRIORITY must be between -9 and 9")
		}
		sb.WriteString(" MT-PRIORITY=")
		sb.WriteString(strconv.Itoa(*opts.MTPriority))
	}
	return c.cmdValidBuffer(pipeliningTypeAnywhere, 250)
}

// MailResponse returns the result of previous send mail command if pipelining is enabled
func (c *Client) MailResponse() error {
	return c.readResponseValid(250)
}

// Rcpt issues a RCPT command to the server using the provided email address.
// A call to Rcpt must be preceded by a call to Mail and may be followed by
// a Data call or another Rcpt call.
//
// If opts is not nil, RCPT arguments provided in the structure will be added
// to the command. Handling of unsupported options depends on the extension.
//
// If server returns an error, it will be of type *deltasmtp.
func (c *Client) Rcpt(to string, opts *deltasmtp.RcptOptions) error {
	if err := validateLine(to); err != nil {
		return err
	}
	sb := c.cmdBuffer()
	sb.WriteString("RCPT TO:<")
	sb.WriteString(to)
	sb.WriteString(">")
	if _, ok := c.session.ext["DSN"]; ok && opts != nil {
		if err := rcptDSN(sb, opts, c.session.ext); err != nil {
			return err
		}
	}
	if _, ok := c.session.ext["RRVS"]; ok && opts != nil && !opts.RequireRecipientValidSince.IsZero() {
		sb.WriteString(" RRVS=")
		sb.WriteString(opts.RequireRecipientValidSince.Format(time.RFC3339))
	}
	return c.cmdValidBuffer(pipeliningTypeAnywhere, 25)
}

// RcptResponse returns the result of previous send rcpt command if pipelining is enabled
func (c *Client) RcptResponse() error {
	return c.readResponseValid(25)
}

func rcptDSN(sb *bytes.Buffer, opts *deltasmtp.RcptOptions, ext map[string]string) error {
	if len(opts.Notify) != 0 {
		sb.WriteString(" NOTIFY=")
		if err := parse.CheckNotifySet(opts.Notify); err != nil {
			return refusedError("smtp: Malformed NOTIFY parameter value")
		}
		for i, v := range opts.Notify {
			if i != 0 {
				sb.WriteString(",")
			}
			sb.WriteString(string(v))
		}
	}
	if opts.OriginalRecipient != "" {
		var enc string
		switch opts.OriginalRecipientType {
		case deltasmtp.DSNAddressTypeRFC822:
			if !parse.IsPrintableASCII(opts.OriginalRecipient) {
				return refusedError("smtp: Illegal address")
			}
			enc = encodeXtext(opts.OriginalRecipient)
		case deltasmtp.DSNAddressTypeUTF8:
			if _, ok := ext["SMTPUTF8"]; ok {
				enc = encodeUTF8AddrUnitext(opts.OriginalRecipient)
			} else {
				enc = encodeUTF8AddrXtext(opts.OriginalRecipient)
			}
		default:
			return refusedError("smtp: Unknown address type")
		}
		sb.WriteString(" ORCPT=")
		sb.WriteString(string(opts.OriginalRecipientType))
		sb.WriteString(";")
		sb.WriteString(enc)
	}
	return nil
}

// Content issues a DATA or BDAT (prefer BDAT if available) command to
// the server and returns a writer that
// can be used to write the mail headers and body. The caller should
// close the writer before calling any more methods on c. A call to
// Data must be preceded by one or more calls to Rcpt.
//
// If server returns an error, it will be of type *deltasmtp.
func (c *Client) Content(size int) (*ContentCloser, error) {
	if c.ChunkingActive() {
		if c.PipeliningActive() {
			return nil, nil
		}
		return c.Bdat(size)
	}
	return c.Data()
}

// ContentResponse returns the result of previous send data command if pipelining is enabled
func (c *Client) ContentResponse(size int) (*ContentCloser, error) {
	if c.ChunkingActive() {
		return c.Bdat(size)
	}
	return c.DataResponse()
}

// Data issues a DATA command to the server and returns a writer that
// can be used to write the mail headers and body. The caller should
// close the writer before calling any more methods on c. A call to
// Data must be preceded by one or more calls to Rcpt.
//
// If server returns an error, it will be of type *deltasmtp.
func (c *Client) Data() (*ContentCloser, error) {
	if err := c.cmdValid(pipeliningTypeLast, 354, "DATA"); err != nil {
		return nil, err
	}
	if c.PipeliningActive() {
		return nil, nil
	}
	c.dotWriter.Reset(c.sender.Writer)
	return c.newContentCloser(&c.dotWriter), nil
}

// DataResponse returns the result of previous send data command if pipelining is enabled
func (c *Client) DataResponse() (*ContentCloser, error) {
	if err := c.readResponseValid(354); err != nil {
		return nil, err
	}
	c.dotWriter.Reset(c.sender.Writer)
	return c.newContentCloser(&c.dotWriter), nil
}

// Bdat issues a BDAT command to the server and returns a writer that
// can be used to write the mail headers and body. The caller should
// close the writer before calling any more methods on c. A call to
// Data must be preceded by one or more calls to Rcpt.
//
// If server returns an error, it will be of type *deltasmtp.
func (c *Client) Bdat(size int) (*ContentCloser, error) {
	if c.PipeliningActive() && c.session.pipelining.pending > 0 {
		return nil, ErrPipeliningNoPendingRequired
	}

	if !c.cfg.chunking {
		return nil, refusedError("smtp: chunking is disabled on the client")
	}
	if _, ok := c.session.ext["CHUNKING"]; !ok {
		return nil, refusedError("smtp: server doesn't support chunking")
	}

	// the size is unknown, buffer to send chunks of chunkingBufferSize
	if size == 0 && c.cfg.chunkingBufferSize > 0 {
		buffer := getChunkingBuffer(c.cfg.chunkingBufferSize)

		c.bdatBufferedWriter.Reset(c.sender.Writer, c.bdatReplyFunc(), size, (*buffer)[:c.cfg.chunkingBufferSize])
		cc := c.newContentCloser(&c.bdatBufferedWriter)
		cc.chunkingBuffer = buffer

		return cc, nil
	}

	c.bdatWriter.Reset(c.sender.Writer, c.bdatReplyFunc(), size)
	return c.newContentCloser(&c.bdatWriter), nil
}

// bdatReplyFunc returns the func the BDAT writers read the reply to a chunk
// with. It is bound once, not for every message.
func (c *Client) bdatReplyFunc() func() error {
	if c.bdatReply == nil {
		c.bdatReply = c.receiveBdatReply
	}
	return c.bdatReply
}

// receiveBdatReply reads the reply to a BDAT chunk.
func (c *Client) receiveBdatReply() error {
	return c.receiveResponseValid(250)
}

// Extension reports whether an extension is support by the server.
// The extension name is case-insensitive. If the extension is supported,
// Extension also returns a string that contains any parameters the
// server specifies for the extension.
func (c *Client) Extension(ext string) (bool, string) {
	ext = strings.ToUpper(ext)
	param, ok := c.session.ext[ext]
	return ok, param
}

// SupportsAuth checks whether an authentication mechanism is supported.
func (c *Client) SupportsAuth(mech string) bool {
	mechs, ok := c.session.ext["AUTH"]
	if !ok {
		return false
	}
	for m := range strings.SplitSeq(mechs, " ") {
		if strings.EqualFold(m, mech) {
			return true
		}
	}
	return false
}

// MaxMessageSize returns the maximum message size accepted by the server.
// 0 means unlimited.
//
// If the server doesn't convey this information, ok = false is returned.
func (c *Client) MaxMessageSize() (size int, ok bool) {
	v := c.session.ext["SIZE"]
	if v == "" {
		return 0, false
	}
	size, err := strconv.Atoi(v)
	if err != nil || size < 0 {
		return 0, false
	}
	return size, true
}

// MaxTransactions returns the maximum number of transactions (MAIL commands)
// the server accepts in a session, as advertised by LIMITS MAILMAX (RFC 9422).
//
// If the server doesn't convey this information, ok = false is returned.
func (c *Client) MaxTransactions() (n int, ok bool) {
	return limit(c.session.ext, "MAILMAX")
}

// MaxRecipients returns the maximum number of RCPT commands the server accepts
// in a transaction, as advertised by LIMITS RCPTMAX (RFC 9422).
//
// If the server doesn't convey this information, ok = false is returned.
func (c *Client) MaxRecipients() (n int, ok bool) {
	return limit(c.session.ext, "RCPTMAX")
}

// Reset sends the RSET command to the server, aborting the current mail
// transaction.
func (c *Client) Reset() error {
	return c.cmdValid(pipeliningTypeAnywhere, 250, "RSET")
}

// ResetResponse returns the result of previous send rset command if pipelining is enabled
func (c *Client) ResetResponse() error {
	return c.readResponseValid(250)
}

// Noop sends the NOOP command to the server. It does nothing but check
// that the connection to the server is okay.
func (c *Client) Noop() error {
	return c.cmdValid(pipeliningTypeLast, 250, "NOOP")
}

// NoopResponse returns the result of previous send noop command if pipelining is enabled
func (c *Client) NoopResponse() error {
	return c.readResponseValid(250)
}

// Quit sends the QUIT command and closes the connection to the server.
// If Quit fails the connection will still be closed.
// If pipelining is active and the command is send successful,
// the connection is only closed after QuitResponse is called.
func (c *Client) Quit() error {
	if c.session.conn == nil {
		return nil
	}
	if err := c.cmdValid(pipeliningTypeLast, 221, "QUIT"); err != nil {
		_ = c.Close()
		return err
	}

	if c.PipeliningActive() {
		return nil
	}

	return c.Close()
}

// QuitResponse returns the result of previous send quit command if pipelining is enabled
func (c *Client) QuitResponse() error {
	if err := c.readResponseValid(221); err != nil {
		_ = c.Close()
		return err
	}
	return c.Close()
}

// Connected returns the current server name.
func (c *Client) Connected() bool {
	return c.session.conn != nil
}

// ServerAddress returns the current server address.
func (c *Client) ServerAddress() string {
	return c.session.address
}

// ServerName returns the current server name.
func (c *Client) ServerName() string {
	return c.session.name
}
