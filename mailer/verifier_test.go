package mailer

import (
	"fmt"
	"strings"
	"sync/atomic"
	"testing"

	"github.com/stretchr/testify/assert"
	"github.com/stretchr/testify/require"
	"github.com/uponusolutions/deltasmtp/client"
	"github.com/uponusolutions/deltasmtp/server"
	"github.com/uponusolutions/deltasmtp/tester"
)

// newVerifyServer returns a strict server that answers VRFY like RCPT, but 252 for carol,
// and closes the connection with 421 on recipients starting with "closing".
func newVerifyServer(t *testing.T, pipelining bool) (*tester.FakeServer, []Option) {
	t.Helper()

	srv, addr := newStrictServer(t, pipelining)
	rcpt := srv.Handlers["RCPT"]
	srv.Handlers["RCPT"] = func(fs *tester.FakeSession, line string) bool {
		if strings.Contains(line, "<closing") {
			fs.Reply("421 4.3.2 shutting down")
			return false
		}
		return rcpt(fs, line)
	}
	srv.Handlers["VRFY"] = func(fs *tester.FakeSession, line string) bool {
		switch {
		case strings.Contains(line, "closing"):
			fs.Reply("421 4.3.2 shutting down")
			return false
		case strings.Contains(line, "notfound"):
			fs.Reply("550 5.1.1 unknown")
		case strings.Contains(line, "carol"):
			fs.Reply("252 2.1.5 will accept")
		default:
			fs.Reply("250 2.1.5 Ok")
		}
		return true
	}

	return srv, []Option{
		WithServerAddresses(addr),
		WithSecurity(SecurityPlain),
		WithBasic(client.WithPipelining(pipelining)),
	}
}

// verbs returns the verbs of the commands received by srv, without EHLO.
func verbs(srv *tester.FakeServer) []string {
	out := []string{}
	for _, c := range srv.Commands() {
		verb, _, _ := strings.Cut(c, " ")
		if verb != "EHLO" {
			out = append(out, verb)
		}
	}

	return out
}

// TestVerifier checks recipients one by one: rejections and refusals keep the
// Verifier, End ends the transaction by RSET and the connection is reused.
func TestVerifier(t *testing.T) {
	for _, mc := range []struct {
		name     string
		mode     VerifyMode
		commands []string
	}{
		{name: "rcpt", mode: VerifyRcpt, commands: []string{
			"MAIL", "RCPT", "RCPT", "RCPT", "RSET", "MAIL", "RCPT", "RSET", "MAIL", "RCPT", "DATA",
		}},
		{name: "vrfy", mode: VerifyVrfy, commands: []string{"VRFY", "VRFY", "VRFY", "VRFY", "MAIL", "RCPT", "DATA"}},
	} {
		for _, pc := range pipeliningCases {
			t.Run(mc.name+" "+pc.name, func(t *testing.T) {
				srv, opts := newVerifyServer(t, pc.pipelining)
				m := New(opts...)
				t.Cleanup(func() { _ = m.Terminate() })
				ctx := t.Context()

				v, err := m.Verifier(mc.mode, "alice@internal.com")
				require.NoError(t, err)
				require.NoError(t, v.Verify(ctx, "bob@external.com"))
				require.ErrorContains(t, v.Verify(ctx, "notfound@external.com"), "550")
				require.ErrorIs(t, v.Verify(ctx, "bad\r\n@external.com"), client.ErrRefused)
				require.NoError(t, v.Verify(ctx, "carol@external.com"))
				assert.True(t, v.Active())

				require.NoError(t, v.End())
				assert.False(t, v.Active())
				require.ErrorIs(t, v.Verify(ctx, "bob@external.com"), ErrVerifierEnded)
				require.NoError(t, v.End())

				// a transaction left open would fail the nested MAIL with 503
				v, err = m.Verifier(mc.mode, "dave@internal.com")
				require.NoError(t, err)
				require.NoError(t, v.Verify(ctx, "bob@external.com"))
				require.NoError(t, v.End())

				// an unused Verifier sends nothing
				v, err = m.Verifier(mc.mode, "dave@internal.com")
				require.NoError(t, err)
				require.NoError(t, v.End())

				res, err := m.Send(ctx, "alice@internal.com",
					[]string{"bob@external.com"}, "Hello World!\r\n")
				_, failures := unpack(res)
				require.NoError(t, err)
				require.Empty(t, failures)

				assert.Equal(t, mc.commands, verbs(srv))
				assert.Equal(t, 1, connections(srv))
			})
		}
	}
}

