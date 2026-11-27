package client

import (
	"bufio"
	"bytes"
	"context"
	"crypto/tls"
	"crypto/x509"
	"encoding/base64"
	"errors"
	"fmt"
	"io"
	"net"
	"net/textproto"
	"strconv"
	"strings"
	"syscall"
	"testing"
	"time"

	"github.com/stretchr/testify/assert"
	"github.com/stretchr/testify/require"
	"github.com/uponusolutions/deltasmtp"
	"github.com/uponusolutions/deltasmtp/internal/smtpreader"
	"github.com/uponusolutions/deltasmtp/internal/smtpwriter"
	"github.com/uponusolutions/deltasmtp/tester"

	"github.com/uponusolutions/go-sasl"
)

// crlf replaces the line endings of s with CRLF.
func crlf(s string) string { return strings.ReplaceAll(s, "\n", "\r\n") }

// fakeClient returns a client on a fake connection that reads server and the
// buffer the client writes to.
func fakeClient(server string, opts ...Option) (*Client, *bytes.Buffer) {
	wrote := &bytes.Buffer{}
	c := New(opts...)
	c.setConn(tester.NewFakeConn(server, wrote))
	return c, wrote
}

// Don't send a trailing space on AUTH command when there's no initial response:
// https://github.com/golang/go/issues/17794
func TestClientAuthTrimSpace(t *testing.T) {
	c, wrote := fakeClient("334 notbase64\r\n501 5.0.0 Negotiation cancelled")
	require.Error(t, c.Auth(toServerNoRespAuth{}))
	require.NoError(t, c.Close())
	require.Equal(t, "AUTH FOOAUTH\r\n*\r\n", wrote.String())
}

// toServerNoRespAuth is an implementation of Auth that only implements
// the Start method, and returns "FOOAUTH", nil, nil. Notably, it returns
// nil for "toServer" so we can test that we don't send spaces at the end of
// the line. See TestClientAuthTrimSpace.
type toServerNoRespAuth struct{}

func (toServerNoRespAuth) Start() (proto string, toServer []byte, err error) {
	return "FOOAUTH", nil, nil
}

func (toServerNoRespAuth) Next(_ []byte) (toServer []byte, err error) {
	panic("unexpected call")
}

func TestBasic(t *testing.T) {
	cmdbuf := &bytes.Buffer{}
	fake := tester.NewFakeConn(crlf(basicServer), cmdbuf)

	c := &Client{
		session:  session{conn: fake},
		receiver: smtpreader.NewReceiver(fake, 4096, 0, 0),
		sender:   smtpwriter.NewSender(fake, 4096),
		cfg: Config{
			localName: "localhost",
		},
	}

	require.NoError(t, c.helo())
	require.Error(t, c.ehlo(), "expected first EHLO to fail")
	require.NoError(t, c.ehlo())

	ok, args := c.Extension("aUtH")
	require.True(t, ok, "expected AUTH supported")
	require.Equal(t, "LOGIN PLAIN", args)
	ok, _ = c.Extension("DSN")
	require.False(t, ok, "shouldn't support DSN")
	require.True(t, c.SupportsAuth("PLAIN"))
	size, ok := c.MaxMessageSize()
	require.True(t, ok, "expected SIZE supported")
	require.Equal(t, 35651584, size)

	require.Error(t, c.Mail("user@gmail.com", nil), "MAIL should require authentication")

	require.Error(t, c.Verify("user1@gmail.com", nil), "first VRFY: expected no verification")
	err := c.Verify("user2@gmail.com>\r\nDATA\r\nAnother injected message body\r\n.\r\nQUIT\r\n", nil)
	require.ErrorIs(t, err, ErrRefused, "VRFY should have failed due to a message injection attempt")
	require.NoError(t, c.Verify("user2@gmail.com", nil))

	require.NoError(t, c.Auth(sasl.NewPlainClient("", "user", "pass")))

	require.Error(t, c.Rcpt("golang-nuts@googlegroups.com>\r\nDATA\r\nInjected message body\r\n.\r\nQUIT\r\n", nil),
		"RCPT should have failed due to a message injection attempt")
	require.Error(t, c.Mail("user@gmail.com>\r\nDATA\r\nAnother injected message body\r\n.\r\nQUIT\r\n", nil),
		"MAIL should have failed due to a message injection attempt")
	require.NoError(t, c.Mail("user@gmail.com", nil))
	require.NoError(t, c.Rcpt("golang-nuts@googlegroups.com", nil))
	msg := `From: user@gmail.com
To: golang-nuts@googlegroups.com
Subject: Hooray for Go

Line 1
.Leading dot line .
Goodbye.`
	w, err := c.Data()
	require.NoError(t, err)
	_, err = w.Write([]byte(msg))
	require.NoError(t, err)
	require.NoError(t, w.Close())
	require.NoError(t, c.Quit())

	require.Equal(t, crlf(basicClient), cmdbuf.String())
}

func TestBasic_smtp(t *testing.T) {
	// RFC 2034 says that enhanced codes *SHOULD* be included in errors,
	// this means it can be violated hence we need to handle last
	// case properly.
	c, _ := fakeClient(crlf(`220 mx.google.com at your service
250-mx.google.com at your service
250 ENHANCEDSTATUSCODES
500 5.0.0 Failing with enhanced code
500 Failing without enhanced code
500-5.0.0 Failing with multiline and enhanced code
500 5.0.0 ... still failing
`))

	require.NoError(t, c.greet())
	require.NoError(t, c.Hello())

	var smtpErr *deltasmtp.Status
	require.ErrorAs(t, c.Mail("whatever", nil), &smtpErr)
	require.Equal(t, 500, smtpErr.Code)
	require.Equal(t, deltasmtp.EnhancedCode{5, 0, 0}, smtpErr.EnhancedCode)
	require.Equal(t, "Failing with enhanced code", smtpErr.Lines[0])

	require.ErrorAs(t, c.Mail("whatever", nil), &smtpErr)
	require.Equal(t, 500, smtpErr.Code)
	require.Equal(t, "Failing without enhanced code", smtpErr.Lines[0])

	require.ErrorAs(t, c.Mail("whatever", nil), &smtpErr)
	require.Equal(t, 500, smtpErr.Code)
	require.Equal(t, []string{"Failing with multiline and enhanced code", "... still failing"}, smtpErr.Lines)
}

