package server_test

import (
	"bufio"
	"bytes"
	"context"
	"crypto/tls"
	"errors"
	"fmt"
	"io"
	"log/slog"
	"net"
	"strconv"
	"strings"
	"sync"
	"testing"
	"time"

	"github.com/stretchr/testify/assert"
	"github.com/stretchr/testify/require"
	"github.com/uponusolutions/deltasmtp"
	"github.com/uponusolutions/deltasmtp/server"
	"github.com/uponusolutions/go-sasl"
)

type message struct {
	From     string
	To       []string
	RcptOpts []*deltasmtp.RcptOptions
	Data     []byte
	Opts     *deltasmtp.MailOptions
}

type backend struct {
	authDisabled bool
	clientTls    bool

	messages []*message
	anonmsgs []*message

	// Errors returned by Data method.
	dataErrors chan error

	// Error that will be returned by Data method.
	dataErr error

	// Errors returned by the Data method without opening the reader, one per
	// message; a nil error accepts the message. Set it before the session
	// starts, it is read by the server.
	dataErrQueue []error

	panicOnMail bool
	userErr     error

	// If set, Data opens the reader and returns this error without reading.
	rejectAfterOpen error

	// If set, Data ignores read errors and accepts the (truncated) message.
	swallowDataErr bool

	// How long Rcpt takes.
	rcptDelay time.Duration

	// Returned by Verify.
	verifyStatus *deltasmtp.Status
	verifyErr    error

	// Errors passed to Session.Close.
	closeErrors chan error
}

func (be *backend) NewSession(ctx context.Context, _ *server.Conn) (context.Context, server.Session, error) {
	return ctx, &session{backend: be, anonymous: true}, nil
}

type session struct {
	backend   *backend
	anonymous bool

	msg *message
}

func (*session) Logger(_ context.Context) *slog.Logger {
	return nil
}

func (s *session) AuthMechanisms(_ context.Context) []string {
	if s.backend.authDisabled {
		return nil
	}
	return []string{sasl.Plain}
}

func (s *session) Auth(_ context.Context, _ string) (sasl.Server, error) {
	if s.backend.authDisabled {
		return nil, nil
	}
	return sasl.NewPlainServer(func(identity, username, password string) error {
		if identity != "" && identity != username {
			return errors.New("Invalid identity")
		}
		if username != "username" || password != "password" {
			return errors.New("Invalid username or password")
		}
		s.anonymous = false
		return nil
	}), nil
}

func (s *session) Reset(ctx context.Context, _ bool) (context.Context, error) {
	s.msg = &message{}
	return ctx, nil
}

func (s *session) Close(_ context.Context, err error) {
	if s.backend.closeErrors != nil {
		s.backend.closeErrors <- err
	}
}

func (*session) STARTTLS(_ context.Context, tls *tls.Config) (*tls.Config, error) {
	return tls, nil
}

func (s *session) Verify(_ context.Context, _ string, _ *deltasmtp.VrfyOptions) (*deltasmtp.Status, error) {
	return s.backend.verifyStatus, s.backend.verifyErr
}

func (s *session) Mail(ctx context.Context, from string, opts *deltasmtp.MailOptions) error {
	if s.backend.userErr != nil {
		return s.backend.userErr
	}
	if s.backend.panicOnMail {
		panic("Everything is on fire!")
	}
	_, _ = s.Reset(ctx, false)
	s.msg.From = from
	s.msg.Opts = opts
	return nil
}

func (s *session) Rcpt(_ context.Context, to string, opts *deltasmtp.RcptOptions) error {
	time.Sleep(s.backend.rcptDelay)
	s.msg.To = append(s.msg.To, to)
	s.msg.RcptOpts = append(s.msg.RcptOpts, opts)
	return nil
}

func (s *session) Data(_ context.Context, r func() io.Reader) (string, error) {
	if len(s.backend.dataErrQueue) > 0 {
		err := s.backend.dataErrQueue[0]
		s.backend.dataErrQueue = s.backend.dataErrQueue[1:]
		if err != nil {
			return "", err
		}
	}
	if s.backend.dataErr != nil {
		err := s.backend.dataErr
		if s.backend.dataErrors != nil {
			s.backend.dataErrors <- err
		}
		return "", err
	}
	if s.backend.rejectAfterOpen != nil {
		_ = r()
		return "", s.backend.rejectAfterOpen
	}
	b, err := io.ReadAll(r())
	if err != nil && !s.backend.swallowDataErr {
		if s.backend.dataErrors != nil {
			s.backend.dataErrors <- err
		}
		return "", err
	}
	s.msg.Data = b
	if s.anonymous {
		s.backend.anonmsgs = append(s.backend.anonmsgs, s.msg)
	} else {
		s.backend.messages = append(s.backend.messages, s.msg)
	}
	if s.backend.dataErrors != nil {
		s.backend.dataErrors <- nil
	}

	return "", nil
}

type failingListener struct {
	c      chan error
	closed bool
	mu     sync.Mutex
}

func newFailingListener() *failingListener {
	return &failingListener{c: make(chan error)}
}

func (l *failingListener) Send(err error) {
	l.mu.Lock()
	defer l.mu.Unlock()

	if !l.closed {
		l.c <- err
	}
}

func (l *failingListener) Accept() (net.Conn, error) {
	return nil, <-l.c
}

func (l *failingListener) Close() error {
	l.mu.Lock()
	defer l.mu.Unlock()

	if !l.closed {
		close(l.c)
		l.closed = true
	}
	return nil
}

func (*failingListener) Addr() net.Addr {
	return &net.TCPAddr{
		IP:   net.ParseIP("127.0.0.1"),
		Port: 12345,
	}
}

type mockError struct {
	msg     string
	timeout bool
}

func newMockError(msg string, temporary bool) *mockError {
	return &mockError{
		msg:     msg,
		timeout: temporary,
	}
}

func (m *mockError) Error() string  { return m.msg }
func (m *mockError) String() string { return m.msg }
func (m *mockError) Timeout() bool  { return m.timeout }
func (*mockError) Temporary() bool  { return false }

func testServer(t *testing.T, bei *backend, opts ...server.Option) (be *backend, s *server.Server, c net.Conn, scanner *bufio.Scanner) {
	t.Helper()
	be = bei
	if be == nil {
		be = new(backend)
	}

	s = server.New(append([]server.Option{
		server.WithAddr("127.0.0.1:0"),
		server.WithBackend(be),
		server.WithHostname("localhost"),
	}, opts...)...)

	l, err := s.Listen()
	require.NoError(t, err)

	go func(s *server.Server) {
		_ = s.Serve(context.Background(), l)
	}(s)

	if be.clientTls {
		c, err = tls.Dial("tcp", l.Addr().String(), &tls.Config{InsecureSkipVerify: true})
	} else {
		c, err = net.Dial("tcp", l.Addr().String())
	}
	require.NoError(t, err)

	return be, s, c, bufio.NewScanner(c)
}

func testServerGreeted(t *testing.T, bei *backend, opts ...server.Option) (be *backend, s *server.Server, c net.Conn, scanner *bufio.Scanner) {
	t.Helper()
	be, s, c, scanner = testServer(t, bei, opts...)
	require.Equal(t, "220 localhost ESMTP Service Ready", readReply(t, c, scanner))
	return be, s, c, scanner
}

//nolint:revive // function-result-limit: test helper returning everything a test needs.
func testServerEhlo(t *testing.T, bei *backend, opts ...server.Option) (be *backend, s *server.Server, c net.Conn, scanner *bufio.Scanner, caps map[string]bool) {
	t.Helper()
	be, s, c, scanner = testServerGreeted(t, bei, opts...)
	require.Equal(t, "250-localhost greets localhost", send(t, c, scanner, "EHLO localhost"))
	caps = readCaps(t, c, scanner)
	require.True(t, caps["PIPELINING"], "missing capability PIPELINING")
	require.True(t, caps["8BITMIME"], "missing capability 8BITMIME")
	return be, s, c, scanner, caps
}

// readCaps reads the remaining lines of a multiline 250 EHLO reply and returns them as capability set.
func readCaps(t *testing.T, c net.Conn, scanner *bufio.Scanner) map[string]bool {
	t.Helper()
	caps := make(map[string]bool)
	for {
		line := readReply(t, c, scanner)
		if after, ok := strings.CutPrefix(line, "250 "); ok {
			caps[after] = true
			return caps
		}
		after, ok := strings.CutPrefix(line, "250-")
		require.True(t, ok, "invalid capability response: %q", line)
		caps[after] = true
	}
}

func scanOk(t *testing.T, c net.Conn, scanner *bufio.Scanner) {
	t.Helper()
	if !scan(t, c, scanner) {
		require.NoError(t, scanner.Err(), "failed to read reply")
		require.FailNow(t, "server closed the connection while a reply was expected")
	}
}

