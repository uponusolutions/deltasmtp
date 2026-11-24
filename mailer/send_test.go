package mailer

import (
	"context"
	"errors"
	"io"
	"strings"
	"sync/atomic"
	"testing"

	"github.com/stretchr/testify/assert"
	"github.com/stretchr/testify/require"
	"github.com/uponusolutions/deltasmtp"
	"github.com/uponusolutions/deltasmtp/server"
	"github.com/uponusolutions/deltasmtp/tester/testserver"
)

// closeCounter is a reader without Len that counts its Close calls.
type closeCounter struct {
	io.Reader
	closes *atomic.Int32
}

func (c closeCounter) Close() error {
	c.closes.Add(1)
	return nil
}

// TestSendMessageTypes sends the same mail with every message type of Send.
// The string and []byte are announced with SIZE, a reader without Len isn't.
// Readers implementing io.Closer are closed after the transaction.
func TestSendMessageTypes(t *testing.T) {
	const msg = "Subject: a\r\n\r\nbody\r\n"

	from := "alice@example.org"
	rcpts := []string{"bob@example.org", "carol@example.org"}

	var calls, closes atomic.Int32

	tests := []struct {
		name   string
		send   func(ctx context.Context, opts ...Option) (Report, error)
		size   int64
		calls  int32
		closes int32
	}{
		{
			name: "string",
			send: func(ctx context.Context, opts ...Option) (Report, error) {
				return Send(ctx, from, rcpts, msg, opts...)
			},
			size: int64(len(msg)),
		},
		{
			name: "bytes",
			send: func(ctx context.Context, opts ...Option) (Report, error) {
				return Send(ctx, from, rcpts, []byte(msg), opts...)
			},
			size: int64(len(msg)),
		},
		{
			name: "func",
			send: func(ctx context.Context, opts ...Option) (Report, error) {
				return Send(ctx, from, rcpts, func() io.Reader {
					calls.Add(1)
					// io.MultiReader hides Len, the size is unknown.
					return io.MultiReader(strings.NewReader(msg))
				}, opts...)
			},
			calls: 1,
		},
		{
			name: "func closer",
			send: func(ctx context.Context, opts ...Option) (Report, error) {
				return Send(ctx, from, rcpts, func() io.Reader {
					calls.Add(1)
					return closeCounter{Reader: io.MultiReader(strings.NewReader(msg)), closes: &closes}
				}, opts...)
			},
			calls:  1,
			closes: 1,
		},
		{
			name: "func open",
			send: func(ctx context.Context, opts ...Option) (Report, error) {
				return Send(ctx, from, rcpts, func() (io.ReadCloser, error) {
					calls.Add(1)
					return closeCounter{Reader: io.MultiReader(strings.NewReader(msg)), closes: &closes}, nil
				}, opts...)
			},
			calls:  1,
			closes: 1,
		},
	}

	for _, chunking := range []bool{false, true} {
		for _, tc := range tests {
			name := tc.name + "/data"
			if chunking {
				name = tc.name + "/bdat"
			}

			t.Run(name, func(t *testing.T) {
				var size atomic.Int64
				be := testserver.NewBackend()
				be.Mail = func(_ context.Context, _ string, opts *deltasmtp.MailOptions) error {
					size.Store(opts.Size)
					return nil
				}
				srv := testserver.Standard(serverTLS, server.WithBackend(be), server.WithEnableCHUNKING(chunking))
				l, err := srv.Listen()
				require.NoError(t, err)
				go func() { _ = srv.Serve(context.Background(), l) }()
				t.Cleanup(func() { _ = srv.Close() })

				calls.Store(0)
				closes.Store(0)

				res, err := tc.send(t.Context(), withTestServer(l.Addr().String()))
				require.NoError(t, err)
				require.Empty(t, res.Failures)
				require.Len(t, res.Responses, 1)
				assert.Equal(t, rcpts, res.Responses[0].Rcpts)
				assert.Equal(t, 250, res.Responses[0].Status.Code)

				assert.Equal(t, tc.size, size.Load())
				assert.Equal(t, tc.calls, calls.Load())
				assert.Equal(t, tc.closes, closes.Load())

				m, found := be.Load(from, rcpts)
				require.True(t, found)
				assert.Equal(t, msg, string(m.Data))
			})
		}
	}
}

// TestSendOpenError checks that an error opening the message fails the
// recipients of the server instead of the whole send, and nothing is sent.
func TestSendOpenError(t *testing.T) {
	errOpen := errors.New("no such file")
	from := "open-error@example.org"
	rcpts := []string{"bob@example.org", "carol@example.org"}

	res, err := Send(t.Context(), from, rcpts, func() (io.ReadCloser, error) {
		return nil, errOpen
	}, withTestServer(addr[0]))
	require.NoError(t, err)

	assert.Empty(t, res.Responses)
	require.Len(t, res.Failures, 1)
	assert.Equal(t, rcpts, res.Failures[0].Rcpts)
	require.ErrorIs(t, res.Failures[0].Error, errOpen)
	assert.ErrorContains(t, res.Failures[0].Error, "mailer: open message")

	_, found := testserver.GetBackend(s[0]).Load(from, rcpts)
	assert.False(t, found, "nothing must be sent")
}
