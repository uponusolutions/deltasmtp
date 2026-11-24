package mailer

import (
	"context"
	"crypto/tls"
	"crypto/x509"
	"errors"
	"fmt"
	"log"
	"log/slog"
	"slices"
	"strings"
	"sync"
	"sync/atomic"
	"syscall"
	"testing"
	"time"

	"github.com/uponusolutions/deltasmtp"
	"github.com/uponusolutions/deltasmtp/resolve"
	"github.com/uponusolutions/deltasmtp/server"
	"github.com/uponusolutions/deltasmtp/tester"
	"github.com/uponusolutions/deltasmtp/tester/testserver"

	"github.com/stretchr/testify/assert"
	"github.com/stretchr/testify/require"
	"github.com/uponusolutions/deltasmtp/client"
)

// backend rejects every recipient whose local part starts with "notfound",
// naming the address in the reply so tests can tell the rejections apart.
var backend = testserver.Backend{
	Mails: sync.Map{},
	Rcpt: func(_ context.Context, to string, _ *deltasmtp.RcptOptions) error {
		if strings.HasPrefix(to, "notfound") {
			return deltasmtp.NewStatusS(550, deltasmtp.NoEnhancedCode, "not found "+to)
		}
		return nil
	},
}

// testCert secures the test servers via STARTTLS, testRoots trusts it.
var testCert, testRoots = func() (tls.Certificate, *x509.CertPool) {
	cert, err := tester.GenX509KeyPair("localhost")
	if err != nil {
		panic(err)
	}
	leaf, err := x509.ParseCertificate(cert.Certificate[0])
	if err != nil {
		panic(err)
	}
	roots := x509.NewCertPool()
	roots.AddCert(leaf)
	return cert, roots
}()

// withTestServer sets the server addresses and trusts the test certificate.
func withTestServer(addrs ...string) Option {
	return func(c *Config) {
		WithServerAddresses(addrs...)(c)
		WithTLSConfig(&tls.Config{ServerName: "localhost", RootCAs: testRoots})(c)
	}
}

var serverTLS = server.WithTLSConfig(&tls.Config{Certificates: []tls.Certificate{testCert}})

var s = []*server.Server{
	testserver.Standard(
		serverTLS,
		server.WithBackend(&backend),
		server.WithEnableCHUNKING(false),
		server.WithMaxRecipients(1000),
	),
	testserver.Standard(
		serverTLS,
		server.WithBackend(&backend),
		server.WithWriterSize(1),
		server.WithReaderSize(1),
		server.WithEnableCHUNKING(false),
		server.WithMaxRecipients(1000),
	),
	testserver.Standard(
		serverTLS,
		server.WithBackend(&backend),
		server.WithEnableCHUNKING(true),
		server.WithMaxRecipients(0),
	),
}

var addr []string

func TestMain(m *testing.M) {
	addr = make([]string, len(s))

	for i, sc := range s {
		listen, err := sc.Listen()
		if err != nil {
			slog.Error("error listen server", slog.Any("error", err))
		}
		addr[i] = listen.Addr().String()
		go func() {
			if err := sc.Serve(context.Background(), listen); err != nil {
				log.Printf("smtp server response %s", err)
			}
		}()
		// nolint:revive
		defer func() {
			if err := sc.Close(); err != nil {
				slog.Error("error closing server", "err", err)
			}
		}()
	}

	m.Run()
}

func TestClient_DisconnectTwicePipeline(t *testing.T) {
	c := New(withTestServer(addr[0]), WithBasic(client.WithPipelining(true)))
	require.NoError(t, c.Connect(t.Context()))
	require.NoError(t, c.Terminate())
	require.NoError(t, c.Disconnect())
}

func TestClient_DialControl(t *testing.T) {
	errRefused := errors.New("refused")
	var seen []string
	c := New(withTestServer(addr[0]), WithBasic(client.WithDialControl(func(_, address string, _ syscall.RawConn) error {
		seen = append(seen, address)
		return errRefused
	})))

	require.ErrorIs(t, c.Connect(t.Context()), errRefused)
	// The server listens on all interfaces, its address may be tried in more than one family.
	require.NotEmpty(t, seen)

	c = New(withTestServer(addr[0]), WithBasic(client.WithDialControl(func(string, string, syscall.RawConn) error {
		return nil
	})))
	require.NoError(t, c.Connect(t.Context()))
	require.NoError(t, c.Disconnect())
}