func scan(t *testing.T, c net.Conn, scanner *bufio.Scanner) bool {
	t.Helper()
	require.NoError(t, c.SetReadDeadline(time.Now().Add(5*time.Second)))
	defer func() { _ = c.SetReadDeadline(time.Time{}) }()
	return scanner.Scan()
}

func readReply(t *testing.T, c net.Conn, scanner *bufio.Scanner) string {
	t.Helper()
	scanOk(t, c, scanner)
	return scanner.Text()
}

// send writes cmd terminated by CRLF and returns the next reply line.
func send(t *testing.T, c net.Conn, scanner *bufio.Scanner, cmd string) string {
	t.Helper()
	_, _ = io.WriteString(c, cmd+"\r\n")
	return readReply(t, c, scanner)
}

// expect sends cmd and requires the reply line to start with prefix.
func expect(t *testing.T, c net.Conn, scanner *bufio.Scanner, cmd, prefix string) {
	t.Helper()
	requirePrefix(t, send(t, c, scanner, cmd), prefix)
}

// requirePrefix requires reply to start with prefix.
func requirePrefix(t *testing.T, reply, prefix string) {
	t.Helper()
	require.True(t, strings.HasPrefix(reply, prefix), "expected reply starting with %q, got %q", prefix, reply)
}

func TestServerAcceptErrorHandling(t *testing.T) {
	errorLog := bytes.NewBuffer(nil)
	logger := slog.New(slog.NewTextHandler(errorLog, nil))

	be := new(backend)
	s := server.New(
		server.WithBackend(be),
		server.WithLogger(logger),
	)

	l := newFailingListener()
	done := make(chan error, 1)
	go func() {
		done <- s.Serve(context.Background(), l)
		_ = l.Close()
	}()

	temporaryError := newMockError("temporary mock error", true)
	l.Send(temporaryError)
	permanentError := newMockError("permanent mock error", false)
	l.Send(permanentError)
	_ = s.Close()

	require.ErrorIs(t, <-done, permanentError)
	require.Contains(t, errorLog.String(), temporaryError.String())
}

func TestServer_helo(t *testing.T) {
	_, s, c, scanner := testServerGreeted(t, nil)
	defer func() { _ = s.Close() }()

	expect(t, c, scanner, "HELO localhost", "250 ")
}

func testServerAuthenticated(t *testing.T, bei *backend, opts ...server.Option) (be *backend, s *server.Server, c net.Conn, scanner *bufio.Scanner) {
	t.Helper()
	be, s, c, scanner, caps := testServerEhlo(t, bei, opts...)
	require.True(t, caps["AUTH PLAIN"], "AUTH PLAIN capability is missing when auth is enabled")

	require.Equal(t, "334 ", send(t, c, scanner, "AUTH PLAIN"))
	expect(t, c, scanner, "AHVzZXJuYW1lAHBhc3N3b3Jk", "235 ")

	return be, s, c, scanner
}

func TestServerAuthTwice(t *testing.T) {
	_, _, c, scanner, caps := testServerEhlo(t, nil)
	require.True(t, caps["AUTH PLAIN"], "AUTH PLAIN capability is missing when auth is enabled")

	expect(t, c, scanner, "AUTH PLAIN AHVzZXJuYW1lAHBhc3N3b3Jk", "235 ")
	expect(t, c, scanner, "AUTH PLAIN AHVzZXJuYW1lAHBhc3N3b3Jk", "503 5.5.1 Already authenticated")
	expect(t, c, scanner, "AUTH PLAIN AHVzZXJuYW1lAHBhc3N3b3Jk", "503 5.5.1 Already authenticated")
}

func TestServerAuthForbiddenInsideMailTransaction(t *testing.T) {
	_, _, c, scanner, caps := testServerEhlo(t, nil)
	require.True(t, caps["AUTH PLAIN"], "AUTH PLAIN capability is missing when auth is enabled")

	expect(t, c, scanner, "MAIL FROM:<alice@wonderland.book>", "250 ")
	expect(t, c, scanner, "AUTH PLAIN AHVzZXJuYW1lAHBhc3N3b3Jk", "502 ")
}

func TestServerAuthEnforced(t *testing.T) {
	_, _, c, scanner, caps := testServerEhlo(t, nil, server.WithEnforceAuthentication(true))
	require.True(t, caps["AUTH PLAIN"], "AUTH PLAIN capability is missing when auth is enabled")

	expect(t, c, scanner, "MAIL FROM:<alice@wonderland.book>", "530 ")
	expect(t, c, scanner, "AUTH PLAIN AHVzZXJuYW1lAHBhc3N3b3Jk", "235 ")
	expect(t, c, scanner, "MAIL FROM:<alice@wonderland.book>", "250 ")
	expect(t, c, scanner, "RSET", "250 ")
	expect(t, c, scanner, "MAIL FROM:<alice@wonderland.book>", "250 ")
	expect(t, c, scanner, "EHLO Test", "250-")
	readCaps(t, c, scanner) // ignore capabilities, already checked

	// https://datatracker.ietf.org/doc/html/rfc5321#section-4.1.1.5
	// EHLO should behave like RSET and does not reset AUTH in any way.
	expect(t, c, scanner, "MAIL FROM:<alice@wonderland.book>", "250 ")
}

func TestServerAuthMultipleFailedAuth(t *testing.T) {
	_, _, c, scanner, caps := testServerEhlo(t, nil, server.WithEnforceAuthentication(true))
	require.True(t, caps["AUTH PLAIN"], "AUTH PLAIN capability is missing when auth is enabled")

	expect(t, c, scanner, "MAIL FROM:<alice@wonderland.book>", "530 ")
	expect(t, c, scanner, "AUTH PLAIN invalid", "454 4.7.0 Invalid base64 data")
	expect(t, c, scanner, "AUTH PLAIN invalid", "454 4.7.0 Invalid base64 data")
}

func TestServerCancelSASL(t *testing.T) {
	_, _, c, scanner, caps := testServerEhlo(t, nil)
	require.True(t, caps["AUTH PLAIN"], "AUTH PLAIN capability is missing when auth is enabled")

	require.Equal(t, "334 ", send(t, c, scanner, "AUTH PLAIN"))
	expect(t, c, scanner, "*", "501 ")
}

func TestServerEmptyFrom1(t *testing.T) {
	_, s, c, scanner := testServerAuthenticated(t, nil)
	defer func() {
		_ = s.Close()
		_ = c.Close()
	}()

	require.NotRegexp(t, "^250 ", send(t, c, scanner, "MAIL FROM:"))
}

func TestServerEmptyFrom2(t *testing.T) {
	_, s, c, scanner := testServerAuthenticated(t, nil)
	defer func() {
		_ = s.Close()
		_ = c.Close()
	}()

	expect(t, c, scanner, "MAIL FROM:<>", "250 ")
}

func TestServerPanicRecover(t *testing.T) {
	be, s, c, scanner := testServerAuthenticated(t, nil,
		// Don't log panic in tests to not confuse people who run 'go test'.
		server.WithLogger(slog.New(slog.NewTextHandler(io.Discard, nil))),
	)

	defer func() {
		_ = s.Close()
		_ = c.Close()
	}()

	be.panicOnMail = true

	expect(t, c, scanner, "MAIL FROM:<alice@wonderland.book>", "421 ")
}

func TestServerSMTPUTF8(t *testing.T) {
	_, s, c, scanner := testServerAuthenticated(t, nil, server.WithEnableSMTPUTF8(true))
	defer func() {
		_ = s.Close()
		_ = c.Close()
	}()

	expect(t, c, scanner, "MAIL FROM:<alice@wonderland.book> SMTPUTF8", "250 ")
}

func TestServerSMTPUTF8_NonASCIIAddress(t *testing.T) {
	be, s, c, scanner := testServerAuthenticated(t, nil, server.WithEnableSMTPUTF8(true))
	defer func() {
		_ = s.Close()
		_ = c.Close()
	}()

	// Without SMTPUTF8 non-ASCII addresses are rejected.
	expect(t, c, scanner, "MAIL FROM:<jösé@example.org>", "550 5.6.7 ")
	expect(t, c, scanner, "VRFY <jösé@example.org>", "550 5.6.8 ")
	expect(t, c, scanner, "MAIL FROM:<alice@example.org>", "250 ")
	expect(t, c, scanner, "RCPT TO:<jösé@example.org>", "553 5.6.7 ")
	expect(t, c, scanner, "RCPT TO:<bob@bücher.example>", "553 5.6.7 ")
	expect(t, c, scanner, "RSET", "250 ")

	// With SMTPUTF8 they are accepted.
	expect(t, c, scanner, "VRFY <jösé@example.org> SMTPUTF8", "252 ")
	expect(t, c, scanner, "MAIL FROM:<jösé@example.org> SMTPUTF8", "250 ")
	expect(t, c, scanner, "RCPT TO:<bob@bücher.example>", "250 ")
	expect(t, c, scanner, "DATA", "354 ")
	expect(t, c, scanner, "Hey\r\n.", "250 ")
	require.Len(t, be.messages, 1)
	require.Equal(t, "jösé@example.org", be.messages[0].From)
	require.Equal(t, []string{"bob@bücher.example"}, be.messages[0].To)

	// The SMTPUTF8 parameter only applies to its own transaction.
	expect(t, c, scanner, "MAIL FROM:<alice@example.org>", "250 ")
	expect(t, c, scanner, "RCPT TO:<bob@bücher.example>", "553 5.6.7 ")
}

