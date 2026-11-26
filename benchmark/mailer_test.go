package benchmark

import (
	"bytes"
	"context"
	"crypto/tls"
	"embed"
	"io"
	"log/slog"
	"os"
	"testing"

	"github.com/stretchr/testify/require"
	"github.com/uponusolutions/deltasmtp"
	"github.com/uponusolutions/deltasmtp/client"
	"github.com/uponusolutions/deltasmtp/mailer"
	"github.com/uponusolutions/deltasmtp/server"
	"github.com/uponusolutions/deltasmtp/tester"
	"github.com/uponusolutions/go-sasl"
)

//go:embed testdata/*
var embedTestdata embed.FS

// backend discards every message. Keeping it would measure the backend: a
// large message would be copied into memory, which dominated time and memory.
type backend struct{}

func (*backend) NewSession(ctx context.Context, _ *server.Conn) (context.Context, server.Session, error) {
	return ctx, session{}, nil
}

type session struct{}

func (session) Logger(_ context.Context) *slog.Logger {
	return nil
}

func (session) AuthMechanisms(_ context.Context) []string {
	return []string{"PLAIN"}
}

func (session) Auth(_ context.Context, _ string) (sasl.Server, error) {
	return nil, nil
}

func (session) Reset(ctx context.Context, _ bool) (context.Context, error) {
	return ctx, nil
}

func (session) Close(_ context.Context, _ error) {
}

func (session) STARTTLS(_ context.Context, tls *tls.Config) (*tls.Config, error) {
	return tls, nil
}

func (session) Verify(_ context.Context, _ string, _ *deltasmtp.VrfyOptions) error {
	return nil
}

func (session) Mail(_ context.Context, _ string, _ *deltasmtp.MailOptions) error {
	return nil
}

func (session) Rcpt(_ context.Context, _ string, _ *deltasmtp.RcptOptions) error {
	return nil
}

// Data reads the whole message, the server still decodes every byte.
func (session) Data(_ context.Context, r func() io.Reader) (string, error) {
	_, err := io.Copy(io.Discard, r())
	return "", err
}

// testServer starts a server on a random loopback port and returns the address
// it is listening on.
func testServer(bei *backend, opts ...server.Option) (be *backend, s *server.Server, addr string, err error) {
	if bei == nil {
		be = new(backend)
	} else {
		be = bei
	}

	curOpts := []server.Option{
		server.WithAddr("127.0.0.1:0"),
		server.WithBackend(be),
		server.WithMaxLineLength(2000),
		server.WithHostname("localhost"),
		// ReuseConn sends every iteration in one session, the default limit of
		// 1000 transactions would end it after 1000 iterations.
		server.WithMaxTransactions(0),
	}

	curOpts = append(curOpts, opts...)

	s = server.New(
		curOpts...,
	)

	ctx := context.Background()

	l, err := s.Listen()
	if err != nil {
		return nil, nil, "", err
	}

	go func(s *server.Server) {
		_ = s.Serve(ctx, l)
	}(s)

	return be, s, l.Addr().String(), nil
}

func newMailer(addr string, opts []client.Option) *mailer.Mailer {
	return mailer.New(
		mailer.WithServerAddresses(addr),
		mailer.WithSecurity(mailer.SecurityPlain),
		mailer.WithBasic(opts...),
	)
}

func sendMailCon(c *mailer.Mailer, in io.Reader) error {
	from := "alice@internal.com"
	recipients := []string{"bob@external.com", "tim@external.com"}
	_, err := c.Send(context.Background(), from, recipients, func() io.Reader { return in })
	return err
}

type testcase struct {
	eml  []byte
	name string
}

// serverConfig is one server configuration to benchmark against.
type serverConfig struct {
	name string
	opts []server.Option
}

var serverConfigs = []serverConfig{
	{
		name: "NoChunking",
		opts: []server.Option{server.WithEnableCHUNKING(false)},
	},
	{
		name: "Chunking",
		opts: []server.Option{server.WithEnableCHUNKING(true)},
	},
}