func TestClient_ChunkingErrors(t *testing.T) {
	c := New(withTestServer(addr[0]))
	require.NotNil(t, c)

	require.NoError(t, c.Connect(context.Background()))
	defer func() {
		assert.NoError(t, c.Terminate())

		// Calling again must be ok.
		assert.NoError(t, c.Disconnect())
	}()

	// server doesn't support chunking
	_, err := c.client.Bdat(0)
	require.ErrorContains(t, err, "doesn't support chunking")

	assert.NoError(t, c.Disconnect())

	c = New(withTestServer(addr[0]), WithBasic(client.WithChunking(false)))
	require.NotNil(t, c)

	require.NoError(t, c.Connect(context.Background()))

	// client chunking is disabled
	_, err = c.client.Bdat(0)
	require.ErrorContains(t, err, "chunking is disabled")

	assert.NoError(t, c.Disconnect())
}

func TestClient_SendMailAutoconnect(t *testing.T) {
	c := New(withTestServer(addr[0]))
	require.NotNil(t, c)

	defer func() {
		assert.NoError(t, c.Terminate())

		// Calling again must be ok.
		assert.NoError(t, c.Disconnect())
	}()

	data := []byte("Hello World!")
	from := "alice@internal.com"
	recipients := []string{"Bob@external.com", "mal@external.com"}

	_, err := c.Send(context.Background(), from, recipients, data)
	require.NoError(t, err)

	// Lookup email.
	m, found := testserver.GetBackend(s[0]).Load(from, recipients)
	assert.True(t, found)

	t.Logf("Found %t, mail %+v\n", found, m)
}

func TestClient_SendMail(t *testing.T) {
	for i, sa := range addr {
		t.Run(fmt.Sprint(i), func(t *testing.T) {
			basic := WithBasic(client.WithPipelining(false))
			if i == 1 {
				basic = WithBasic(client.WithReaderSize(1), client.WithWriterSize(1), client.WithPipelining(true))
			}

			c := New(withTestServer(sa), basic)
			require.NotNil(t, c)

			require.NoError(t, c.Connect(context.Background()))
			defer func() {
				assert.NoError(t, c.Terminate())

				// Calling again must be ok.
				assert.NoError(t, c.Disconnect())
			}()

			data := []byte("Hello World!")
			from := "alice@internal.com"
			recipients := []string{"Bob@external.com", "mal@external.com"}

			_, err := c.Send(context.Background(), from, recipients, data)
			require.NoError(t, err)

			// Lookup email.
			m, found := testserver.GetBackend(s[0]).Load(from, recipients)
			assert.True(t, found)

			t.Logf("Found %t, mail %+v\n", found, m)
		})
	}
}

func TestClient_SendMailDirect(t *testing.T) {
	data := []byte("Hello World!")
	from := "alice@internal.com"
	recipients := []string{"Bob@external.com", "mal@external.com"}

	_, err := Send(
		context.Background(),
		from,
		recipients,
		data,
		withTestServer(addr[0]),
		WithBasic(client.WithPipelining(false)),
	)
	require.NoError(t, err)

	// Lookup email.
	m, found := testserver.GetBackend(s[0]).Load(from, recipients)
	assert.True(t, found)

	t.Logf("Found %t, mail %+v\n", found, m)
}

func TestClient_SendMailDirectPipelining(t *testing.T) {
	data := []byte("Hello World!")
	from := "alice@internal.com"
	recipients := []string{"Bob@external.com", "mal@external.com"}

	_, err := Send(
		context.Background(),
		from,
		recipients,
		data,
		withTestServer(addr[0]),
		WithBasic(client.WithPipelining(true)),
	)
	require.NoError(t, err)

	// Lookup email.
	m, found := testserver.GetBackend(s[0]).Load(from, recipients)
	assert.True(t, found)

	t.Logf("Found %t, mail %+v\n", found, m)
}

func makeEmails(x int) []string {
	emails := make([]string, x)
	for i := range emails {
		emails[i] = fmt.Sprintf("%d@external.com", i)
	}
	return emails
}

