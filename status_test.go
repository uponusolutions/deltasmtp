package deltasmtp

import (
	"bufio"
	"bytes"
	"errors"
	"fmt"
	"io"
	"strings"
	"testing"

	"github.com/stretchr/testify/assert"
	"github.com/stretchr/testify/require"
)

// RFC 3463: status-code = class "." subject "." detail, subject and detail have 1*3digit.
func TestEnhancedCodeToPart(t *testing.T) {
	assert.Nil(t, NoEnhancedCode.ToPart())
	assert.Equal(t, "2.0.0 ", string(EnhancedCode{2, 0, 0}.ToPart()))
	assert.Equal(t, "5.7.26 ", string(EnhancedCode{5, 7, 26}.ToPart()))
	assert.Equal(t, "4.123.999 ", string(EnhancedCode{4, 123, 999}.ToPart()))
}

// RFC 2034: the same enhanced code at the beginning of the text of each line.
func TestStatusWriteToMultiDigitEnhancedCode(t *testing.T) {
	var out bytes.Buffer
	w := bufio.NewWriter(&out)

	s := NewStatusM(550, EnhancedCode{5, 7, 26}, []string{"first", "last"})
	n, err := s.WriteTo(w)
	require.NoError(t, err)
	require.NoError(t, w.Flush())

	assert.Equal(t, "550-5.7.26 first\r\n550 5.7.26 last\r\n", out.String())
	assert.Equal(t, int64(out.Len()), n)
}

// A reply written to a bufio.Writer is appended to its free buffer.
func TestStatusWriteToNoAllocs(t *testing.T) {
	w := bufio.NewWriter(io.Discard)
	s := NewStatusS(250, EnhancedCode{2, 1, 5}, "I'll make sure <bob@example.com> gets this")

	allocs := testing.AllocsPerRun(100, func() {
		_, _ = s.WriteTo(w)
	})
	assert.Zero(t, allocs)
}

// A writer without a free buffer gets the same reply.
func TestStatusWriteToWithoutBuffer(t *testing.T) {
	var sb strings.Builder
	n, err := NewStatusM(250, EnhancedCode{2, 0, 0}, nil).WriteTo(&sb)
	require.NoError(t, err)
	assert.Equal(t, "250 2.0.0 \r\n", sb.String())
	assert.Equal(t, int64(sb.Len()), n)

	sb.Reset()
	n, err = NewStatusM(354, NoEnhancedCode, []string{"a", "b"}).WriteTo(&sb)
	require.NoError(t, err)
	assert.Equal(t, "354-a\r\n354 b\r\n", sb.String())
	assert.Equal(t, int64(sb.Len()), n)
}

// NewStatusS allocates the status and its line together, Lines is still an
// ordinary slice.
func TestNewStatusS(t *testing.T) {
	s := NewStatusS(250, EnhancedCode{2, 0, 0}, "OK")
	assert.Equal(t, &Status{Code: 250, EnhancedCode: EnhancedCode{2, 0, 0}, Lines: []string{"OK"}}, s)

	s.Lines = append(s.Lines, "more")
	assert.Equal(t, []string{"OK", "more"}, s.Lines)
}

// Err returns the status as *StatusError without allocating, Status returns it back.
func TestStatusErr(t *testing.T) {
	s := NewStatusS(550, EnhancedCode{5, 1, 1}, "No such user")

	var err error
	allocs := testing.AllocsPerRun(100, func() {
		err = s.Err()
	})
	assert.Zero(t, allocs)

	smtpErr, ok := errors.AsType[*StatusError](err)
	require.True(t, ok)
	assert.Same(t, s, smtpErr.Status())
	assert.Equal(t, 550, smtpErr.Code)
	assert.Equal(t, "550 5.1.1 No such user", err.Error())

	var nilStatus *Status
	assert.NoError(t, nilStatus.Err())
}

func TestIsReply(t *testing.T) {
	st := &Status{Code: 550}
	assert.False(t, IsReply(nil))
	assert.False(t, IsReply(io.EOF))
	assert.False(t, IsReply(errors.New("boom")))
	assert.True(t, IsReply(st.Err()))
	assert.True(t, IsReply(fmt.Errorf("wrapped: %w", st.Err())))
	assert.True(t, IsReply(errors.Join(io.EOF, st.Err())))
}
