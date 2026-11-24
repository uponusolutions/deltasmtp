package mailer

import (
	"testing"

	"github.com/stretchr/testify/assert"
	"github.com/stretchr/testify/require"
	"github.com/uponusolutions/deltasmtp/client"
	"github.com/uponusolutions/deltasmtp/resolve"
)

// refusedRcpts contains an address the client refuses between valid ones and a rejected one
// after it, with pipelining the responses must still be matched to the right recipients.
var refusedRcpts = []string{"bob@external.com", "bad\r\n@external.com", "notfound@external.com", "carol@external.com"}

// requireRefusedFailures checks the failures of refusedRcpts.
func requireRefusedFailures(t *testing.T, failures []resolve.Failure) {
	t.Helper()

	require.Len(t, failures, 2)
	assert.Equal(t, []string{"bad\r\n@external.com"}, failures[0].Rcpts)
	require.ErrorIs(t, failures[0].Error, client.ErrRefused)
	assert.Equal(t, []string{"notfound@external.com"}, failures[1].Rcpts)
	require.ErrorContains(t, failures[1].Error, "550")
}

// TestMailer_RefusedRcpt checks that a recipient refused by the client is a failure
// and keeps the connection.
func TestMailer_RefusedRcpt(t *testing.T) {
	for _, pc := range pipeliningCases {
		t.Run(pc.name, func(t *testing.T) {
			srv, opts := newVerifyServer(t, pc.pipelining)
			m := New(opts...)
			t.Cleanup(func() { _ = m.Terminate() })

			res, err := m.Send(t.Context(), "alice@internal.com", refusedRcpts,
				"Hello World!\r\n")
			status, failures := unpack(res)
			require.NoError(t, err)
			require.NotNil(t, status)
			requireRefusedFailures(t, failures)

			// every recipient refused
			res, err = m.Send(t.Context(), "alice@internal.com", refusedRcpts[1:2],
				"Hello World!\r\n")
			status, failures = unpack(res)
			require.NoError(t, err)
			assert.Nil(t, status)
			require.Len(t, failures, 1)

			assert.True(t, m.Connected())
			assert.Equal(t, 1, connections(srv))
		})
	}
}

// TestMailer_RefusedMail checks that a MAIL FROM refused by the client is returned
// as error and keeps the connection.
func TestMailer_RefusedMail(t *testing.T) {
	for _, pc := range pipeliningCases {
		t.Run(pc.name, func(t *testing.T) {
			srv, opts := newVerifyServer(t, pc.pipelining)
			m := New(opts...)
			t.Cleanup(func() { _ = m.Terminate() })

			_, err := m.SendAdvanced(t.Context(), "alice@internal.com", client.MailOptions{RequireTLS: true},
				[]string{"bob@external.com"}, nil, "Hello World!\r\n")
			require.ErrorIs(t, err, client.ErrRefused)

			res, err := m.Send(t.Context(), "alice@internal.com", []string{"bob@external.com"},
				"Hello World!\r\n")
			_, failures := unpack(res)
			require.NoError(t, err)
			require.Empty(t, failures)
			assert.Equal(t, 1, connections(srv))
		})
	}
}
