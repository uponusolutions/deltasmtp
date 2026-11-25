package smtpwriter_test

import (
	"bufio"
	"bytes"
	"errors"
	"testing"

	"github.com/stretchr/testify/require"
	"github.com/uponusolutions/deltasmtp/internal/smtpwriter"
)

func TestBdatWriterWithoutSize(t *testing.T) {
	t.Run("TwoWrites", func(t *testing.T) {
		var buf bytes.Buffer
		d := smtpwriter.NewBdat(bufio.NewWriter(&buf), func() error { return nil }, 0)
		writeChunks(t, d, "a", "b")
		require.NoError(t, d.Close())
		require.Equal(t, "BDAT 1\r\naBDAT 1\r\nbBDAT 0 LAST\r\n", buf.String())
	})

	t.Run("WithError", func(t *testing.T) {
		var buf bytes.Buffer
		d := smtpwriter.NewBdat(bufio.NewWriter(&buf), func() error { return errors.New("failed") }, 0)
		n, err := d.Write([]byte("ab"))
		require.Equal(t, 2, n)
		require.ErrorContains(t, err, "failed")
	})
}

func TestBdatWriterError(t *testing.T) {
	t.Run("ErrorTooMuch", func(t *testing.T) {
		var buf bytes.Buffer
		d := smtpwriter.NewBdat(bufio.NewWriter(&buf), func() error { return nil }, 1)
		writeChunks(t, d, "a")
		_, err := d.Write([]byte("b"))
		require.ErrorContains(t, err, "got more bytes")
	})

	// Missing bytes are filled with \x00
	t.Run("ErrorTooLess", func(t *testing.T) {
		var buf bytes.Buffer
		d := smtpwriter.NewBdat(bufio.NewWriter(&buf), func() error { return nil }, 3)
		writeChunks(t, d, "a", "b")
		require.NoError(t, d.Close())
		require.Equal(t, "BDAT 3 LAST\r\nab\x00", buf.String())
	})
}

func TestBdatWriterWithSize(t *testing.T) {
	t.Run("TwoWrites", func(t *testing.T) {
		var buf bytes.Buffer
		d := smtpwriter.NewBdat(bufio.NewWriter(&buf), func() error { return nil }, 2)
		writeChunks(t, d, "a", "b")
		require.NoError(t, d.Close())
		require.Equal(t, "BDAT 2 LAST\r\nab", buf.String())
	})

	t.Run("ManyWrites", func(t *testing.T) {
		var buf bytes.Buffer
		d := smtpwriter.NewBdat(bufio.NewWriter(&buf), func() error { return nil }, 7)
		writeChunks(t, d, "ab", "cd", "ef", "g")
		require.NoError(t, d.Close())
		require.Equal(t, "BDAT 7 LAST\r\nabcdefg", buf.String())
	})
}
