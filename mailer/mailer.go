// Package mailer implements a mailer to send mail by deltasmtp.
// It uses the client library and provides high level functionality.
package mailer

import (
	"context"
	"errors"
	"io"
	"net"
	"sync"

	"github.com/uponusolutions/deltasmtp"
	"github.com/uponusolutions/deltasmtp/client"
	"github.com/uponusolutions/deltasmtp/internal/parse"
	"github.com/uponusolutions/deltasmtp/resolve"
)

// Mailer implements a smtp client with .
type Mailer struct {
	client *client.Client
	cfg    additionalConfig

	// mailOptions is reused to avoid an allocation per message.
	mailOptions client.MailOptions
}

// New returns a new smtp client.
// You need to set at least the server address to get a working mailer.
//
// By default STARTTLS is enforced (SecurityStartTLS) and the server
// certificate is verified, so nothing is sent unencrypted. Use WithSecurity
// to choose a different mode.
func New(opts ...Option) *Mailer {
	cfg := DefaultConfig()

	for _, o := range opts {
		o(&cfg)
	}

	return NewFromConfig(cfg)
}

// NewFromConfig returns a new smtp client from existing config.
func NewFromConfig(cfg Config) *Mailer {
	return &Mailer{
		cfg:    cfg.extra,
		client: client.NewFromConfig(cfg.client),
	}
}

// Client returns the inner smtp client. Use with caution.
func (c *Mailer) Client() *client.Client {
	return c.client
}

// Connect connects to one of the available smtp server.
// When server supports auth and clients SaslClient is set, auth is called.
// Security is enforced like configured (Plain, TLS, StartTLS or PreferStartTLS)
// If an error occures, the connection is closed if open.
func (c *Mailer) Connect(ctx context.Context) error {
	var err error

	for i := 0; i < len(c.cfg.serverAddresses); i++ {
		for p := 0; p < len(c.cfg.serverAddresses[i]); p++ {
			// use c.serverAddressIndex
			address := c.cfg.serverAddresses[i][(p+c.cfg.serverAddressIndex)%len(c.cfg.serverAddresses[i])]
			err = c.connectAddress(ctx, address)
			if err == nil {
				return nil
			}
		}
	}

	return err
}

// Connect connects to the SMTP server (addr).
// When server supports auth and clients SaslClient is set, auth is called.
// Security is enforced like configured (Plain, TLS, StartTLS or PreferStartTLS)
// If an error occures, the connection is closed if open.
func (c *Mailer) connectAddress(ctx context.Context, addr string) (err error) {
	switch c.cfg.security {
	case SecurityTLS:
		err = c.client.DialTLS(ctx, c.cfg.tlsConfig, addr)
	case SecurityPlain, SecurityStartTLS, SecurityPreferStartTLS:
		fallthrough
	default:
		err = c.client.Dial(ctx, addr)
	}

	// Dial and DialTLS close the connection on error.
	if err != nil {
		return err
	}

	// Never leave a connection open that didn't complete the configured
	// security and auth sequence, otherwise a later Send would reuse it.
	defer func() {
		if err != nil {
			_ = c.client.Close()
		}
	}()

	if c.cfg.security == SecurityStartTLS || c.cfg.security == SecurityPreferStartTLS {
		if ok, _ := c.client.Extension("STARTTLS"); !ok {
			if c.cfg.security == SecurityStartTLS {
				_ = c.Disconnect()
				return errors.New("smtp: server doesn't support STARTTLS")
			}
		} else {
			serverName, _, _ := net.SplitHostPort(addr)

			err = c.client.StartTLS(c.cfg.tlsConfig, serverName)
			if err != nil {
				if c.cfg.security != SecurityPreferStartTLS {
					return err
				}
				// recover from failure if prefer start tls --- switch to plain
				err = c.client.Dial(ctx, addr)
				if err != nil {
					return err
				}
			}
		}
	}

	return c.auth()
}