func TestClient_TooLongLine(t *testing.T) {
	faultyServer := []string{
		"220 mx.google.com at your service\r\n",
		"250 2.0.0 Kk\r\n",
		"500 5.0.0 nU6XC5JJUfiuIkC7NhrxZz36Rl/rX",
		"pkfx9QdeZJ+rno6W5J9k9HvniyWXBBi1gOZ/CUX",
		"EI6K7Uony70eiVGGGkdFhP1rEvMGny1dqIRo3NM",
		"2NifrvvLIKGeX6HrYmkc7NMn9BwHyAnt5oLe5eN",
		"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",
		"EYEYEY\r\n",
		"250 2.0.0 Kk\r\n",
	}

	// The pipe is used to avoid bufio.Reader reading the too long line ahead
	// of time (in NewClient) and failing eariler than we expect.
	pr, pw := io.Pipe()

	go func() {
		for _, l := range faultyServer {
			_, err := pw.Write([]byte(l))
			assert.NoError(t, err)
		}
		assert.NoError(t, pw.Close())
	}()

	c := New()
	c.setConn(tester.NewFakeConnStream(pr, &bytes.Buffer{}))

	require.NoError(t, c.greet())
	require.NoError(t, c.Hello())
	require.ErrorIs(t, c.Mail("whatever", nil), deltasmtp.ErrTooLongLine)

	// The rest of the line is still unread, the connection is closed.
	require.False(t, c.Connected())
	require.ErrorIs(t, c.Mail("whatever", nil), ErrNotConnected)

	// A new connection on the same client isn't affected (the mailer reuses its client).
	c.setConn(tester.NewFakeConn("220 hello world\r\n250 hello\r\n250 2.1.0 OK\r\n", &bytes.Buffer{}))
	require.NoError(t, c.greet())
	require.NoError(t, c.Hello())
	require.NoError(t, c.Mail("whatever", nil))
}

var basicServer = `250 mx.google.com at your service
502 Unrecognized command.
250-mx.google.com at your service
250-SIZE 35651584
250-AUTH LOGIN PLAIN
250 8BITMIME
530 Authentication required
550 5.1.1 User unknown
252 Send some mail, I'll try my best
235 Accepted
250 Sender OK
250 Receiver OK
354 Go ahead
250 Data OK
221 OK
`

var basicClient = `HELO localhost
EHLO localhost
EHLO localhost
MAIL FROM:<user@gmail.com> BODY=8BITMIME
VRFY user1@gmail.com
VRFY user2@gmail.com
AUTH PLAIN AHVzZXIAcGFzcw==
MAIL FROM:<user@gmail.com> BODY=8BITMIME
RCPT TO:<golang-nuts@googlegroups.com>
DATA
From: user@gmail.com
To: golang-nuts@googlegroups.com
Subject: Hooray for Go

Line 1
..Leading dot line .
Goodbye.
.
QUIT
`

func TestNewClient(t *testing.T) {
	c, wrote := fakeClient(crlf(`220 hello world
250-mx.google.com at your service
250-SIZE 35651584
250-AUTH LOGIN PLAIN
250 8BITMIME
221 OK
`))
	defer func() { _ = c.Close() }()

	require.NoError(t, c.greet())
	require.NoError(t, c.Hello())

	ok, args := c.Extension("aUtH")
	require.True(t, ok, "expected AUTH supported")
	require.Equal(t, "LOGIN PLAIN", args)
	ok, _ = c.Extension("DSN")
	require.False(t, ok, "shouldn't support DSN")
	require.NoError(t, c.Quit())

	require.Equal(t, "EHLO localhost\r\nQUIT\r\n", wrote.String())
}

func TestNewClient2(t *testing.T) {
	c, wrote := fakeClient(crlf(`220 hello world
502 EH?
250-mx.google.com at your service
250-SIZE 35651584
250-AUTH LOGIN PLAIN
250 8BITMIME
221 OK
`))
	defer func() { _ = c.Close() }()

	require.NoError(t, c.greet())
	require.NoError(t, c.Hello())

	ok, _ := c.Extension("DSN")
	require.False(t, ok, "shouldn't support DSN")
	require.NoError(t, c.Quit())

	require.Equal(t, "EHLO localhost\r\nHELO localhost\r\nQUIT\r\n", wrote.String())
}

func TestHello(t *testing.T) {
	require.Len(t, helloClient, len(helloServer))

	for i := range helloServer {
		t.Run(strconv.Itoa(i), func(t *testing.T) {
			c, wrote := fakeClient(crlf(baseHelloServer + helloServer[i]))
			defer func() { _ = c.Close() }()

			c.cfg.localName = "customhost"

			require.NoError(t, c.greet())
			if i > 0 {
				require.NoError(t, c.Hello())
			}

			var err error
			switch i {
			case 0:
				c.cfg.localName = "customhost"
				err = c.Hello()
			case 1:
				err = c.StartTLS(nil, "fake.host")
				if err.Error() == "502 Not implemented" {
					err = nil
					_ = c.Quit()
				}
			case 2:
				err = c.Verify("test@example.com", nil)
			case 3:
				err = c.Auth(sasl.NewPlainClient("", "user", "pass"))
			case 4:
				err = c.Mail("test@example.com", nil)
			case 5:
				ok, _ := c.Extension("feature")
				assert.False(t, ok, "expected FEATURE not to be supported")
			case 6:
				err = c.Reset()
			case 7:
				err = c.Quit()
			case 8:
				if err = c.Verify("test@example.com", nil); err != nil {
					c.cfg.localName = "customhost"
					err = c.Hello()
				}
			case 9:
				err = c.Noop()
			default:
				require.FailNow(t, "unhandled command")
			}

			assert.NoError(t, err)
			assert.Equal(t, crlf(baseHelloClient+helloClient[i]), wrote.String())
		})
	}
}

var baseHelloServer = `220 hello world
502 EH?
250-mx.google.com at your service
250 FEATURE
`

var helloServer = []string{
	"",
	"502 Not implemented\n",
	"250 User is valid\n",
	"235 Accepted\n",
	"250 Sender ok\n",
	"",
	"250 Reset ok\n",
	"221 Goodbye\n",
	"250 Sender ok\n",
	"250 ok\n",
}

var baseHelloClient = `EHLO customhost
HELO customhost
`

var helloClient = []string{
	"",
	"STARTTLS\nQUIT\n",
	"VRFY test@example.com\n",
	"AUTH PLAIN AHVzZXIAcGFzcw==\n",
	"MAIL FROM:<test@example.com>\n",
	"",
	"RSET\n",
	"QUIT\n",
	"VRFY test@example.com\n",
	"NOOP\n",
}

