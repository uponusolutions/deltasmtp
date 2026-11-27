package deltasmtp

import (
	"errors"
	"fmt"
	"io"
	"log/slog"
	"strconv"
	"strings"
)

// EnhancedCode is the SMTP enhanced code
type EnhancedCode [3]int

// Status is a reply of the server: the reply code, enhanced status code (if
// any) and the text lines. It is not an error, Err returns it as one.
type Status struct {
	Code         int
	EnhancedCode EnhancedCode
	Lines        []string
}

// StatusError is a reply returned as error, e.g. a server rejecting a command
// or a client getting an unexpected reply. It has the fields of Status, the
// conversion between both doesn't allocate.
//
// A server only sends a StatusError returned by a Session or validator with
// a negative reply (4xx or 5xx), any other error is handled like a failure.
type StatusError Status

// Err returns s as error, nil if s is nil.
func (s *Status) Err() error {
	if s == nil {
		return nil
	}
	return (*StatusError)(s)
}

// Status returns the reply of e.
func (e *StatusError) Status() *Status {
	return (*Status)(e)
}

// Error returns the reply as formatted message.
func (e *StatusError) Error() string {
	return e.Status().String()
}

// IsReply reports whether err is, or wraps, a reply of the server (a *StatusError). Such an
// error leaves the connection in sync, any other non-nil error (I/O, timeout, malformed
// reply) doesn't. It is false for a nil err.
func IsReply(err error) bool {
	_, ok := errors.AsType[*StatusError](err)
	return ok
}

// NoEnhancedCode is used to indicate that enhanced error code should not be
// included in response.
//
// Note that RFC 2034 requires an enhanced code to be included in all 2xx, 4xx
// and 5xx responses.
var NoEnhancedCode = EnhancedCode{0, 0, 0}

// ToPart returns the part of the string after the code
// which is defined by the enhanced code with the trailing whitespace.
// E.g. "5.1.1 " or "5.7.26 " (RFC 3463: subject and detail have up to 3 digits).
func (enhCode EnhancedCode) ToPart() []byte {
	if enhCode == NoEnhancedCode {
		return nil
	}
	// 10 is the longest valid code with the trailing space, e.g. "5.123.123 ".
	return enhCode.appendPart(make([]byte, 0, 10))
}

// appendPart appends ToPart to b, nothing for NoEnhancedCode.
func (enhCode EnhancedCode) appendPart(b []byte) []byte {
	if enhCode == NoEnhancedCode {
		return b
	}
	b = strconv.AppendInt(b, int64(enhCode[0]), 10)
	b = append(b, '.')
	b = strconv.AppendInt(b, int64(enhCode[1]), 10)
	b = append(b, '.')
	b = strconv.AppendInt(b, int64(enhCode[2]), 10)
	return append(b, ' ')
}

// NewStatusM creates a new status with multiple message lines.
func NewStatusM(code int, enhCode EnhancedCode, msg []string) *Status {
	return &Status{
		Code:         code,
		EnhancedCode: enhCode,
		Lines:        msg,
	}
}

// NewStatusS creates a new status with a single message line.
func NewStatusS(code int, enhCode EnhancedCode, msg string) *Status {
	// The status and its line in one allocation instead of two.
	s := &struct {
		Status
		line [1]string
	}{line: [1]string{msg}}
	s.Status = Status{Code: code, EnhancedCode: enhCode, Lines: s.line[:]}
	return &s.Status
}

// Positive returns true if the status code is 2xx.
func (s *Status) Positive() bool {
	return s.Code/100 == 2
}

// Temporary returns true if the status code is 4xx.
func (s *Status) Temporary() bool {
	return s.Code/100 == 4
}

// Permanent returns true if the status code is 5xx.
func (s *Status) Permanent() bool {
	return s.Code/100 == 5
}

// Text returns all lines joined by \n in a single string.
func (s *Status) Text() string {
	return strings.Join(s.Lines, "\n")
}

// String returns the status as a formatted message.
// Important: Should not be used for sending a response.
func (s *Status) String() string {
	base := fmt.Sprintf("%03d", s.Code)
	if s.EnhancedCode != NoEnhancedCode {
		base += fmt.Sprintf(" %d.%d.%d", s.EnhancedCode[0], s.EnhancedCode[1], s.EnhancedCode[2])
	}
	if len(s.Lines) > 0 {
		return base + " " + s.Text()
	}
	return base
}

// StatusWriter is an interface which needs to be implemented by a writer to be used by Status.WriteTo.
type StatusWriter interface {
	io.ByteWriter
	io.StringWriter
	io.Writer
}

// WriteTo writes the smtp status reply. Every line is appended to the free
// buffer of w if it has one (e.g. bufio.Writer) and written at once, so
// writing a reply doesn't allocate.
func (s *Status) WriteTo(w StatusWriter) (int64, error) {
	lines := s.Lines
	if len(lines) == 0 {
		lines = noLines
	}

	var n int64
	for i, m := range lines {
		var b []byte
		if ab, ok := w.(interface{ AvailableBuffer() []byte }); ok {
			b = ab.AvailableBuffer()
		}
		b = strconv.AppendInt(b, int64(s.Code), 10)
		// RFC 5321 permits omitting the space when there is no text, but
		// RFC 4954 requires it for the 334 challenge and net/textproto
		// rejects any reply shorter than four bytes. Always emit it.
		if i == len(lines)-1 {
			b = append(b, ' ')
		} else {
			b = append(b, '-')
		}
		b = s.EnhancedCode.appendPart(b)
		b = append(b, m...)
		b = append(b, '\r', '\n')

		p, err := w.Write(b)
		n += int64(p)
		if err != nil {
			return n, err
		}
	}

	return n, nil
}

// noLines is written for a status without a line, a reply has at least one.
var noLines = []string{""}

// LogValue implements slog.LogValuer so that formatting a Status is deferred
// to the handler and skipped entirely when the record is dropped.
func (s *Status) LogValue() slog.Value {
	return slog.GroupValue(
		slog.Int("code", s.Code),
		slog.String("enhCode", fmt.Sprintf("%d.%d.%d", s.EnhancedCode[0], s.EnhancedCode[1], s.EnhancedCode[2])),
		slog.String("text", s.Text()),
	)
}
