package mailer

import (
	"cmp"
	"errors"

	"github.com/uponusolutions/deltasmtp"
	"github.com/uponusolutions/deltasmtp/client"
	"github.com/uponusolutions/deltasmtp/resolve"
)

// transaction sends a mail to the first of rcpts: MAIL, RCPT and DATA, pipelined if possible.
type transaction struct {
	c        *Mailer
	rcpts    []string // cut to the recipients sent, once prepared
	accepted []string
	failures []resolve.Failure
	deferred []int // indexes of rcpts rejected for too many recipients, sent in the next transaction

	// Pending responses with pipelining: MAIL and the RCPTs from rcpts[next] on.
	mail bool
	next int
}

// send sends msg and closes it. A nil status without an error means every
// recipient was rejected, the connection may be closed then (e.g. Postfix's error limit),
// the next transaction connects again. On an error the transaction is ended or the
// connection closed, errRenew asks to send it on a new connection.
func (t *transaction) send(from string, opts client.MailOptions, rcptsOptions []*deltasmtp.RcptOptions,
	msg content,
) (*deltasmtp.Status, error) {
	c := t.c
	defer msg.close()
	size := msg.size()
	opts.Size = cmp.Or(opts.Size, int64(size))
	opts.SMTPUTF8 = opts.SMTPUTF8 || c.supportsUTF8()

	// From here on every failure has to end the transaction.
	w, err := t.prepare(from, &opts, rcptsOptions, size)
	switch {
	case err != nil:
		return nil, c.abort(err) // keeps errRenew, the connection is closed already
	case w == nil:
		_ = c.resetOrClose() // every recipient has its result
		return nil, nil
	}

	if err = msg.writeTo(w.Writer()); err != nil {
		// Partly sent, the connection can't be reused. A rejected BDAT chunk would leave it
		// in sync, but can't be told apart from a *deltasmtp.Status returned by a reader.
		return nil, errors.Join(err, c.client.Close())
	}

	status, err := w.CloseWithResponse()
	if err != nil {
		return nil, c.abort(err)
	}
	return status, nil
}

// prepare sends MAIL, RCPT and DATA for a message of size, with at most maxRecipients
// accepted, and returns the writer of the content, nil if every recipient was rejected.
// A recipient rejected for too many recipients (e.g. Postfix without RCPTMAX) stops
// further RCPTs, is deferred and the accepted ones are learned as limit.
// The transaction may be left open, the caller has to end it.
func (t *transaction) prepare(from string, mailOptions *client.MailOptions, rcptsOptions []*deltasmtp.RcptOptions,
	size int,
) (*client.ContentCloser, error) {
	c := t.c
	pipelining := c.client.PipeliningActive()
	limit := c.maxRecipients()
	// full reports whether the recipients before i, without the rejected ones, reach limit.
	full := func(i int) bool { return limit > 0 && i-len(t.failures)-len(t.deferred) >= limit }

	if err := c.mail(from, mailOptions, false); err != nil {
		return nil, err
	}
	t.mail = true

	for i, addr := range t.rcpts {
		// RCPTMAX counts accepted recipients, rejected pending ones make room for more.
		if full(i) && pipelining {
			if err := t.flush(i); err != nil {
				return nil, err
			}
		}
		if len(t.deferred) > 0 || full(i) {
			t.rcpts = t.rcpts[:i]
			break
		}

		opts := rcptOption(rcptsOptions, i)
		err := c.client.Rcpt(addr, opts)
		if errors.Is(err, client.ErrPipeliningCongestion) {
			if err = t.flush(i); err != nil {
				return nil, err
			}
			err = c.client.Rcpt(addr, opts)
		}
		if err == nil && pipelining {
			continue
		}
		// The pending responses are matched by position, addr wasn't sent.
		if errors.Is(err, client.ErrRefused) && pipelining {
			if errFlush := t.flush(i); errFlush != nil {
				return nil, errFlush
			}
			t.next = i + 1
		}
		if err = t.rcptResult(i, err); err != nil {
			return nil, err
		}
	}

	if !pipelining && len(t.accepted) == 0 {
		return nil, nil
	}

	w, err := c.client.Content(size)
	if errors.Is(err, client.ErrPipeliningCongestion) {
		if err = t.flush(len(t.rcpts)); err != nil {
			return nil, err // DATA wasn't sent
		}
		w, err = c.client.Content(size)
	}
	if err == nil && w == nil { // pipelined, an error clears the DATA response
		if err = t.flush(len(t.rcpts)); err == nil {
			w, err = t.contentResponse(size)
		}
	}
	if err == nil && len(t.deferred) > 0 {
		c.cfg.maxRecipients = len(t.accepted)
	}
	return w, err
}