func TestHello_421Response(t *testing.T) {
	c, wrote := fakeClient("220 hello world\r\n421 Service not available, closing transmission channel\r\n")
	defer func() { _ = c.Close() }()

	require.NoError(t, c.greet())

	c.cfg.localName = "customhost"

	var status *deltasmtp.Status
	require.ErrorAs(t, c.Hello(), &status)
	require.Equal(t, 421, status.Code)
	require.Equal(t, "Service not available, closing transmission channel", status.Lines[0])
	require.Equal(t, "EHLO customhost\r\n", wrote.String())
}

func TestAuthFailed(t *testing.T) {
	c, wrote := fakeClient(crlf(`220 hello world
250-mx.google.com at your service
250 AUTH LOGIN PLAIN
535-Invalid credentials
535 please see www.example.com
221 Goodbye
`))
	defer func() { _ = c.Close() }()

	require.NoError(t, c.greet())
	require.NoError(t, c.Hello())
	require.EqualError(t, c.Auth(sasl.NewPlainClient("", "user", "pass")),
		"535 Invalid credentials\nplease see www.example.com")
	require.NoError(t, c.Quit())

	require.Equal(t, "EHLO localhost\r\nAUTH PLAIN AHVzZXIAcGFzcw==\r\nQUIT\r\n", wrote.String())
}

func TestTLSConnState(t *testing.T) {
	keypair, err := tester.GenX509KeyPair("example.com")
	require.NoError(t, err)
	leaf, err := x509.ParseCertificate(keypair.Certificate[0])
	require.NoError(t, err)
	roots := x509.NewCertPool()
	roots.AddCert(leaf)

	for _, pipelining := range []bool{false, true} {
		t.Run(fmt.Sprintf("pipelining=%v", pipelining), func(t *testing.T) {
			f := &tester.FakeServer{
				Extensions: []string{"STARTTLS", "PIPELINING"},
				Handlers: map[string]tester.FakeHandler{"STARTTLS": func(s *tester.FakeSession, _ string) bool {
					s.Reply("220 Go ahead")
					s.StartTLS(&tls.Config{Certificates: []tls.Certificate{keypair}})
					return true
				}},
			}

			c := New(WithPipelining(pipelining))
			require.NoError(t, c.Dial(context.Background(), f.Listen(t)))
			require.NoError(t, c.StartTLS(&tls.Config{ServerName: "example.com", RootCAs: roots}, ""))

			cs, ok := c.TLSConnectionState()
			require.True(t, ok)
			require.NotZero(t, cs.Version)
			require.True(t, cs.HandshakeComplete)

			require.NoError(t, c.Quit())
			if pipelining {
				require.NoError(t, c.QuitResponse())
			}
			require.Equal(t, []string{"EHLO localhost", "STARTTLS", "EHLO localhost", "QUIT"}, f.Commands())
		})
	}
}

func TestClientXtext(t *testing.T) {
	c, wrote := fakeClient("220 hello world\r\n250 ok\r\n250 ok")

	c.session.ext = map[string]string{"AUTH": "PLAIN", "DSN": ""}
	email := "e=mc2@example.com"
	require.Error(t, c.Mail(email, &MailOptions{Auth: &email}))
	require.NoError(t, c.Rcpt(email, &deltasmtp.RcptOptions{
		OriginalRecipientType: deltasmtp.DSNAddressTypeUTF8,
		OriginalRecipient:     email,
	}))
	require.NoError(t, c.Close())
	require.Equal(t, "MAIL FROM:<e=mc2@example.com> AUTH=e+3Dmc2@example.com\r\n"+
		"RCPT TO:<e=mc2@example.com> ORCPT=UTF-8;e\\x{3D}mc2@example.com\r\n", wrote.String())
}

func TestClientDSN(t *testing.T) {
	const (
		envelopeID  = "e=mc2"
		emailRFC822 = "e=mc2@example.com"
		emailUTF8   = "e=mc2@ドメイン名例.jp"
	)
	c, wrote := fakeClient("220 hello world\r\n250 ok\r\n250 ok\r\n250 ok\r\n250 ok\r\n")

	c.session.ext = map[string]string{"DSN": ""}
	require.Error(t, c.Mail(emailRFC822, &MailOptions{
		Return:     deltasmtp.DSNReturnHeaders,
		EnvelopeID: envelopeID,
	}))
	require.NoError(t, c.Rcpt(emailRFC822, &deltasmtp.RcptOptions{
		OriginalRecipientType: deltasmtp.DSNAddressTypeRFC822,
		OriginalRecipient:     emailRFC822,
		Notify:                []deltasmtp.DSNNotify{deltasmtp.DSNNotifyNever},
	}))
	require.NoError(t, c.Rcpt(emailRFC822, &deltasmtp.RcptOptions{
		OriginalRecipientType: deltasmtp.DSNAddressTypeUTF8,
		OriginalRecipient:     emailUTF8,
		Notify:                []deltasmtp.DSNNotify{deltasmtp.DSNNotifyFailure, deltasmtp.DSNNotifyDelayed},
	}))
	c.session.ext["SMTPUTF8"] = ""
	require.NoError(t, c.Rcpt(emailUTF8, &deltasmtp.RcptOptions{
		OriginalRecipientType: deltasmtp.DSNAddressTypeUTF8,
		OriginalRecipient:     emailUTF8,
	}))
	require.NoError(t, c.Close())
	require.Equal(t, "MAIL FROM:<e=mc2@example.com> RET=HDRS ENVID=e+3Dmc2\r\n"+
		"RCPT TO:<e=mc2@example.com> NOTIFY=NEVER ORCPT=RFC822;e+3Dmc2@example.com\r\n"+
		"RCPT TO:<e=mc2@example.com> NOTIFY=FAILURE,DELAY ORCPT=UTF-8;e\\x{3D}mc2@"+
		"\\x{30C9}\\x{30E1}\\x{30A4}\\x{30F3}\\x{540D}\\x{4F8B}.jp\r\n"+
		"RCPT TO:<e=mc2@ドメイン名例.jp> ORCPT=UTF-8;e\\x{3D}mc2@ドメイン名例.jp\r\n", wrote.String())
}