// This tries to test if the pipelining limits writing to prevent congestion if all buffers are filled up.
func TestClient_SendMailDirectManyRcptsPipelining(t *testing.T) {
	data := []byte("Hello World!")
	from := "alice@internal.com"

	// enough recipients to fill up the tcp buffer
	recipients := makeEmails(150000)

	_, err := Send(
		context.Background(),
		from,
		recipients,
		data,
		withTestServer(addr[2]),
		WithBasic(client.WithPipelining(true)),
		WithMaxRecipients(0),
	)
	require.NoError(t, err)

	// Lookup email.
	m, found := testserver.GetBackend(s[0]).Load(from, recipients)
	require.True(t, found)
	require.Equal(t, recipients, m.Recipients)
}

func TestClient_SendMailRcptMaxSplitsTransactions(t *testing.T) {
	for i, sa := range addr[:2] {
		t.Run(fmt.Sprint(i), func(t *testing.T) {
			data := []byte("Hello World!")
			from := "alice@internal.com"
			recipients := makeEmails(1001)

			basic := WithBasic(client.WithPipelining(true))
			if i == 1 {
				basic = WithBasic(client.WithReaderSize(1), client.WithWriterSize(1), client.WithPipelining(true))
			}

			res, err := Send(
				context.Background(),
				from,
				recipients,
				data,
				withTestServer(sa),
				basic,
			)
			require.NoError(t, err)
			// RCPTMAX=1000 splits the recipients into two transactions.
			require.Empty(t, res.Failures)
			require.Len(t, res.Responses, 2)
			assert.Equal(t, recipients[:1000], res.Responses[0].Rcpts)
			assert.Equal(t, recipients[1000:], res.Responses[1].Rcpts)

			be := testserver.GetBackend(s[i])
			for _, rcpts := range [][]string{recipients[:1000], recipients[1000:]} {
				_, found := be.Load(from, rcpts)
				require.True(t, found)
			}
		})
	}
}

func TestClient_SendMailDirectFailPipelining(t *testing.T) {
	data := []byte("Hello World!")
	from := "alice@internal.com"
	recipients := []string{"Bob@external.com", "notfound@external.com", "mal@external.com"}

	_, err := Send(
		context.Background(),
		from,
		recipients,
		data,
		withTestServer(addr[0]),
		WithBasic(client.WithPipelining(true)),
	)
	require.NoError(t, err)

	// Lookup email.
	m, found := testserver.GetBackend(s[0]).Load(from, []string{"Bob@external.com", "mal@external.com"})
	assert.True(t, found)

	t.Logf("Found %t, mail %+v\n", found, m)
}

func TestClient_SendMailDirectAllRejectedPipelining(t *testing.T) {
	data := []byte("Hello World!")
	from := "alice@internal.com"
	recipients := []string{"notfound@external.com"}

	res, err := Send(
		context.Background(),
		from,
		recipients,
		data,
		withTestServer(addr[0]),
		WithBasic(client.WithPipelining(true)),
	)
	require.NoError(t, err)

	require.Equal(t, 0, len(res.Responses))
	require.Equal(t, 1, len(res.Failures))
	require.Equal(t, recipients, res.Failures[0].Rcpts)
}

var pipeliningCases = []struct {
	name       string
	pipelining bool
}{
	{name: "without pipelining"},
	{name: "with pipelining", pipelining: true},
}

// sendReport sends a mail to rcpts and returns the report, failing the test on
// a transport level error.
func sendReport(t *testing.T, rcpts []string, pipelining bool) Report {
	t.Helper()

	opts := []Option{withTestServer(addr[0]), WithBasic(client.WithPipelining(pipelining))}

	res, err := Send(
		context.Background(),
		"alice@internal.com",
		rcpts,
		"Hello World!",
		opts...,
	)
	require.NoError(t, err)

	return res
}

