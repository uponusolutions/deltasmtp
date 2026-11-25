package mailer

import (
	"fmt"
	"math/rand/v2"
	"slices"
	"strings"
	"sync"
	"testing"

	"github.com/stretchr/testify/assert"
	"github.com/stretchr/testify/require"
	"github.com/uponusolutions/deltasmtp/client"
	"github.com/uponusolutions/deltasmtp/resolve"
	"github.com/uponusolutions/deltasmtp/tester"
)

// randomServer is a server with random limits, advertised or not. Recipients are
// answered by their prefix: "ok" accepted, "nf" 550, "tmp" 450, "once" 452 4.5.3 on
// the first attempt, "bye" 421 closing the connection.
type randomServer struct {
	pipelining       bool
	rcptMax, mailMax int // 0 is unlimited
	advertise        bool
	mu               sync.Mutex
	sessions         map[*tester.FakeSession]*randomSession
	seen             map[string]bool // "once" recipients rejected already
	deferrable       map[string]bool // got 452 4.5.3 after an accepted recipient
	delivered        [][]string      // accepted recipients of every delivered message
	violations       []string
}

type randomSession struct {
	mails    int
	tx       bool
	accepted []string
}

func (r *randomServer) violate(format string, args ...any) {
	r.violations = append(r.violations, fmt.Sprintf(format, args...))
}

func (r *randomServer) listen(t *testing.T) string {
	r.sessions, r.seen, r.deferrable = map[*tester.FakeSession]*randomSession{}, map[string]bool{}, map[string]bool{}
	handler := func(h func(fs *tester.FakeSession, s *randomSession, line string) bool) tester.FakeHandler {
		return func(fs *tester.FakeSession, line string) bool {
			r.mu.Lock()
			defer r.mu.Unlock()
			s := r.sessions[fs]
			if s == nil {
				s = &randomSession{}
				r.sessions[fs] = s
			}
			return h(fs, s, line)
		}
	}

	srv := &tester.FakeServer{Handlers: map[string]tester.FakeHandler{
		"MAIL": handler(func(fs *tester.FakeSession, s *randomSession, _ string) bool {
			if s.mails++; r.mailMax > 0 && s.mails > r.mailMax {
				if r.advertise {
					r.violate("MAIL over MAILMAX")
				}
				fs.Reply("421 4.7.0 too many messages in this connection")
				return false
			}
			if s.tx {
				r.violate("nested MAIL")
			}
			s.tx, s.accepted = true, nil
			fs.Reply("250 2.1.0 Ok")
			return true
		}),
		"RCPT": handler(func(fs *tester.FakeSession, s *randomSession, line string) bool {
			addr := line[strings.Index(line, "<")+1 : strings.Index(line, ">")]
			switch {
			case !s.tx:
				r.violate("RCPT without MAIL: %s", addr)
				fs.Reply("503 5.5.1 Error: need MAIL command")
			case r.rcptMax > 0 && len(s.accepted) >= r.rcptMax:
				if r.advertise {
					r.violate("RCPT over RCPTMAX: %s", addr)
				}
				r.deferrable[addr] = true
				fs.Reply("452 4.5.3 Error: too many recipients")
			case strings.HasPrefix(addr, "nf"):
				fs.Reply("550 5.1.1 unknown")
			case strings.HasPrefix(addr, "tmp"):
				fs.Reply("450 4.2.0 mailbox busy")
			case strings.HasPrefix(addr, "once") && !r.seen[addr]:
				r.seen[addr] = true
				r.deferrable[addr] = len(s.accepted) > 0
				fs.Reply("452 4.5.3 Error: too many recipients")
			case strings.HasPrefix(addr, "bye"):
				fs.Reply("421 4.3.2 shutting down")
				return false
			default:
				s.accepted = append(s.accepted, addr)
				fs.Reply("250 2.1.5 Ok")
			}
			return true
		}),
		"DATA": handler(func(fs *tester.FakeSession, s *randomSession, _ string) bool {
			if !s.tx || len(s.accepted) == 0 {
				fs.Reply("554 5.5.1 Error: no valid recipients")
				return true
			}
			fs.Reply("354 go ahead")
			if fs.ReadMessage() != nil {
				return false
			}
			r.delivered = append(r.delivered, s.accepted)
			s.tx = false
			fs.Reply("250 2.0.0 queued")
			return true
		}),
		"RSET": handler(func(fs *tester.FakeSession, s *randomSession, _ string) bool {
			s.tx = false
			fs.Reply("250 2.0.0 Ok")
			return true
		}),
	}}
	if r.pipelining {
		srv.Extensions = append(srv.Extensions, "PIPELINING")
	}
	if r.advertise && (r.rcptMax > 0 || r.mailMax > 0) {
		limits := "LIMITS"
		if r.rcptMax > 0 {
			limits += fmt.Sprintf(" RCPTMAX=%d", r.rcptMax)
		}
		if r.mailMax > 0 {
			limits += fmt.Sprintf(" MAILMAX=%d", r.mailMax)
		}
		srv.Extensions = append(srv.Extensions, limits)
	}
	return srv.Listen(t)
}