// A SASL initial response too large to inline within the 512-octet command-line
// limit must be deferred to the first challenge instead of being appended to the
// AUTH command line. https://github.com/emersion/go-smtp/issues/301
func TestClientAuthLargeInitialResponse(t *testing.T) {
	// didHello is set below, so the first server line is the AUTH response.
	c, wrote := fakeClient("334 \r\n235 2.0.0 OK\r\n")

	resp := bytes.Repeat([]byte("x"), 600)
	require.NoError(t, c.Auth(largeInitialRespAuth{mech: "LARGE", resp: resp}))
	_ = c.Close()

	written := wrote.String()
	firstLine, _, _ := strings.Cut(written, "\r\n")
	assert.Equal(t, "AUTH LARGE", firstLine, "the initial response must be deferred")
	assert.LessOrEqual(t, len(firstLine)+2, 512, "AUTH command line exceeds the 512-octet limit")
	// The initial response must still be sent, on its own line.
	assert.Contains(t, written, "\r\n"+base64.StdEncoding.EncodeToString(resp)+"\r\n")
}

// A challenge in the reply to AUTH aborts the exchange instead of dropping the
// deferred initial response.
func TestClientAuthLargeInitialResponseChallenge(t *testing.T) {
	c, wrote := fakeClient("334 Y2hhbGxlbmdl\r\n501 5.7.0 Authentication aborted\r\n")

	require.Error(t, c.Auth(largeInitialRespAuth{mech: "LARGE", resp: bytes.Repeat([]byte("x"), 600)}))
	_ = c.Close()
	require.Equal(t, "AUTH LARGE\r\n*\r\n", wrote.String())
}

// An AUTH line of exactly 512 octets is still sent inline; one more octet defers it.
func TestClientAuthInitialResponseLimit(t *testing.T) {
	resp64 := strings.Repeat("eHh4", 125) // 500 octets
	for _, tc := range []struct {
		mech, server, client string
	}{
		{"ABCD", "235 2.0.0 OK\r\n", "AUTH ABCD " + resp64 + "\r\n"},
		{"ABCDE", "334 \r\n235 2.0.0 OK\r\n", "AUTH ABCDE\r\n" + resp64 + "\r\n"},
	} {
		c, wrote := fakeClient(tc.server)
		require.NoError(t, c.Auth(largeInitialRespAuth{mech: tc.mech, resp: bytes.Repeat([]byte("x"), 375)}), tc.mech)
		_ = c.Close()
		assert.Equal(t, tc.client, wrote.String(), tc.mech)
	}
}

// A mechanism without an initial response must answer the first challenge
// itself, not with an empty line.
func TestClientAuthNoInitialResponse(t *testing.T) {
	c, wrote := fakeClient("334 Y2hhbGxlbmdl\r\n235 2.0.0 OK\r\n")

	require.NoError(t, c.Auth(challengeAuth{}))
	_ = c.Close()
	require.Equal(t, "AUTH CHALLENGE\r\ncmVzcG9uc2U=\r\n", wrote.String())
}

type challengeAuth struct{}

func (challengeAuth) Start() (proto string, toServer []byte, err error) {
	return "CHALLENGE", nil, nil
}

func (challengeAuth) Next(_ []byte) (toServer []byte, err error) {
	return []byte("response"), nil
}

// largeInitialRespAuth returns a large SASL initial response from Start.
type largeInitialRespAuth struct {
	mech string
	resp []byte
}

func (a largeInitialRespAuth) Start() (proto string, toServer []byte, err error) {
	return a.mech, a.resp, nil
}

func (largeInitialRespAuth) Next(_ []byte) (toServer []byte, err error) {
	return nil, nil
}

// TestClientMailParams checks MAIL parameters of extensions. The MAIL reply is
// the greeting, so the result of Mail is ignored.
func TestClientMailParams(t *testing.T) {
	priority := 6
	for _, tc := range []struct {
		ext  string
		opts *MailOptions
		want string
	}{
		{"DELIVERBY", &MailOptions{DeliverBy: &deltasmtp.DeliverByOptions{
			Seconds: 100,
			Mode:    deltasmtp.DeliverByReturn,
			Trace:   true,
		}}, "MAIL FROM:<root@nsa.gov> BY=100;RT\r\n"},
		{"MT-PRIORITY", &MailOptions{MTPriority: &priority}, "MAIL FROM:<root@nsa.gov> MT-PRIORITY=6\r\n"},
	} {
		t.Run(tc.ext, func(t *testing.T) {
			c, wrote := fakeClient("220 hello world\r\n250 ok\r\n")
			c.session.ext = map[string]string{tc.ext: ""}
			_ = c.Mail("root@nsa.gov", tc.opts)
			_ = c.Close()
			require.Equal(t, tc.want, wrote.String())
		})
	}
}

func TestClientDialControl(t *testing.T) {
	addr := (&tester.FakeServer{}).Listen(t)
	errRefused := errors.New("refused")
	var seen []string
	c := New(WithDialControl(func(_, address string, _ syscall.RawConn) error {
		seen = append(seen, address)
		return errRefused
	}))

	err := c.Dial(context.Background(), addr)
	require.ErrorIs(t, err, errRefused)

	err = c.DialTLS(context.Background(), &tls.Config{ServerName: "example.com"}, addr)
	require.ErrorIs(t, err, errRefused)

	require.Equal(t, []string{addr, addr}, seen)
}

func TestClientDialErrorCloses(t *testing.T) {
	reject := func(s *tester.FakeSession, _ string) bool { s.Reply("554 go away"); return true }

	for name, tc := range map[string]struct {
		server *tester.FakeServer
		opts   []Option
		err    string
	}{
		"invalid local name": {
			server: &tester.FakeServer{},
			opts:   []Option{WithLocalName("evil\r\nRCPT TO:<x@example.com>")},
			err:    "must not contain CR or LF",
		},
		"hello rejected": {
			server: &tester.FakeServer{Handlers: map[string]tester.FakeHandler{"EHLO": reject, "HELO": reject}},
			err:    "go away",
		},
	} {
		t.Run(name, func(t *testing.T) {
			c := New(tc.opts...)
			require.ErrorContains(t, c.Dial(context.Background(), tc.server.Listen(t)), tc.err)
			require.False(t, c.Connected())
		})
	}
}