// clientConfig is one client configuration, applied to every mailer.
type clientConfig struct {
	name string
	opts []client.Option
}

var clientConfigs = []clientConfig{
	{
		name: "NoPipelining",
		opts: []client.Option{client.WithPipelining(false)},
	},
	{
		name: "Pipelining",
		opts: []client.Option{client.WithPipelining(true)},
	},
}

// readerConfig is one way of handing the message body to the mailer.
type readerConfig struct {
	name string
	new  func(data []byte) io.Reader
}

var readerConfigs = []readerConfig{
	{
		name: "MinimalReader",
		new:  func(data []byte) io.Reader { return tester.NewBuffer(data) },
	},
	{
		name: "BufferReader",
		new:  func(data []byte) io.Reader { return bytes.NewBuffer(data) },
	},
}

// connectionConfig is one connection lifecycle, driving the benchmark loop and
// calling send once per iteration.
//
// Every error inside the loop aborts the benchmark. A failing connection would
// otherwise race through the iterations and report an excellent — and
// meaningless — result.
type connectionConfig struct {
	name string
	run  func(b *testing.B, addr string, opts []client.Option, send func(c *mailer.Mailer) error)
}

var connectionConfigs = []connectionConfig{
	{
		name: "CloseConn",
		run: func(b *testing.B, addr string, opts []client.Option, send func(c *mailer.Mailer) error) {
			for b.Loop() {
				c := newMailer(addr, opts)

				if err := c.Connect(context.Background()); err != nil {
					b.Fatalf("connect: %v", err)
				}

				if err := send(c); err != nil {
					b.Fatalf("send: %v", err)
				}

				if err := c.Disconnect(); err != nil {
					b.Fatalf("disconnect: %v", err)
				}
			}
		},
	},
	{
		name: "ReuseConn",
		run: func(b *testing.B, addr string, opts []client.Option, send func(c *mailer.Mailer) error) {
			c := newMailer(addr, opts)
			require.NotNil(b, c)
			require.NoError(b, c.Connect(context.Background()))

			for b.Loop() {
				if err := send(c); err != nil {
					b.Fatalf("send: %v", err)
				}
			}

			require.NoError(b, c.Disconnect())
		},
	},
}

// benchmarkServer runs every client, connection and reader config against one
// server config. The configs are nested as sub-benchmarks so the resulting
// names are paths, e.g. Large/Chunking/Pipelining/Reuse/BytesBuffer, which can
// be filtered with -bench 'Large/Chunking/.*/Reuse'.
func benchmarkServer(b *testing.B, tc testcase, sc serverConfig) {
	b.Helper()

	_, s, addr, err := testServer(nil, sc.opts...)
	require.NoError(b, err)

	defer func() {
		require.NoError(b, s.Close())
	}()

	for _, cc := range clientConfigs {
		b.Run(cc.name, func(b *testing.B) {
			for _, conn := range connectionConfigs {
				b.Run(conn.name, func(b *testing.B) {
					for _, rc := range readerConfigs {
						b.Run(rc.name, func(b *testing.B) {
							setBytes(b, len(tc.eml))

							conn.run(b, addr, cc.opts, func(c *mailer.Mailer) error {
								return sendMailCon(c, rc.new(tc.eml))
							})
						})
					}
				})
			}
		})
	}
}

func BenchmarkMailer(b *testing.B) {
	l := slog.New(slog.NewJSONHandler(os.Stdout, &slog.HandlerOptions{
		Level: slog.LevelError,
	}))
	slog.SetDefault(l)

	smallEml, err := embedTestdata.ReadFile("testdata/small.eml")
	require.NoError(b, err)

	largeEml, err := embedTestdata.ReadFile("testdata/large.eml")
	require.NoError(b, err)

	for _, tc := range []testcase{
		{eml: smallEml, name: "Small"},
		{eml: largeEml, name: "Large"},
	} {
		b.Run(tc.name, func(b *testing.B) {
			for _, sc := range serverConfigs {
				b.Run(sc.name, func(b *testing.B) {
					benchmarkServer(b, tc, sc)
				})
			}
		})
	}
}
