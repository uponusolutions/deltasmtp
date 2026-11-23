package mailer

import (
	"bytes"
	"strings"
	"testing"

	"github.com/stretchr/testify/assert"
	"github.com/stretchr/testify/require"
	"github.com/uponusolutions/deltasmtp/client"
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

var verifyModes = []struct {
	name     string
	mode     VerifyMode
	commands []string
}{
	{name: "rcpt", mode: VerifyRcpt, commands: []string{"MAIL", "RCPT", "RCPT", "RCPT", "RSET"}},
	{name: "vrfy", mode: VerifyVrfy, commands: []string{"VRFY", "VRFY", "VRFY"}},
}

// TestMailer_Verify checks that rejected recipients are failures and that the
// connection stays usable, a transaction left open would fail the MAIL of Send with 503.
func TestMailer_Verify(t *testing.T) {
	for _, mc := range verifyModes {
		for _, pc := range pipeliningCases {
			t.Run(mc.name+" "+pc.name, func(t *testing.T) {
				srv, opts := newVerifyServer(t, pc.pipelining)
				m := New(opts...)
				t.Cleanup(func() { _ = m.Terminate() })

				failures, err := m.Verify(t.Context(), mc.mode, "alice@internal.com",
					[]string{"bob@external.com", "notfound@external.com", "carol@external.com"})
				require.NoError(t, err)
				require.Len(t, failures, 1)
				assert.Equal(t, []string{"notfound@external.com"}, failures[0].Rcpts)
				require.ErrorContains(t, failures[0].Error, "550")
				assert.Equal(t, mc.commands, verbs(srv))

				_, failures, err = m.Send(t.Context(), "alice@internal.com",
					[]string{"bob@external.com"}, bytes.NewBufferString("Hello World!\r\n"))
				require.NoError(t, err)
				require.Empty(t, failures)
				assert.Equal(t, 1, connections(srv))

				_, err = m.Verify(t.Context(), mc.mode, "alice@internal.com", nil)
				require.ErrorContains(t, err, "no recipients")
			})
		}
	}
}

// TestMailer_VerifyClosingServer checks that 421 closes the connection and the
// next Verify connects again.
func TestMailer_VerifyClosingServer(t *testing.T) {
	for _, mc := range verifyModes {
		for _, pc := range pipeliningCases {
			t.Run(mc.name+" "+pc.name, func(t *testing.T) {
				srv, opts := newVerifyServer(t, pc.pipelining)
				m := New(opts...)
				t.Cleanup(func() { _ = m.Terminate() })

				_, err := m.Verify(t.Context(), mc.mode, "alice@internal.com",
					[]string{"bob@external.com", "closing@external.com"})
				require.ErrorContains(t, err, "421")
				assert.False(t, m.Connected())

				failures, err := m.Verify(t.Context(), mc.mode, "alice@internal.com", []string{"bob@external.com"})
				require.NoError(t, err)
				require.Empty(t, failures)
				assert.Equal(t, 2, connections(srv))
			})
		}
	}
}

// TestMailer_VerifyRejectedSender checks that a rejected MAIL is returned as
// error and keeps the connection.
func TestMailer_VerifyRejectedSender(t *testing.T) {
	for _, pc := range pipeliningCases {
		t.Run(pc.name, func(t *testing.T) {
			srv, opts := newVerifyServer(t, pc.pipelining)
			srv.Handlers["MAIL"] = func(fs *tester.FakeSession, _ string) bool {
				fs.Reply("550 5.7.1 sender rejected")
				return true
			}
			m := New(opts...)
			t.Cleanup(func() { _ = m.Terminate() })

			_, err := m.Verify(t.Context(), VerifyRcpt, "alice@internal.com", []string{"bob@external.com"})
			require.ErrorContains(t, err, "550")
			assert.True(t, m.Connected())
		})
	}
}

// TestVerify checks the shortcut: accepted and rejected recipients, a lost
// connection fails the unchecked recipients and the connection is ended.
func TestVerify(t *testing.T) {
	rcpts := []string{"bob@external.com", "notfound@external.com", "closing@external.com", "carol@external.com"}

	for _, mc := range verifyModes {
		for _, pc := range pipeliningCases {
			t.Run(mc.name+" "+pc.name, func(t *testing.T) {
				srv, opts := newVerifyServer(t, pc.pipelining)

				res, err := Verify(t.Context(), mc.mode, "alice@internal.com", rcpts, opts...)
				require.NoError(t, err)
				assert.Empty(t, res.Accepted)
				require.Len(t, res.Failures, 2)
				assert.Equal(t, []string{"notfound@external.com"}, res.Failures[0].Rcpts)
				require.ErrorContains(t, res.Failures[0].Error, "550")
				assert.Equal(t, []string{"bob@external.com", "closing@external.com", "carol@external.com"}, res.Failures[1].Rcpts)
				require.ErrorContains(t, res.Failures[1].Error, "421")

				res, err = Verify(t.Context(), mc.mode, "alice@internal.com", rcpts[:2], opts...)
				require.NoError(t, err)
				assert.Equal(t, []string{"bob@external.com"}, res.Accepted)
				require.Len(t, res.Failures, 1)
				assert.Equal(t, "QUIT", srv.Commands()[len(srv.Commands())-1])
			})
		}
	}
}

// TestMailer_Noop checks Noop on an open and a closed connection.
func TestMailer_Noop(t *testing.T) {
	for _, pc := range pipeliningCases {
		t.Run(pc.name, func(t *testing.T) {
			_, opts := newVerifyServer(t, pc.pipelining)
			m := New(opts...)
			t.Cleanup(func() { _ = m.Terminate() })

			require.ErrorIs(t, m.Noop(), client.ErrNotConnected)
			require.NoError(t, m.Connect(t.Context()))
			require.NoError(t, m.Noop())
		})
	}
}