func TestClientDialClosesExisting(t *testing.T) {
	addr := (&tester.FakeServer{}).Listen(t)
	c := New()
	require.NoError(t, c.Dial(context.Background(), addr))
	first := c.session.conn

	// a failing dial must close the existing connection as well
	require.Error(t, c.Dial(context.Background(), "127.0.0.1:0"))
	require.False(t, c.Connected())
	_, err := first.Write([]byte("NOOP\r\n"))
	require.ErrorIs(t, err, net.ErrClosed)
}

// A failing dial must not report the server of a previous connection.
func TestClientDialResetsServerInfo(t *testing.T) {
	addr := (&tester.FakeServer{Extensions: []string{"PIPELINING"}}).Listen(t)
	c := New()
	require.NoError(t, c.Dial(context.Background(), addr))
	require.Equal(t, addr, c.ServerAddress())
	require.Equal(t, "fake", c.ServerName())
	ok, _ := c.Extension("PIPELINING")
	require.True(t, ok)

	// kept after disconnect
	require.NoError(t, c.Close())
	require.Equal(t, addr, c.ServerAddress())
	require.Equal(t, "fake", c.ServerName())

	// the TCP dial fails
	require.Error(t, c.Dial(context.Background(), "127.0.0.1:0"))
	require.Empty(t, c.ServerAddress())
	require.Empty(t, c.ServerName())
	ok, _ = c.Extension("PIPELINING")
	require.False(t, ok)

	// the TCP dial succeeds, but the greeting is rejected
	require.NoError(t, c.Dial(context.Background(), addr))
	l, err := net.Listen("tcp", "127.0.0.1:0")
	require.NoError(t, err)
	t.Cleanup(func() { _ = l.Close() })
	go func() {
		conn, err := l.Accept()
		if err == nil {
			_, _ = conn.Write([]byte("554 go away\r\n"))
			_ = conn.Close()
		}
	}()
	require.ErrorContains(t, c.Dial(context.Background(), l.Addr().String()), "go away")
	require.Equal(t, l.Addr().String(), c.ServerAddress())
	require.Empty(t, c.ServerName())
	ok, _ = c.Extension("PIPELINING")
	require.False(t, ok)
}

func TestClientMaxResponseLines(t *testing.T) {
	ehlo := func(lines int) string {
		return strings.Repeat("250-EXT\r\n", lines-1) + "250 LAST\r\n"
	}

	defaultMaxResponseLines := DefaultConfig().maxResponseLines
	require.Equal(t, 512, defaultMaxResponseLines)

	t.Run("default", func(t *testing.T) {
		c, _ := fakeClient(ehlo(defaultMaxResponseLines + 1))
		require.ErrorIs(t, c.ehlo(), smtpreader.ErrTooManyResponseLines)

		c, _ = fakeClient(ehlo(defaultMaxResponseLines))
		require.NoError(t, c.ehlo())
	})

	t.Run("configured", func(t *testing.T) {
		c, _ := fakeClient(ehlo(5), WithMaxResponseLines(4))
		require.ErrorIs(t, c.ehlo(), smtpreader.ErrTooManyResponseLines)
	})

	t.Run("disabled", func(t *testing.T) {
		c, _ := fakeClient(ehlo(10*defaultMaxResponseLines), WithMaxResponseLines(0))
		require.NoError(t, c.ehlo())
	})
}

func TestClientPipeliningDefault(t *testing.T) {
	require.True(t, DefaultConfig().pipelining)
}

func TestClientBufferSizeDefaults(t *testing.T) {
	require.Equal(t, 4096, DefaultConfig().readerSize)
	require.Equal(t, 32<<10, DefaultConfig().writerSize)
}

func TestClientChunking(t *testing.T) {
	require.True(t, DefaultConfig().chunking)
	require.Equal(t, 2<<20, DefaultConfig().chunkingBufferSize)

	body := strings.Repeat("x", 3<<20)

	// send connects a client with opts to a fake CHUNKING server, sends body
	// and returns what was written to the server.
	send := func(t *testing.T, size int, src io.Reader, opts ...Option) string {
		c, wrote := fakeClient("250-localhost\r\n250 CHUNKING\r\n"+strings.Repeat("250 2.0.0 OK\r\n", 8), opts...)
		require.NoError(t, c.ehlo())

		w, err := c.Content(size)
		require.NoError(t, err)
		_, err = io.Copy(w.Writer(), src)
		require.NoError(t, err)
		require.NoError(t, w.Close())
		return wrote.String()
	}
	// hides WriterTo of strings.Reader, so io.Copy uses ReadFrom of the writer
	plain := func(s string) io.Reader { return struct{ io.Reader }{strings.NewReader(s)} }

	t.Run("known size is sent as single chunk", func(t *testing.T) {
		out := send(t, len(body), plain(body))
		require.Equal(t, 1, strings.Count(out, "BDAT "))
		require.Contains(t, out, "BDAT "+strconv.Itoa(len(body))+" LAST\r\n")
	})

	t.Run("unknown size is chunked by the default buffer", func(t *testing.T) {
		out := send(t, 0, plain(body))
		require.Equal(t, 2, strings.Count(out, "BDAT "))
		require.Contains(t, out, "BDAT "+strconv.Itoa(2<<20)+"\r\n")
		require.Contains(t, out, "BDAT "+strconv.Itoa(len(body)-2<<20)+" LAST\r\n")
	})

	t.Run("unknown size is chunked by a configured buffer", func(t *testing.T) {
		out := send(t, 0, plain(body), WithChunkingBufferSize(1<<20))
		// the third full buffer is sent before EOF is known, so an empty last chunk follows
		require.Equal(t, 3, strings.Count(out, "BDAT "+strconv.Itoa(1<<20)+"\r\n"))
		require.Equal(t, 4, strings.Count(out, "BDAT "))
		require.True(t, strings.HasSuffix(out, "BDAT 0 LAST\r\n"))
	})

	t.Run("a pooled buffer is used without its old content", func(t *testing.T) {
		// larger than needed and full of stale data of another message
		stale := bytes.Repeat([]byte("J"), 4<<20)
		chunkingBuffers.Put(&stale)

		out := send(t, 0, plain("abc"))
		require.Contains(t, out, "BDAT 3 LAST\r\nabc")
		require.NotContains(t, out, "J")
	})

	t.Run("the buffer is released when the content is closed", func(t *testing.T) {
		c, _ := fakeClient("250-localhost\r\n250 CHUNKING\r\n250 2.0.0 OK\r\n")
		require.NoError(t, c.ehlo())

		w, err := c.Bdat(0)
		require.NoError(t, err)
		require.NotNil(t, w.chunkingBuffer)
		_, err = io.WriteString(w, "abc")
		require.NoError(t, err)
		require.NoError(t, w.Close())
		require.Nil(t, w.chunkingBuffer)

		// the buffer may be in use elsewhere, writes must not reach it
		_, err = io.WriteString(w, "def")
		require.ErrorIs(t, err, ErrContentClosed)
		_, err = io.WriteString(w.Writer(), "def")
		require.ErrorIs(t, err, ErrContentClosed)
	})

	t.Run("the buffer is released when the connection is gone", func(t *testing.T) {
		c, _ := fakeClient("250-localhost\r\n250 CHUNKING\r\n")
		require.NoError(t, c.ehlo())

		w, err := c.Bdat(0)
		require.NoError(t, err)
		_, err = io.WriteString(w, "abc")
		require.NoError(t, err)
		require.NoError(t, c.Close())

		require.ErrorIs(t, w.Close(), ErrNotConnected)
		require.Nil(t, w.chunkingBuffer)
		_, err = io.WriteString(w.Writer(), "def")
		require.ErrorIs(t, err, ErrContentClosed)
	})

	t.Run("zero buffer size disables buffering", func(t *testing.T) {
		out := send(t, 0, strings.NewReader("abc"), WithChunkingBufferSize(0))
		require.Contains(t, out, "BDAT 3\r\nabcBDAT 0 LAST\r\n")
	})

	t.Run("disabled chunking uses DATA", func(t *testing.T) {
		c, wrote := fakeClient("250-localhost\r\n250 CHUNKING\r\n354 go ahead\r\n250 2.0.0 OK\r\n", WithChunking(false))
		require.NoError(t, c.ehlo())

		w, err := c.Content(3)
		require.NoError(t, err)
		_, err = io.WriteString(w, "abc")
		require.NoError(t, err)
		require.NoError(t, w.Close())
		require.Contains(t, wrote.String(), "DATA\r\nabc\r\n.\r\n")
		require.NotContains(t, wrote.String(), "BDAT")

		_, err = c.Bdat(0)
		require.ErrorContains(t, err, "chunking is disabled")
	})
}

