package smtpreader_test

import (
	"bufio"
	"errors"
	"io"
	"net"
	"strings"
	"testing"
	"time"

	"github.com/stretchr/testify/require"
	"github.com/uponusolutions/deltasmtp"
	"github.com/uponusolutions/deltasmtp/internal/smtpreader"
)

func TestDotReader(t *testing.T) {
	t.Run("Decode", func(t *testing.T) {
		buf := bufio.NewReader(strings.NewReader("dotlines\r\n.foo\r\n..bar\n...baz\nquux\r\n\r\n.\r\nanot.her\n"))
		r := smtpreader.NewDot(buf, 0)
		b, err := io.ReadAll(r)
		require.NoError(t, err)
		require.Equal(t, []byte("dotlines\r\nfoo\r\n.bar\n...baz\nquux\r\n\r\n"), b)

		r = smtpreader.NewDot(buf, 0)
		b, err = io.ReadAll(r)
		require.ErrorIs(t, err, io.ErrUnexpectedEOF)
		require.Equal(t, []byte("anot.her\n"), b)
	})

	// A live SMTP peer waits for the reply without closing the write side.
	// Adapted from Jabberwocky238's testcase.
	// https://github.com/Jabberwocky238/go-smtp/blob/b0673510e58009b47a2c9b6e6ca5fc189c3c5ba4/data_test.go
	t.Run("EmptyLiveConnection", func(t *testing.T) {
		server, client := net.Pipe()
		defer func() {
			_ = server.Close()
			_ = client.Close()
		}()
		_ = server.SetReadDeadline(time.Now().Add(2 * time.Second))
		done := make(chan error, 1)
		go func() { _, err := io.WriteString(client, ".\r\n"); done <- err }()
		buf := bufio.NewReader(server)
		r := smtpreader.NewDot(buf, 0)
		got, err := io.ReadAll(r)

		require.NoError(t, err)
		require.Empty(t, got, "empty DATA")
		require.NoError(t, <-done)
	})

	// Adapted from Jabberwocky238's testcase.
	// https://github.com/Jabberwocky238/go-smtp/blob/b0673510e58009b47a2c9b6e6ca5fc189c3c5ba4/data_test.go
	t.Run("ZeroRead", func(t *testing.T) {
		buf := bufio.NewReader(strings.NewReader("..first\r\n.\r\nNEXT\r\n"))
		r := smtpreader.NewDot(buf, 0)
		n, err := r.Read(nil)
		require.NoError(t, err)
		require.Zero(t, n)
		got, err := io.ReadAll(r)
		require.NoError(t, err)
		require.Equal(t, ".first\r\n", string(got))

		got, err = io.ReadAll(buf)
		require.NoError(t, err)
		require.Equal(t, "NEXT\r\n", string(got))
	})

	t.Run("Limit", func(t *testing.T) {
		input := "dotlines\r\n.foo\r\n..bar\n...baz\nquux\r\n\r\n.\r\nanot.her\n"

		buf := bufio.NewReader(strings.NewReader(input))
		r := smtpreader.NewDot(buf, 35)
		b, err := io.ReadAll(r)
		require.NoError(t, err)
		require.Equal(t, []byte("dotlines\r\nfoo\r\n.bar\n...baz\nquux\r\n\r\n"), b)

		buf = bufio.NewReader(strings.NewReader(input))
		r = smtpreader.NewDot(buf, 34)
		b, err = io.ReadAll(r)
		require.ErrorIs(t, err, deltasmtp.ErrDataTooLarge)
		require.Equal(t, []byte("dotlines\r\nfoo\r\n.bar\n...baz\nquux\r\n\r"), b)
	})
}

func write(w io.Writer, d string) {
	go func() { _, _ = w.Write([]byte(d)) }()
}

// requireRead reads once into buf, requires want to be read and returns the
// error of the Read.
func requireRead(t *testing.T, r io.Reader, buf []byte, want string) error {
	t.Helper()
	n, err := r.Read(buf)
	require.Equal(t, want, string(buf[:n]))
	return err
}