func TestServerSMTPUTF8_Disabled(t *testing.T) {
	_, s, c, scanner := testServerAuthenticated(t, nil)
	defer func() {
		_ = s.Close()
		_ = c.Close()
	}()

	require.NotRegexp(t, "^250 ", send(t, c, scanner, "MAIL FROM:<alice@wonderland.book> SMTPUTF8"))
}

func TestServer8BITMIME(t *testing.T) {
	_, s, c, scanner := testServerAuthenticated(t, nil)
	defer func() {
		_ = s.Close()
		_ = c.Close()
	}()

	expect(t, c, scanner, "MAIL FROM:<alice@wonderland.book> BODY=8bitMIME", "250 ")
}

func TestServer_BODYInvalidValue(t *testing.T) {
	_, s, c, scanner := testServerAuthenticated(t, nil)
	defer func() {
		_ = s.Close()
		_ = c.Close()
	}()

	require.NotRegexp(t, "^250 ", send(t, c, scanner, "MAIL FROM:<alice@wonderland.book> BODY=RABIIT"))
}

func TestServerUnknownArg(t *testing.T) {
	_, s, c, scanner := testServerAuthenticated(t, nil)
	defer func() {
		_ = s.Close()
		_ = c.Close()
	}()

	require.NotRegexp(t, "^250 ", send(t, c, scanner, "MAIL FROM:<alice@wonderland.book> RABIIT"))
}

func TestServerBadSize(t *testing.T) {
	_, s, c, scanner := testServerAuthenticated(t, nil)
	defer func() {
		_ = s.Close()
		_ = c.Close()
	}()

	require.NotRegexp(t, "^250 ", send(t, c, scanner, "MAIL FROM:<alice@wonderland.book> SIZE=rabbit"))
}

func TestServerTooBig(t *testing.T) {
	_, s, c, scanner := testServerAuthenticated(t, nil, server.WithMaxMessageBytes(4294967294))
	defer func() {
		_ = s.Close()
		_ = c.Close()
	}()

	require.NotRegexp(t, "^250 ", send(t, c, scanner, "MAIL FROM:<alice@wonderland.book> SIZE=4294967295"))
}

func TestServerEmptyTo(t *testing.T) {
	_, s, c, scanner := testServerAuthenticated(t, nil)
	defer func() {
		_ = s.Close()
		_ = c.Close()
	}()

	expect(t, c, scanner, "MAIL FROM:<root@nsa.gov>", "250 ")
	require.NotRegexp(t, "^250 ", send(t, c, scanner, "RCPT TO:"))
}

func TestServerQuotedAddress(t *testing.T) {
	be, s, c, scanner := testServerAuthenticated(t, nil)
	defer func() {
		_ = s.Close()
		_ = c.Close()
	}()

	expect(t, c, scanner, "MAIL FROM:<\"root\"@nsa.gov>", "250 ")
	expect(t, c, scanner, `RCPT TO:<"x> NOTIFY=NEVER ORCPT=rfc822;y"@example.org>`, "250 ")
	expect(t, c, scanner, `RCPT TO:<"user@internal"@example.org>`, "250 ")
	for _, rcpt := range []string{"<a@b@c>", "a@b@c", "<a..b@example.org>", "<a@example.org>x"} {
		expect(t, c, scanner, "RCPT TO:"+rcpt, "501 5.5.2 ")
	}
	expect(t, c, scanner, "DATA", "354 ")
	expect(t, c, scanner, "Hey\r\n.", "250 ")

	require.Len(t, be.messages, 1)
	msg := be.messages[0]
	require.Equal(t, "root@nsa.gov", msg.From)
	require.Equal(t, []string{`"x> NOTIFY=NEVER ORCPT=rfc822;y"@example.org`, `"user@internal"@example.org`}, msg.To)
	// The quoted local-part must not be parsed as RCPT parameters.
	require.Nil(t, msg.RcptOpts[0].Notify)
	require.Empty(t, msg.RcptOpts[0].OriginalRecipient)
}

func TestServer(t *testing.T) {
	be, s, c, scanner := testServerAuthenticated(t, nil)
	defer func() {
		_ = s.Close()
		_ = c.Close()
	}()

	expect(t, c, scanner, "MAIL FROM:<root@nsa.gov>", "250 ")
	expect(t, c, scanner, "RCPT TO:<root@gchq.gov.uk>", "250 ")
	expect(t, c, scanner, "DATA", "354 ")

	_, _ = io.WriteString(c, "From: root@nsa.gov\r\n")
	_, _ = io.WriteString(c, "\r\n")
	_, _ = io.WriteString(c, "Hey\r <3\r\n")
	_, _ = io.WriteString(c, "..this dot is fine\r\n")
	_, _ = io.WriteString(c, ".\r\n")
	requirePrefix(t, readReply(t, c, scanner), "250 ")

	require.Len(t, be.messages, 1)
	require.Empty(t, be.anonmsgs)
	msg := be.messages[0]
	require.Equal(t, "root@nsa.gov", msg.From)
	require.Equal(t, []string{"root@gchq.gov.uk"}, msg.To)
	require.Equal(t, "From: root@nsa.gov\r\n\r\nHey\r <3\r\n.this dot is fine\r\n", string(msg.Data))
}

func TestServerPipeline(t *testing.T) {
	be, s, c, scanner := testServerAuthenticated(t, nil)
	defer func() {
		_ = s.Close()
		_ = c.Close()
	}()

	_, _ = io.WriteString(c,
		"MAIL FROM:<root@nsa.gov>\r\nRCPT TO:<root@gchq.gov.uk>\r\n"+
			"DATA\r\nFrom: root@nsa.gov\r\n\r\nHey\r <3\r\n..this dot is fine\r\n.\r\n",
	)
	for _, prefix := range []string{"250 ", "250 ", "354 ", "250 "} { // MAIL, RCPT, DATA, end of data
		requirePrefix(t, readReply(t, c, scanner), prefix)
	}

	require.Len(t, be.messages, 1)
	require.Empty(t, be.anonmsgs)
	msg := be.messages[0]
	require.Equal(t, "root@nsa.gov", msg.From)
	require.Equal(t, []string{"root@gchq.gov.uk"}, msg.To)
	require.Equal(t, "From: root@nsa.gov\r\n\r\nHey\r <3\r\n.this dot is fine\r\n", string(msg.Data))
}

func TestServer_LFDotLF(t *testing.T) {
	be, s, c, scanner := testServerAuthenticated(t, nil)
	defer func() {
		_ = s.Close()
		_ = c.Close()
	}()

	expect(t, c, scanner, "MAIL FROM:<root@nsa.gov>", "250 ")
	expect(t, c, scanner, "RCPT TO:<root@gchq.gov.uk>", "250 ")
	expect(t, c, scanner, "DATA", "354 ")

	_, _ = io.WriteString(c, "From: root@nsa.gov\r\n")
	_, _ = io.WriteString(c, "\r\n")
	_, _ = io.WriteString(c, "hey\r\n")
	_, _ = io.WriteString(c, "\n.\n")
	_, _ = io.WriteString(c, "this is going to break your server\r\n")
	_, _ = io.WriteString(c, ".\r\n")
	requirePrefix(t, readReply(t, c, scanner), "250 ")

	require.Len(t, be.messages, 1)
	require.Empty(t, be.anonmsgs)
	require.Equal(t, "From: root@nsa.gov\r\n\r\nhey\r\n\n.\nthis is going to break your server\r\n",
		string(be.messages[0].Data))
}

func TestServer_EmptyMessage(t *testing.T) {
	be, s, c, scanner := testServerAuthenticated(t, nil)
	defer func() {
		_ = s.Close()
		_ = c.Close()
	}()

	expect(t, c, scanner, "MAIL FROM:<root@nsa.gov>", "250 ")
	expect(t, c, scanner, "RCPT TO:<root@gchq.gov.uk>", "250 ")
	expect(t, c, scanner, "DATA", "354 ")
	expect(t, c, scanner, "\r\n\r\n.", "250 ")

	require.Len(t, be.messages, 1)
	require.Empty(t, be.anonmsgs)
	require.Equal(t, "\r\n\r\n", string(be.messages[0].Data))
}