// The writers of the message content are reused for every message of a
// connection, a message must not leave state behind for the next one. The
// first message ends in the middle of a line, the leading dot of the second
// still has to be stuffed.
func TestClientContentWritersReused(t *testing.T) {
	messages := []string{"no newline", ".dot\r\n"}

	tests := []struct {
		name    string
		ext     string
		reply   string // to the start and the end of a message
		content func(c *Client, msg string) (*ContentCloser, error)
		opts    []Option
		want    []string
	}{
		{
			name:    "DATA",
			ext:     "8BITMIME",
			reply:   "354 go ahead\r\n250 2.0.0 OK\r\n",
			content: func(c *Client, _ string) (*ContentCloser, error) { return c.Data() },
			want:    []string{"DATA\r\nno newline\r\n.\r\n", "DATA\r\n..dot\r\n.\r\n"},
		},
		{
			name:    "BDAT known size",
			ext:     "CHUNKING",
			reply:   "250 2.0.0 OK\r\n",
			content: func(c *Client, msg string) (*ContentCloser, error) { return c.Bdat(len(msg)) },
			want:    []string{"BDAT 10 LAST\r\nno newline", "BDAT 6 LAST\r\n.dot\r\n"},
		},
		{
			name:    "BDAT buffered",
			ext:     "CHUNKING",
			reply:   "250 2.0.0 OK\r\n",
			content: func(c *Client, _ string) (*ContentCloser, error) { return c.Bdat(0) },
			want:    []string{"BDAT 10 LAST\r\nno newline", "BDAT 6 LAST\r\n.dot\r\n"},
		},
		{
			name:    "BDAT unbuffered",
			ext:     "CHUNKING",
			reply:   "250 2.0.0 OK\r\n250 2.0.0 OK\r\n",
			content: func(c *Client, _ string) (*ContentCloser, error) { return c.Bdat(0) },
			opts:    []Option{WithChunkingBufferSize(0)},
			want:    []string{"BDAT 10\r\nno newlineBDAT 0 LAST\r\n", "BDAT 6\r\n.dot\r\nBDAT 0 LAST\r\n"},
		},
	}
	for _, tc := range tests {
		t.Run(tc.name, func(t *testing.T) {
			c, wrote := fakeClient("250-localhost\r\n250 "+tc.ext+"\r\n"+strings.Repeat(tc.reply, len(messages)), tc.opts...)
			require.NoError(t, c.ehlo())

			for _, msg := range messages {
				w, err := tc.content(c, msg)
				require.NoError(t, err)
				_, err = io.WriteString(w, msg)
				require.NoError(t, err)
				require.NoError(t, w.Close())
			}

			_, out, _ := strings.Cut(wrote.String(), "\r\n") // without EHLO
			require.Equal(t, strings.Join(tc.want, ""), out)
		})
	}
}

// TestClientProtocolErrorCloses checks that the connection is closed if a reply
// can't be read completely. The rest of the reply would otherwise be read as the
// reply of the next command, every reply after that off by one.
func TestClientProtocolErrorCloses(t *testing.T) {
	// RFC 2034: the same enhanced code on every line of a reply
	const malformed = "550-5.1.1 first\r\n550 5.1.2 last\r\n"

	connect := func(t *testing.T, server string, opts ...Option) *Client {
		t.Helper()
		c, _ := fakeClient(server, opts...)
		require.NoError(t, c.ehlo())
		return c
	}
	requireClosed := func(t *testing.T, c *Client, err error) {
		t.Helper()
		var protoErr textproto.ProtocolError
		require.ErrorAs(t, err, &protoErr)
		require.False(t, c.Connected())
	}

	t.Run("status reply keeps the connection", func(t *testing.T) {
		c := connect(t, "250 localhost\r\n550 5.1.1 unknown\r\n250 2.1.5 OK\r\n")

		var status *deltasmtp.Status
		require.ErrorAs(t, c.Rcpt("a@example.com", nil), &status)
		require.True(t, c.Connected())
		require.NoError(t, c.Rcpt("b@example.com", nil))
	})

	t.Run("malformed reply", func(t *testing.T) {
		c := connect(t, "250 localhost\r\n"+malformed+"250 2.1.5 OK\r\n")

		requireClosed(t, c, c.Rcpt("a@example.com", nil))
		require.ErrorIs(t, c.Rcpt("b@example.com", nil), ErrNotConnected)
	})

	t.Run("malformed reply with pipelining", func(t *testing.T) {
		c := connect(t, "250-localhost\r\n250 PIPELINING\r\n250 2.1.0 OK\r\n"+malformed+"354 go ahead\r\n",
			WithPipelining(true))

		require.NoError(t, c.Mail("a@example.com", nil))
		require.NoError(t, c.Rcpt("b@example.com", nil))
		w, err := c.Data()
		require.NoError(t, err)
		require.Nil(t, w)

		require.NoError(t, c.MailResponse())
		requireClosed(t, c, c.RcptResponse())
		_, err = c.DataResponse()
		require.ErrorIs(t, err, ErrNotConnected)
	})

	t.Run("malformed reply to a BDAT chunk", func(t *testing.T) {
		c := connect(t, "250-localhost\r\n250 CHUNKING\r\n"+malformed, WithChunkingBufferSize(0))

		w, err := c.Content(0)
		require.NoError(t, err)
		_, err = io.WriteString(w, "abc")
		requireClosed(t, c, err)
		require.ErrorIs(t, w.Close(), ErrNotConnected)
	})
}

