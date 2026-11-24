package mailer

import (
	"context"
	"errors"

	"github.com/uponusolutions/deltasmtp/client"
	"github.com/uponusolutions/deltasmtp/resolve"
)

// VerifyMode selects the command a Verifier checks recipients with.
type VerifyMode int

const (
	// VerifyVrfy checks recipients with VRFY (RFC 5321 section 3.5.1).
	// 252 (can't verify, but accepts mail) counts as accepted, many servers answer every VRFY with it.
	VerifyVrfy VerifyMode = iota
	// VerifyRcpt checks recipients with RCPT TO in a mail transaction that is ended by RSET.
	VerifyRcpt
)

var (
	// ErrVerifying is returned by Mailer.Connect, Mailer.Send, Mailer.SendAdvanced and Mailer.Verifier
	// while a Verifier of the Mailer is active.
	ErrVerifying = errors.New("smtp: a verifier is active")
	// ErrVerifierEnded is returned by Verifier.Verify after the verifier ended.
	ErrVerifierEnded = errors.New("smtp: verifier ended")
)

// Verifier verifies recipients of a mail one by one on the connection of its Mailer.
//
// It is active from Mailer.Verifier to End, the first Verify sends MAIL FROM with VerifyRcpt.
// The transaction stays open, so every recipient costs a single RCPT.
// While it is active the Mailer can't send. An ended Verifier can't be used again.
//
// A rejection keeps the Verifier active, any other error closes the connection and ends it.
type Verifier struct {
	mailer *Mailer
	mode   VerifyMode
	from   string
	begun  bool
	ended  bool
}

// Verifier returns an active Verifier checking recipients of a mail from from with mode.
// It returns ErrVerifying if another Verifier of c is active.
func (c *Mailer) Verifier(mode VerifyMode, from string) (*Verifier, error) {
	if c.verifying {
		return nil, ErrVerifying
	}

	c.verifying = true

	return &Verifier{mailer: c, mode: mode, from: from}, nil
}

// Active reports whether the Verifier hasn't ended.
func (v *Verifier) Active() bool {
	return !v.ended
}

// Verify checks whether the server accepts addr as recipient.
// If Verify returns nil, the address is accepted. A rejection is returned as *deltasmtp.Status,
// a refusal of the client matches client.ErrRefused.
//
// The first Verify connects if needed and with VerifyRcpt sends MAIL FROM, a failure ends the Verifier.
// SMTPUTF8 is used if the server supports it, a server without it rejects non-ASCII addresses.
func (v *Verifier) Verify(ctx context.Context, addr string) error {
	if v.ended {
		return ErrVerifierEnded
	}

	if !v.begun {
		if err := v.begin(ctx); err != nil {
			v.dispose()
			return err
		}
	}

	c := v.mailer

	var err error
	if v.mode == VerifyRcpt {
		err = c.cmd(c.client.Rcpt(addr, nil), c.client.RcptResponse)
	} else {
		err = c.cmd(c.client.Verify(addr, &client.VrfyOptions{SMTPUTF8: c.supportsUTF8()}), c.client.VerifyResponse)
	}

	if err != nil && !isRejection(err) {
		v.dispose()
	}

	return c.closeUnlessRejected(err)
}

// begin connects if needed and with VerifyRcpt sends MAIL FROM.
// A rejected MAIL FROM keeps the connection, any other error closes it.
func (v *Verifier) begin(ctx context.Context) error {
	c := v.mailer

	// connect closes the connection on failure.
	if !c.client.Connected() {
		if err := c.connect(ctx); err != nil {
			return err
		}
	}

	if v.mode == VerifyRcpt {
		err := c.cmd(c.client.Mail(v.from, &client.MailOptions{SMTPUTF8: c.supportsUTF8()}), c.client.MailResponse)
		if err != nil {
			return c.closeUnlessRejected(err)
		}
	}

	v.begun = true

	return nil
}

// End ends the Verifier, with VerifyRcpt by RSET, and releases the Mailer.
// If RSET fails, the connection is closed.
func (v *Verifier) End() error {
	if v.ended {
		return nil
	}

	v.dispose()

	if !v.begun || v.mode != VerifyRcpt {
		return nil
	}

	if err := v.mailer.reset(); err != nil {
		return errors.Join(err, v.mailer.client.Close())
	}

	return nil
}

// dispose ends the Verifier without RSET and releases the Mailer.
func (v *Verifier) dispose() {
	v.ended = true
	v.mailer.verifying = false
}

// closeUnlessRejected returns err and closes the connection, unless err is nil or a rejection.
func (c *Mailer) closeUnlessRejected(err error) error {
	if err == nil || isRejection(err) {
		return err
	}

	return errors.Join(err, c.client.Close())
}

// VerifyReport contains the result of verifying recipients.
type VerifyReport struct {
	// Accepted are the recipients accepted by their server.
	Accepted []string
	// Failures are the recipients that couldn't be resolved, were rejected or couldn't be checked.
	Failures []resolve.Failure
}

// Verify checks with mode whether the servers of rcpts accept them as recipients of a mail from from.
// See Send for the servers used, every server gets its own connection.
func Verify(ctx context.Context, mode VerifyMode, from string, rcpts []string, opts ...Option) (VerifyReport, error) {
	config := NewConfig(opts...)

	mx, err := servers(ctx, rcpts, config)
	if err != nil {
		return VerifyReport{}, err
	}

	res := VerifyReport{Failures: mx.Failures}

	for _, server := range mx.Servers {
		accepted, failures := verify(ctx, server, from, mode, config)
		res.Accepted = append(res.Accepted, accepted...)
		res.Failures = append(res.Failures, failures...)
	}

	return res, nil
}

// verify checks the recipients of server on a new connection.
func verify(ctx context.Context, server resolve.Server, from string, mode VerifyMode, config Config) (accepted []string, failures []resolve.Failure) {
	config.extra.serverAddresses = server.Addresses
	m := NewFromConfig(config)
	// QUIT ends the transaction as well, the Mailer isn't used afterwards.
	defer func() { _ = m.Disconnect() }()

	// A new Mailer has no active Verifier.
	v, _ := m.Verifier(mode, from)

	for i, rcpt := range server.Rcpts {
		err := v.Verify(ctx, rcpt)
		if err == nil {
			accepted = append(accepted, rcpt)
			continue
		}

		// The sender was rejected or the connection is lost, the remaining recipients can't be checked.
		if v.ended {
			return accepted, append(failures, resolve.Failure{Rcpts: server.Rcpts[i:], Error: err})
		}

		failures = append(failures, resolve.Failure{Rcpts: []string{rcpt}, Error: err})
	}

	return accepted, failures
}
