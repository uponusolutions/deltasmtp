package smtpwriter_test

import (
	"bufio"
	"bytes"
	"errors"
	"io"
	"testing"

	"github.com/stretchr/testify/require"
	"github.com/uponusolutions/deltasmtp/internal/smtpwriter"
	"github.com/uponusolutions/deltasmtp/tester"
)

func TestBdatWriterReaderFrom(t *testing.T) {
	var buf bytes.Buffer
	d := smtpwriter.NewBdatWriterBuffered(bufio.NewWriter(&buf), func() error { return nil }, 0, make([]byte, 1048576*2))

	n, err := io.Copy(d, tester.NewBuffer([]byte("ab")))
	require.NoError(t, err)
	require.Equal(t, int64(2), n)
	require.NoError(t, d.Close())

	// it's buffered, so he always knows when the last chunk is send
	require.Equal(t, "BDAT 2 LAST\r\nab", buf.String())
}

func TestBdatWriterReaderFromExact(t *testing.T) {
	var buf bytes.Buffer
	d := smtpwriter.NewBdatWriterBuffered(bufio.NewWriter(&buf), func() error { return nil }, 0, make([]byte, 2))

	n, err := io.Copy(d, tester.NewBuffer([]byte("ab")))
	require.NoError(t, err)
	require.Equal(t, int64(2), n)
	require.NoError(t, d.Close())

	// it's buffered but size matched exactly, empty last expected
	require.Equal(t, "BDAT 2\r\nabBDAT 0 LAST\r\n", buf.String())
}

func TestBdatWriterBuffered(t *testing.T) {
	t.Run("LargeBuffer", func(t *testing.T) {
		var buf bytes.Buffer
		d := smtpwriter.NewBdatWriterBuffered(bufio.NewWriter(&buf), func() error { return nil }, 0, make([]byte, 1048576*2))

		writeChunks(t, d, "a", "b")
		require.NoError(t, d.Close())

		// it's buffered, so he always knows when the last chunk is send
		require.Equal(t, "BDAT 2 LAST\r\nab", buf.String())
	})

	t.Run("SmallBuffer", func(t *testing.T) {
		var buf bytes.Buffer
		d := smtpwriter.NewBdatWriterBuffered(bufio.NewWriter(&buf), func() error { return nil }, 0, make([]byte, 1))

		writeChunks(t, d, "ab", "cd")
		require.NoError(t, d.Close())

		// writes larger than the empty buffer are passed through as own chunks
		require.Equal(t, "BDAT 2\r\nabBDAT 2\r\ncdBDAT 0 LAST\r\n", buf.String())
	})

	t.Run("WithError", func(t *testing.T) {
		var buf bytes.Buffer

		// read is never called as buffer lead to a single bdat
		d := smtpwriter.NewBdatWriterBuffered(bufio.NewWriter(&buf), func() error { return errors.New("failed") }, 0, make([]byte, 1048576*2))
		writeChunks(t, d, "ab")
		require.NoError(t, d.Close())

		// passed through write, the response of the chunk is read and fails
		d = smtpwriter.NewBdatWriterBuffered(bufio.NewWriter(&buf), func() error { return errors.New("failed") }, 0, make([]byte, 1))
		n, err := d.Write([]byte("ab"))
		require.Equal(t, 2, n)
		require.ErrorContains(t, err, "failed")
	})

	t.Run("WithSize", func(t *testing.T) {
		var buf bytes.Buffer
		d := smtpwriter.NewBdatWriterBuffered(bufio.NewWriter(&buf), func() error { return nil }, 2, make([]byte, 1048576*2))

		writeChunks(t, d, "a", "b")
		require.NoError(t, d.Close())
		require.Equal(t, "BDAT 2 LAST\r\nab", buf.String())
	})

	t.Run("WithSizeErrorTooMuch", func(t *testing.T) {
		var buf bytes.Buffer
		d := smtpwriter.NewBdatWriterBuffered(bufio.NewWriter(&buf), func() error { return nil }, 1, make([]byte, 1048576*2))

		writeChunks(t, d, "a")
		_, err := d.Write([]byte("b"))
		require.NoError(t, err)
		require.ErrorContains(t, d.Close(), "got more bytes")
	})

	t.Run("WithSizeErrorTooLess", func(t *testing.T) {
		var buf bytes.Buffer
		d := smtpwriter.NewBdatWriterBuffered(bufio.NewWriter(&buf), func() error { return nil }, 3, make([]byte, 1048576*2))
		writeChunks(t, d, "a", "b")
		require.NoError(t, d.Close())
		require.Equal(t, "BDAT 3 LAST\r\nab\x00", buf.String())
	})
}

// An empty buffer must not loop forever, the unbuffered writer is used instead.
func TestBdatWriterBufferedEmptyBuffer(t *testing.T) {
	for _, buffer := range [][]byte{nil, {}} {
		var buf bytes.Buffer
		w := bufio.NewWriter(&buf)
		d := smtpwriter.NewBdatWriterBuffered(w, func() error { return nil }, 0, buffer)

		n, err := io.Copy(d, tester.NewBuffer([]byte("ab")))
		require.NoError(t, err)
		require.Equal(t, int64(2), n)
		require.NoError(t, d.Close())
		require.NoError(t, w.Flush())

		require.Equal(t, "BDAT 2\r\nabBDAT 0 LAST\r\n", buf.String())
	}
}

