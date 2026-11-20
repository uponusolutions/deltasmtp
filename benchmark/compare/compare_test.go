// Package compare benchmarks deltasmtp against github.com/emersion/go-smtp.
//
// It is a separate module so that go-smtp never becomes a dependency of
// deltasmtp itself.
//
// Both benchmarks measure the whole delivery, client and server of the same
// library, so no test mixes the two libraries. Both run with one connection
// reused for every message, no timeouts and no limits.
//
// BenchmarkEndToEnd runs both libraries in their fastest configuration, every
// extension that speeds up a transaction (CHUNKING and PIPELINING) enabled
// where it is supported. go-smtp sends with DATA, its client supports neither.
//
// BenchmarkData compares both with DATA: deltasmtp has CHUNKING turned off
// and sends with DATA as well. Pipelining stays on, it is always used where
// it is supported.
package compare

import (
	"context"
	"io"
	"log"
	"log/slog"
	"net"
	"os"
	"path/filepath"
	"testing"

	gosmtp "github.com/emersion/go-smtp"
	"github.com/uponusolutions/deltasmtp"
	"github.com/uponusolutions/deltasmtp/client"
	"github.com/uponusolutions/deltasmtp/mailer"
	"github.com/uponusolutions/deltasmtp/server"
)

const from = "alice@internal.com"

var rcpts = []string{"bob@external.com", "tim@external.com"}

// sender sends one message over an established connection.
type sender interface {
	send(body []byte) error
	close() error
}

// serverImpl is one server implementation, start returns the address it
// listens on and a function stopping it.
type serverImpl struct {
	name  string
	start func(b *testing.B) (addr string, stop func())
}

// clientImpl is one client implementation, dial returns a connected sender.
type clientImpl struct {
	name string
	dial func(addr string) (sender, error)
}

// The names are the last element of the benchmark names, the benchmark page
// keys on them.
var (
	deltaServer = serverImpl{name: "DeltaSMTP", start: startDeltaServer(true)}
	goServer    = serverImpl{name: "GoSMTP", start: startGoServer}
	deltaClient = clientImpl{name: "DeltaSMTP", dial: dialDelta(true)}
	goClient    = clientImpl{name: "GoSMTP", dial: dialGo}
)

// listen opens a listener on a random loopback port.
func listen(b *testing.B) net.Listener {
	b.Helper()

	l, err := net.Listen("tcp", "127.0.0.1:0")
	if err != nil {
		b.Fatalf("listen: %v", err)
	}

	return l
}

// --- deltasmtp server ---

type deltaBackend struct{}

func (deltaBackend) NewSession(ctx context.Context, _ *server.Conn) (context.Context, server.Session, error) {
	return ctx, &deltaSession{}, nil
}

type deltaSession struct {
	server.Session // only the methods below are called
}

var discardLogger = slog.New(slog.DiscardHandler)

func (*deltaSession) Logger(_ context.Context) *slog.Logger { return discardLogger }

func (*deltaSession) AuthMechanisms(_ context.Context) []string { return nil }

func (*deltaSession) Reset(ctx context.Context, _ bool) (context.Context, error) { return ctx, nil }

func (*deltaSession) Close(_ context.Context, _ error) {}

func (*deltaSession) Mail(_ context.Context, _ string, _ *deltasmtp.MailOptions) error { return nil }

func (*deltaSession) Rcpt(_ context.Context, _ string, _ *deltasmtp.RcptOptions) error { return nil }

func (*deltaSession) Data(_ context.Context, r func() io.Reader) (string, error) {
	_, err := io.Copy(io.Discard, r())
	return "", err
}

// startDeltaServer starts the deltasmtp server, CHUNKING is only advertised if
// chunking is true.
func startDeltaServer(chunking bool) func(b *testing.B) (string, func()) {
	return func(b *testing.B) (string, func()) {
		b.Helper()
		return startDelta(b, chunking)
	}
}

func startDelta(b *testing.B, chunking bool) (string, func()) {
	b.Helper()

	s := server.New(
		server.WithBackend(deltaBackend{}),
		server.WithLogger(discardLogger),
		server.WithEnableCHUNKING(chunking),
		server.WithAddressValidator(nil),
		server.WithMaxLineLength(0),
		server.WithMaxMessageBytes(0),
		server.WithMaxRecipients(0),
		server.WithMaxTransactions(0),
		server.WithMaxConnections(0),
		server.WithMaxConnectionsPerIP(0),
		server.WithCommandTimeout(0),
		server.WithDataTimeout(0),
	)

	l := listen(b)

	go func() { _ = s.Serve(context.Background(), l) }()

	return l.Addr().String(), func() { _ = s.Close() }
}

// --- go-smtp server ---

type goBackend struct{}

func (goBackend) NewSession(_ *gosmtp.Conn) (gosmtp.Session, error) {
	return goSession{}, nil
}

type goSession struct{}

func (goSession) Reset() {}

func (goSession) Logout() error { return nil }

func (goSession) Mail(_ string, _ *gosmtp.MailOptions) error { return nil }

func (goSession) Rcpt(_ string, _ *gosmtp.RcptOptions) error { return nil }

func (goSession) Data(r io.Reader) error {
	_, err := io.Copy(io.Discard, r)
	return err
}