// TestClient_SendMailAllRejectedKeepsPerRcptFailures checks that the individual
// rejection reasons survive when every recipient is refused.
//
// A server following RFC 2920 3.2 (3) answers DATA negatively once no valid
// recipient is left, so the transaction ends in an error. That error describes
// the transaction ("no valid recipients"), not any single address, and must not
// replace the per recipient 550s that were already collected.
func TestClient_SendMailAllRejectedKeepsPerRcptFailures(t *testing.T) {
	rcpts := []string{"notfound1@external.com", "notfound2@external.com", "notfound3@external.com"}

	for _, tc := range pipeliningCases {
		t.Run(tc.name, func(t *testing.T) {
			res := sendReport(t, rcpts, tc.pipelining)

			assert.Empty(t, res.Responses, "nothing was delivered")
			require.Len(t, res.Failures, len(rcpts), "one failure per recipient")

			byRcpt := map[string]error{}
			for _, f := range res.Failures {
				require.Len(t, f.Rcpts, 1,
					"a failure must name a single recipient, got %v", f.Rcpts)
				byRcpt[f.Rcpts[0]] = f.Error
			}

			for _, rcpt := range rcpts {
				err, ok := byRcpt[rcpt]
				require.True(t, ok, "no failure reported for %s", rcpt)

				var status *deltasmtp.Status
				require.ErrorAs(t, err, &status)
				assert.Equal(t, 550, status.Code,
					"%s must carry its own rejection, not the DATA rejection", rcpt)
				assert.Contains(t, err.Error(), rcpt,
					"%s must carry its own reply text", rcpt)
			}
		})
	}
}

// TestClient_SendMailPartiallyRejectedKeepsPerRcptFailures is the counterpart:
// the accepted recipients still get a response and are not blamed for the
// rejection of another address.
func TestClient_SendMailPartiallyRejectedKeepsPerRcptFailures(t *testing.T) {
	accepted := []string{"Bob@external.com", "mal@external.com"}
	rejected := "notfound1@external.com"
	rcpts := []string{accepted[0], rejected, accepted[1]}

	for _, tc := range pipeliningCases {
		t.Run(tc.name, func(t *testing.T) {
			res := sendReport(t, rcpts, tc.pipelining)

			require.Len(t, res.Failures, 1)
			assert.Equal(t, []string{rejected}, res.Failures[0].Rcpts)

			require.Len(t, res.Responses, 1)
			assert.Equal(t, accepted, res.Responses[0].Rcpts,
				"delivered recipients must exclude the rejected one")
		})
	}
}

// TestClient_SendMailPartiallyRejectedManyRcpts checks that a partial rejection
// doesn't make Send slow with many recipients. Sorting out the accepted
// recipients must not compare every recipient with every failure.
//
// The time is compared with the same send without rejections, so the network
// part, the race detector and the machine speed cancel out.
func TestClient_SendMailPartiallyRejectedManyRcpts(t *testing.T) {
	const n = 50000

	send := func(rcpts []string) (Report, time.Duration) {
		start := time.Now()
		res, err := Send(
			context.Background(),
			"alice@internal.com",
			rcpts,
			"Hello World!",
			withTestServer(addr[2]),
			WithBasic(client.WithPipelining(true)),
			WithMaxRecipients(0),
		)
		require.NoError(t, err)
		return res, time.Since(start)
	}

	// every second recipient is rejected
	rcpts := make([]string, n)
	accepted := make([]string, 0, n/2)
	for i := range rcpts {
		if i%2 == 1 {
			rcpts[i] = fmt.Sprintf("notfound%d@external.com", i)
		} else {
			rcpts[i] = fmt.Sprintf("%d@external.com", i)
			accepted = append(accepted, rcpts[i])
		}
	}

	_, baseline := send(makeEmails(n))
	res, partial := send(rcpts)

	require.Len(t, res.Failures, n/2)
	require.Len(t, res.Responses, 1)
	require.Equal(t, accepted, res.Responses[0].Rcpts)

	limit := max(5*baseline, 500*time.Millisecond)
	require.Less(t, partial, limit,
		"partial rejection took %v, the send without rejections %v", partial, baseline)
}

