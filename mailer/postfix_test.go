package mailer

import (
	"io"
	"strings"
	"sync"
	"testing"

	"github.com/stretchr/testify/assert"
	"github.com/stretchr/testify/require"
	"github.com/uponusolutions/deltasmtp/client"
	"github.com/uponusolutions/deltasmtp/resolve"
	"github.com/uponusolutions/deltasmtp/tester"
)

// postfix configures newPostfixServer like the Postfix smtpd parameters of the same names.
type postfix struct {
	recipientLimit int // smtpd_recipient_limit, 0 is unlimited
	hardErrorLimit int // smtpd_hard_error_limit, defaults to 20
	junkLimit      int // smtpd_junk_command_limit, defaults to 100
	disableVrfy    bool
}

// postfixSession is the state of a session, as kept by Postfix's smtpd.c.
type postfixSession struct {
	tx         bool
	rcptCount  int // accepted recipients of the transaction
	errorCount int // reset by a delivered message
	junkCmds   int
}

// newPostfixServer returns a server answering like Postfix smtpd (smtpd.c), it doesn't
// advertise LIMITS. Recipients starting with "notfound" are unknown, "ratelimited" ones
// exceed smtpd_client_recipient_rate_limit, senders starting with "throttled" exceed
// smtpd_client_message_rate_limit.
func newPostfixServer(t *testing.T, pipelining bool, cfg postfix) (*tester.FakeServer, []Option) {
	t.Helper()
	if cfg.hardErrorLimit == 0 {
		cfg.hardErrorLimit = 20
	}
	if cfg.junkLimit == 0 {
		cfg.junkLimit = 100
	}

	var mu sync.Mutex
	sessions := map[*tester.FakeSession]*postfixSession{}
	// handler runs cmd like smtpd's command loop: the error limit is checked before a
	// command is read, a failed command counts as error, so do junk commands over the limit.
	handler := func(junk bool, cmd func(fs *tester.FakeSession, s *postfixSession, line string) bool) tester.FakeHandler {
		return func(fs *tester.FakeSession, line string) bool {
			mu.Lock()
			s := sessions[fs]
			if s == nil {
				s = &postfixSession{}
				sessions[fs] = s
			}
			mu.Unlock()
			if s.errorCount >= cfg.hardErrorLimit {
				fs.Reply("421 4.7.0 fake Error: too many errors")
				return false
			}
			if !cmd(fs, s, line) {
				s.errorCount++
			}
			if junk {
				if s.junkCmds++; s.junkCmds-1 > cfg.junkLimit {
					s.errorCount++
				}
			}
			return true
		}
	}

	srv := &tester.FakeServer{Handlers: map[string]tester.FakeHandler{
		"MAIL": handler(false, func(fs *tester.FakeSession, s *postfixSession, line string) bool {
			switch {
			case s.tx:
				fs.Reply("503 5.5.1 Error: nested MAIL command")
				return false
			case strings.Contains(line, "<throttled"):
				fs.Reply("450 4.7.1 Error: too much mail from 127.0.0.1")
				return false
			}
			s.tx, s.rcptCount = true, 0
			fs.Reply("250 2.1.0 Ok")
			return true
		}),
		"RCPT": handler(false, func(fs *tester.FakeSession, s *postfixSession, line string) bool {
			switch {
			case !s.tx:
				fs.Reply("503 5.5.1 Error: need MAIL command")
				return false
			case strings.Contains(line, "<ratelimited"):
				fs.Reply("450 4.7.1 Error: too many recipients from 127.0.0.1")
				return false
			case cfg.recipientLimit > 0 && s.rcptCount >= cfg.recipientLimit:
				// within smtpd_recipient_overshoot_limit, not an error
				fs.Reply("452 4.5.3 Error: too many recipients")
				return true
			case strings.Contains(line, "<notfound"):
				fs.Reply("550 5.1.1 Recipient address rejected: User unknown in local recipient table")
				return false
			}
			s.rcptCount++
			fs.Reply("250 2.1.5 Ok")
			return true
		}),
		"DATA": handler(false, func(fs *tester.FakeSession, s *postfixSession, _ string) bool {
			if !s.tx || s.rcptCount == 0 {
				fs.Reply("554 5.5.1 Error: no valid recipients")
				return false
			}
			fs.Reply("354 End data with <CR><LF>.<CR><LF>")
			if fs.ReadMessage() != nil {
				return false
			}
			s.tx, s.errorCount, s.junkCmds = false, 0, 0
			fs.Reply("250 2.0.0 Ok: queued as 4F2B")
			return true
		}),
		"RSET": handler(true, func(fs *tester.FakeSession, s *postfixSession, _ string) bool {
			s.tx = false
			fs.Reply("250 2.0.0 Ok")
			return true
		}),
		"VRFY": handler(true, func(fs *tester.FakeSession, _ *postfixSession, line string) bool {
			switch {
			case cfg.disableVrfy:
				fs.Reply("502 5.5.1 VRFY command is disabled")
				return false
			case strings.Contains(line, "notfound"):
				fs.Reply("550 5.1.1 Recipient address rejected: User unknown in local recipient table")
				return false
			}
			fs.Reply("252 2.0.0 " + strings.TrimPrefix(line, "VRFY "))
			return true
		}),
	}}
	if pipelining {
		srv.Extensions = []string{"PIPELINING"}
	}

	return srv, []Option{
		WithServerAddresses(srv.Listen(t)),
		WithSecurity(SecurityPlain),
		WithBasic(client.WithPipelining(pipelining)),
	}
}