func TestServer_authDisabled(t *testing.T) {
	bei := new(backend)
	bei.authDisabled = true

	_, s, c, scanner, caps := testServerEhlo(t, bei)
	defer func() {
		_ = s.Close()
		_ = c.Close()
	}()

	require.False(t, caps["AUTH PLAIN"], "AUTH PLAIN capability is present when auth is disabled")
	require.Equal(t, "502 5.7.0 Authentication not supported", send(t, c, scanner, "AUTH PLAIN"))
}

func TestServer_authWrongMechanism(t *testing.T) {
	bei := new(backend)

	_, s, c, scanner, caps := testServerEhlo(t, bei)
	defer func() {
		_ = s.Close()
		_ = c.Close()
	}()

	require.True(t, caps["AUTH PLAIN"], "AUTH PLAIN capability isn't present when auth is enabled")
	require.Equal(t, "504 5.5.4 Unrecognized authentication type", send(t, c, scanner, "AUTH HI"))
}

func TestServer_otherCommands(t *testing.T) {
	_, s, c, scanner := testServerAuthenticated(t, nil)
	defer func() { _ = s.Close() }()

	expect(t, c, scanner, "HELP", "502 ")
	expect(t, c, scanner, "VRFY test", "501 ")
	expect(t, c, scanner, "VRFY test@a.de", "252 ")
	expect(t, c, scanner, "NOOP", "250 ")
	expect(t, c, scanner, "RSET", "250 ")
	expect(t, c, scanner, "QUIT", "221 ")
}

func TestServer_invalidCommand(t *testing.T) {
	_, s, c, scanner := testServerAuthenticated(t, nil)
	defer func() { _ = s.Close() }()

	expect(t, c, scanner, "XXXX", "502 ")
}

func TestServer_tooLongMessage(t *testing.T) {
	be, s, c, scanner := testServerAuthenticated(t, nil, server.WithMaxMessageBytes(50))
	defer func() { _ = s.Close() }()

	send(t, c, scanner, "MAIL FROM:<root@nsa.gov>")
	send(t, c, scanner, "RCPT TO:<root@gchq.gov.uk>")
	send(t, c, scanner, "DATA")

	_, _ = io.WriteString(c, "This is a very long message.\r\n")
	_, _ = io.WriteString(c, "Much longer than you can possibly imagine.\r\n")
	_, _ = io.WriteString(c, "And much longer than the server's MaxMessageBytes.\r\n")
	_, _ = io.WriteString(c, ".\r\n")
	requirePrefix(t, readReply(t, c, scanner), "552 ")

	require.Empty(t, be.messages)
	require.Empty(t, be.anonmsgs)
}

// See https://www.postfix.org/smtp-smuggling.html
func TestServer_smtpSmuggling(t *testing.T) {
	cases := []struct {
		name     string
		lines    []string
		expected string
	}{
		{
			name: "<CR><LF>.<LF>",
			lines: []string{
				"This is a message with an SMTP smuggling dot:\r\n",
				".\n",
				"Final dot comes after.\r\n",
				".\r\n",
			},
			expected: "This is a message with an SMTP smuggling dot:\r\n\nFinal dot comes after.\r\n",
		},
		{
			name: "<LF>.<CR><LF>",
			lines: []string{
				"This is a message with an SMTP smuggling dot:\n", // not a line on its own
				".\r\n",
				"Final dot comes after.\r\n",
				".\r\n",
			},
			expected: "This is a message with an SMTP smuggling dot:\n.\r\nFinal dot comes after.\r\n",
		},
	}

	for _, tc := range cases {
		t.Run(tc.name, func(t *testing.T) {
			be, s, c, scanner := testServerAuthenticated(t, nil)
			defer func() { _ = s.Close() }()

			send(t, c, scanner, "MAIL FROM:<root@nsa.gov>")
			send(t, c, scanner, "RCPT TO:<root@gchq.gov.uk>")
			send(t, c, scanner, "DATA")

			for _, line := range tc.lines {
				_, _ = io.WriteString(c, line)
			}
			requirePrefix(t, readReply(t, c, scanner), "250 ")

			require.Len(t, be.messages, 1)
			require.Equal(t, tc.expected, string(be.messages[0].Data))
		})
	}
}

func TestServer_tooLongLine(t *testing.T) {
	_, s, c, scanner := testServerAuthenticated(t, nil)
	defer func() { _ = s.Close() }()

	expect(t, c, scanner, "MAIL FROM:<root@nsa.gov> "+strings.Repeat("A", 2*12288), "500 ")
}

func TestServer_anonymousUserError(t *testing.T) {
	be, s, c, scanner, _ := testServerEhlo(t, nil)
	defer func() {
		_ = s.Close()
		_ = c.Close()
	}()

	be.userErr = deltasmtp.ErrAuthRequired

	require.Equal(t, "530 5.7.0 Authentication required", send(t, c, scanner, "MAIL FROM:<root@nsa.gov>"))
}

func TestServer_anonymousUserOK(t *testing.T) {
	be, s, c, scanner, _ := testServerEhlo(t, nil)
	defer func() {
		_ = s.Close()
		_ = c.Close()
	}()

	send(t, c, scanner, "MAIL FROM: root@nsa.gov")
	send(t, c, scanner, "RCPT TO:<root@gchq.gov.uk>")
	send(t, c, scanner, "DATA")
	expect(t, c, scanner, "Hey <3\r\n.", "250 ")

	require.Empty(t, be.messages)
	require.Len(t, be.anonmsgs, 1)
}

func TestServer_recipientNecessary(t *testing.T) {
	be, s, c, scanner, _ := testServerEhlo(t, nil)
	defer func() {
		_ = s.Close()
		_ = c.Close()
	}()

	send(t, c, scanner, "MAIL FROM: root@nsa.gov")
	expect(t, c, scanner, "DATA", "502 ") // 502 5.5.1 Missing RCPT TO command.

	send(t, c, scanner, "RCPT TO:<root@gchq.gov.uk>")
	send(t, c, scanner, "DATA")
	expect(t, c, scanner, "Hey <3\r\n.", "250 ")

	require.Empty(t, be.messages)
	require.Len(t, be.anonmsgs, 1)
}

func TestServer_authParam_invalidHexchar(t *testing.T) {
	_, s, c, scanner, _ := testServerEhlo(t, nil)
	defer func() {
		_ = s.Close()
		_ = c.Close()
	}()

	// Invalid HEXCHAR
	expect(t, c, scanner, "MAIL FROM: root@nsa.gov AUTH=<hey+A>", "500 5.5.4 Malformed AUTH parameter value")
	expect(t, c, scanner, "MAIL FROM: root@nsa.gov AUTH=<hey+A>", "500 5.5.4 Malformed AUTH parameter value")
}

func TestServer_authParam(t *testing.T) {
	be, s, c, scanner, _ := testServerEhlo(t, nil)
	defer func() {
		_ = s.Close()
		_ = c.Close()
	}()

	// https://tools.ietf.org/html/rfc4954#section-4
	// >servers that advertise support for this
	// >extension MUST support the AUTH parameter to the MAIL FROM
	// >command even when the client has not authenticated itself to the
	// >server.
	expect(t, c, scanner, "MAIL FROM: root@nsa.gov AUTH=hey+3Da@example.com", "250 ")
	// Go on as usual.
	send(t, c, scanner, "RCPT TO:<root@gchq.gov.uk>")
	send(t, c, scanner, "DATA")
	expect(t, c, scanner, "Hey <3\r\n.", "250 ")

	require.Empty(t, be.messages)
	require.Len(t, be.anonmsgs, 1)
	val := be.anonmsgs[0].Opts.Auth
	require.NotNil(t, val)
	require.Equal(t, "hey=a@example.com", *val)
}

func TestServer_Chunking(t *testing.T) {
	be, s, c, scanner := testServerAuthenticated(t, nil, server.WithEnableCHUNKING(true))
	defer func() {
		_ = s.Close()
		_ = c.Close()
	}()

	expect(t, c, scanner, "MAIL FROM:<root@nsa.gov>", "250 ")
	expect(t, c, scanner, "RCPT TO:<root@gchq.gov.uk>", "250 ")

	_, _ = io.WriteString(c, "BDAT 8\r\n")
	_, _ = io.WriteString(c, "Hey <3\r\n")
	requirePrefix(t, readReply(t, c, scanner), "250 ")

	_, _ = io.WriteString(c, "BDAT 8 LAST\r\n")
	_, _ = io.WriteString(c, "Hey :3\r\n")
	requirePrefix(t, readReply(t, c, scanner), "250 ")

	require.Len(t, be.messages, 1)
	require.Empty(t, be.anonmsgs)
	msg := be.messages[0]
	require.Equal(t, "root@nsa.gov", msg.From)
	require.Equal(t, []string{"root@gchq.gov.uk"}, msg.To)
	require.Equal(t, "Hey <3\r\nHey :3\r\n", string(msg.Data))
}