// checkFailure checks that f is the server's answer to its recipients.
func (r *randomServer) checkFailure(t *testing.T, f resolve.Failure) {
	t.Helper()
	r.mu.Lock()
	defer r.mu.Unlock()
	for _, rcpt := range f.Rcpts {
		switch {
		case strings.HasPrefix(rcpt, "nf"):
			assert.ErrorContains(t, f.Error, "550", rcpt)
		case strings.HasPrefix(rcpt, "tmp"):
			assert.ErrorContains(t, f.Error, "450", rcpt)
		case strings.HasPrefix(rcpt, "once"):
			// a 452 4.5.3 is deferred after an accepted recipient only
			assert.ErrorContains(t, f.Error, "452", rcpt)
			assert.False(t, r.deferrable[rcpt], "%s not deferred", rcpt)
		default:
			assert.Failf(t, "unexpected failure", "%s failed: %v", rcpt, f.Error)
		}
	}
}

// TestSendProperties sends to random servers and checks the invariants of SendAdvanced:
// every recipient is reported exactly once, as response or failure, every response is
// a delivered message with exactly its recipients, nothing is delivered twice, the
// advertised limits are kept and the transactions stay in sync.
func TestSendProperties(t *testing.T) {
	kinds := []string{"ok", "ok", "ok", "ok", "nf", "nf", "tmp", "once", "once"}

	for seed := range uint64(300) {
		rnd := rand.New(rand.NewPCG(seed, 0)) //nolint:gosec // seeded, a failing seed can be run again
		srv := &randomServer{
			pipelining: rnd.IntN(2) == 0,
			rcptMax:    rnd.IntN(4),
			mailMax:    rnd.IntN(4),
			advertise:  rnd.IntN(2) == 0,
		}
		bye := rnd.IntN(5) == 0
		rcpts := make([]string, 1+rnd.IntN(12))
		for i := range rcpts {
			kind := kinds[rnd.IntN(len(kinds))]
			if bye && i == len(rcpts)/2 {
				kind = "bye"
			}
			rcpts[i] = fmt.Sprintf("%s%d@x.org", kind, i)
		}
		maxRcpts, sends := rnd.IntN(4), 1+rnd.IntN(3)

		t.Run(fmt.Sprintf("seed=%d", seed), func(t *testing.T) {
			m := New(WithServerAddresses(srv.listen(t)), WithSecurity(SecurityPlain),
				WithBasic(client.WithPipelining(srv.pipelining)), WithMaxRecipients(maxRcpts))
			t.Cleanup(func() { _ = m.Terminate() })

			var responses [][]string
			for range sends {
				res, err := m.Send(t.Context(), "alice@x.org", rcpts, "Subject: a\r\n\r\nbody\r\n")
				if !bye {
					require.NoError(t, err)
				}

				reported := []string{}
				for _, r := range res.Responses {
					assert.Equal(t, 250, r.Status.Code)
					reported = append(reported, r.Rcpts...)
					responses = append(responses, r.Rcpts)
				}
				for _, f := range res.Failures {
					reported = append(reported, f.Rcpts...)
					if !bye { // otherwise the recipients after it fail with the 421
						srv.checkFailure(t, f)
					}
				}
				slices.Sort(reported)
				assert.Equal(t, slices.Sorted(slices.Values(rcpts)), reported, "every recipient exactly once")
				if bye {
					break // the server closed
				}
			}

			srv.mu.Lock()
			defer srv.mu.Unlock()
			assert.Empty(t, srv.violations)
			assert.Equal(t, srv.delivered, responses, "a response per delivered message")
		})
	}
}
