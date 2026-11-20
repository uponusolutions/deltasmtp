package server

import (
	"testing"
	"time"

	"github.com/stretchr/testify/require"
)

// The buffer sizes and timeouts can't be observed from outside, so they are checked here.
func TestServerDefaults(t *testing.T) {
	s := New()
	require.Equal(t, 32<<10, s.readerSize)
	require.Equal(t, 4096, s.writerSize)

	require.Equal(t, 5*time.Minute, s.commandTimeout)
	require.Equal(t, 10*time.Minute, s.dataTimeout)
	require.Equal(t, 30*time.Second, s.tlsHandshakeTimeout)

	s = New(WithReaderSize(1<<20), WithWriterSize(8<<10))
	require.Equal(t, 1<<20, s.readerSize)
	require.Equal(t, 8<<10, s.writerSize)
}