func startGoServer(b *testing.B) (string, func()) {
	b.Helper()

	// PIPELINING and CHUNKING are always advertised by go-smtp. Timeouts and
	// MaxMessageBytes are disabled by their zero value.
	s := gosmtp.NewServer(goBackend{})
	s.Domain = "localhost"
	s.ErrorLog = log.New(io.Discard, "", 0)
	s.MaxLineLength = 0

	l := listen(b)

	go func() { _ = s.Serve(l) }()

	return l.Addr().String(), func() { _ = s.Close() }
}

// --- deltasmtp client ---

type deltaSender struct {
	m *mailer.Mailer
}

// dialDelta returns the dial of the deltasmtp client, chunking enables
// CHUNKING, otherwise it sends with DATA. Pipelining is always enabled.
func dialDelta(chunking bool) func(addr string) (sender, error) {
	return func(addr string) (sender, error) {
		return dialDeltaWith(addr, chunking)
	}
}

func dialDeltaWith(addr string, chunking bool) (sender, error) {
	m := mailer.New(
		mailer.WithServerAddresses(addr),
		mailer.WithSecurity(mailer.SecurityPlain),
		mailer.WithBasic(
			client.WithChunking(chunking),
			client.WithPipelining(true),
			client.WithCommandTimeout(0),
			client.WithDataTimeout(0),
			client.WithDialTimeout(0),
		),
	)

	if err := m.Connect(context.Background()); err != nil {
		return nil, err
	}

	return deltaSender{m: m}, nil
}

func (s deltaSender) send(body []byte) error {
	// A reader with Len lets the mailer send the message as a single BDAT
	// chunk, with DATA it makes no difference.
	_, _, err := s.m.Send(context.Background(), from, rcpts, newReader(body))
	return err
}

func (s deltaSender) close() error {
	return s.m.Disconnect()
}

// --- go-smtp client ---

type goSender struct {
	c *gosmtp.Client
}

func dialGo(addr string) (sender, error) {
	c, err := gosmtp.Dial(addr)
	if err != nil {
		return nil, err
	}

	// go-smtp has no option for pipelining or chunking, it always sends DATA.
	// Its timeouts can not be disabled, a zero value expires immediately.

	if err := c.Hello("localhost"); err != nil {
		_ = c.Close()
		return nil, err
	}

	return goSender{c: c}, nil
}

func (s goSender) send(body []byte) error {
	return s.c.SendMail(from, rcpts, newReader(body))
}

func (s goSender) close() error {
	return s.c.Quit()
}

// reader is a minimal io.Reader with Len, the same for both clients.
type reader struct {
	b []byte
}

func newReader(b []byte) *reader { return &reader{b: b} }

func (r *reader) Read(p []byte) (int, error) {
	if len(r.b) == 0 {
		return 0, io.EOF
	}

	n := copy(p, r.b)
	r.b = r.b[n:]

	return n, nil
}

func (r *reader) Len() int { return len(r.b) }

// message is one message the benchmarks send.
type message struct {
	name string
	eml  []byte
}

// messages reads the messages of the main benchmarks, an embed can not leave
// the module.
func messages(b *testing.B) []message {
	b.Helper()

	msgs := []message{{name: "Small"}, {name: "Large"}}
	files := []string{"small.eml", "large.eml"}

	for i := range msgs {
		eml, err := os.ReadFile(filepath.Join("..", "testdata", files[i]))
		if err != nil {
			b.Fatalf("read testdata: %v", err)
		}

		msgs[i].eml = eml
	}

	return msgs
}

// run sends the message over one connection reused for every iteration.
//
// Every error inside the loop aborts the benchmark. A failing connection would
// otherwise race through the iterations and report an excellent — and
// meaningless — result.
func run(b *testing.B, srv serverImpl, c clientImpl, eml []byte) {
	b.Helper()

	addr, stop := srv.start(b)
	defer stop()

	s, err := c.dial(addr)
	if err != nil {
		b.Fatalf("dial: %v", err)
	}

	b.SetBytes(int64(len(eml)))
	b.ReportAllocs()

	for b.Loop() {
		if err := s.send(eml); err != nil {
			b.Fatalf("send: %v", err)
		}
	}

	if err := s.close(); err != nil {
		b.Fatalf("close: %v", err)
	}
}

// pair is a server and a client of the same library, they share the name.
type pair struct {
	srv serverImpl
	c   clientImpl
}

// runPairs runs every pair with every message, names are e.g. Large/GoSMTP.
func runPairs(b *testing.B, pairs []pair) {
	b.Helper()

	for _, msg := range messages(b) {
		b.Run(msg.name, func(b *testing.B) {
			for _, p := range pairs {
				b.Run(p.c.name, func(b *testing.B) {
					run(b, p.srv, p.c, msg.eml)
				})
			}
		})
	}
}

// BenchmarkEndToEnd compares the whole delivery, each library in its fastest
// configuration. Names are e.g. BenchmarkEndToEnd/Large/GoSMTP.
func BenchmarkEndToEnd(b *testing.B) {
	runPairs(b, []pair{
		{srv: deltaServer, c: deltaClient},
		{srv: goServer, c: goClient},
	})
}

// BenchmarkData compares the whole delivery with DATA in both libraries,
// pipelining where supported. Names are e.g. BenchmarkData/Large/GoSMTP.
func BenchmarkData(b *testing.B) {
	runPairs(b, []pair{
		{
			srv: serverImpl{name: "DeltaSMTP", start: startDeltaServer(false)},
			c:   clientImpl{name: "DeltaSMTP", dial: dialDelta(false)},
		},
		{srv: goServer, c: goClient},
	})
}