func TestServer_Chunking_Large(t *testing.T) {
	be, s, c, scanner := testServerAuthenticated(t, nil, server.WithEnableCHUNKING(true), server.WithMaxLineLength(100))
	defer func() {
		_ = s.Close()
		_ = c.Close()
	}()

	largeMessage := strings.Repeat("a", 5000)

	expect(t, c, scanner, "MAIL FROM:<root@nsa.gov>", "250 ")
	expect(t, c, scanner, "RCPT TO:<root@gchq.gov.uk>", "250 ")

	_, _ = io.WriteString(c, "BDAT "+strconv.Itoa(len(largeMessage)+2)+"\r\n")
	_, _ = io.WriteString(c, largeMessage+"\r\n")
	requirePrefix(t, readReply(t, c, scanner), "250 ")

	_, _ = io.WriteString(c, "BDAT 8 LAST\r\n")
	_, _ = io.WriteString(c, "Hey :3\r\n")
	requirePrefix(t, readReply(t, c, scanner), "250 ")

	require.Len(t, be.messages, 1)
	require.Empty(t, be.anonmsgs)
	msg := be.messages[0]
	require.Equal(t, "root@nsa.gov", msg.From)
	require.Equal(t, []string{"root@gchq.gov.uk"}, msg.To)
	require.Equal(t, largeMessage+"\r\nHey :3\r\n", string(msg.Data))
}

func TestServer_Chunking_Reset(t *testing.T) {
	be, s, c, scanner := testServerAuthenticated(t, nil, server.WithEnableCHUNKING(true))
	defer func() {
		_ = s.Close()
		_ = c.Close()
	}()
	be.dataErrors = make(chan error, 10)

	expect(t, c, scanner, "MAIL FROM:<root@nsa.gov>", "250 ")
	expect(t, c, scanner, "RCPT TO:<root@gchq.gov.uk>", "250 ")

	_, _ = io.WriteString(c, "BDAT 8\r\n")
	_, _ = io.WriteString(c, "Hey <3\r\n")
	requirePrefix(t, readReply(t, c, scanner), "250 ")

	// Client changed its mind... Note, in this case Data method error is discarded and not returned to the cilent.
	expect(t, c, scanner, "RSET", "250 ")
	require.ErrorIs(t, <-be.dataErrors, deltasmtp.ErrBDATReset)

	send(t, c, scanner, "MAIL FROM: root@nsa.gov")
	send(t, c, scanner, "RCPT TO:<root@gchq.gov.uk>")
	send(t, c, scanner, "DATA")
	expect(t, c, scanner, "Hey <3\r\n.", "250 ")

	require.Len(t, be.messages, 1)
	require.Empty(t, be.anonmsgs)
}

// The readers of the message content are reused for every message of a
// session. A rejected message must not leave state behind for the next one:
// a failed BDAT transfer must not end the next one after its first chunk, a
// DATA rejected before the 354 reply must not suppress it for the next one.
func TestServer_MessagesInOneSession(t *testing.T) {
	failed := deltasmtp.NewStatusS(555, deltasmtp.EnhancedCode{5, 0, 0}, "I failed").Err()
	be := &backend{dataErrQueue: []error{failed, nil, failed, nil, nil, nil}}
	be, s, c, scanner := testServerAuthenticated(t, be, server.WithEnableCHUNKING(true))
	defer func() {
		_ = s.Close()
		_ = c.Close()
	}()

	envelope := func() {
		t.Helper()
		expect(t, c, scanner, "MAIL FROM:<root@nsa.gov>", "250 ")
		expect(t, c, scanner, "RCPT TO:<root@gchq.gov.uk>", "250 ")
	}
	// chunk sends a BDAT chunk as it is, expect would append a CRLF to it.
	chunk := func(raw, prefix string) {
		t.Helper()
		_, _ = io.WriteString(c, raw)
		requirePrefix(t, readReply(t, c, scanner), prefix)
	}

	// BDAT rejected by the backend.
	envelope()
	chunk("BDAT 8\r\nHey <3\r\n", "555 5.0.0 I failed")

	// BDAT in two chunks.
	envelope()
	chunk("BDAT 4\r\nHey ", "250 2.0.0 Continue")
	chunk("BDAT 4 LAST\r\n<3\r\n", "250 ")

	// DATA rejected by the backend before the 354 reply, the transaction stays
	// open.
	envelope()
	expect(t, c, scanner, "DATA", "555 5.0.0 I failed")

	// DATA in the same transaction, with a stuffed dot.
	expect(t, c, scanner, "DATA", "354 ")
	expect(t, c, scanner, "..dot\r\n.", "250 ")

	// DATA after DATA.
	envelope()
	expect(t, c, scanner, "DATA", "354 ")
	expect(t, c, scanner, "again\r\n.", "250 ")

	// BDAT after DATA.
	envelope()
	chunk("BDAT 5 LAST\r\nBye\r\n", "250 ")

	require.Len(t, be.messages, 4)
	require.Equal(t, "Hey <3\r\n", string(be.messages[0].Data))
	require.Equal(t, ".dot\r\n", string(be.messages[1].Data))
	require.Equal(t, "again\r\n", string(be.messages[2].Data))
	require.Equal(t, "Bye\r\n", string(be.messages[3].Data))
}

func TestServer_Chunking_Close(t *testing.T) {
	be, s, c, scanner := testServerAuthenticated(t, nil, server.WithEnableCHUNKING(true))
	defer func() {
		_ = s.Close()
		_ = c.Close()
	}()
	be.dataErrors = make(chan error, 10)

	expect(t, c, scanner, "MAIL FROM:<root@nsa.gov>", "250 ")
	expect(t, c, scanner, "RCPT TO:<root@gchq.gov.uk>", "250 ")

	_, _ = io.WriteString(c, "BDAT 8\r\n")
	_, _ = io.WriteString(c, "Hey <3\r\n")
	requirePrefix(t, readReply(t, c, scanner), "250 ")

	// Client changed its mind... Note, in this case Data method error is discarded and not returned to the cilent.
	expect(t, c, scanner, "QUIT", "221 ")
	require.ErrorIs(t, <-be.dataErrors, deltasmtp.ErrBDATQuit)
}

func TestServer_Chunking_ClosedInTheMiddle(t *testing.T) {
	be, s, c, scanner := testServerAuthenticated(t, nil, server.WithEnableCHUNKING(true))
	defer func() {
		_ = s.Close()
		_ = c.Close()
	}()
	be.dataErrors = make(chan error, 10)

	expect(t, c, scanner, "MAIL FROM:<root@nsa.gov>", "250 ")
	expect(t, c, scanner, "RCPT TO:<root@gchq.gov.uk>", "250 ")

	_, _ = io.WriteString(c, "BDAT 8\r\n")
	_, _ = io.WriteString(c, "Hey <")

	// Bye!
	_ = c.Close()

	require.ErrorIs(t, <-be.dataErrors, deltasmtp.ErrConnection)
}

func TestServer_Chunking_EarlyError(t *testing.T) {
	be, s, c, scanner := testServerAuthenticated(t, nil, server.WithEnableCHUNKING(true))
	defer func() {
		_ = s.Close()
		_ = c.Close()
	}()

	be.dataErr = deltasmtp.NewStatusS(555, deltasmtp.EnhancedCode{5, 0, 0}, "I failed").Err()

	expect(t, c, scanner, "MAIL FROM:<root@nsa.gov>", "250 ")
	expect(t, c, scanner, "RCPT TO:<root@gchq.gov.uk>", "250 ")

	_, _ = io.WriteString(c, "BDAT 8\r\n")
	_, _ = io.WriteString(c, "Hey <3\r\n")
	requirePrefix(t, readReply(t, c, scanner), "555 5.0.0 I failed")
}

func TestServer_Chunking_EarlyErrorDuringChunk(t *testing.T) {
	be, s, c, scanner := testServerAuthenticated(t, nil, server.WithEnableCHUNKING(true))
	defer func() {
		_ = s.Close()
		_ = c.Close()
	}()

	be.dataErr = deltasmtp.NewStatusS(555, deltasmtp.EnhancedCode{5, 0, 0}, "I failed").Err()

	expect(t, c, scanner, "MAIL FROM:<root@nsa.gov>", "250 ")
	expect(t, c, scanner, "RCPT TO:<root@gchq.gov.uk>", "250 ")

	_, _ = io.WriteString(c, "BDAT 8\r\n")
	_, _ = io.WriteString(c, "Hey <3\r\n")

	// Noop is send before failure has read, to check if pipelining is working.
	_, _ = io.WriteString(c, "NOOP\r\n")

	requirePrefix(t, readReply(t, c, scanner), "555 5.0.0 I failed")

	// See that command stream state is not corrupted e.g. server is still not
	// waiting for remaining chunk octets.
	requirePrefix(t, readReply(t, c, scanner), "250 ")
}

