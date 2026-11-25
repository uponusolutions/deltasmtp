// Copyright 2010 The Go Authors. All rights reserved.
// Use of this source code is governed by a BSD-style
// license that can be found in the LICENSE file.

package smtpwriter_test

import (
	"bufio"
	"bytes"
	"io"
	"testing"

	"github.com/stretchr/testify/require"
	"github.com/uponusolutions/deltasmtp/internal/smtpwriter"
)

// writeChunks writes each chunk to w and requires it to be fully written.
func writeChunks(t *testing.T, w io.Writer, chunks ...string) {
	t.Helper()
	for _, c := range chunks {
		n, err := w.Write([]byte(c))
		require.NoError(t, err)
		require.Equal(t, len(c), n)
	}
}

func TestDotWriter(t *testing.T) {
	const encoded = "abc\r\n..def\r\n...ghi\r\n..jkl\r\n..\r\n.\r\n"
	for _, tc := range []struct {
		name   string
		chunks []string
		want   string
	}{
		{"Encode", []string{"abc\n.def\n..ghi\n.jkl\n."}, encoded},
		{"EncodeNoError", []string{"abc\r\n.def\r\n..ghi\r\n.jkl\r\n."}, encoded},
		{"EncodeSeparateWrites", []string{"abc\r", "\n.def\r\n..ghi\r\n.jkl\r\n."}, encoded},
		// \r gets interpreted as line break
		{
			"EncodeSeparateWritesEndsWithR",
			[]string{"abc\r", "\n.def\r\n..ghi\r\n.jkl\r"},
			"abc\r\n..def\r\n...ghi\r\n..jkl\r\n.\r\n",
		},
		// \r gets interpreted as normal character
		{
			"EncodeSeparateWritesContainsR",
			[]string{"abc\r", "\n.def\r..ghi\r\n.jkl\r"},
			"abc\r\n..def\r..ghi\r\n..jkl\r\n.\r\n",
		},
	} {
		t.Run(tc.name, func(t *testing.T) {
			var buf bytes.Buffer
			d := smtpwriter.NewDot(bufio.NewWriter(&buf))
			writeChunks(t, d, tc.chunks...)
			require.NoError(t, d.Close())
			require.Equal(t, tc.want, buf.String())
		})
	}
}

// TestDotWriterLeadingDot checks that a dot at the very beginning of the
// first line is stuffed, as required by RFC 5321 4.5.2 (transparency).
// Without stuffing the first line, a body starting with a dot is silently
// corrupted (or misread as end-of-data) by a conforming receiver.
func TestDotWriterLeadingDot(t *testing.T) {
	for _, tc := range []struct{ in, want string }{
		{".hello\r\n", "..hello\r\n.\r\n"},
		{".\r\nfoo\r\n", "..\r\nfoo\r\n.\r\n"},
		{"..x\r\n", "...x\r\n.\r\n"},
	} {
		var buf bytes.Buffer
		d := smtpwriter.NewDot(bufio.NewWriter(&buf))
		writeChunks(t, d, tc.in)
		require.NoError(t, d.Close())
		require.Equal(t, tc.want, buf.String(), "input %q", tc.in)
	}
}

func TestDotWriterCloseEmptyWrite(t *testing.T) {
	var buf bytes.Buffer
	d := smtpwriter.NewDot(bufio.NewWriter(&buf))
	writeChunks(t, d, "")
	require.NoError(t, d.Close())
	require.Equal(t, "\r\n.\r\n", buf.String())
}

func TestDotWriterCloseNoWrite(t *testing.T) {
	var buf bytes.Buffer
	d := smtpwriter.NewDot(bufio.NewWriter(&buf))
	require.NoError(t, d.Close())
	require.Equal(t, "\r\n.\r\n", buf.String())
}