func (c *Mailer) auth() error {
	// Authenticate if authentication is possible and sasl client available.
	if ok, _ := c.client.Extension("AUTH"); ok && c.cfg.saslClient != nil {
		if err := c.client.Auth(c.cfg.saslClient); err != nil {
			_ = c.Disconnect()
			return err
		}
	}
	return nil
}

// Len defines the Len method existing in some structs to get the length of the internal []byte (e.g. bytes.Buffer)
type Len interface {
	Len() int
}

type pipeliningPending struct {
	mail        bool
	rcpts       int
	rcptsOffset int
	data        bool
}

// On an error the transaction may still be open, the caller has to end it (see abort).
// A nil writer without an error means every recipient was rejected, the transaction
// is still open as well.
func (c *Mailer) prepare(
	from string,
	mailOptions *client.MailOptions,
	rcpts []string,
	rcptsOptions []*deltasmtp.RcptOptions,
	size int,
) (*client.ContentCloser, []resolve.Failure, error) {
	pipelining := &pipeliningPending{}

	// MAIL FROM:
	// No congestion possible on the first call
	if err := c.client.Mail(from, mailOptions); err != nil {
		return nil, nil, err
	}
	pipelining.mail = true

	failures := []resolve.Failure{}

	// RCPT TO:
	for i, addr := range rcpts {
		var rcptsOption *deltasmtp.RcptOptions
		if len(rcptsOptions) > i {
			rcptsOption = rcptsOptions[i]
		}

		if err := c.client.Rcpt(addr, rcptsOption); err != nil {
			if err == client.ErrPipeliningCongestion {
				if _, failures, err = c.handleResponses(pipelining, rcpts, failures, size); err != nil {
					return nil, failures, err
				}
				err = c.client.Rcpt(addr, rcptsOption)
			}
			if err != nil {
				failures, err = rcptError(addr, failures, err)
				if err != nil {
					return nil, failures, err
				}
			}
		}
		pipelining.rcpts++
	}

	// Without pipelining every RCPT response is known, don't send DATA without a recipient.
	if !c.client.PipeliningActive() && len(failures) == len(rcpts) {
		return nil, failures, nil
	}

	// DATA
	w, err := c.client.Content(size)
	if err == client.ErrPipeliningCongestion {
		if _, failures, err = c.handleResponses(pipelining, rcpts, failures, size); err != nil {
			return nil, failures, err
		}
		w, err = c.client.Content(size)
	}
	if err != nil {
		return nil, failures, err
	}
	pipelining.data = true

	// pipelining is active
	if w == nil {
		return c.handleResponses(pipelining, rcpts, failures, size)
	}

	return w, failures, nil
}

func (c *Mailer) handleResponses(pipelining *pipeliningPending, rcpts []string, failures []resolve.Failure, size int) (*client.ContentCloser, []resolve.Failure, error) {
	if pipelining.mail {
		pipelining.mail = false
		if err := c.client.MailResponse(); err != nil {
			// clear all pending responses, data couldn't be accepted
			// (nothing to clear if the client closed the connection after a protocol error)
			if !c.client.Connected() {
				return nil, nil, err
			}
			if responseErr := c.client.ClearResponses(0); responseErr != nil {
				return nil, nil, errors.Join(err, responseErr)
			}
			return nil, nil, err
		}
	}

	pendingRcpts := rcpts[pipelining.rcptsOffset : pipelining.rcptsOffset+pipelining.rcpts]
	pipelining.rcptsOffset += pipelining.rcpts
	pipelining.rcpts = 0

	for _, addr := range pendingRcpts {
		if err := c.client.RcptResponse(); err != nil {
			failures, err = rcptError(addr, failures, err)
			if err != nil {
				// Clears the pending DATA response as well, if any.
				if !c.client.Connected() {
					return nil, failures, err
				}
				if errResponse := c.client.ClearResponses(0); errResponse != nil {
					return nil, failures, errors.Join(err, errResponse)
				}
				return nil, failures, err
			}
		}
	}

	if pipelining.data {
		pipelining.data = false
		return c.contentResponse(len(failures) == len(rcpts), failures, size)
	}

	return nil, failures, nil
}