func TestServer_Chunking_tooLongMessage(t *testing.T) {
	be, s, c, scanner := testServerAuthenticated(t, nil, server.WithMaxMessageBytes(50), server.WithEnableCHUNKING(true))
	defer func() {
		_ = s.Close()
		_ = c.Close()
	}()

	send(t, c, scanner, "MAIL FROM:<root@nsa.gov>")
	send(t, c, scanner, "RCPT TO:<root@gchq.gov.uk>")
	_, _ = io.WriteString(c, "BDAT 30\r\n")
	_, _ = io.WriteString(c, "This is a very long message.\r\n")
	scanOk(t, c, scanner)

	_, _ = io.WriteString(c, "BDAT 96 LAST\r\n")
	_, _ = io.WriteString(c, "Much longer than you can possibly imagine.\r\n")
	_, _ = io.WriteString(c, "And much longer than the server's MaxMessageBytes.\r\n")
	requirePrefix(t, readReply(t, c, scanner), "552 ")

	require.Empty(t, be.messages)
	require.Empty(t, be.anonmsgs)
}

func TestServer_Chunking_Binarymime(t *testing.T) {
	be, s, c, scanner := testServerAuthenticated(t, nil,
		server.WithEnableBINARYMIME(true),
		server.WithEnableCHUNKING(true),
	)
	defer func() {
		_ = s.Close()
		_ = c.Close()
	}()

	expect(t, c, scanner, "MAIL FROM:<root@nsa.gov> BODY=BINARYMIME", "250 ")
	expect(t, c, scanner, "RCPT TO:<root@gchq.gov.uk>", "250 ")

	_, _ = io.WriteString(c, "BDAT 8\r\n")
	_, _ = io.WriteString(c, "Hey <3\r\n")
	requirePrefix(t, readReply(t, c, scanner), "250 ")

	_, _ = io.WriteString(c, "BDAT 8 LAST\r\n")
	_, _ = io.WriteString(c, "Hey :3\r\n")
	requirePrefix(t, readReply(t, c, scanner), "250 ")

	require.Len(t, be.messages, 1)
	require.Empty(t, be.anonmsgs)
	msg := be.messages[0]
	require.Equal(t, "root@nsa.gov", msg.From)
	require.Equal(t, []string{"root@gchq.gov.uk"}, msg.To)
	require.Equal(t, "Hey <3\r\nHey :3\r\n", string(msg.Data))
}

func TestServerRRVS(t *testing.T) {
	be, s, c, scanner, caps := testServerEhlo(t, nil,
		server.WithEnableRRVS(true))
	defer func() {
		_ = s.Close()
		_ = c.Close()
	}()

	require.True(t, caps["RRVS"], "missing capability RRVS")

	send(t, c, scanner, "MAIL FROM:<root@nsa.gov>")
	expect(t, c, scanner, "RCPT TO:<root@gchq.gov.uk> RRVS=", "501 5.5.4")
	expect(t, c, scanner, "RCPT TO:<root@gchq.gov.uk> RRVS=1234", "501 5.5.4 ")
	expect(t, c, scanner, "RCPT TO:<root@gchq.gov.uk> RRVS=2014-04-03T23:01:00Z", "250 ")
	expect(t, c, scanner, "RCPT TO:<root@bnd.bund.de> RRVS=2020-03-19T11:13:00Z;ign0r3.th1s;othr_stuff", "250 ")

	// complete the transaction
	send(t, c, scanner, "DATA")
	send(t, c, scanner, "Hey <3\r\n.")

	opts := be.anonmsgs[0].RcptOpts
	require.Len(t, opts, 2)
	// WithinDuration with 0 compares the instants like time.Time.Equal.
	require.WithinDuration(t, time.Date(2014, time.April, 3, 23, 1, 0, 0, time.UTC),
		opts[0].RequireRecipientValidSince, 0)
	require.WithinDuration(t, time.Date(2020, time.March, 19, 11, 13, 0, 0, time.UTC),
		opts[1].RequireRecipientValidSince, 0)
}

func TestServerDELIVERBY(t *testing.T) {
	be, s, c, scanner, caps := testServerEhlo(t, nil,
		server.WithEnableDELIVERBY(true),
		server.WithMinimumDeliverInSeconds(50),
	)
	defer func() {
		_ = s.Close()
		_ = c.Close()
	}()

	require.True(t, caps["DELIVERBY 50"], "missing capability DELIVERBY 50")

	// RFC 2852 section 4 puts BY on MAIL FROM, so a bad value must be
	// rejected before a transaction is opened.
	// Syntax errors get 501 5.5.4 (RFC 2852 section 4).
	malformed := []string{
		"BY=",        // no value
		"BY=1234",    // no by-mode
		"BY=123;RT;", // trailing separator
		"BY=0;R",     // zero by-time is a syntax error with mode R
		"BY=-1;R",    // so is a negative one
	}
	for _, param := range malformed {
		res := send(t, c, scanner, "MAIL FROM:<root@nsa.gov> "+param)
		assert.True(t, strings.HasPrefix(res, "501 5.5.4"), "MAIL FROM with %q: want 501 5.5.4, got %q", param, res)
	}

	// A syntactically valid by-time below the server minimum is a different
	// failure: RFC 2852 section 3 requires a 55z reply, section 4 names 555
	// for a permanent server-specific refusal.
	res := send(t, c, scanner, "MAIL FROM:<root@nsa.gov> BY=100;RT")
	assert.True(t, strings.HasPrefix(res, "250 "), "MAIL FROM with BY=100;RT: want 250, got %q", res)
	expect(t, c, scanner, "RSET", "250 ")

	// Values the RFC requires the server to accept: exactly at the minimum
	// with mode R, and zero or negative with mode N (section 4).
	for _, param := range []string{"BY=50;R", "BY=0;N", "BY=-1;N"} {
		res := send(t, c, scanner, "MAIL FROM:<root@nsa.gov> "+param)
		assert.True(t, strings.HasPrefix(res, "250 "), "MAIL FROM with %q: want 250, got %q", param, res)
		expect(t, c, scanner, "RSET", "250 ")
	}

	// The parsed value reaches the backend on the completed transaction.
	expect(t, c, scanner, "MAIL FROM:<root@nsa.gov> BY=100;NT", "250 ")
	expect(t, c, scanner, "RCPT TO:<root@gchq.gov.uk>", "250 ")
	expect(t, c, scanner, "DATA", "354 ")
	expect(t, c, scanner, "Hey <3\r\n.", "250 ")

	require.Len(t, be.anonmsgs, 1)
	opts := be.anonmsgs[0].Opts
	require.NotNil(t, opts)
	require.NotNil(t, opts.DeliverBy)
	require.Equal(t, deltasmtp.DeliverByOptions{
		Seconds: 100,
		Mode:    deltasmtp.DeliverByNotify,
		Trace:   true,
	}, *opts.DeliverBy)
}

func TestServerMTPRIORITY(t *testing.T) {
	be, s, c, scanner, caps := testServerEhlo(t,
		nil, server.WithEnableMTPRIORITY(true),
	)
	defer func() {
		_ = s.Close()
		_ = c.Close()
	}()

	require.True(t, caps["MT-PRIORITY"], "missing capability MT-PRIORITY")

	// RFC 6710 section 3 puts MT-PRIORITY on MAIL FROM, so a bad value must
	// be rejected before a transaction is opened.
	malformed := []string{
		"MT-PRIORITY=",
		"MT-PRIORITY=foo",
		"MT-PRIORITY=-10",
		"MT-PRIORITY=10",
	}
	for _, param := range malformed {
		res := send(t, c, scanner, "MAIL FROM:<root@nsa.gov> "+param)
		assert.True(t, strings.HasPrefix(res, "501 5.5.4"), "MAIL FROM with %q: want 501 5.5.4, got %q", param, res)
	}

	// Range boundaries are accepted.
	for _, priority := range []int{-9, 0, 9} {
		res := send(t, c, scanner, fmt.Sprintf("MAIL FROM:<root@nsa.gov> MT-PRIORITY=%d", priority))
		assert.True(t, strings.HasPrefix(res, "250 "), "MAIL FROM with MT-PRIORITY=%d: want 250, got %q", priority, res)
		expect(t, c, scanner, "RSET", "250 ")
	}

	// The value reaches the backend on the completed transaction.
	const expectedPriority = -2

	expect(t, c, scanner, fmt.Sprintf("MAIL FROM:<root@nsa.gov> MT-PRIORITY=%d", expectedPriority), "250 ")
	expect(t, c, scanner, "RCPT TO:<root@gchq.gov.uk>", "250 ")
	expect(t, c, scanner, "DATA", "354 ")
	expect(t, c, scanner, "Hey <3\r\n.", "250 ")

	require.Len(t, be.anonmsgs, 1)
	opts := be.anonmsgs[0].Opts
	require.NotNil(t, opts)
	require.NotNil(t, opts.MTPriority)
	require.Equal(t, expectedPriority, *opts.MTPriority)
}

