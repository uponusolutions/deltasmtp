package smtpwriter_test

import (
	"bufio"
	"bytes"
	"errors"
	"io"
	"strconv"
	"testing"

	"github.com/stretchr/testify/require"
	"github.com/uponusolutions/deltasmtp/internal/smtpwriter"
	"github.com/uponusolutions/deltasmtp/tester"
)

func TestBdatWriterReaderFrom(t *testing.T) {
	var buf bytes.Buffer
	d := smtpwriter.NewBdatWriterBuffered(bufio.NewWriter(&buf), func() error { return nil }, 0, make([]byte, 1048576*2))

	in := []byte("ab")

	n, err := io.Copy(d, tester.NewBuffer(in))
	if n != int64(len(in)) || err != nil {
		t.Fatalf("Write: %d, %s", n, err)
	}
	require.NoError(t, d.Close())

	// it's buffered, so he always knows when the last chunk is send
	want := "BDAT 2 LAST\r\n" + string(in)
	if s := buf.String(); s != want {
		t.Fatalf("wrote %q", s)
	}
}

func TestBdatWriterReaderFromExact(t *testing.T) {
	var buf bytes.Buffer
	d := smtpwriter.NewBdatWriterBuffered(bufio.NewWriter(&buf), func() error { return nil }, 0, make([]byte, 2))

	in := []byte("ab")

	n, err := io.Copy(d, tester.NewBuffer(in))
	if n != int64(len(in)) || err != nil {
		t.Fatalf("Write: %d, %s", n, err)
	}
	require.NoError(t, d.Close())

	// it's buffered but size matched exactly, empty last expected
	want := "BDAT 2\r\n" + string(in) + "BDAT 0 LAST\r\n"
	if s := buf.String(); s != want {
		t.Fatalf("wrote %q", s)
	}
}

func TestBdatWriterBuffered(t *testing.T) {
	t.Run("LargeBuffer", func(t *testing.T) {
		var buf bytes.Buffer
		d := smtpwriter.NewBdatWriterBuffered(bufio.NewWriter(&buf), func() error { return nil }, 0, make([]byte, 1048576*2))

		input1 := []byte("a")
		n, err := d.Write(input1)
		if n != len(input1) || err != nil {
			t.Fatalf("Write: %d, %s", n, err)
		}

		input2 := []byte("b")
		n, err = d.Write(input2)
		if n != len(input2) || err != nil {
			t.Fatalf("Write: %d, %s", n, err)
		}
		require.NoError(t, d.Close())

		// it's buffered, so he always knows when the last chunk is send
		want := "BDAT " + strconv.Itoa(len(input1)+len(input2)) + " LAST\r\n" + string(input1) + string(input2)
		if s := buf.String(); s != want {
			t.Fatalf("wrote %q", s)
		}
	})

	t.Run("SmallBuffer", func(t *testing.T) {
		var buf bytes.Buffer
		d := smtpwriter.NewBdatWriterBuffered(bufio.NewWriter(&buf), func() error { return nil }, 0, make([]byte, 1))

		input1 := []byte("ab")
		n, err := d.Write(input1)
		if n != len(input1) || err != nil {
			t.Fatalf("Write: %d, %s", n, err)
		}

		input2 := []byte("cd")
		n, err = d.Write(input2)
		if n != len(input2) || err != nil {
			t.Fatalf("Write: %d, %s", n, err)
		}
		require.NoError(t, d.Close())

		// writes larger than the empty buffer are passed through as own chunks
		want := "BDAT 2\r\nabBDAT 2\r\ncdBDAT 0 LAST\r\n"
		if s := buf.String(); s != want {
			t.Fatalf("wrote %q", s)
		}
	})

	t.Run("WithError", func(t *testing.T) {
		var buf bytes.Buffer

		// read is never called as buffer lead to a single bdat
		d := smtpwriter.NewBdatWriterBuffered(bufio.NewWriter(&buf), func() error { return errors.New("failed") }, 0, make([]byte, 1048576*2))
		n, err := d.Write([]byte("ab"))
		require.Equal(t, 2, n)
		require.NoError(t, err)
		err = d.Close()
		require.NoError(t, err)

		// passed through write, the response of the chunk is read and fails
		d = smtpwriter.NewBdatWriterBuffered(bufio.NewWriter(&buf), func() error { return errors.New("failed") }, 0, make([]byte, 1))
		n, err = d.Write([]byte("ab"))
		require.Equal(t, 2, n)
		require.ErrorContains(t, err, "failed")
	})

	t.Run("WithSize", func(t *testing.T) {
		var buf bytes.Buffer
		d := smtpwriter.NewBdatWriterBuffered(bufio.NewWriter(&buf), func() error { return nil }, 2, make([]byte, 1048576*2))

		input1 := []byte("a")
		n, err := d.Write(input1)
		if n != len(input1) || err != nil {
			t.Fatalf("Write: %d, %s", n, err)
		}

		input2 := []byte("b")
		n, err = d.Write(input2)
		if n != len(input2) || err != nil {
			t.Fatalf("Write: %d, %s", n, err)
		}
		require.NoError(t, d.Close())

		want := "BDAT " + strconv.Itoa(len(input1)+len(input2)) + " LAST\r\n" + string(input1) + string(input2)
		if s := buf.String(); s != want {
			t.Fatalf("wrote %q", s)
		}
	})

	t.Run("WithSizeErrorTooMuch", func(t *testing.T) {
		var buf bytes.Buffer
		d := smtpwriter.NewBdatWriterBuffered(bufio.NewWriter(&buf), func() error { return nil }, 1, make([]byte, 1048576*2))

		input1 := []byte("a")
		n, err := d.Write(input1)
		if n != len(input1) || err != nil {
			t.Fatalf("Write: %d, %s", n, err)
		}

		input2 := []byte("b")
		_, err = d.Write(input2)
		require.NoError(t, err)
		require.ErrorContains(t, d.Close(), "got more bytes")
	})

	t.Run("WithSizeErrorTooLess", func(t *testing.T) {
		size := 3

		var buf bytes.Buffer
		d := smtpwriter.NewBdatWriterBuffered(bufio.NewWriter(&buf), func() error { return nil }, size, make([]byte, 1048576*2))

		input1 := []byte("a")
		n, err := d.Write(input1)

		require.NoError(t, err)
		require.Equal(t, len(input1), n)

		input2 := []byte("b")
		n, err = d.Write(input2)

		require.NoError(t, err)
		require.Equal(t, len(input2), n)

		require.NoError(t, d.Close())

		want := "BDAT " + strconv.Itoa(size) + " LAST\r\n" + string(input1) + string(input2) + "\x00"
		require.Equal(t, want, buf.String())
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

	for _, s := range []string{"a", "b", "c", "d", "e"} {
		n, err := d.Write([]byte(s))
		require.NoError(t, err)
		require.Equal(t, 1, n)
	}
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

	n, err := d.Write([]byte("ab"))
	require.NoError(t, err)
	require.Equal(t, 2, n)

	n, err = d.Write([]byte("c"))
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