func TestAcceptedRcpts(t *testing.T) {
	errRejected := errors.New("rejected")
	fail := func(rcpts ...string) resolve.Failure { return resolve.Failure{Rcpts: rcpts, Error: errRejected} }

	for name, tc := range map[string]struct {
		rcpts    []string
		failures []resolve.Failure
		want     []string
	}{
		"keeps order": {
			rcpts:    []string{"a", "b", "c", "d"},
			failures: []resolve.Failure{fail("b"), fail("d")},
			want:     []string{"a", "c"},
		},
		"failure out of order": {
			rcpts:    []string{"a", "b", "c"},
			failures: []resolve.Failure{fail("c"), fail("a")},
			want:     []string{"b"},
		},
		"failure with multiple recipients": {
			rcpts:    []string{"a", "b", "c"},
			failures: []resolve.Failure{fail("a", "c")},
			want:     []string{"b"},
		},
		"duplicate recipient is removed each time": {
			rcpts:    []string{"a", "b", "a"},
			failures: []resolve.Failure{fail("a")},
			want:     []string{"b"},
		},
		"unknown failed recipient": {
			rcpts:    []string{"a", "b"},
			failures: []resolve.Failure{fail("x"), fail("y"), fail("z")},
			want:     []string{"a", "b"},
		},
		"all rejected": {
			rcpts:    []string{"a", "b"},
			failures: []resolve.Failure{fail("a"), fail("b")},
			want:     []string{},
		},
	} {
		t.Run(name, func(t *testing.T) {
			rcpts := slices.Clone(tc.rcpts)
			require.Equal(t, tc.want, acceptedRcpts(rcpts, tc.failures))
			require.Equal(t, tc.rcpts, rcpts, "rcpts must not be modified")
		})
	}
}

func TestClient_SendMailDirectFail(t *testing.T) {
	data := []byte("Hello World!")
	from := "alice@internal.com"
	recipients := []string{"Bob@external.com", "notfound@external.com"}

	rec, err := Send(
		context.Background(),
		from,
		recipients,
		data,
		withTestServer(addr[0]),
		WithBasic(client.WithPipelining(false)),
	)
	require.Equal(t, 1, len(rec.Failures))
	require.Equal(t, []string{"notfound@external.com"}, rec.Failures[0].Rcpts)
	require.ErrorContains(t, rec.Failures[0].Error, "550")

	require.NoError(t, err)

	// Lookup email.
	m, found := testserver.GetBackend(s[0]).Load(from, []string{"Bob@external.com"})
	assert.True(t, found)

	t.Logf("Found %t, mail %+v\n", found, m)
}

func TestClient_SendMail_MultipleAddresses(t *testing.T) {
	c := New(withTestServer(addr[0], "0.0.0.0")) // second is invalid
	require.NotNil(t, c)

	require.Equal(t, "", c.ServerAddress())
	require.NoError(t, c.Connect(context.Background()))
	require.Equal(t, addr[0], c.ServerAddress())
	require.Equal(t, "localhost", c.ServerName())
	require.NoError(t, c.Terminate())
	require.Equal(t, addr[0], c.ServerAddress())
	require.Equal(t, "localhost", c.ServerName())

	c = New(withTestServer("0.0.0.0", addr[0])) // second is invalid
	require.NotNil(t, c)

	require.Equal(t, "", c.ServerAddress())
	require.NoError(t, c.Connect(context.Background()))
	require.Equal(t, addr[0], c.ServerAddress())
	require.Equal(t, "localhost", c.ServerName())
	require.NoError(t, c.Terminate())
	require.Equal(t, addr[0], c.ServerAddress())
	require.Equal(t, "localhost", c.ServerName())
}

func TestClient_SendMailUTF8Force(t *testing.T) {
	c := New(withTestServer(addr[0]))
	require.NotNil(t, c)

	require.NoError(t, c.Connect(context.Background()))
	defer func() {
		assert.NoError(t, c.Terminate())

		// Calling again must be ok.
		assert.NoError(t, c.Disconnect())
	}()

	data := []byte("Hello World!")
	from := "alice@internal.com"
	recipients := []string{"Bob@external.com", "mal@external.com"}

	_, err := c.SendAdvanced(
		context.Background(),
		from,
		client.MailOptions{SMTPUTF8: true},
		recipients,
		nil,
		data,
	)
	require.ErrorContains(t, err, "server does not support SMTPUTF8")
}

func TestClient_AllRejectedKeepsConnection(t *testing.T) {
	c := New(withTestServer(addr[0]), WithBasic(client.WithPipelining(true)))

	require.NoError(t, c.Connect(t.Context()))
	t.Cleanup(func() { _ = c.Terminate() })

	res, err := c.Send(t.Context(), "alice@internal.com",
		[]string{"notfound1@external.com"}, "Hello World!")
	_, failures := unpack(res)

	// the rejection of DATA/BDAT without a recipient must not hide the recipient failures
	require.NoError(t, err)
	require.Len(t, failures, 1)
	assert.True(t, c.Connected(), "connection must survive an all rejected transaction")
}