// contentResponse reads the response to the pipelined DATA (or sends BDAT).
// If every recipient was rejected, a rejection of DATA, or of the empty message ending
// the transaction, is expected and not returned: the recipient failures are the result.
func (c *Mailer) contentResponse(allRejected bool, failures []resolve.Failure, size int) (*client.ContentCloser, []resolve.Failure, error) {
	// With pipelining BDAT isn't sent yet, don't send it without a recipient.
	if allRejected && c.client.ChunkingActive() {
		return nil, failures, nil
	}

	w, err := c.client.ContentResponse(size)
	if err == nil && allRejected {
		// RFC 2920: the client cannot assume that the DATA command will be rejected
		// just because none of the RCPT TO commands worked.
		err = w.Close()
	}
	if err != nil {
		if _, ok := err.(*deltasmtp.Status); ok && allRejected {
			return nil, failures, nil
		}
		return nil, failures, err
	}
	if allRejected {
		return nil, failures, nil
	}
	return w, failures, nil
}

// reset resets open mail transfer and is pipelining aware
func (c *Mailer) reset() (err error) {
	err = c.client.Reset()
	if !c.client.PipeliningActive() {
		return err
	}
	if err != nil {
		return err
	}
	return c.client.ResetResponse()
}

// abort ends a failed transaction and returns err.
// An *deltasmtp.Status error leaves the connection in sync, so it is kept after a successful RSET.
// Any other error, or a failing RSET, leaves it in an unknown state and it is closed.
func (c *Mailer) abort(err error) error {
	if _, ok := err.(*deltasmtp.Status); ok {
		errReset := c.reset()
		if errReset == nil {
			return err
		}
		err = errors.Join(err, errReset)
	}
	return errors.Join(err, c.client.Close())
}

// rcptError records a rejected recipient as failure. Errors other than a rejection
// (connection errors and 421, the server closing the connection) are returned.
func rcptError(addr string, failures []resolve.Failure, err error) ([]resolve.Failure, error) {
	if smtpErr, ok := err.(*deltasmtp.Status); !ok || smtpErr.Code == 421 {
		return nil, err
	}

	failures = append(failures, resolve.Failure{
		Rcpts: []string{addr},
		Error: err,
	})

	return failures, nil
}

// Send send an email from
// address from, to addresses to, with message stream in.
//
// It will use an existing connection if possible or create a new one otherwise.
//
// The addresses in the rcpts parameter are the SMTP RCPT addresses.
//
// The in parameter should be a stream of an RFC 822-style email with headers
// first, a blank line, and then the message body. The lines of in
// should be CRLF terminated. The in headers should usually include
// fields such as "From", "To", "Subject", and "Cc".  Sending "Bcc"
// messages is accomplished by including an email address in the to
// parameter but not including it in the in headers.
func (c *Mailer) Send(ctx context.Context, from string, rcpt []string, in io.Reader) (status *deltasmtp.Status, failures []resolve.Failure, err error) {
	return c.SendAdvanced(ctx, from, nil, rcpt, nil, in)
}

