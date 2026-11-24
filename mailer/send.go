package mailer

import (
	"bytes"
	"context"
	"errors"
	"fmt"
	"io"
	"strings"
	"sync"

	"github.com/uponusolutions/deltasmtp"
	"github.com/uponusolutions/deltasmtp/client"
	"github.com/uponusolutions/deltasmtp/resolve"
)

// Len is implemented by readers knowing their remaining length, e.g. *bytes.Reader.
type Len interface {
	Len() int
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

// Message is an RFC 822-style mail: headers, a blank line and the body, with CRLF
// terminated lines. Bcc recipients are recipients that aren't in the headers.
//
// It is read once per transaction (see Mailer.SendAdvanced):
//
//   - string or []byte: isn't modified or retained. The size is announced with
//     SIZE and BDAT sends it as a single chunk, if the server supports them.
//   - func() io.Reader or func() (io.ReadCloser, error): called once per
//     transaction, it has to return the whole message every time, e.g. by
//     opening a file. The reader is closed after the transaction if it is an
//     io.Closer. An error fails the remaining recipients. A reader with Len is
//     announced with SIZE.
//
// Only these exact types are accepted, convert named types at the call site.
type Message interface {
	string | []byte | func() io.Reader | func() (io.ReadCloser, error)
}

// opener returns a function opening a reader of msg.
func opener[M Message](msg M) func() (io.Reader, error) {
	switch m := any(msg).(type) {
	case string:
		return func() (io.Reader, error) { return strings.NewReader(m), nil }
	case []byte:
		return func() (io.Reader, error) { return bytes.NewReader(m), nil }
	case func() io.Reader:
		return func() (io.Reader, error) { return m(), nil }
	case func() (io.ReadCloser, error):
		return func() (io.Reader, error) {
			r, err := m()
			if err != nil {
				return nil, fmt.Errorf("mailer: open message: %w", err)
			}
			return r, nil
		}
	default:
		panic("unreachable")
	}
}

// Send sends msg from from to rcpts, see SendAdvanced.
func (c *Mailer) Send[M Message](ctx context.Context, from string, rcpts []string, msg M) (Report, error) {
	return c.SendAdvanced(ctx, from, client.MailOptions{}, rcpts, nil, msg)
}

// SendAdvanced sends msg from from to rcpts, rcptsOptions[i] applies to rcpts[i].
// It fails with ErrVerifying while a Verifier of c is active.
//
// It uses the connection of c or opens one, also once the connection reached RFC 9422
// MAILMAX (otherwise WithMaxTransactions) or the server rejects MAIL with 421 after
// earlier transactions. mailOptions.Size defaults to the size of msg, SMTPUTF8 is used
// if the server supports it.
//
// A transaction has at most RFC 9422 RCPTMAX (otherwise WithMaxRecipients) accepted
// recipients, further transactions take the remaining ones. A recipient rejected for
// too many recipients (452, RFC 5321 section 4.5.3.1.10) ends the transaction, it and
// the remaining ones go to the next, with at most as many as were accepted.
//
// The Report has a response per transaction and the rejected recipients. On an error
// the remaining recipients fail with it and no further transaction is started.
func (c *Mailer) SendAdvanced[M Message](
	ctx context.Context,
	from string,
	mailOptions client.MailOptions,
	rcpts []string,
	rcptsOptions []*deltasmtp.RcptOptions,
	msg M,
) (res Report, err error) {
	if len(rcpts) < 1 {
		return res, errors.New("no recipients")
	}
	if c.verifying {
		return res.fail(rcpts, nil, ErrVerifying)
	}

	open := opener(msg)

	for len(rcpts) > 0 {
		if err := c.ready(ctx); err != nil {
			return res.fail(rcpts, nil, err)
		}

		t := &transaction{c: c, rcpts: rcpts}
		status, err := t.send(from, mailOptions, rcptsOptions, open)
		res.Failures = append(res.Failures, t.failures...)

		switch {
		case errors.Is(err, errRenew):
			continue
		case err != nil:
			return res.fail(rcpts, t.failures, err)
		case status == nil: // every recipient was rejected
		default:
			res.Responses = append(res.Responses, Response{Status: status, Rcpts: t.accepted})
		}
		rcpts, rcptsOptions = t.remaining(rcpts, rcptsOptions)
	}

	return res, nil
}

// remaining returns the deferred recipients and the ones of all that weren't sent,
// with their options.
func (t *transaction) remaining(all []string, opts []*deltasmtp.RcptOptions) ([]string, []*deltasmtp.RcptOptions) {
	n := len(t.rcpts)
	if len(t.deferred) == 0 {
		return all[n:], opts[min(n, len(opts)):]
	}
	idx := t.deferred
	for i := n; i < len(all); i++ {
		idx = append(idx, i)
	}
	rcpts, rcptsOpts := make([]string, len(idx)), make([]*deltasmtp.RcptOptions, len(idx))
	for j, i := range idx {
		rcpts[j], rcptsOpts[j] = all[i], rcptOption(opts, i)
	}
	return rcpts, rcptsOpts
}

// fail adds rcpts, without the ones in failures, as failure with err.
func (r Report) fail(rcpts []string, failures []resolve.Failure, err error) (Report, error) {
	if rcpts = acceptedRcpts(rcpts, failures); len(rcpts) > 0 {
		r.Failures = append(r.Failures, resolve.Failure{Rcpts: rcpts, Error: err})
	}
	return r, err
}

// Send sends the mail msg from from to rcpts.
//
// The recipients are grouped by their MX servers, or sent to the servers of
// WithServerAddresses, and every server gets its own connection, see
// Mailer.SendAdvanced for the transactions on it and Message for msg.
//
// Recipients that couldn't be resolved, were rejected or whose server failed are
// in Report.Failures. err is only set if the MX lookup failed temporarily.
//
// The default SecurityStartTLS also applies to MX delivery, pass
// WithSecurity(SecurityPreferStartTLS) for opportunistic TLS as usual between
// mail servers.
func Send[M Message](ctx context.Context, from string, rcpts []string, msg M, opts ...Option) (res Report, err error) {
	unresolved, err := perServer(ctx, rcpts, opts, func(m *Mailer, rcpts []string) {
		r, _ := m.Send(ctx, from, rcpts, msg) // the error is in r.Failures
		res.Responses = append(res.Responses, r.Responses...)
		res.Failures = append(res.Failures, r.Failures...)
	})
	res.Failures = append(unresolved, res.Failures...)
	return res, err
}

// perServer calls f with a new Mailer for every server of rcpts, the configured server
// addresses or the MX servers, and disconnects it. It returns the unresolved recipients.
func perServer(ctx context.Context, rcpts []string, opts []Option, f func(m *Mailer, rcpts []string)) ([]resolve.Failure, error) {
	config := NewConfig(opts...)
	mx := resolve.Result{Servers: []resolve.Server{{Rcpts: rcpts, Addresses: config.extra.serverAddresses}}}
	if len(config.extra.serverAddresses) == 0 {
		var err error
		r := resolve.New(nil)
		if mx, err = r.Recipients(ctx, rcpts); err != nil {
			return nil, err
		}
	}

	for _, server := range mx.Servers {
		config.extra.serverAddresses = server.Addresses
		m := NewFromConfig(config)
		f(m, server.Rcpts)
		_ = m.Disconnect() // ends an open transaction as well
	}
	return mx.Failures, nil
}

// acceptedRcpts returns rcpts without the ones in failures, rcpts isn't modified.
func acceptedRcpts(rcpts []string, failures []resolve.Failure) []string {
	if len(failures) == 0 {
		return rcpts
	}

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

// copyBuffers avoids that io.Copy allocates 32 KB for every message.
var copyBuffers sync.Pool

func getCopyBuffer() *[]byte {
	if b, ok := copyBuffers.Get().(*[]byte); ok {
		return b
	}
	b := make([]byte, 32*1024)
	return &b
}