// failed returns the recipients of failures by the first line of their error.
func failed(failures []resolve.Failure) map[string][]string {
	out := map[string][]string{}
	for _, f := range failures {
		code, _, _ := strings.Cut(f.Error.Error(), " ")
		out[code] = append(out[code], f.Rcpts...)
	}
	return out
}

// TestPostfix_RecipientLimit sends more recipients than smtpd_recipient_limit, the
// 452 4.5.3 ones are sent in further transactions on the same connection.
func TestPostfix_RecipientLimit(t *testing.T) {
	rcpts := []string{"a@x.org", "notfound1@x.org", "b@x.org", "c@x.org", "notfound2@x.org", "d@x.org", "e@x.org"}

	for _, pc := range pipeliningCases {
		t.Run(pc.name, func(t *testing.T) {
			srv, opts := newPostfixServer(t, pc.pipelining, postfix{recipientLimit: 2})
			m := New(append(opts, WithMaxRecipients(0))...)
			t.Cleanup(func() { _ = m.Terminate() })

			res, err := m.Send(t.Context(), "alice@x.org", rcpts, "Hi\r\n")
			require.NoError(t, err)
			require.Len(t, res.Responses, 3)
			assert.Equal(t, []string{"a@x.org", "b@x.org"}, res.Responses[0].Rcpts)
			assert.Equal(t, []string{"c@x.org", "d@x.org"}, res.Responses[1].Rcpts)
			assert.Equal(t, []string{"e@x.org"}, res.Responses[2].Rcpts)
			assert.Len(t, res.Failures, 2)
			assert.Equal(t, 1, connections(srv))
		})
	}
}

// TestPostfix_RecipientRateLimit checks that 450 4.7.1 "too many recipients from" (the
// rate limit of the client) is a failure of the recipient, not a recipient limit of
// the transaction: it isn't sent again.
func TestPostfix_RecipientRateLimit(t *testing.T) {
	for _, pc := range pipeliningCases {
		t.Run(pc.name, func(t *testing.T) {
			_, opts := newPostfixServer(t, pc.pipelining, postfix{})
			m := New(opts...)
			t.Cleanup(func() { _ = m.Terminate() })

			res, err := m.Send(t.Context(), "alice@x.org", []string{"a@x.org", "ratelimited@x.org", "b@x.org"}, "Hi\r\n")
			require.NoError(t, err)
			require.Len(t, res.Responses, 1)
			assert.Equal(t, []string{"a@x.org", "b@x.org"}, res.Responses[0].Rcpts)
			require.Len(t, res.Failures, 1)
			assert.Equal(t, []string{"ratelimited@x.org"}, res.Failures[0].Rcpts)
			assert.ErrorContains(t, res.Failures[0].Error, "450 4.7.1")
		})
	}
}

// TestPostfix_MessageRateLimit checks that 450 4.7.1 "too much mail from" to MAIL after
// earlier transactions is a rejection: the connection is kept, not renewed.
func TestPostfix_MessageRateLimit(t *testing.T) {
	for _, pc := range pipeliningCases {
		t.Run(pc.name, func(t *testing.T) {
			srv, opts := newPostfixServer(t, pc.pipelining, postfix{})
			m := New(opts...)
			t.Cleanup(func() { _ = m.Terminate() })

			_, err := m.Send(t.Context(), "alice@x.org", []string{"a@x.org"}, "Hi\r\n")
			require.NoError(t, err)

			res, err := m.Send(t.Context(), "throttled@x.org", []string{"a@x.org", "b@x.org"}, "Hi\r\n")
			require.ErrorContains(t, err, "450 4.7.1")
			assert.Empty(t, res.Responses)
			require.Len(t, res.Failures, 1)
			assert.Equal(t, []string{"a@x.org", "b@x.org"}, res.Failures[0].Rcpts)
			assert.True(t, m.Connected())

			_, err = m.Send(t.Context(), "alice@x.org", []string{"a@x.org"}, "Hi\r\n")
			require.NoError(t, err)
			assert.Equal(t, 1, connections(srv))
		})
	}
}