// timeoutServer greets, answers EHLO with ext and every following line up to n with 250,
// then hands the connection to stall.
func timeoutServer(t *testing.T, ext string, n int, stall func(c net.Conn, r *bufio.Reader)) string {
	t.Helper()
	l, err := net.Listen("tcp", "127.0.0.1:0")
	require.NoError(t, err)
	t.Cleanup(func() { _ = l.Close() })
	go func() {
		c, err := l.Accept()
		if err != nil {
			return
		}
		defer func() { _ = c.Close() }()
		r := bufio.NewReader(c)
		_, _ = io.WriteString(c, "220 localhost ESMTP\r\n")
		_, _ = r.ReadString('\n')
		_, _ = io.WriteString(c, "250-localhost\r\n250 "+ext+"\r\n")
		for range n {
			_, _ = r.ReadString('\n')
			_, _ = io.WriteString(c, "250 ok\r\n")
		}
		stall(c, r)
	}()
	return l.Addr().String()
}

// startData answers DATA with 354.
func startData(c net.Conn, r *bufio.Reader) {
	_, _ = r.ReadString('\n')
	_, _ = io.WriteString(c, "354 go ahead\r\n")
}

// readData reads the message content up to the final dot.
func readData(r *bufio.Reader) {
	for {
		line, err := r.ReadString('\n')
		if err != nil || line == ".\r\n" {
			return
		}
	}
}

// startTransaction dials addr and sends MAIL and RCPT.
func startTransaction(t *testing.T, c *Client, addr string) {
	t.Helper()
	require.NoError(t, c.Dial(context.Background(), addr))
	require.NoError(t, c.Mail("a@example.org", nil))
	require.NoError(t, c.Rcpt("b@example.org", nil))
}

// sendData sends a short message with DATA.
func sendData(t *testing.T, c *Client) {
	t.Helper()
	w, err := c.Data()
	require.NoError(t, err)
	_, err = w.Write([]byte("Subject: test\r\n\r\nHey\r\n"))
	require.NoError(t, err)
	require.NoError(t, w.Close())
}

// requireTimeout requires err to be a network timeout.
func requireTimeout(t *testing.T, err error) {
	t.Helper()
	var netErr net.Error
	require.ErrorAs(t, err, &netErr)
	require.True(t, netErr.Timeout())
}

// The command deadline is renewed lazily, but every command still has at least the
// command timeout, also right after a renewal was skipped. A reply that never comes
// fails after at most 125% of the timeout.
func TestClientCommandTimeoutRenewed(t *testing.T) {
	const timeout = 400 * time.Millisecond
	addr := timeoutServer(t, "8BITMIME", 0, func(c net.Conn, r *bufio.Reader) {
		for range 3 {
			_, _ = r.ReadString('\n')
			time.Sleep(timeout / 5)
			_, _ = io.WriteString(c, "250 ok\r\n")
			_, _ = r.ReadString('\n')     // the renewal for this command is skipped
			time.Sleep(timeout * 19 / 20) // slow, but in time
			_, _ = io.WriteString(c, "250 ok\r\n")
		}
		_, _ = io.Copy(io.Discard, r) // read, never reply
	})
	c := New(WithCommandTimeout(timeout))
	require.NoError(t, c.Dial(context.Background(), addr))

	// 3.5 times the timeout in total
	for range 6 {
		require.NoError(t, c.Noop())
	}

	start := time.Now()
	err := c.Noop()
	elapsed := time.Since(start)
	requireTimeout(t, err)
	require.GreaterOrEqual(t, elapsed, timeout)
	require.Less(t, elapsed, timeout*5/4+100*time.Millisecond)
}

// A server that never completes the TLS handshake of DialTLS fails it after the
// TLS handshake timeout, not the dial timeout.
func TestClientTLSHandshakeTimeoutDialTLS(t *testing.T) {
	l, err := net.Listen("tcp", "127.0.0.1:0")
	require.NoError(t, err)
	t.Cleanup(func() { _ = l.Close() })
	go func() {
		c, err := l.Accept()
		if err == nil {
			defer func() { _ = c.Close() }()
			_, _ = io.Copy(io.Discard, c) // read, never answer
		}
	}()

	c := New(WithTLSHandshakeTimeout(100 * time.Millisecond))
	start := time.Now()
	err = c.DialTLS(context.Background(), nil, l.Addr().String())
	requireTimeout(t, err)
	require.Less(t, time.Since(start), 3*time.Second)
	require.False(t, c.Connected())
}

// A zero timeout disables the timeout instead of failing at once.
func TestClientZeroTimeouts(t *testing.T) {
	addr := timeoutServer(t, "8BITMIME", 1, func(net.Conn, *bufio.Reader) {})
	c := New(WithCommandTimeout(0), WithDataTimeout(0))
	require.NoError(t, c.Dial(context.Background(), addr))
	require.NoError(t, c.Noop())
	require.NoError(t, c.Close())
}

// A server that stops reading the message content doesn't block the client forever.
func TestClientDataTimeoutDataWrite(t *testing.T) {
	addr := timeoutServer(t, "8BITMIME", 2, func(c net.Conn, r *bufio.Reader) {
		startData(c, r)
		time.Sleep(5 * time.Second) // stop reading
	})
	c := New(WithDataTimeout(100 * time.Millisecond))
	startTransaction(t, c, addr)
	w, err := c.Data()
	require.NoError(t, err)

	line := []byte(strings.Repeat("a", 1022) + "\r\n")
	start := time.Now()
	for err == nil {
		_, err = w.Write(line)
	}
	requireTimeout(t, err)
	require.Less(t, time.Since(start), 3*time.Second)
	require.False(t, c.Connected(), "a partly sent message must close the connection")
}

