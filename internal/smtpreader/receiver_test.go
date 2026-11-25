package smtpreader

import (
	"bytes"
	"io"
	"strconv"
	"strings"
	"testing"

	"github.com/stretchr/testify/require"
	"github.com/uponusolutions/deltasmtp"
	"github.com/uponusolutions/deltasmtp/tester"
)

func reader(in string, out *bytes.Buffer) *Receiver {
	return NewReceiver(tester.NewFakeConn(in, out), 4096, 0, 0)
}

func TestReadLine(t *testing.T) {
	r := reader("line1\nline2\n", &bytes.Buffer{})
	for _, want := range []string{"line1", "line2"} {
		s, err := r.ReadFullLine()
		require.NoError(t, err)
		require.Equal(t, want, s)
	}
	s, err := r.ReadFullLine()
	require.Equal(t, io.EOF, err)
	require.Empty(t, s)
}

var parseFirstCodeLineTests = []struct {
	codeLine        string
	wantCode        int
	wantContinued   bool
	wantEnhCode     deltasmtp.EnhancedCode
	wantMsg         string
	wantErrContains string
}{
	{"123 test", 123, false, deltasmtp.NoEnhancedCode, "test", ""},
	{"123-test", 123, true, deltasmtp.NoEnhancedCode, "test", ""},
	{"123-1.2 test", 123, true, deltasmtp.NoEnhancedCode, "1.2 test", ""},
	// RFC 2034: the class must match the reply code and be 2, 4 or 5
	{"123-1.2.3 test", 123, true, deltasmtp.NoEnhancedCode, "1.2.3 test", ""},
	{"523-5.2.3 test", 523, true, deltasmtp.EnhancedCode{5, 2, 3}, "test", ""},
	// RFC 3463: subject and detail have up to 3 digits
	{"550-5.7.26 test", 550, true, deltasmtp.EnhancedCode{5, 7, 26}, "test", ""},
	{"451 4.123.999 test", 451, false, deltasmtp.EnhancedCode{4, 123, 999}, "test", ""},
	{"550 4.7.1 class mismatch", 550, false, deltasmtp.NoEnhancedCode, "4.7.1 class mismatch", ""},
	{"550 5.1234.1 too many digits", 550, false, deltasmtp.NoEnhancedCode, "5.1234.1 too many digits", ""},
	{"550 5.07.1 leading zero", 550, false, deltasmtp.NoEnhancedCode, "5.07.1 leading zero", ""},
	{"550 5.+7.1 sign", 550, false, deltasmtp.NoEnhancedCode, "5.+7.1 sign", ""},
	{"550 55.7.1 class with two digits", 550, false, deltasmtp.NoEnhancedCode, "55.7.1 class with two digits", ""},
	{"323-1.2.3 test", 323, true, deltasmtp.NoEnhancedCode, "1.2.3 test", ""},
}

func TestParseFirstCodeLine(t *testing.T) {
	for _, d := range parseFirstCodeLineTests {
		t.Run(d.codeLine, func(t *testing.T) {
			status, continued, err := parseFirstCodeLine(d.codeLine)
			require.Equal(t, d.wantCode, status.Code)
			require.Equal(t, d.wantContinued, continued)
			require.Equal(t, d.wantEnhCode, status.EnhancedCode)
			require.Equal(t, []string{d.wantMsg}, status.Lines)
			if d.wantErrContains == "" {
				require.NoError(t, err)
			} else {
				require.ErrorContains(t, err, d.wantErrContains)
			}
		})
	}
}

var parseExtraCodeLineTests = []struct {
	line             string
	codeString       string
	enhancedCodePart []byte
	wantContinued    bool
	wantMsg          string
	wantErrContains  string
}{
	{"123-1.1.0 test", "123", []byte("1.1.0 "), true, "test", ""},
	{"123 1.2.0 test", "123", []byte("1.2.0 "), false, "test", ""},
	{"123 test", "123", nil, false, "test", ""},
	{"550-5.7.26 test", "550", deltasmtp.EnhancedCode{5, 7, 26}.ToPart(), true, "test", ""},
	// RFC 2034: the same enhanced code on every line
	{"550 5.7.2 test", "550", deltasmtp.EnhancedCode{5, 7, 26}.ToPart(), false, "", "invalid response"},
}

