// Package mailer implements a mailer to send mail by deltasmtp.
// It uses the client library and provides high level functionality.
package mailer

import (
	"context"
	"errors"
	"net"

	"github.com/uponusolutions/deltasmtp"
	"github.com/uponusolutions/deltasmtp/client"
)

// Mailer implements a smtp client sending mail to a server.
type Mailer struct {
	client *client.Client
	cfg    additionalConfig

	// verifying is set while a Verifier holds the connection.
	verifying bool
	// transactions counts the MAIL commands sent on the connection (RFC 9422 MAILMAX).
	transactions int
}

// New returns a new smtp client.
// You need to set at least the server address to get a working mailer.
//
// By default STARTTLS is enforced (SecurityStartTLS) and the server
// certificate is verified, so nothing is sent unencrypted. Use WithSecurity
// to choose a different mode.
func New(opts ...Option) *Mailer {
	return NewFromConfig(NewConfig(opts...))
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

// Connect connects to one of the server addresses, secured as configured (see
// WithSecurity) and authenticated if a SASL client is set and the server supports AUTH.
// On an error the connection is closed. It fails with ErrVerifying while a Verifier of
// c is active, a new connection would lose its transaction.
func (c *Mailer) Connect(ctx context.Context) error {
	if c.verifying {
		return ErrVerifying
	}
	return c.connect(ctx)
}

// errNoServerAddress is returned by connect without a server address.
var errNoServerAddress = errors.New("smtp: no server address")

func (c *Mailer) connect(ctx context.Context) error {
	err := errNoServerAddress
	for _, addrs := range c.cfg.serverAddresses {
		for p := range addrs {
			i := (p + c.cfg.serverAddressIndex) % len(addrs)
			if i < 0 { // a negative index counts from the end
				i += len(addrs)
			}
			if err = c.connectAddress(ctx, addrs[i]); err == nil {
				return nil
			}
		}
	}
	return err
}

func (c *Mailer) connectAddress(ctx context.Context, addr string) (err error) {
	c.transactions = 0
	sec := c.cfg.security
	if sec == SecurityTLS {
		err = c.client.DialTLS(ctx, c.cfg.tlsConfig, addr)
	} else {
		err = c.client.Dial(ctx, addr)
	}
	if err != nil {
		return err // closed by Dial
	}

	// A connection without the configured security and auth mustn't be reused.
	defer func() {
		if err != nil {
			_ = c.client.Close()
		}
	}()

	if sec == SecurityStartTLS || sec == SecurityPreferStartTLS {
		if ok, _ := c.client.Extension("STARTTLS"); ok {
			serverName, _, _ := net.SplitHostPort(addr)
			if err = c.client.StartTLS(c.cfg.tlsConfig, serverName); err != nil {
				if sec != SecurityPreferStartTLS {
					return err
				}
				if err = c.client.Dial(ctx, addr); err != nil { // fall back to plain
					return err
				}
			}
		} else if sec == SecurityStartTLS {
			_ = c.Disconnect()
			return errors.New("smtp: server doesn't support STARTTLS")
		}
	}

	if ok, _ := c.client.Extension("AUTH"); ok && c.cfg.saslClient != nil {
		if err = c.client.Auth(c.cfg.saslClient); err != nil {
			_ = c.Disconnect()
			return err
		}
	}
	return nil
}

// reset sends RSET.
func (c *Mailer) reset() error {
	return c.cmd(c.client.Reset(), c.client.ResetResponse)
}

// cmd returns the error of sending a command, or with pipelining its response.
func (c *Mailer) cmd(err error, response func() error) error {
	if err != nil || !c.client.PipeliningActive() {
		return err
	}
	return response()
}

// Disconnect ends current connection gracefully, if any exists.
func (c *Mailer) Disconnect() error {
	return c.cmd(c.client.Quit(), c.client.QuitResponse)
}

// Terminate ends current connection forcefully.
func (c *Mailer) Terminate() error {
	return c.client.Close()
}

// Connected reports whether c has a connection.
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

// mail sends MAIL, counted against the transaction limit, see mailError for the errors.
// wait reads a pipelined response as well, otherwise it has to be passed to mailError.
func (c *Mailer) mail(from string, opts *client.MailOptions, wait bool) error {
	c.transactions++
	err := c.client.Mail(from, opts)
	if wait {
		err = c.cmd(err, c.client.MailResponse)
	}
	return c.mailError(err)
}

// errRenew asks to send a MAIL again on a new connection, see mailError.
var errRenew = errors.New("smtp: transaction limit of the connection reached")

// mailError returns err of MAIL, or errRenew on a 421 (the client closed the connection)
// after earlier transactions: a server may limit them without MAILMAX (e.g. Exim). The
// limit isn't learned, the 421 may have another reason.
func (c *Mailer) mailError(err error) error {
	// Not errors.As, it would allocate st for every MAIL.
	if st, ok := errors.AsType[*deltasmtp.Status](err); ok && st.Code == 421 && c.transactions > 1 {
		return errRenew
	}
	return err
}

// ready connects if needed, or again once the connection has used up its transactions.
func (c *Mailer) ready(ctx context.Context) error {
	if c.client.Connected() && !c.exhausted() {
		return nil
	}
	_ = c.Disconnect() // no-op without a connection, closes it also on failure
	return c.connect(ctx)
}

// exhausted reports whether the connection reached RFC 9422 MAILMAX or WithMaxTransactions.
func (c *Mailer) exhausted() bool {
	n, ok := c.client.MaxTransactions()
	if !ok {
		n = c.cfg.maxTransactions
	}
	return n > 0 && c.transactions >= n
}

// maxRecipients returns RFC 9422 RCPTMAX or WithMaxRecipients, 0 is unlimited.
func (c *Mailer) maxRecipients() int {
	if n, ok := c.client.MaxRecipients(); ok {
		return n
	}
	return c.cfg.maxRecipients
}

// supportsUTF8 reports whether the server supports SMTPUTF8.
func (c *Mailer) supportsUTF8() bool {
	ok, _ := c.client.Extension("SMTPUTF8")
	return ok
}
