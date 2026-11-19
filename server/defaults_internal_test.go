package server

import (
	"testing"

	"github.com/stretchr/testify/require"
)

// The buffer sizes can't be observed from outside, so they are checked here.
func TestServerBufferSizeDefaults(t *testing.T) {
	s := New()
	require.Equal(t, 32<<10, s.readerSize)
	require.Equal(t, 4096, s.writerSize)

	s = New(WithReaderSize(1<<20), WithWriterSize(8<<10))
	require.Equal(t, 1<<20, s.readerSize)
	require.Equal(t, 8<<10, s.writerSize)
}