// TestVerifier_HoldsMailer checks that the Mailer can't connect, send or create another
// Verifier while a Verifier is active.
func TestVerifier_HoldsMailer(t *testing.T) {
	_, opts := newVerifyServer(t, true)
	m := New(opts...)
	t.Cleanup(func() { _ = m.Terminate() })

	v, err := m.Verifier(VerifyRcpt, "alice@internal.com")
	require.NoError(t, err)
	require.NoError(t, v.Verify(t.Context(), "bob@external.com"))

	_, err = m.Send(t.Context(), "alice@internal.com", []string{"bob@external.com"}, "Hi\r\n")
	require.ErrorIs(t, err, ErrVerifying)
	_, err = m.Verifier(VerifyRcpt, "alice@internal.com")
	require.ErrorIs(t, err, ErrVerifying)
	// a new connection would lose the transaction
	require.ErrorIs(t, m.Connect(t.Context()), ErrVerifying)

	require.NoError(t, v.End())
	require.NoError(t, m.Connect(t.Context()))

	_, err = m.Send(t.Context(), "alice@internal.com", []string{"bob@external.com"}, "Hi\r\n")
	require.NoError(t, err)
}

// TestVerifier_ClosingServer checks that 421 closes the connection and ends the
// Verifier, the Mailer connects again.
func TestVerifier_ClosingServer(t *testing.T) {
	for _, mode := range []VerifyMode{VerifyRcpt, VerifyVrfy} {
		for _, pc := range pipeliningCases {
			srv, opts := newVerifyServer(t, pc.pipelining)
			m := New(opts...)
			t.Cleanup(func() { _ = m.Terminate() })

			v, err := m.Verifier(mode, "alice@internal.com")
			require.NoError(t, err)
			require.ErrorContains(t, v.Verify(t.Context(), "closing@external.com"), "421")
			assert.False(t, v.Active())
			assert.False(t, m.Connected())
			require.ErrorIs(t, v.Verify(t.Context(), "bob@external.com"), ErrVerifierEnded)
			require.NoError(t, v.End())

			v, err = m.Verifier(mode, "alice@internal.com")
			require.NoError(t, err)
			require.NoError(t, v.Verify(t.Context(), "bob@external.com"))
			require.NoError(t, v.End())
			assert.Equal(t, 2, connections(srv))
		}
	}
}

// TestVerifier_RejectedSender checks that a rejected or refused MAIL ends the Verifier
// and leaves the Mailer usable and connected.
func TestVerifier_RejectedSender(t *testing.T) {
	for _, pc := range pipeliningCases {
		t.Run(pc.name, func(t *testing.T) {
			srv, opts := newVerifyServer(t, pc.pipelining)
			mail := srv.Handlers["MAIL"]
			srv.Handlers["MAIL"] = func(fs *tester.FakeSession, line string) bool {
				if strings.Contains(line, "<blocked") {
					fs.Reply("550 5.7.1 sender rejected")
					return true
				}
				return mail(fs, line)
			}
			m := New(opts...)
			t.Cleanup(func() { _ = m.Terminate() })

			v, err := m.Verifier(VerifyRcpt, "blocked@internal.com")
			require.NoError(t, err)
			require.ErrorContains(t, v.Verify(t.Context(), "bob@external.com"), "550 5.7.1")
			assert.False(t, v.Active())
			require.NoError(t, v.End())

			v, err = m.Verifier(VerifyRcpt, "bad\r\n@internal.com")
			require.NoError(t, err)
			require.ErrorIs(t, v.Verify(t.Context(), "bob@external.com"), client.ErrRefused)
			assert.False(t, v.Active())

			res, err := m.Send(t.Context(), "alice@internal.com", []string{"bob@external.com"},
				"Hello World!\r\n")
			_, failures := unpack(res)
			require.NoError(t, err)
			require.Empty(t, failures)
			assert.Equal(t, 1, connections(srv))
		})
	}
}