func TestServer_TooLongCommand(t *testing.T) {
	maxLineLength := 2000

	_, s, c, scanner := testServerAuthenticated(t, nil, server.WithMaxLineLength(maxLineLength))
	defer func() {
		_ = s.Close()
		_ = c.Close()
	}()

	expect(t, c, scanner, "MAIL FROM:<"+strings.Repeat("a", maxLineLength)+">", "500 5.4.0 ")
}

func TestServerShutdown(t *testing.T) {
	_, s, c, _ := testServerGreeted(t, nil)

	ctx := context.Background()
	errChan := make(chan error)
	go func() {
		defer close(errChan)

		errChan <- s.Shutdown(ctx)
		errChan <- s.Shutdown(ctx)
	}()

	select {
	case err := <-errChan:
		t.Fatal("Expected no err because conn is open:", err)
	default:
		_ = c.Close()
	}

	require.NoError(t, <-errChan)
	require.ErrorIs(t, <-errChan, server.ErrServerClosed)
}

const (
	dsnEnvelopeID  = "e=mc2"
	dsnEmailRFC822 = "e=mc2@example.com"
	dsnEmailUTF8   = "e=mc2@ドメイン名例.jp"
)

func TestServerDSN(t *testing.T) {
	be, s, c, scanner, caps := testServerEhlo(t, nil,
		server.WithEnableDSN(true),
	)
	defer func() {
		_ = s.Close()
		_ = c.Close()
	}()

	require.True(t, caps["DSN"], "missing capability DSN")

	expect(t, c, scanner, "MAIL FROM:<e=mc2@example.com> envID=e+3Dmc2 Ret=hdrs", "250 ")
	expect(t, c, scanner, "RCPT TO:<e=mc2@example.com> ORcpt=Rfc822;e+3Dmc2@example.com Notify=Never", "250 ")
	expect(t, c, scanner,
		"RCPT TO:<e=mc2@example.com> orcpt=Utf-8;e\\x{3D}mc2@\\x{30C9}\\x{30E1}\\x"+
			"{30A4}\\x{30F3}\\x{540D}\\x{4F8B}.jp notify=failure,delay",
		"250 ",
	)

	// go on as usual
	send(t, c, scanner, "DATA")
	expect(t, c, scanner, "Hey <3\r\n.", "250 ")
	require.Empty(t, be.messages)
	require.Len(t, be.anonmsgs, 1)

	msg := be.anonmsgs[0]
	require.Equal(t, deltasmtp.DSNReturnHeaders, msg.Opts.Return)
	require.Equal(t, dsnEnvelopeID, msg.Opts.EnvelopeID)
	require.Equal(t, []string{dsnEmailRFC822, dsnEmailRFC822}, msg.To)

	opts := msg.RcptOpts
	require.Len(t, opts, 2)
	require.Equal(t, []deltasmtp.DSNNotify{deltasmtp.DSNNotifyNever}, opts[0].Notify)
	require.Equal(t, deltasmtp.DSNAddressTypeRFC822, opts[0].OriginalRecipientType)
	require.Equal(t, dsnEmailRFC822, opts[0].OriginalRecipient)
	require.Equal(t, []deltasmtp.DSNNotify{deltasmtp.DSNNotifyFailure, deltasmtp.DSNNotifyDelayed}, opts[1].Notify)
	require.Equal(t, deltasmtp.DSNAddressTypeUTF8, opts[1].OriginalRecipientType)
	require.Equal(t, dsnEmailUTF8, opts[1].OriginalRecipient)
}

func TestSMTPUTF8Disabled(t *testing.T) {
	_, s, c, scanner, _ := testServerEhlo(t, nil,
		server.WithEnableSMTPUTF8(false),
	)
	defer func() {
		_ = s.Close()
		_ = c.Close()
	}()

	const notImplemented = "504 5.5.4 SMTPUTF8 is not implemented"
	require.Equal(t, notImplemented, send(t, c, scanner, "MAIL FROM:<e=mc2@example.com> SMTPUTF8"))
	require.Equal(t, notImplemented, send(t, c, scanner, "VRFY mc2@example.com SMTPUTF8"))
}

func TestServerDSNwithSMTPUTF8(t *testing.T) {
	be, s, c, scanner, caps := testServerEhlo(t, nil,
		server.WithEnableSMTPUTF8(true),
		server.WithEnableDSN(true),
	)
	defer func() {
		_ = s.Close()
		_ = c.Close()
	}()

	require.True(t, caps["DSN"], "missing capability DSN")
	require.True(t, caps["SMTPUTF8"], "missing capability SMTPUTF8")

	expect(t, c, scanner, "MAIL FROM:<e=mc2@example.com> ENVID=e+3Dmc2 RET=HDRS SMTPUTF8", "250 ")
	expect(t, c, scanner, "RCPT TO:<e=mc2@example.com> ORCPT=RFC822;e+3Dmc2@example.com NOTIFY=NEVER", "250 ")
	expect(t, c, scanner,
		"RCPT TO:<e=mc2@ドメイン名例.jp> ORCPT=UTF-8;e\\x{3D}mc2@\\x"+
			"{30C9}\\x{30E1}\\x{30A4}\\x{30F3}\\x{540D}\\x{4F8B}.jp NOTIFY=FAILURE,DELAY",
		"250 ",
	)
	expect(t, c, scanner, "RCPT TO:<e=mc2@ドメイン名例.jp> ORCPT=utf-8;e\\x{3D}mc2@ドメイン名例.jp NOTIFY=SUCCESS", "250 ")

	// go on as usual
	send(t, c, scanner, "DATA")
	expect(t, c, scanner, "Hey <3\r\n.", "250 ")
	require.Empty(t, be.messages)
	require.Len(t, be.anonmsgs, 1)

	msg := be.anonmsgs[0]
	require.Equal(t, deltasmtp.DSNReturnHeaders, msg.Opts.Return)
	require.Equal(t, dsnEnvelopeID, msg.Opts.EnvelopeID)
	// Non-ASCII UTF-8 is allowed in TO parameter value
	require.Equal(t, []string{dsnEmailRFC822, dsnEmailUTF8, dsnEmailUTF8}, msg.To)

	opts := msg.RcptOpts
	require.Len(t, opts, 3)
	require.Equal(t, []deltasmtp.DSNNotify{deltasmtp.DSNNotifyNever}, opts[0].Notify)
	require.Equal(t, deltasmtp.DSNAddressTypeRFC822, opts[0].OriginalRecipientType)
	require.Equal(t, dsnEmailRFC822, opts[0].OriginalRecipient)
	require.Equal(t, []deltasmtp.DSNNotify{deltasmtp.DSNNotifyFailure, deltasmtp.DSNNotifyDelayed}, opts[1].Notify)
	require.Equal(t, deltasmtp.DSNAddressTypeUTF8, opts[1].OriginalRecipientType)
	require.Equal(t, dsnEmailUTF8, opts[1].OriginalRecipient)
	// utf-8-addr-unitext form is allowed in ORCPT parameter value
	require.Equal(t, []deltasmtp.DSNNotify{deltasmtp.DSNNotifySuccess}, opts[2].Notify)
	require.Equal(t, deltasmtp.DSNAddressTypeUTF8, opts[2].OriginalRecipientType)
	require.Equal(t, dsnEmailUTF8, opts[2].OriginalRecipient)
}

func TestServerXOORG(t *testing.T) {
	be, s, c, scanner, caps := testServerEhlo(t, nil,
		server.WithEnableXOORG(true),
	)
	defer func() {
		_ = s.Close()
		_ = c.Close()
	}()

	require.True(t, caps["XOORG"], "missing capability XOORG")

	expect(t, c, scanner, "MAIL FROM:<e=mc2@example.com> XOORG=test.com", "250 ")
	expect(t, c, scanner, "RCPT TO:<e=mc2@example.com>", "250 ")

	// go on as usual
	send(t, c, scanner, "DATA")
	expect(t, c, scanner, "Hey <3\r\n.", "250 ")
	require.Empty(t, be.messages)
	require.Len(t, be.anonmsgs, 1)

	val := be.anonmsgs[0].Opts.XOORG
	require.NotNil(t, val)
	require.Equal(t, "test.com", *val)
}

func TestServer_DefaultMaxLineLength(t *testing.T) {
	_, s, c, scanner := testServerAuthenticated(t, nil)
	defer func() {
		_ = s.Close()
		_ = c.Close()
	}()

	expect(t, c, scanner, "MAIL FROM:<"+strings.Repeat("a", 12288)+">", "500 5.4.0 ")
}

func TestServer_DefaultMaxMessageBytes(t *testing.T) {
	_, s, c, _, caps := testServerEhlo(t, nil)
	defer func() {
		_ = s.Close()
		_ = c.Close()
	}()

	require.Contains(t, caps, "SIZE "+strconv.Itoa(32<<20))
}