func TestParseExtraCodeLine(t *testing.T) {
	for i, d := range parseExtraCodeLineTests {
		t.Run(strconv.Itoa(i)+": "+d.line, func(t *testing.T) {
			continued, msg, err := parseExtraCodeLine(d.line, d.codeString, d.enhancedCodePart)
			require.Equal(t, d.wantContinued, continued)
			require.Equal(t, d.wantMsg, msg)
			if d.wantErrContains == "" {
				require.NoError(t, err)
			} else {
				require.ErrorContains(t, err, d.wantErrContains)
			}
		})
	}
}

var readResponseTests = []struct {
	in       string
	wantCode int
	wantMsg  string
}{
	// "230-...\nRead the file README.txt,\n230  please" is invalid by RFC 5321
	{"230 Anonymous access granted, restrictions apply\n", 230, "Anonymous access granted, restrictions apply"},
	{"400-A\n400-B\n400 C", 400, "A\nB\nC"},
	{"400-A\r\n400-B\r\n400 C\r\n", 400, "A\nB\nC"},
}

// See https://www.ietf.org/rfc/rfc959.txt page 36.
func TestRFC959Lines(t *testing.T) {
	for i, tt := range readResponseTests {
		r := reader(tt.in+"\nFOLLOWING DATA", &bytes.Buffer{})
		status, err := r.ReadResponse()
		require.NoError(t, err, i)
		require.Equal(t, tt.wantCode, status.Code, i)
		require.Equal(t, tt.wantMsg, strings.Join(status.Lines, "\n"), i)
	}
}

// Test that multi-line errors are appropriately and fully read.
func TestReadMultiLineError(t *testing.T) {
	r := reader("550-5.1.1 The email account that you tried to reach does not exist. Please try\n"+
		"550-5.1.1 double-checking the recipient's email address for typos or\n"+
		"550-5.1.1 unnecessary spaces. Learn more at\n"+
		"Unexpected but legal text!\n"+
		"550 5.1.1 https://support.google.com/mail/answer/6596 h20si25154304pfd.166 - gsmtp\n", &bytes.Buffer{})

	require.ErrorContains(t, r.ReadResponseValid(250), "invalid response")
}

// Test that multi-line errors are appropriately and fully read.
func TestReadMultiLine(t *testing.T) {
	r := reader("550-5.1.1 The email account that you tried to reach does not exist. Please try\n"+
		"550-5.1.1 double-checking the recipient's email address for typos or\n"+
		"550-5.1.1 unnecessary spaces. Learn more at\n"+
		"550 5.1.1 https://support.google.com/mail/answer/6596 h20si25154304pfd.166 - gsmtp\n", &bytes.Buffer{})

	expectedText := "The email account that you tried to reach does not exist. Please try\n" +
		"double-checking the recipient's email address for typos or\n" +
		"unnecessary spaces. Learn more at\n" +
		"https://support.google.com/mail/answer/6596 h20si25154304pfd.166 - gsmtp"

	err := r.ReadResponseValid(250)
	require.Error(t, err)
	status, ok := err.(*deltasmtp.Status)
	require.True(t, ok)

	require.Equal(t, expectedText, status.Text())
	require.Equal(t, "550 5.1.1 "+expectedText, status.Error())
}

// TestReadMultiLineMultiDigitEnhancedCode reads a Gmail style reply whose
// enhanced code has a two digit detail. The whole reply has to be consumed,
// otherwise the next reply is read off by one.
func TestReadMultiLineMultiDigitEnhancedCode(t *testing.T) {
	r := reader("550-5.7.26 Unauthenticated email from example.com is not accepted due to\r\n"+
		"550-5.7.26 domain's DMARC policy. Please contact the administrator of\r\n"+
		"550 5.7.26 example.com domain if this was a legitimate mail. - gsmtp\r\n"+
		"250 2.0.0 OK\r\n", &bytes.Buffer{})

	err := r.ReadResponseValid(250)
	var status *deltasmtp.Status
	require.ErrorAs(t, err, &status)
	require.Equal(t, 550, status.Code)
	require.Equal(t, deltasmtp.EnhancedCode{5, 7, 26}, status.EnhancedCode)
	require.Len(t, status.Lines, 3)
	require.Equal(t, "example.com domain if this was a legitimate mail. - gsmtp", status.Lines[2])

	require.NoError(t, r.ReadResponseValid(250), "next reply must be read in sync")
}