// TestPostfix_HardErrorLimit checks smtpd_hard_error_limit: after as many rejected
// commands without a delivered message, the next command gets 421 and the connection
// is closed. The recipients from there on fail with it, the next Send connects again.
func TestPostfix_HardErrorLimit(t *testing.T) {
	rcpts := []string{"notfound1@x.org", "a@x.org", "notfound2@x.org", "notfound3@x.org", "b@x.org", "notfound4@x.org"}

	for _, pc := range pipeliningCases {
		t.Run(pc.name, func(t *testing.T) {
			srv, opts := newPostfixServer(t, pc.pipelining, postfix{hardErrorLimit: 3})
			m := New(opts...)
			t.Cleanup(func() { _ = m.Terminate() })

			res, err := m.Send(t.Context(), "alice@x.org", rcpts, "Hi\r\n")
			require.ErrorContains(t, err, "421 4.7.0")
			assert.Empty(t, res.Responses)
			assert.Equal(t, map[string][]string{
				"550": {"notfound1@x.org", "notfound2@x.org", "notfound3@x.org"},
				"421": {"a@x.org", "b@x.org", "notfound4@x.org"},
			}, failed(res.Failures))
			assert.False(t, m.Connected())

			_, err = m.Send(t.Context(), "alice@x.org", []string{"a@x.org"}, "Hi\r\n")
			require.NoError(t, err)
			assert.Equal(t, 2, connections(srv))
		})
	}
}

// TestPostfix_AllRejectedAtErrorLimit checks a transaction whose rejected recipients
// reach smtpd_hard_error_limit: the server closes the connection on the next command
// (RSET, or the pipelined DATA). Every recipient has its result, so it isn't an error,
// the next Send connects again.
func TestPostfix_AllRejectedAtErrorLimit(t *testing.T) {
	for _, pc := range pipeliningCases {
		t.Run(pc.name, func(t *testing.T) {
			srv, opts := newPostfixServer(t, pc.pipelining, postfix{hardErrorLimit: 2})
			m := New(opts...)
			t.Cleanup(func() { _ = m.Terminate() })

			res, err := m.Send(t.Context(), "alice@x.org", []string{"notfound1@x.org", "notfound2@x.org"}, "Hi\r\n")
			require.NoError(t, err)
			assert.Empty(t, res.Responses)
			assert.Equal(t, map[string][]string{"550": {"notfound1@x.org", "notfound2@x.org"}}, failed(res.Failures))
			assert.False(t, m.Connected())

			_, err = m.Send(t.Context(), "alice@x.org", []string{"a@x.org"}, "Hi\r\n")
			require.NoError(t, err)
			assert.Equal(t, 2, connections(srv))
		})
	}
}

// TestPostfix_ErrorsResetByDelivery checks that rejected recipients of transactions that
// deliver the message don't add up to smtpd_hard_error_limit.
func TestPostfix_ErrorsResetByDelivery(t *testing.T) {
	for _, pc := range pipeliningCases {
		t.Run(pc.name, func(t *testing.T) {
			srv, opts := newPostfixServer(t, pc.pipelining, postfix{hardErrorLimit: 3})
			m := New(opts...)
			t.Cleanup(func() { _ = m.Terminate() })

			for range 3 {
				res, err := m.Send(t.Context(), "alice@x.org",
					[]string{"notfound1@x.org", "a@x.org", "notfound2@x.org"}, "Hi\r\n")
				require.NoError(t, err)
				require.Len(t, res.Responses, 1)
				assert.Len(t, res.Failures, 2)
			}
			assert.Equal(t, 1, connections(srv))
		})
	}
}