func rcptOption(rcptsOptions []*deltasmtp.RcptOptions, i int) *deltasmtp.RcptOptions {
	if i < len(rcptsOptions) {
		return rcptsOptions[i]
	}
	return nil
}

// flush reads the pending responses of MAIL and the RCPTs before rcpts[end], on an error
// all pending ones.
func (t *transaction) flush(end int) error {
	c := t.c
	if t.mail {
		t.mail = false
		if err := c.client.MailResponse(); err != nil {
			return c.mailError(c.clearResponses(err))
		}
	}
	for ; t.next < end; t.next++ {
		if err := t.rcptResult(t.next, c.client.RcptResponse()); err != nil {
			return c.clearResponses(err)
		}
	}
	return nil
}

// rcptResult records the response err to the RCPT of rcpts[i], errors other than a
// rejection are returned.
func (t *transaction) rcptResult(i int, err error) error {
	switch {
	case err == nil && len(t.accepted) == i: // none rejected yet, no need to copy
		t.accepted = t.rcpts[: i+1 : i+1]
	case err == nil:
		t.accepted = append(t.accepted, t.rcpts[i])
	case !isRejection(err):
		return err
	case len(t.accepted) > 0 && tooManyRcpts(err): // the next transaction makes progress
		t.deferred = append(t.deferred, i)
	default:
		t.failures = append(t.failures, resolve.Failure{Rcpts: []string{t.rcpts[i]}, Error: err})
	}
	return nil
}

// contentResponse reads the response to the pipelined DATA (or sends BDAT). Without an
// accepted recipient its failure is expected, a 421 closes the connection.
func (t *transaction) contentResponse(size int) (*client.ContentCloser, error) {
	c := t.c
	if len(t.accepted) > 0 {
		return c.client.ContentResponse(size)
	}
	if c.client.ChunkingActive() {
		return nil, nil // BDAT isn't sent yet
	}
	if w, err := c.client.ContentResponse(size); err == nil {
		_ = w.Close() // RFC 2920: DATA may be accepted even if every RCPT was rejected
	}
	return nil, nil
}

// tooManyRcpts reports whether err rejects a RCPT for too many recipients: 452 (RFC 5321
// section 4.5.3.1.10) with X.5.3 or no enhanced code, or 552 with X.5.3, treated as 452.
func tooManyRcpts(err error) bool {
	st, ok := errors.AsType[*deltasmtp.Status](err)
	if !ok {
		return false
	}
	x53 := st.EnhancedCode[1] == 5 && st.EnhancedCode[2] == 3
	return st.Code == 452 && (x53 || st.EnhancedCode == deltasmtp.NoEnhancedCode) || st.Code == 552 && x53
}

// clearResponses reads the pending responses after err, if still connected.
func (c *Mailer) clearResponses(err error) error {
	if c.client.Connected() {
		if errClear := c.client.ClearResponses(0); errClear != nil {
			return errors.Join(err, errClear)
		}
	}
	return err
}

// abort ends a failed transaction and returns err. After a rejection the connection is
// in sync and kept if RSET succeeds, otherwise it is closed.
func (c *Mailer) abort(err error) error {
	if !isRejection(err) {
		return errors.Join(err, c.client.Close())
	}
	if errReset := c.resetOrClose(); errReset != nil {
		return errors.Join(err, errReset)
	}
	return err
}

// resetOrClose ends the transaction by RSET, or closes the connection if that fails.
func (c *Mailer) resetOrClose() error {
	if err := c.reset(); err != nil {
		return errors.Join(err, c.client.Close())
	}
	return nil
}

// isRejection reports whether err rejects a command and leaves the connection in sync:
// a server reply other than 421 or a refusal of the client.
func isRejection(err error) bool {
	if st, ok := errors.AsType[*deltasmtp.Status](err); ok {
		return st.Code != 421
	}
	return errors.Is(err, client.ErrRefused)
}
