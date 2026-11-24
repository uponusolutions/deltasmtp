package mailer

import (
	"context"
	"strings"
	"sync/atomic"
	"testing"

	"github.com/stretchr/testify/assert"
	"github.com/stretchr/testify/require"
	"github.com/uponusolutions/deltasmtp"
	"github.com/uponusolutions/deltasmtp/client"
	"github.com/uponusolutions/deltasmtp/server"
	"github.com/uponusolutions/deltasmtp/tester/testserver"
)

// utf8Server starts a server supporting SMTPUTF8, the flag reports whether
// the last MAIL had the parameter.
func utf8Server(t *testing.T) (string, *atomic.Bool) {
	t.Helper()

	var utf8 atomic.Bool
	be := testserver.NewBackend()
	be.Mail = func(_ context.Context, _ string, opts *deltasmtp.MailOptions) error {
		utf8.Store(opts.UTF8)
		return nil
	}
	s := testserver.Standard(serverTLS, server.WithBackend(be), server.WithEnableSMTPUTF8(true))
	l, err := s.Listen()
	require.NoError(t, err)
	go func() { _ = s.Serve(context.Background(), l) }()
	t.Cleanup(func() { _ = s.Close() })

	return l.Addr().String(), &utf8
}

func TestSendAutoUTF8(t *testing.T) {
	address, utf8 := utf8Server(t)

	tests := []struct {
		name string
		from string
		rcpt string
		opts *client.MailOptions
		utf8 bool
	}{
		{name: "ascii", from: "a@example.org", rcpt: "b@example.org", utf8: true},
		{name: "utf8 from", from: "jösé@example.org", rcpt: "b@example.org", utf8: true},
		{name: "utf8 rcpt", from: "a@example.org", rcpt: "jösé@example.org", utf8: true},
		{
			name: "disabled", from: "a@example.org", rcpt: "b@example.org",
			opts: &client.MailOptions{},
		},
	}

	c := New(withTestServer(address))
	t.Cleanup(func() { _ = c.Terminate() })

	for _, tt := range tests {
		t.Run(tt.name, func(t *testing.T) {
			_, failures, err := c.SendAdvanced(t.Context(), tt.from, tt.opts, []string{tt.rcpt}, nil,
				strings.NewReader("Subject: äöü\r\n\r\nbody\r\n"))
			require.NoError(t, err)
			require.Empty(t, failures)
			assert.Equal(t, tt.utf8, utf8.Load())
		})
	}
}

// TestSendUTF8Unsupported checks that a server without SMTPUTF8 rejects non-ASCII addresses.
func TestSendUTF8Unsupported(t *testing.T) {
	// addr[0] doesn't support SMTPUTF8.
	c := New(withTestServer(addr[0]))
	t.Cleanup(func() { _ = c.Terminate() })

	msg := "Subject: a\r\n\r\nbody\r\n"

	_, failures, err := c.Send(t.Context(), "alice@internal.com", []string{"bob@external.com"}, strings.NewReader(msg))
	require.NoError(t, err)
	require.Empty(t, failures)

	_, _, err = c.Send(t.Context(), "jösé@internal.com", []string{"bob@external.com"}, strings.NewReader(msg))
	require.ErrorContains(t, err, "550 5.6.7")

	_, failures, err = c.Send(t.Context(), "alice@internal.com",
		[]string{"bob@external.com", "jösé@external.com"}, strings.NewReader(msg))
	require.NoError(t, err)
	require.Len(t, failures, 1)
	assert.Equal(t, []string{"jösé@external.com"}, failures[0].Rcpts)
	require.ErrorContains(t, failures[0].Error, "5.6.7")
}

// TestVerifyUTF8Unsupported checks that a server without SMTPUTF8 rejects a non-ASCII VRFY.
func TestVerifyUTF8Unsupported(t *testing.T) {
	// addr[0] doesn't support SMTPUTF8.
	c := New(withTestServer(addr[0]))
	t.Cleanup(func() { _ = c.Terminate() })
	v, err := c.Verifier(VerifyVrfy, "")
	require.NoError(t, err)

	// 252 without SMTPUTF8.
	require.NoError(t, v.Verify(t.Context(), "bob@external.com"))
	require.ErrorContains(t, v.Verify(t.Context(), "jösé@external.com"), "550 5.6.8")
	assert.True(t, v.Active())
}