// TestBdatWriterBufferedSmallWritesAfterFlush checks that a write after a full
// buffer was sent is buffered again, not sent as its own small chunk.
func TestBdatWriterBufferedSmallWritesAfterFlush(t *testing.T) {
	var buf bytes.Buffer
	d := smtpwriter.NewBdatWriterBuffered(bufio.NewWriter(&buf), func() error { return nil }, 0, make([]byte, 2))

	writeChunks(t, d, "a", "b", "c", "d", "e")
	require.NoError(t, d.Close())

	require.Equal(t, "BDAT 2\r\nabBDAT 2\r\ncdBDAT 1 LAST\r\ne", buf.String())
}

// TestBdatWriterBufferedFlushError checks that Write returns the error of
// sending the full buffer, instead of carrying on with the next chunk.
func TestBdatWriterBufferedFlushError(t *testing.T) {
	errRejected := errors.New("chunk rejected")
	reads := 0
	read := func() error {
		reads++
		if reads == 1 {
			return errRejected
		}
		return nil
	}

	var buf bytes.Buffer
	d := smtpwriter.NewBdatWriterBuffered(bufio.NewWriter(&buf), read, 0, make([]byte, 2))

	writeChunks(t, d, "ab")

	n, err := d.Write([]byte("c"))
	require.ErrorIs(t, err, errRejected)
	require.Equal(t, 0, n)
}

// fillErrReader returns its data and err in the same Read, then io.EOF.
type fillErrReader struct {
	data []byte
	err  error
}

func (r *fillErrReader) Read(p []byte) (int, error) {
	n := copy(p, r.data)
	r.data = r.data[n:]
	err := r.err
	r.err = io.EOF
	return n, err
}

// TestBdatWriterReaderFromError checks that ReadFrom returns an error the reader
// returns together with data that fills the buffer.
func TestBdatWriterReaderFromError(t *testing.T) {
	errRead := errors.New("read failed")

	var buf bytes.Buffer
	d := smtpwriter.NewBdatWriterBuffered(bufio.NewWriter(&buf), func() error { return nil }, 0, make([]byte, 2))

	n, err := d.(io.ReaderFrom).ReadFrom(&fillErrReader{data: []byte("ab"), err: errRead})
	require.ErrorIs(t, err, errRead)
	require.Equal(t, int64(2), n)
}

// TestBdatWriterReaderFromEOFWithData checks that a reader returning io.EOF
// with the data filling the buffer gets the buffer sent as LAST by Close.
func TestBdatWriterReaderFromEOFWithData(t *testing.T) {
	var buf bytes.Buffer
	d := smtpwriter.NewBdatWriterBuffered(bufio.NewWriter(&buf), func() error { return nil }, 0, make([]byte, 2))

	n, err := d.(io.ReaderFrom).ReadFrom(&fillErrReader{data: []byte("ab"), err: io.EOF})
	require.NoError(t, err)
	require.Equal(t, int64(2), n)
	require.NoError(t, d.Close())

	require.Equal(t, "BDAT 2 LAST\r\nab", buf.String())
}

// TestBdatWriterBufferedClosed checks that a closed or discarded writer doesn't
// touch its buffer anymore, it may be reused.
func TestBdatWriterBufferedClosed(t *testing.T) {
	newWriter := func(buf *bytes.Buffer) *smtpwriter.BdatBuffered {
		d := &smtpwriter.BdatBuffered{}
		d.Reset(bufio.NewWriter(buf), func() error { return nil }, 0, make([]byte, 4))
		return d
	}
	requireClosed := func(t *testing.T, d *smtpwriter.BdatBuffered) {
		t.Helper()
		_, err := d.Write([]byte("x"))
		require.ErrorIs(t, err, smtpwriter.ErrClosed)
		_, err = d.ReadFrom(bytes.NewReader([]byte("x")))
		require.ErrorIs(t, err, smtpwriter.ErrClosed)
		require.ErrorIs(t, d.Close(), smtpwriter.ErrClosed)
	}

	t.Run("close", func(t *testing.T) {
		var buf bytes.Buffer
		d := newWriter(&buf)
		_, err := d.Write([]byte("ab"))
		require.NoError(t, err)
		require.NoError(t, d.Close())
		requireClosed(t, d)
		require.Equal(t, "BDAT 2 LAST\r\nab", buf.String())
	})

	t.Run("failed close", func(t *testing.T) {
		d := &smtpwriter.BdatBuffered{}
		d.Reset(bufio.NewWriterSize(errWriter{}, 16), func() error { return nil }, 0, make([]byte, 4))
		_, err := d.Write([]byte("ab"))
		require.NoError(t, err)
		require.Error(t, d.Close())
		requireClosed(t, d)
	})

	t.Run("discard", func(t *testing.T) {
		var buf bytes.Buffer
		d := newWriter(&buf)
		_, err := d.Write([]byte("ab"))
		require.NoError(t, err)
		d.Discard()
		requireClosed(t, d)
		require.Empty(t, buf.String())
	})
}

// errWriter fails every write.
type errWriter struct{}

func (errWriter) Write([]byte) (int, error) { return 0, errors.New("write failed") }
