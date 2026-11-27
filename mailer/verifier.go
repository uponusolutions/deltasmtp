package mailer

import (
	"context"
	"errors"

	"github.com/uponusolutions/deltasmtp"
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

// Verifier verifies recipients one by one on the connection of its Mailer, which can't
// send while the Verifier is active, from Mailer.Verifier to End.
//
// With VerifyRcpt the transaction stays open, every recipient costs a single RCPT. A full
// transaction (see SendAdvanced) is replaced by RSET and MAIL, on a new connection once
// it used up its transactions.
//
// A rejection keeps the Verifier active, any other error closes the connection and ends it.
type Verifier struct {
	mailer   *Mailer
	mode     VerifyMode
	from     string
	begun    bool
	ended    bool
	accepted int // recipients accepted in the transaction
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

// Verify returns nil if the server accepts addr as recipient. A rejection is a
// *deltasmtp.StatusError, a refusal of the client matches client.ErrRefused. A failing
// connect or MAIL, or with VerifyVrfy a server not supporting VRFY (500, 502, 504), ends
// the Verifier. With VerifyRcpt these replies reject the address, RCPT is mandatory.
// SMTPUTF8 is used if the server supports it.
func (v *Verifier) Verify(ctx context.Context, addr string) error {
	if v.ended {
		return ErrVerifierEnded
	}
	err := v.verify(ctx, addr)
	// e.g. Postfix without RCPTMAX: learn the limit, check addr in a new transaction
	if v.accepted > 0 && tooManyRcpts(err) {
		v.mailer.cfg.maxRecipients = v.accepted
		err = v.verify(ctx, addr)
	}
	return err
}

// verify checks addr, in a new transaction if the current one is full.
func (v *Verifier) verify(ctx context.Context, addr string) error {
	c := v.mailer
	if limit := c.maxRecipients(); !v.begun || limit > 0 && v.accepted >= limit {
		if err := v.begin(ctx); err != nil {
			v.dispose()
			return err
		}
	}

	var err error
	if v.mode == VerifyRcpt {
		if err = c.cmd(c.client.Rcpt(addr, nil), c.client.RcptResponse); err == nil {
			v.accepted++
		}
	} else {
		err = c.cmd(c.client.Verify(addr, &client.VrfyOptions{SMTPUTF8: c.supportsUTF8()}), c.client.VerifyResponse)
	}
	if err != nil && (!isRejection(err) || v.mode == VerifyVrfy && unsupported(err)) {
		v.dispose()
	}
	return c.closeUnlessRejected(err)
}

// unsupported reports whether err of VRFY rejects the command itself, not the address: 500,
// 502 or 504 (RFC 5321 section 4.2.3), e.g. Postfix's "502 5.5.1 VRFY command is disabled".
// Not used for RCPT: it is mandatory, there these replies reject the address (e.g. its
// syntax), and ending the Verifier would leave the transaction open.
func unsupported(err error) bool {
	st, ok := errors.AsType[*deltasmtp.StatusError](err)
	return ok && (st.Code == 500 || st.Code == 502 || st.Code == 504)
}

// begin connects if needed and with VerifyRcpt ends the previous transaction and sends
// MAIL. A rejected MAIL keeps the connection, any other error closes it.
func (v *Verifier) begin(ctx context.Context) error {
	c := v.mailer
	// A connection renewed by ready needs no RSET.
	if v.begun && v.mode == VerifyRcpt && c.client.Connected() && !c.exhausted() {
		if err := c.resetOrClose(); err != nil {
			return err
		}
	}
	if err := c.ready(ctx); err != nil {
		return err
	}

	if v.mode == VerifyRcpt {
		v.accepted = 0
		switch err := c.mail(v.from, &client.MailOptions{SMTPUTF8: c.supportsUTF8()}, true); {
		case errors.Is(err, errRenew):
			return v.begin(ctx)
		case err != nil:
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
	return v.mailer.resetOrClose()
}

// dispose ends the Verifier without RSET and releases the Mailer.
func (v *Verifier) dispose() {
	v.ended = true
	v.mailer.verifying = false
}

// closeUnlessRejected closes the connection unless err is nil or a rejection.
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

// Verify checks with mode whether the servers of rcpts, see Send, accept them as recipients
// of a mail from from.
func Verify(ctx context.Context, mode VerifyMode, from string, rcpts []string, opts ...Option) (res VerifyReport, err error) {
	unresolved, err := perServer(ctx, rcpts, opts, func(m *Mailer, rcpts []string) {
		res.add(ctx, m, mode, from, rcpts)
	})
	res.Failures = append(unresolved, res.Failures...)
	return res, err
}

// add adds the results of checking rcpts with a Verifier of the new Mailer m.
func (r *VerifyReport) add(ctx context.Context, m *Mailer, mode VerifyMode, from string, rcpts []string) {
	v, _ := m.Verifier(mode, from) // a new Mailer has no active Verifier
	for i, rcpt := range rcpts {
		switch err := v.Verify(ctx, rcpt); {
		case err == nil:
			r.Accepted = append(r.Accepted, rcpt)
		case v.ended: // the remaining recipients can't be checked
			r.Failures = append(r.Failures, resolve.Failure{Rcpts: rcpts[i:], Error: err})
			return
		default:
			r.Failures = append(r.Failures, resolve.Failure{Rcpts: []string{rcpt}, Error: err})
		}
	}
}