func TestClient_AllRejectedChunkingKeepsConnection(t *testing.T) {
	c := New(withTestServer(addr[2]), WithBasic(client.WithPipelining(true)))

	require.NoError(t, c.Connect(t.Context()))
	t.Cleanup(func() { _ = c.Terminate() })

	res, err := c.Send(t.Context(), "alice@internal.com",
		[]string{"notfound1@external.com"}, "Hello World!")
	_, failures := unpack(res)

	// the rejection of DATA/BDAT without a recipient must not hide the recipient failures
	require.NoError(t, err)
	require.Len(t, failures, 1)
	assert.True(t, c.Connected(), "connection must survive an all rejected transaction")
}

func TestClient_InvalidLocalName(t *testing.T) {
	c := New(withTestServer(addr[0]), WithBasic(
		client.WithLocalName("hostinjection>\n\rDATA\r\nInjected message body\r\n.\r\nQUIT\r\n")),
	)
	require.NotNil(t, c)
	require.ErrorContains(t, c.Connect(context.Background()), "smtp: the local name must not contain CR or LF")
}

func TestClient_Client(t *testing.T) {
	c := New(withTestServer(addr[0]))
	require.NotNil(t, c)
	require.NotNil(t, c.Client())
}

func TestClient_Send(t *testing.T) {
	c := New(withTestServer(addr[0]))
	require.NotNil(t, c)

	require.NoError(t, c.Connect(context.Background()))
	defer func() {
		assert.NoError(t, c.Terminate())

		// Calling again must be ok.
		assert.NoError(t, c.Disconnect())
	}()

	data := []byte("All your base are belong to us.")
	from := "alice1@internal.com"
	recipients := []string{"Bob1@external.com", "mal1@external.com"}

	_, err := c.Send(context.Background(), from, recipients, data)
	require.NoError(t, err)

	// Lookup email.
	m, found := testserver.GetBackend(s[0]).Load(from, recipients)
	assert.True(t, found)

	t.Logf("Found %t, mail %+v\n", found, m)
}

var (
	address    = "" // ends with .mail.protection.outlook.com:25
	priv       = ``
	certs      = ``
	eml        = ``
	from       = ""
	recipients = []string{}
)

func TestClient_SendMicrosoft(t *testing.T) {
	t.Skip()
	cert, err := tls.X509KeyPair([]byte(certs), []byte(priv))
	require.NoError(t, err)

	c := New(WithServerAddresses(address), WithTLSConfig(&tls.Config{
		Certificates: []tls.Certificate{cert},
	}), WithSecurity(SecurityTLS))
	require.NotNil(t, c)

	require.NoError(t, c.Connect(context.Background()))
	defer func() {
		assert.NoError(t, c.Terminate())
		assert.NoError(t, c.Disconnect())
	}()

	_, err = c.Send(context.Background(), from, recipients, eml)
	require.NoError(t, err)
}

func TestSendAdvancedSize(t *testing.T) {
	var size atomic.Int64
	be := testserver.NewBackend()
	be.Mail = func(_ context.Context, _ string, opts *deltasmtp.MailOptions) error {
		size.Store(opts.Size)
		return nil
	}
	srv := testserver.Standard(serverTLS, server.WithBackend(be))
	l, err := srv.Listen()
	require.NoError(t, err)
	go func() { _ = srv.Serve(context.Background(), l) }()
	t.Cleanup(func() { _ = srv.Close() })

	c := New(withTestServer(l.Addr().String()))
	t.Cleanup(func() { _ = c.Terminate() })

	msg := "Subject: a\r\n\r\nbody\r\n"
	send := func(opts client.MailOptions) {
		_, err := c.SendAdvanced(t.Context(), "a@example.org", opts, []string{"b@example.org"}, nil,
			msg)
		require.NoError(t, err)
	}

	// Taken from in if not set.
	send(client.MailOptions{})
	assert.Equal(t, int64(len(msg)), size.Load())

	send(client.MailOptions{Size: 99})
	assert.Equal(t, int64(99), size.Load())
}

// unpack returns the status of the last response and the failures of res.
func unpack(res Report) (*deltasmtp.Status, []resolve.Failure) {
	if len(res.Responses) == 0 {
		return nil, res.Failures
	}
	return res.Responses[len(res.Responses)-1].Status, res.Failures
}