// A server that never replies to a BDAT chunk doesn't block the client forever.
func TestClientDataTimeoutBdatReply(t *testing.T) {
	addr := timeoutServer(t, "CHUNKING", 2, func(_ net.Conn, r *bufio.Reader) {
		_, _ = io.Copy(io.Discard, r) // read, never reply
	})
	c := New(WithDataTimeout(100*time.Millisecond), WithChunkingBufferSize(0))
	startTransaction(t, c, addr)
	w, err := c.Bdat(0)
	require.NoError(t, err)

	start := time.Now()
	_, err = w.Write([]byte("Subject: test\r\n"))
	requireTimeout(t, err)
	require.Less(t, time.Since(start), 3*time.Second)
	require.False(t, c.Connected())
}

// The data timeout covers the whole transfer, not single writes. This includes
// writes through Writer(), as done by the mailer.
func TestClientDataTimeoutWholeTransfer(t *testing.T) {
	addr := timeoutServer(t, "8BITMIME", 2, func(c net.Conn, r *bufio.Reader) {
		startData(c, r)
		_, _ = io.Copy(io.Discard, r) // read, never reply
	})
	c := New(WithDataTimeout(150 * time.Millisecond))
	startTransaction(t, c, addr)
	w, err := c.Data()
	require.NoError(t, err)

	for range 6 {
		time.Sleep(50 * time.Millisecond)
		_, err = w.Writer().Write([]byte("slow line\r\n"))
		require.NoError(t, err) // buffered
	}
	requireTimeout(t, w.Close())
	require.False(t, c.Connected())
}

// After a transfer the data deadline must not stay active, even if the command timeout is disabled.
func TestClientDataTimeoutClearedAfterTransfer(t *testing.T) {
	addr := timeoutServer(t, "8BITMIME", 2, func(c net.Conn, r *bufio.Reader) {
		startData(c, r)
		readData(r)
		_, _ = io.WriteString(c, "250 queued\r\n")
		_, _ = r.ReadString('\n')
		_, _ = io.WriteString(c, "250 ok\r\n")
	})
	c := New(WithCommandTimeout(0), WithDataTimeout(100*time.Millisecond))
	startTransaction(t, c, addr)
	sendData(t, c)

	time.Sleep(200 * time.Millisecond)
	require.NoError(t, c.Noop())
}

// After a quick transfer the next command gets the command timeout again, not the
// rest of the data deadline.
func TestClientCommandTimeoutAfterTransfer(t *testing.T) {
	addr := timeoutServer(t, "8BITMIME", 2, func(c net.Conn, r *bufio.Reader) {
		startData(c, r)
		readData(r)
		_, _ = io.WriteString(c, "250 queued\r\n")
		_, _ = r.ReadString('\n')
		time.Sleep(200 * time.Millisecond) // after the data deadline
		_, _ = io.WriteString(c, "250 ok\r\n")
	})
	c := New(WithCommandTimeout(time.Minute), WithDataTimeout(100*time.Millisecond))
	startTransaction(t, c, addr)
	sendData(t, c)

	require.NoError(t, c.Noop())
}

func TestClientDefaultTimeouts(t *testing.T) {
	cfg := DefaultConfig()
	require.Equal(t, 5*time.Minute, cfg.commandTimeout)
	require.Equal(t, 12*time.Minute, cfg.dataTimeout)
	require.Equal(t, 30*time.Second, cfg.tlsHandshakeTimeout)
	require.Equal(t, 30*time.Second, cfg.dialTimeout)
}

func TestGetChunkingBuffer(t *testing.T) {
	small := make([]byte, 10)
	chunkingBuffers.Put(&small)

	// a pooled buffer that is too small is never returned
	b := getChunkingBuffer(100)
	require.GreaterOrEqual(t, cap(*b), 100)
	require.GreaterOrEqual(t, len(*b), 100)
}

// TestMailVerifyUTF8 checks that SMTPUTF8 is only sent if requested.
func TestMailVerifyUTF8(t *testing.T) {
	c, wrote := fakeClient("250 OK\r\n250 OK\r\n250 OK\r\n250 OK\r\n")
	c.session.ext = map[string]string{}

	require.ErrorContains(t, c.Mail("a@example.org", &MailOptions{SMTPUTF8: true}), "server does not support SMTPUTF8")
	require.ErrorContains(t, c.Verify("a@example.org", &VrfyOptions{SMTPUTF8: true}), "server does not support SMTPUTF8")

	// Not sent unless requested.
	c.session.ext["SMTPUTF8"] = ""
	require.NoError(t, c.Mail("a@example.org", nil))
	require.NoError(t, c.Verify("a@example.org", &VrfyOptions{}))

	require.NoError(t, c.Mail("jösé@example.org", &MailOptions{SMTPUTF8: true}))
	require.NoError(t, c.Verify("jösé@example.org", &VrfyOptions{SMTPUTF8: true}))
	require.NoError(t, c.Close())

	require.Equal(t, "MAIL FROM:<a@example.org>\r\n"+
		"VRFY a@example.org\r\n"+
		"MAIL FROM:<jösé@example.org> SMTPUTF8\r\n"+
		"VRFY jösé@example.org SMTPUTF8\r\n", wrote.String())
}

// TestClient421Closes checks that a 421 reply closes the connection, the server closes
// it as well (RFC 5321 section 3.8), also if any code is expected.
func TestClient421Closes(t *testing.T) {
	for _, expect := range []int{250, 0} { // 0 expects any code
		f := &tester.FakeServer{Handlers: map[string]tester.FakeHandler{
			"NOOP": func(s *tester.FakeSession, _ string) bool {
				s.Reply("421 4.3.2 shutting down")
				return true // a misbehaving server keeps it open
			},
		}}
		c := New()
		require.NoError(t, c.Dial(context.Background(), f.Listen(t)))

		err := c.cmdValid(pipeliningTypeForbidden, expect, "NOOP")
		if expect != 0 {
			require.ErrorContains(t, err, "421 4.3.2")
		}
		require.False(t, c.Connected())
	}
}