// SendAdvanced send an email from
// address from, to addresses to, with message stream in.
//
// It will use an existing connection if possible or create a new one otherwise.
//
// The addresses in the rcpts parameter are the SMTP RCPT addresses.
// If mailOptions isn't set, the size is taken from in (if it has a Len method)
// and SMTPUTF8 is used if the server supports it or an address needs it.
// If rcptsOptions isn't set for some rcpts (e.g. len(rcpts) > len(rcptsOptions)),
// default values are used for these recipients.
//
// The in parameter should be a stream of an RFC 822-style email with headers
// first, a blank line, and then the message body. The lines of in
// should be CRLF terminated. The in headers should usually include
// fields such as "From", "To", "Subject", and "Cc".  Sending "Bcc"
// messages is accomplished by including an email address in the to
// parameter but not including it in the in headers.
//
// The status and err can both be empty if all recipients were rejected by the server
func (c *Mailer) SendAdvanced(
	ctx context.Context,
	from string,
	mailOptions *client.MailOptions,
	rcpts []string,
	rcptsOptions []*deltasmtp.RcptOptions,
	in io.Reader,
) (status *deltasmtp.Status, failures []resolve.Failure, err error) {
	size := 0
	if wt, ok := in.(Len); ok {
		size = wt.Len()
	}

	if len(rcpts) < 1 {
		return nil, nil, errors.New("no recipients")
	}

	// Connect closes the connection on failure.
	if !c.client.Connected() {
		if err = c.Connect(ctx); err != nil {
			return nil, nil, err
		}
	}

	if mailOptions == nil {
		c.mailOptions = client.MailOptions{
			Size:     int64(size),
			SMTPUTF8: needsUTF8(from, rcpts) || c.supportsUTF8(),
		}
		mailOptions = &c.mailOptions
	}

	// From here on every failure has to end the transaction, otherwise the next
	// Send on this connection runs into an open transaction.
	w, failures, err := c.prepare(from, mailOptions, rcpts, rcptsOptions, size)
	if err != nil {
		return nil, failures, c.abort(err)
	}

	// every recipient was rejected
	if w == nil {
		if err = c.reset(); err != nil {
			return nil, failures, errors.Join(err, c.client.Close())
		}
		return nil, failures, nil
	}

	buf := getCopyBuffer()
	_, err = io.CopyBuffer(w.Writer(), in, *buf)
	copyBuffers.Put(buf)
	if err != nil {
		// The message is only partly sent, the connection can't be reused. This includes a
		// rejected BDAT chunk, which would leave it in sync, but can't be told apart from an
		// *deltasmtp.Status returned by in (e.g. the data reader of a server).
		return nil, failures, errors.Join(err, c.client.Close())
	}

	status, err = w.CloseWithResponse()
	if err != nil {
		return nil, failures, c.abort(err)
	}

	return status, failures, nil
}

// Verify checks the validity of an email address on the server.
// If Verify returns nil, the address is valid. A non-nil return
// does not necessarily indicate an invalid address. Many servers
// will not verify addresses for security reasons.
//
// If opts isn't set, SMTPUTF8 is used if the server supports it or addr needs it.
func (c *Mailer) Verify(addr string, opts *client.VrfyOptions) error {
	if opts == nil {
		opts = &client.VrfyOptions{SMTPUTF8: !parse.IsASCII(addr) || c.supportsUTF8()}
	}
	err := c.client.Verify(addr, opts)
	if !c.client.PipeliningActive() {
		return err
	}
	if err != nil {
		return err
	}
	return c.client.VerifyResponse()
}

// Disconnect ends current connection gracefully, if any exists.
func (c *Mailer) Disconnect() (err error) {
	err = c.client.Quit()
	if !c.client.PipeliningActive() {
		return err
	}
	if err != nil {
		return err
	}
	return c.client.QuitResponse()
}

// Terminate ends current connection forcefully.
func (c *Mailer) Terminate() error {
	return c.client.Close()
}

// Connected returns the current server name.
func (c *Mailer) Connected() bool {
	return c.client.Connected()
}

// ServerAddress returns the current server address.
func (c *Mailer) ServerAddress() string {
	return c.client.ServerAddress()
}

// ServerName returns the current server name.
func (c *Mailer) ServerName() string {
	return c.client.ServerName()
}

// Report contains responses and failures after sending a mail.
type Report struct {
	Responses []Response
	Failures  []resolve.Failure
}

