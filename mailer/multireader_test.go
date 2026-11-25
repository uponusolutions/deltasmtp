package mailer_test

import (
	"bytes"
	"io"
	"strings"
	"testing"

	"github.com/stretchr/testify/assert"
	"github.com/stretchr/testify/require"
	"github.com/uponusolutions/deltasmtp/mailer"
)

func TestClient_Multireader(t *testing.T) {
	res := mailer.NewMultiReader(bytes.NewBufferString("ab"), bytes.NewBufferString("c"), bytes.NewBufferString("d"))
	require.Equal(t, 4, res.Len())

	buf := make([]byte, 1)
	n, err := res.Read(buf)
	require.NoError(t, err)
	require.Equal(t, 1, n)
	require.Equal(t, []byte("a"), buf)
	require.Equal(t, 3, res.Len())

	buf = make([]byte, 2)
	n, err = res.Read(buf)
	require.NoError(t, err)
	require.Equal(t, 1, n)
	require.Equal(t, 2, res.Len())
	n, err = res.Read(buf[1:])
	require.NoError(t, err)
	require.Equal(t, 1, n)
	require.Equal(t, []byte("bc"), buf)
	require.Equal(t, 1, res.Len())

	buf = make([]byte, 1)
	n, err = res.Read(buf)
	require.NoError(t, err)
	require.Equal(t, 1, n)
	require.Equal(t, []byte("d"), buf)
	require.Equal(t, 0, res.Len())
}

// Test taken from https://github.com/golang/go/blob/master/src/io/multi_test.go
func TestMultiReader(t *testing.T) {
	var mr io.Reader
	var buf []byte
	nread := 0
	withFooBar := func(tests func()) {
		r1 := strings.NewReader("foo ")
		r2 := strings.NewReader("")
		r3 := strings.NewReader("bar")
		mr = mailer.NewMultiReader(r1, r2, r3)
		buf = make([]byte, 20)
		tests()
	}
	expectRead := func(size int, expected string, eerr error) {
		nread++
		n, gerr := mr.Read(buf[0:size])
		assert.Equal(t, len(expected), n, "#%d", nread)
		assert.Equal(t, expected, string(buf[0:n]), "#%d", nread)
		assert.Equal(t, eerr, gerr, "#%d", nread)
		buf = buf[n:]
	}
	withFooBar(func() {
		expectRead(2, "fo", nil)
		expectRead(5, "o ", nil)
		expectRead(5, "bar", nil)
		expectRead(5, "", io.EOF)
	})
	withFooBar(func() {
		expectRead(4, "foo ", nil)
		expectRead(1, "b", nil)
		expectRead(3, "ar", nil)
		expectRead(1, "", io.EOF)
	})
	withFooBar(func() {
		expectRead(5, "foo ", nil)
	})
}

// Test taken from https://github.com/golang/go/blob/master/src/io/multi_test.go
func TestMultiReaderAsWriterTo(t *testing.T) {
	mr := mailer.NewMultiReader(
		strings.NewReader("foo "),
		mailer.NewMultiReader(
			strings.NewReader(""),
			strings.NewReader("bar"),
		),
	)
	mrAsWriterTo, ok := mr.(io.WriterTo)
	require.True(t, ok, "expected cast to WriterTo to succeed")
	sink := &strings.Builder{}
	n, err := mrAsWriterTo.WriteTo(sink)
	require.NoError(t, err)
	assert.Equal(t, int64(7), n)
	assert.Equal(t, "foo bar", sink.String())
}