func TestDotReaderBytes(t *testing.T) {
	t.Run("Case1", func(t *testing.T) {
		reader, writer := io.Pipe()
		buf := make([]byte, 255)
		br := bufio.NewReader(reader)
		r := smtpreader.NewDot(br, 0)

		// only t is read
		write(writer, "t\r\n.\r")
		require.NoError(t, requireRead(t, r, buf, "t"))

		// reader finishes because of full crlf.crlf
		write(writer, "\n")
		require.NoError(t, requireRead(t, r, buf, "\r\n"))
		require.ErrorIs(t, requireRead(t, r, buf, ""), io.EOF)

		// buffer must be empty
		require.Zero(t, br.Buffered())
	})

	t.Run("Case2", func(t *testing.T) {
		reader, writer := io.Pipe()
		buf := make([]byte, 1) // smallest buffer possible
		br := bufio.NewReader(reader)
		r := smtpreader.NewDot(br, 0)

		// only t is read
		write(writer, "t\r\n.\r")
		require.NoError(t, requireRead(t, r, buf, "t"))

		// reader can only return \r as buffer is too small
		write(writer, "\n")
		require.NoError(t, requireRead(t, r, buf, "\r"))

		// reader returns \n and eol
		write(writer, "\n")
		require.NoError(t, requireRead(t, r, buf, "\n"))
		require.ErrorIs(t, requireRead(t, r, buf, ""), io.EOF)

		// buffer must be empty
		require.Zero(t, br.Buffered())
	})

	t.Run("Case3", func(t *testing.T) {
		reader, writer := io.Pipe()
		buf := make([]byte, 255)
		br := bufio.NewReader(reader)
		r := smtpreader.NewDot(br, 0)

		write(writer, "testtest\r\n.")
		require.NoError(t, requireRead(t, r, buf, "testtest"))

		// reader returns ending
		write(writer, "\r\n")
		require.NoError(t, requireRead(t, r, buf, "\r\n"))
		require.ErrorIs(t, requireRead(t, r, buf, ""), io.EOF)

		// buffer must be empty
		require.Zero(t, br.Buffered())
	})

	// the writer is closed (with an error) before the end marker is complete
	errTest := errors.New("test")
	for _, tc := range []struct {
		name, in          string
		closeErr, wantErr error
	}{
		{"Case4", "testtest\r\n.", nil, io.ErrUnexpectedEOF},
		{"Case4RandomError", "testtest\r\n.", errTest, errTest},
		{"Case5", "testtest\r\n", nil, io.ErrUnexpectedEOF},
		{"Case5RandomError", "testtest\r\n", errTest, errTest},
	} {
		t.Run(tc.name, func(t *testing.T) {
			reader, writer := io.Pipe()
			buf := make([]byte, 255)
			br := bufio.NewReader(reader)
			r := smtpreader.NewDot(br, 0)

			write(writer, tc.in)
			require.NoError(t, requireRead(t, r, buf, "testtest"))

			_ = writer.CloseWithError(tc.closeErr)
			require.NoError(t, requireRead(t, r, buf, "\r\n"))
			require.ErrorIs(t, requireRead(t, r, buf, ""), tc.wantErr)

			// buffer must be empty
			require.Zero(t, br.Buffered())
		})
	}
}

// TestDotReaderNoBlockAfterEnd verifies that once the end marker has been
// consumed, a further Read returns io.EOF immediately and does not block
// waiting for more bytes on a still open connection. Without this a caller
// draining the reader would hang, wedging the server goroutine (denial of
// service).
func TestDotReaderNoBlockAfterEnd(t *testing.T) {
	pr, pw := io.Pipe()
	// Write the full message but keep the pipe open, as a live connection
	// waiting for the next command would be.
	go func() { _, _ = pw.Write([]byte("hi\r\n.\r\n")) }()

	r := smtpreader.NewDot(bufio.NewReader(pr), 0)

	// Consume the message up to the end marker.
	body, err := io.ReadAll(io.LimitReader(r, 4))
	require.NoError(t, err)
	require.Equal(t, []byte("hi\r\n"), body)

	done := make(chan error, 1)
	go func() {
		b := make([]byte, 8)
		_, e := r.Read(b)
		done <- e
	}()

	select {
	case e := <-done:
		require.Equal(t, io.EOF, e)
	case <-time.After(5 * time.Second):
		t.Fatal("Read blocked after end marker (denial of service)")
	}
}

// The server relies on the limit error being sticky to detect a breach the
// backend swallowed: every further Read must fail without consuming input.
func TestDotReaderLimitSticky(t *testing.T) {
	buf := bufio.NewReader(strings.NewReader("dotlines\r\n.foo\r\n..bar\n...baz\nquux\r\n\r\n.\r\nNOOP\r\n"))
	r := smtpreader.NewDot(buf, 34)

	_, err := io.ReadAll(r)
	require.ErrorIs(t, err, deltasmtp.ErrDataTooLarge)

	for range 3 {
		n, err := r.Read(make([]byte, 10))
		require.Zero(t, n)
		require.ErrorIs(t, err, deltasmtp.ErrDataTooLarge)
	}

	// the terminator and the following command are still pending on the input
	rest, err := io.ReadAll(buf)
	require.NoError(t, err)
	require.True(t, strings.HasSuffix(string(rest), "\n.\r\nNOOP\r\n"), "got %q", rest)
}