// TestPostfix_VerifyHardErrorLimit checks that Verify stops at the 421 of
// smtpd_hard_error_limit: the unchecked recipients fail with it and no new connection
// is opened to go on, which would get around the protection against address harvesting.
func TestPostfix_VerifyHardErrorLimit(t *testing.T) {
	rcpts := []string{"a@x.org", "notfound1@x.org", "notfound2@x.org", "b@x.org", "notfound3@x.org", "c@x.org"}

	for _, mode := range []VerifyMode{VerifyRcpt, VerifyVrfy} {
		for _, pc := range pipeliningCases {
			srv, opts := newPostfixServer(t, pc.pipelining, postfix{hardErrorLimit: 3})

			// Transactions of a single recipient, VerifyRcpt sends RSET between them.
			res, err := Verify(t.Context(), mode, "alice@x.org", rcpts, append(opts, WithMaxRecipients(1))...)
			require.NoError(t, err)
			assert.Equal(t, []string{"a@x.org", "b@x.org"}, res.Accepted)
			assert.Equal(t, map[string][]string{
				"550": {"notfound1@x.org", "notfound2@x.org", "notfound3@x.org"},
				"421": {"c@x.org"},
			}, failed(res.Failures))
			assert.Equal(t, 1, connections(srv))
		}
	}
}

// TestPostfix_VerifyJunkCommandLimit checks smtpd_junk_command_limit: VRFY and RSET over
// the limit count as errors, until smtpd_hard_error_limit ends the connection.
func TestPostfix_VerifyJunkCommandLimit(t *testing.T) {
	rcpts := []string{"a@x.org", "b@x.org", "c@x.org", "d@x.org", "e@x.org", "f@x.org"}

	for _, pc := range pipeliningCases {
		srv, opts := newPostfixServer(t, pc.pipelining, postfix{hardErrorLimit: 2, junkLimit: 2})

		res, err := Verify(t.Context(), VerifyVrfy, "alice@x.org", rcpts, opts...)
		require.NoError(t, err)
		// The 4th and 5th VRFY are errors, the 6th gets 421.
		assert.Equal(t, rcpts[:5], res.Accepted)
		assert.Equal(t, map[string][]string{"421": {"f@x.org"}}, failed(res.Failures))
		assert.Equal(t, 1, connections(srv))
	}
}

// TestPostfix_VrfyDisabled checks disable_vrfy_command: the 502 rejects the command, not
// the address, so the Verifier ends and the unchecked recipients fail with it, the
// connection is kept.
func TestPostfix_VrfyDisabled(t *testing.T) {
	rcpts := []string{"a@x.org", "b@x.org", "c@x.org"}

	for _, pc := range pipeliningCases {
		t.Run(pc.name, func(t *testing.T) {
			srv, opts := newPostfixServer(t, pc.pipelining, postfix{disableVrfy: true})
			m := New(opts...)
			t.Cleanup(func() { _ = m.Terminate() })

			v, err := m.Verifier(VerifyVrfy, "alice@x.org")
			require.NoError(t, err)
			require.ErrorContains(t, v.Verify(t.Context(), "a@x.org"), "502 5.5.1")
			assert.False(t, v.Active())
			assert.True(t, m.Connected())

			res, err := Verify(t.Context(), VerifyVrfy, "alice@x.org", rcpts, opts...)
			require.NoError(t, err)
			assert.Empty(t, res.Accepted)
			assert.Equal(t, map[string][]string{"502": rcpts}, failed(res.Failures))
			assert.Equal(t, []string{"VRFY", "VRFY"}, verbs(srv)[:2])
			assert.Len(t, verbs(srv), 3, "a single VRFY per connection, then QUIT")
		})
	}
}

// TestPostfix_PipelinedRejectedSender checks a rejected MAIL with pipelining: the RCPTs
// and DATA sent with it are errors for Postfix as well (503 need MAIL command), many
// recipients reach smtpd_hard_error_limit and Postfix closes the connection. The
// recipients fail with the MAIL rejection, the next Send connects again.
func TestPostfix_PipelinedRejectedSender(t *testing.T) {
	for _, pc := range pipeliningCases {
		t.Run(pc.name, func(t *testing.T) {
			srv, opts := newPostfixServer(t, pc.pipelining, postfix{})
			m := New(opts...)
			t.Cleanup(func() { _ = m.Terminate() })

			rcpts := makeEmails(30)
			res, err := m.Send(t.Context(), "throttled@x.org", rcpts, "Hi\r\n")
			require.ErrorContains(t, err, "450 4.7.1")
			if pc.pipelining {
				// The 421 is reported, not the EOF after it.
				require.ErrorContains(t, err, "421 4.7.0 fake Error: too many errors")
				assert.NotErrorIs(t, err, io.EOF)
			}
			require.Len(t, res.Failures, 1)
			assert.Equal(t, rcpts, res.Failures[0].Rcpts)
			assert.Equal(t, !pc.pipelining, m.Connected())

			_, err = m.Send(t.Context(), "alice@x.org", []string{"a@x.org"}, "Hi\r\n")
			require.NoError(t, err)
			assert.Equal(t, map[bool]int{false: 1, true: 2}[pc.pipelining], connections(srv))
		})
	}
}
