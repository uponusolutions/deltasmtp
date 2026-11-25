package server_test

import (
	"bufio"
	"context"
	"io"
	"net"
	"strings"
	"testing"
	"time"

	"github.com/stretchr/testify/require"
	"github.com/uponusolutions/deltasmtp/server"
)

// connBackend passes every connection to conns.
type connBackend struct {
	*backend
	conns chan *server.Conn
}

func (b connBackend) NewSession(ctx context.Context, c *server.Conn) (context.Context, server.Session, error) {
	b.conns <- c
	return b.backend.NewSession(ctx, c)
}

// The buffers of a closed connection are reused by the next one. Nothing of the
// old connection may remain: neither unread input nor an exceeded line length.
func TestServerBuffersReused(t *testing.T) {
	const rounds = 20
	be := connBackend{backend: new(backend), conns: make(chan *server.Conn, rounds)}
	_, s, c, _ := testServer(t, nil, server.WithBackend(be), server.WithMaxLineLength(100))
	_ = c.Close()
	<-be.conns

	addr := c.RemoteAddr().String()
	for range rounds {
		c, err := net.Dial("tcp", addr)
		require.NoError(t, err)
		require.NoError(t, c.SetDeadline(time.Now().Add(5*time.Second)))
		scanner := bufio.NewScanner(c)

		require.Equal(t, "220 localhost ESMTP Service Ready", readReply(t, c, scanner))
		expect(t, c, scanner, "NOOP", "250 ")

		// The too long line closes the connection, the NOOP after it stays unread.
		_, _ = io.WriteString(c, strings.Repeat("A", 200)+"\r\nNOOP\r\n")
		requirePrefix(t, readReply(t, c, scanner), "500 ")
		require.False(t, scanner.Scan(), "connection must be closed")
		_ = c.Close()
	}

	// Shutdown waits until every connection has released its buffers.
	require.NoError(t, s.Shutdown(context.Background()))

	// Closing a connection again after it was released doesn't touch its buffers.
	for range rounds {
		require.NotPanics(t, func() { (<-be.conns).Close(nil) })
	}
}