// TestVerify checks the shortcut: accepted and rejected recipients, a lost
// connection fails the unchecked recipients and the connection is ended.
func TestVerify(t *testing.T) {
	rcpts := []string{"bob@external.com", "notfound@external.com", "closing@external.com", "carol@external.com"}

	for _, mode := range []VerifyMode{VerifyRcpt, VerifyVrfy} {
		for _, pc := range pipeliningCases {
			srv, opts := newVerifyServer(t, pc.pipelining)

			res, err := Verify(t.Context(), mode, "alice@internal.com", rcpts, opts...)
			require.NoError(t, err)
			assert.Equal(t, []string{"bob@external.com"}, res.Accepted)
			require.Len(t, res.Failures, 2)
			assert.Equal(t, []string{"notfound@external.com"}, res.Failures[0].Rcpts)
			require.ErrorContains(t, res.Failures[0].Error, "550")
			assert.Equal(t, []string{"closing@external.com", "carol@external.com"}, res.Failures[1].Rcpts)
			require.ErrorContains(t, res.Failures[1].Error, "421")

			res, err = Verify(t.Context(), mode, "alice@internal.com", rcpts[:2], opts...)
			require.NoError(t, err)
			assert.Equal(t, []string{"bob@external.com"}, res.Accepted)
			require.Len(t, res.Failures, 1)
			assert.Equal(t, "QUIT", srv.Commands()[len(srv.Commands())-1])
		}
	}
}

// TestVerifier_MaxRecipients checks that a transaction gets at most as many accepted
// recipients as the server allows, rejected ones don't count: advertised by RCPTMAX,
// or learned from a rejection for too many recipients (Postfix) and checked again.
func TestVerifier_MaxRecipients(t *testing.T) {
	rcpts := []string{"a@x.org", "notfound1@x.org", "b@x.org", "c@x.org", "notfound2@x.org", "d@x.org", "e@x.org"}
	accepted := []string{"a@x.org", "b@x.org", "c@x.org", "d@x.org", "e@x.org"}

	for _, postfix := range []bool{false, true} {
		for _, pipelining := range []bool{false, true} {
			t.Run(fmt.Sprintf("postfix=%v/pipelining=%v", postfix, pipelining), func(t *testing.T) {
				var mails, sent atomic.Int32
				be := postfixBackend(&mails, &sent)
				opts := []server.Option{server.WithMaxRecipients(0)}
				if !postfix {
					be.Rcpt = backend.Rcpt
					opts = []server.Option{server.WithMaxRecipients(2)}
				}
				addr := startServer(t, be, opts...)

				res, err := Verify(t.Context(), VerifyRcpt, "alice@internal.com", rcpts,
					withTestServer(addr), WithMaxRecipients(0), WithBasic(client.WithPipelining(pipelining)))
				require.NoError(t, err)
				assert.Equal(t, accepted, res.Accepted)
				require.Len(t, res.Failures, 2)
				for _, f := range res.Failures {
					assert.ErrorContains(t, f.Error, "550")
				}
				assert.EqualValues(t, 3, mails.Load())
				if postfix {
					// c is rejected once, then the learned limit isn't exceeded.
					assert.EqualValues(t, len(rcpts)+1, sent.Load())
				}
			})
		}
	}
}