func TestReadResponseTooManyLines(t *testing.T) {
	const maxResponseLines = 16
	limited := func(in string) *Receiver {
		return NewReceiver(tester.NewFakeConn(in, &bytes.Buffer{}), 4096, 0, maxResponseLines)
	}

	in := strings.Repeat("250-ext\r\n", maxResponseLines) + "250 last\r\n"
	_, err := limited(in).ReadResponse()
	require.ErrorIs(t, err, ErrTooManyResponseLines)

	in = strings.Repeat("250-ext\r\n", maxResponseLines-1) + "250 last\r\n"
	status, err := limited(in).ReadResponse()
	require.NoError(t, err)
	require.Len(t, status.Lines, maxResponseLines)

	// ReadResponseValid is limited as well
	in = strings.Repeat("250-ext\r\n", maxResponseLines) + "250 last\r\n"
	require.ErrorIs(t, limited(in).ReadResponseValid(250), ErrTooManyResponseLines)

	// zero disables the limit
	in = strings.Repeat("250-ext\r\n", 10*maxResponseLines) + "250 last\r\n"
	status, err = reader(in, &bytes.Buffer{}).ReadResponse()
	require.NoError(t, err)
	require.Len(t, status.Lines, 10*maxResponseLines+1)
}

// TestReceiverResetClearsLineLengthExceeded checks that an exceeded line length
// only blocks the connection it happened on, not the next one after Reset.
func TestReceiverResetClearsLineLengthExceeded(t *testing.T) {
	r := NewReceiver(strings.NewReader(strings.Repeat("x", 20)+"\r\n"), 4096, 10, 0)

	_, err := r.ReadFullLine()
	require.ErrorIs(t, err, deltasmtp.ErrTooLongLine)
	_, err = r.ReadFullLine()
	require.ErrorIs(t, err, deltasmtp.ErrTooLongLine, "sticky on the same connection")

	r.Reset(strings.NewReader("250 OK\r\n"))
	line, err := r.ReadFullLine()
	require.NoError(t, err)
	require.Equal(t, "250 OK", line)
}

func TestParseCode(t *testing.T) {
	for line, want := range map[string]int{"250 OK": 250, "999-": 999, "100 ": 100} {
		code, ok := parseCode(line)
		require.True(t, ok, line)
		require.Equal(t, want, code, line)
	}
	for _, line := range []string{"250", "099 x", "+12 x", "-12 x", "2a0 x", " 25 x", ""} {
		_, ok := parseCode(line)
		require.False(t, ok, line)
	}
}

// An expected single line reply is checked without allocating.
func TestReadResponseValidNoAllocs(t *testing.T) {
	const runs = 100
	r := NewReceiver(strings.NewReader(strings.Repeat("250 2.1.5 OK\r\n", runs+1)), 4096, 0, 0)

	allocs := testing.AllocsPerRun(runs, func() {
		require.NoError(t, r.ReadResponseValid(250))
	})
	require.Zero(t, allocs)
}

// An invalid or unexpected reply still fails as before.
func TestReadResponseValidInvalid(t *testing.T) {
	err := reader("099 2.0.0 OK\r\n", &bytes.Buffer{}).ReadResponseValid(250)
	require.ErrorContains(t, err, "invalid response code")

	err = reader("25\r\n", &bytes.Buffer{}).ReadResponseValid(250)
	require.ErrorContains(t, err, "short response")

	err = reader("251 2.1.5 OK\r\n", &bytes.Buffer{}).ReadResponseValid(250)
	var status *deltasmtp.Status
	require.ErrorAs(t, err, &status)
	require.Equal(t, 251, status.Code)
	require.Equal(t, deltasmtp.EnhancedCode{2, 1, 5}, status.EnhancedCode)
	require.Equal(t, []string{"OK"}, status.Lines)

	require.NoError(t, reader("251 OK\r\n", &bytes.Buffer{}).ReadResponseValid(25))
}