// RFC 9422: MAILMAX and RCPTMAX are advertised with their defaults.
func TestServer_DefaultLimits(t *testing.T) {
	_, s, c, _, caps := testServerEhlo(t, nil)
	defer func() {
		_ = s.Close()
		_ = c.Close()
	}()

	require.Contains(t, caps, "LIMITS MAILMAX=1000 RCPTMAX=1000")
}

func TestServer_CommandTimeoutIdle(t *testing.T) {
	_, s, c, scanner := testServerGreeted(t, nil, server.WithCommandTimeout(100*time.Millisecond))
	defer func() {
		_ = s.Close()
		_ = c.Close()
	}()

	time.Sleep(300 * time.Millisecond)

	requirePrefix(t, readReply(t, c, scanner), "421 4.4.2 ")
	require.False(t, scan(t, c, scanner), "expected connection to be closed, got: %q", scanner.Text())
}

// requireIdleTimeout waits for the idle timeout reply and checks that it took at
// least the timeout and at most 125% of it (lazy renewal), with some slack.
func requireIdleTimeout(t *testing.T, c net.Conn, scanner *bufio.Scanner, since time.Time, timeout time.Duration) {
	t.Helper()
	reply := readReply(t, c, scanner)
	elapsed := time.Since(since)
	requirePrefix(t, reply, "421 4.4.2 ")
	require.GreaterOrEqual(t, elapsed, timeout-10*time.Millisecond)
	require.Less(t, elapsed, timeout*5/4+100*time.Millisecond)
}

// The command deadline is renewed lazily, but waiting for a command always has at
// least the command timeout, also right after a renewal was skipped.
func TestServer_CommandTimeoutRenewed(t *testing.T) {
	const timeout = 400 * time.Millisecond
	_, s, c, scanner := testServerGreeted(t, nil, server.WithCommandTimeout(timeout))
	defer func() {
		_ = s.Close()
		_ = c.Close()
	}()

	// 3.5 times the timeout in total
	for range 3 {
		time.Sleep(timeout / 5) // the renewal for this command is skipped
		expect(t, c, scanner, "NOOP", "250 ")

		time.Sleep(timeout * 19 / 20) // slow, but in time
		expect(t, c, scanner, "NOOP", "250 ")
	}

	requireIdleTimeout(t, c, scanner, time.Now(), timeout)
}

// The reply to a command gets a fresh deadline after the session handled it,
// a slow session doesn't let the write of the reply time out.
func TestServer_CommandTimeoutSlowSession(t *testing.T) {
	const timeout = 200 * time.Millisecond
	be := &backend{rcptDelay: 2 * timeout}
	_, s, c, scanner := testServerAuthenticated(t, be, server.WithCommandTimeout(timeout))
	defer func() {
		_ = s.Close()
		_ = c.Close()
	}()

	expect(t, c, scanner, "MAIL FROM:<root@nsa.gov>", "250 ")
	expect(t, c, scanner, "RCPT TO:<root@gchq.gov.uk>", "250 ")
}

// After a transfer the command timeout starts fresh with the reply. The transfer is
// quick, so without a renewal the data deadline would stay active.
func TestServer_CommandTimeoutAfterData(t *testing.T) {
	const timeout = 400 * time.Millisecond
	_, s, c, scanner := testServerAuthenticated(t, nil,
		server.WithCommandTimeout(timeout), server.WithDataTimeout(10*time.Second))
	defer func() {
		_ = s.Close()
		_ = c.Close()
	}()

	send(t, c, scanner, "MAIL FROM:<root@nsa.gov>")
	send(t, c, scanner, "RCPT TO:<root@gchq.gov.uk>")
	expect(t, c, scanner, "DATA", "354 ")
	expect(t, c, scanner, "From: root@nsa.gov\r\n\r\nHey\r\n.", "250 ")

	// not the data deadline of 10 seconds
	requireIdleTimeout(t, c, scanner, time.Now(), timeout)
}

// A client going silent in the middle of DATA is disconnected after the data timeout.
func TestServer_DataTimeoutStalled(t *testing.T) {
	_, s, c, scanner := testServerAuthenticated(t, nil, server.WithDataTimeout(100*time.Millisecond))
	defer func() {
		_ = s.Close()
		_ = c.Close()
	}()

	send(t, c, scanner, "MAIL FROM:<root@nsa.gov>")
	send(t, c, scanner, "RCPT TO:<root@gchq.gov.uk>")
	send(t, c, scanner, "DATA")
	_, _ = io.WriteString(c, "From: root@nsa.gov\r\n\r\nonly a part")

	requirePrefix(t, readReply(t, c, scanner), "421 4.4.2 ")
}

// DATA uses the data timeout, a transfer taking longer than the read timeout must succeed.
func TestServer_CommandTimeoutSlowData(t *testing.T) {
	be, s, c, scanner := testServerAuthenticated(t, nil, server.WithCommandTimeout(150*time.Millisecond))
	defer func() {
		_ = s.Close()
		_ = c.Close()
	}()

	send(t, c, scanner, "MAIL FROM:<root@nsa.gov>")
	send(t, c, scanner, "RCPT TO:<root@gchq.gov.uk>")
	expect(t, c, scanner, "DATA", "354 ")

	_, _ = io.WriteString(c, "From: root@nsa.gov\r\n\r\n")
	for range 6 {
		time.Sleep(50 * time.Millisecond)
		_, _ = io.WriteString(c, "slow line\r\n")
	}
	expect(t, c, scanner, ".", "250 ")
	require.Len(t, be.messages, 1)
}

// The data timeout limits the whole DATA transfer, even if the client keeps sending.
func TestServer_DataTimeoutWholeTransfer(t *testing.T) {
	_, s, c, scanner := testServerAuthenticated(t, nil, server.WithDataTimeout(150*time.Millisecond))
	defer func() {
		_ = s.Close()
		_ = c.Close()
	}()

	send(t, c, scanner, "MAIL FROM:<root@nsa.gov>")
	send(t, c, scanner, "RCPT TO:<root@gchq.gov.uk>")
	send(t, c, scanner, "DATA")

	_, _ = io.WriteString(c, "From: root@nsa.gov\r\n\r\n")
	for range 6 {
		time.Sleep(50 * time.Millisecond)
		_, _ = io.WriteString(c, "slow line\r\n")
	}
	expect(t, c, scanner, ".", "421 4.4.2 ")
}

// After a transfer the data deadline must not stay active, even if the read timeout is disabled.
func TestServer_DataTimeoutClearedAfterTransfer(t *testing.T) {
	_, s, c, scanner := testServerAuthenticated(t, nil,
		server.WithCommandTimeout(0), server.WithDataTimeout(100*time.Millisecond))
	defer func() {
		_ = s.Close()
		_ = c.Close()
	}()

	send(t, c, scanner, "MAIL FROM:<root@nsa.gov>")
	send(t, c, scanner, "RCPT TO:<root@gchq.gov.uk>")
	send(t, c, scanner, "DATA")
	expect(t, c, scanner, "From: root@nsa.gov\r\n\r\nHey\r\n.", "250 ")

	time.Sleep(200 * time.Millisecond)

	expect(t, c, scanner, "NOOP", "250 ")
}

// TestServer_MultiDigitEnhancedCode checks that a backend's enhanced code with a
// multi-digit detail (RFC 3463, e.g. Gmail's 5.7.26) goes out unchanged on every line.
func TestServer_MultiDigitEnhancedCode(t *testing.T) {
	rejected := deltasmtp.NewStatusM(550, deltasmtp.EnhancedCode{5, 7, 26}, []string{"DMARC", "policy"}).Err()
	_, c, scanner := limitTestServer(t, &backend{rejectAfterOpen: rejected}, 0)

	expect(t, c, scanner, "DATA", "354 ")
	require.Equal(t, "550-5.7.26 DMARC", send(t, c, scanner, "Hello\r\n."))
	require.Equal(t, "550 5.7.26 policy", readReply(t, c, scanner))
}

// A client that sends commands but never reads the replies is disconnected after the command timeout.
func TestServer_CommandTimeoutUnreadReplies(t *testing.T) {
	_, s, c, _ := testServerGreeted(t, nil, server.WithCommandTimeout(100*time.Millisecond))
	defer func() {
		_ = s.Close()
		_ = c.Close()
	}()

	noops := strings.Repeat("NOOP\r\n", 1000)
	stop := time.Now().Add(5 * time.Second)
	for time.Now().Before(stop) {
		_ = c.SetWriteDeadline(time.Now().Add(100 * time.Millisecond))
		_, err := io.WriteString(c, noops)
		var netErr net.Error
		if err != nil && (!errors.As(err, &netErr) || !netErr.Timeout()) {
			return // connection closed by the server
		}
	}
	t.Fatal("Expected the command timeout to close the connection")
}