// Response contains the response of a smtp server for specific recipients.
type Response struct {
	Status *deltasmtp.Status
	Rcpts  []string
}

// Send just sends a mail.
// in is called multiple times if there are recipients from different servers.
//
// The default SecurityStartTLS also applies to delivery via MX records:
// servers without STARTTLS or a valid certificate fail. Pass
// WithSecurity(SecurityPreferStartTLS) for opportunistic TLS as usual between
// mail servers.
func Send(ctx context.Context, from string, rcpts []string, in func() io.Reader, opts ...Option) (res Report, err error) {
	r := resolve.New(nil)

	config := NewConfig(opts...)

	var mx resolve.Result

	if len(config.extra.serverAddresses) > 0 {
		mx = resolve.Result{
			Servers: []resolve.Server{
				{
					Rcpts:     rcpts,
					Addresses: config.extra.serverAddresses,
				},
			},
		}
	} else {
		mx, err = r.Recipients(context.Background(), rcpts)
		if err != nil {
			return Report{}, err
		}
	}

	res.Failures = mx.Failures

	for _, server := range mx.Servers {
		status, failures, err := send(ctx, server, from, config, in())

		if len(failures) > 0 {
			server.Rcpts = acceptedRcpts(server.Rcpts, failures)
			res.Failures = append(res.Failures, failures...)
		}

		// Only blame the transaction error on recipients that do not
		// As there should be recipients left
		if err != nil {
			if len(server.Rcpts) > 0 {
				res.Failures = append(res.Failures, resolve.Failure{
					Rcpts: server.Rcpts,
					Error: err,
				})
			}
			continue
		}

		// No request was made if all rcpts were rejected.
		if len(server.Rcpts) > 0 {
			res.Responses = append(res.Responses, Response{
				Status: status,
				Rcpts:  server.Rcpts,
			})
		}
	}
	return res, nil
}

// acceptedRcpts returns rcpts without the recipients named by failures, keeping
// the order. rcpts isn't modified, it may be the slice passed by the caller.
//
// The failed recipients are collected in a set first, comparing every recipient
// with every failure is quadratic and slow with many rejected recipients.
func acceptedRcpts(rcpts []string, failures []resolve.Failure) []string {
	failed := make(map[string]struct{}, len(failures))
	for _, fail := range failures {
		for _, rcpt := range fail.Rcpts {
			failed[rcpt] = struct{}{}
		}
	}

	accepted := make([]string, 0, max(len(rcpts)-len(failed), 0))
	for _, rcpt := range rcpts {
		if _, ok := failed[rcpt]; !ok {
			accepted = append(accepted, rcpt)
		}
	}
	return accepted
}

func send(ctx context.Context, server resolve.Server, from string, config Config, in io.Reader) (status *deltasmtp.Status, failures []resolve.Failure, err error) {
	config.extra.serverAddresses = server.Addresses
	client := NewFromConfig(config)
	defer func() { _ = client.Disconnect() }()

	return client.Send(ctx, from, server.Rcpts, in)
}

// copyBuffers holds the buffers copying the message content, shared by all
// mailers. io.Copy would allocate (and zero) 32 KB for every message.
var copyBuffers sync.Pool

func getCopyBuffer() *[]byte {
	if b, ok := copyBuffers.Get().(*[]byte); ok {
		return b
	}
	b := make([]byte, 32*1024)
	return &b
}

// needsUTF8 reports whether an address requires SMTPUTF8 (RFC 6531).
func needsUTF8(from string, rcpts []string) bool {
	if !parse.IsASCII(from) {
		return true
	}
	for _, rcpt := range rcpts {
		if !parse.IsASCII(rcpt) {
			return true
		}
	}
	return false
}

// supportsUTF8 reports whether the server supports SMTPUTF8.
func (c *Mailer) supportsUTF8() bool {
	ok, _ := c.client.Extension("SMTPUTF8")
	return ok
}
