# deltasmtp

[![coverage](https://raw.githubusercontent.com/uponusolutions/deltasmtp/badges/.badges/main/coverage.svg)](https://uponusolutions.github.io/deltasmtp/coverage/)
[![reference](https://pkg.go.dev/badge/github.com/uponusolutions/deltasmtp.svg)](https://pkg.go.dev/github.com/uponusolutions/deltasmtp)

A fast ESMTP client and server library for Go, with a mailer that sends a mail
in a single call.

- **Fast:** tuned hot paths, buffers reused across mails and efficient
  algorithms keep the cost per mail low, see [benchmarks](#benchmarks).
- **Easy to send with:** `mailer.Send` resolves the MX records, delivers to every
  server and reports the result per recipient.
- **Secure by default:** STARTTLS with certificate verification is required
  unless you opt out.
- **Modern ESMTP:** PIPELINING and CHUNKING/BDAT on both sides, SMTPUTF8, DSN,
  REQUIRETLS, DELIVERBY, MT-PRIORITY, RRVS and XOORG, see [extensions](#extensions).
- **Context-aware** client, server and mailer, with structured
  `*deltasmtp.Status` replies.

```sh
go get github.com/uponusolutions/deltasmtp
```

## Quick start

```go
report, err := mailer.Send(ctx, "alice@example.com",
    []string{"bob@example.org", "carol@example.net"},
    func() io.Reader { return strings.NewReader(eml) },
)
```

That is all: no connection handling, no MX lookups, no loop over servers. Try
it without network access, against a server running in memory:

```sh
go run ./examples/local
```

or for real, directly to the MX servers of the recipients or through a relay:

```sh
go run ./examples/send -from alice@example.com bob@example.org
go run ./examples/send -from alice@example.com -relay smtp.example.com:587 \
    -user alice -pass secret bob@example.org
```

## Benchmarks

CI runs the benchmarks on every push to `main` and tracks them over time:

- [Comparison with go-smtp](https://uponusolutions.github.io/deltasmtp/dev/compare/):
  deltasmtp and go-smtp sending small and large mails.
- [Benchmark page](https://uponusolutions.github.io/deltasmtp/dev/bench/):
  mailer, client, server and the dot and BDAT codecs.

`make bench-compare` and `make bench` run them locally. See
[Performance](#performance) for where the speed comes from.

## Packages

| Package | Description |
| --- | --- |
| [`smtp`](https://pkg.go.dev/github.com/uponusolutions/deltasmtp) | Shared definitions: `Status`, `MailOptions`, `RcptOptions`, BATV/SRS sender parsing |
| [`mailer`](https://pkg.go.dev/github.com/uponusolutions/deltasmtp/mailer) | High-level client: connection reuse, security, auth, sending to many servers |
| [`client`](https://pkg.go.dev/github.com/uponusolutions/deltasmtp/client) | Low-level client, one method per SMTP command |
| [`server`](https://pkg.go.dev/github.com/uponusolutions/deltasmtp/server) | SMTP server built around a `Backend`/`Session` pair |
| [`resolve`](https://pkg.go.dev/github.com/uponusolutions/deltasmtp/resolve) | MX lookup that groups recipients by target server |
| [`tester`](https://pkg.go.dev/github.com/uponusolutions/deltasmtp/tester) | Test utilities: fake connections, certificates, in-memory server |

Runnable [examples](https://github.com/uponusolutions/deltasmtp/tree/main/examples):
[`send`](examples/send/main.go) delivers a mail via MX or a relay,
[`local`](examples/local/main.go) sends to an in-memory server.

## Sending mail

`mailer.Send` resolves the MX records for every recipient, groups them by target
server and sends one transaction per server. The message is passed as a factory
because it is consumed once per server.

```go
report, err := mailer.Send(
    ctx,
    "alice@example.com",
    []string{"bob@example.org", "carol@example.net"},
    func() io.Reader { return strings.NewReader(eml) },
)
if err != nil {
    return err
}

for _, f := range report.Failures {
    fmt.Printf("failed for %v: %v\n", f.Rcpts, f.Error)
}
for _, r := range report.Responses {
    fmt.Printf("accepted for %v: %d %s\n", r.Rcpts, r.Status.Code, r.Status.Text())
}
```

Rejected recipients end up in `Failures` instead of aborting the whole send, so a
partial delivery is still reported as a success for the recipients that were
accepted. `err` is only set if the recipients couldn't be resolved.

The default `SecurityStartTLS` also applies to MX delivery, so servers without
STARTTLS or a valid certificate fail. Mail servers use opportunistic TLS among
each other, pass `mailer.WithSecurity(mailer.SecurityPreferStartTLS)` to do the
same.

To relay through a fixed host instead of resolving MX records, pass
`mailer.WithServerAddresses`. A `*mailer.Mailer` keeps its connection open across
calls, which is what you want for a queue runner:

```go
m := mailer.New(
    mailer.WithServerAddresses("mail.example.com:587"),
    mailer.WithSASLClient(sasl.NewPlainClient("", "username", "password")),
)
defer func() { _ = m.Disconnect() }()

status, failures, err := m.Send(ctx, from, rcpts, msg)
```

By default the mailer requires STARTTLS and verifies the server certificate
(`SecurityStartTLS`), so mail and credentials are never sent unencrypted.
`SecurityTLS` uses implicit TLS (e.g. port 465). `SecurityPreferStartTLS` is
opportunistic: if STARTTLS is missing, rejected or the TLS handshake fails
(including an invalid certificate), it continues over a plain connection and
still authenticates. Only use it without a SASL client, e.g. for delivery to
MX servers that lack a valid certificate.

`WithServerAddressesPrio` takes groups of addresses that are tried in order, and
`SendAdvanced` accepts explicit `MailOptions` and per-recipient `RcptOptions`.

`mailer.Verify` checks recipients without sending a mail, with VRFY or with
RCPT TO in a transaction that is reset afterwards, and reports them like `Send`
does. `Mailer.Verifier` does the same one recipient at a time on an open
connection.

## Running a server

A server is created with functional options and a `Backend` that returns a
`Session` per connection. Every method receives a `context.Context`; `NewSession`
and `Reset` may return a derived one that replaces the session context.

```go
type Backend struct{}

func (*Backend) NewSession(ctx context.Context, _ *server.Conn) (context.Context, server.Session, error) {
    return ctx, &Session{}, nil
}

func (s *Session) Mail(ctx context.Context, from string, opts *deltasmtp.MailOptions) error { ... }
func (s *Session) Rcpt(ctx context.Context, to string, opts *deltasmtp.RcptOptions) error   { ... }

// Data must consume the reader completely before returning.
// The returned queue id ends up in the 250 reply as "OK: queued as <id>".
func (s *Session) Data(ctx context.Context, r func() io.Reader) (string, error) { ... }
```

```go
s := server.New(
    server.WithBackend(&Backend{}),
    server.WithAddr("localhost:1025"),
    server.WithHostname("localhost"),
    server.WithCommandTimeout(10*time.Second),
    server.WithMaxMessageBytes(1024*1024),
    server.WithMaxRecipients(50),
    server.WithEnforceSecureConnection(true),
)

if err := s.ListenAndServe(ctx); err != nil {
    log.Fatal(err)
}
```

Errors returned from session methods are sent to the client. Return an
`*deltasmtp.Status` to control the reply code, enhanced code and (multi-line) text;
any other error becomes a generic failure and is logged through the session
logger.

`server.WithEnforceSecureConnection` rejects everything except NOOP, EHLO,
STARTTLS and QUIT until the connection is encrypted, and
`server.WithEnforceAuthentication` does the same until authentication succeeded.

Every address in MAIL FROM, RCPT TO and VRFY is checked by an address
validator before it reaches the session; a rejected address gets 553 5.1.7
(MAIL) or 553 5.1.3 (RCPT and VRFY). The default, `server.UTF8Clean`, rejects
addresses with characters that make them look different from what they are,
which RFC 6531 otherwise allows: bidirectional formatting characters, line and
paragraph separators, and zero width space, word joiner and byte order mark.
ASCII addresses are always accepted. `server.WithAddressValidator` replaces the
check (call `server.UTF8Clean` from it to keep the default) and `nil` disables
it.

## Extensions

| Extension | RFC | Client | Server |
| --- | --- | --- | --- |
| PIPELINING | [2920](https://tools.ietf.org/html/rfc2920) | yes | always |
| 8BITMIME | [6152](https://tools.ietf.org/html/rfc6152) | yes | always |
| ENHANCEDSTATUSCODES | [2034](https://tools.ietf.org/html/rfc2034) | yes | always |
| SIZE | [1870](https://tools.ietf.org/html/rfc1870) | yes | always |
| STARTTLS | [3207](https://tools.ietf.org/html/rfc3207) | yes | with TLS config |
| AUTH | [4954](https://tools.ietf.org/html/rfc4954) | yes | via [go-sasl](https://github.com/uponusolutions/go-sasl) |
| CHUNKING / BDAT | [3030](https://tools.ietf.org/html/rfc3030) | yes | yes |
| BINARYMIME | [3030](https://tools.ietf.org/html/rfc3030) | yes | opt-in |
| SMTPUTF8 | [6531](https://tools.ietf.org/html/rfc6531) | yes | opt-in |
| DSN | [3461](https://tools.ietf.org/html/rfc3461) | yes | opt-in |
| REQUIRETLS | [8689](https://tools.ietf.org/html/rfc8689) | yes | opt-in |
| RRVS | [7293](https://tools.ietf.org/html/rfc7293) | yes | opt-in |
| DELIVERBY | [2852](https://tools.ietf.org/html/rfc2852) | yes | opt-in |
| MT-PRIORITY | [6710](https://tools.ietf.org/html/rfc6710) | yes | opt-in |
| LIMITS (MAILMAX, RCPTMAX) | [9422](https://tools.ietf.org/html/rfc9422) | parsed | with max transactions / recipients |
| XOORG | non-standard | yes | opt-in |

Server-side extensions marked opt-in are advertised only when enabled, because
advertising one is a promise the backend has to keep. CHUNKING is on by default:
BDAT reaches `Session.Data` like DATA, so the backend needs no support for it;
`server.WithEnableCHUNKING(false)` turns it off. XOORG carries the accepted domain used by
Exchange Online outgoing connectors.

## Performance

The hot paths are the dot and BDAT readers and writers, which stream without
copying the whole message into memory. The client picks BDAT over DATA when the
server advertises CHUNKING; `client.WithChunking` turns BDAT on or off and
`client.WithChunkingBufferSize` (2 MiB by default, 0 disables buffering) controls
how messages of unknown size are coalesced into chunks. Pipelining removes a
round trip per command in both the mailer and the server; the client uses it
whenever the server advertises PIPELINING, `client.WithPipelining(false)` turns
it off.

A message of known size (anything with a `Len() int`, such as
`*strings.Reader` or `*bytes.Reader`) is announced with SIZE and sent as a
single BDAT chunk, without dot-stuffing on either side. See
[benchmarks](#benchmarks) for the numbers.

## Differences from emersion/go-smtp

deltasmtp started as a fork of go-smtp and has since been detached from it.
The API is not compatible with upstream. The notable changes:

- **Split into packages.** Client, server, mailer, MX resolution and test helpers
  live in their own packages instead of a single `smtp` package.
- **Functional options.** `server.New(server.With...)` and
  `client.New(client.With...)` replace exported struct fields, so configuration
  cannot be mutated while a server is running.
- **Contexts everywhere.** Every `Backend` and `Session` method takes a
  `context.Context`, and `NewSession`/`Reset` can return a derived context that
  the rest of the session uses.
- **`Session.Data` takes `func() io.Reader`** and returns a queue id, which makes
  it possible to skip reading the body and to report an identifier back to the
  client.
- **Structured errors and logging.** Replies are `*deltasmtp.Status` values with
  multi-line support, and each session can provide its own `*slog.Logger`.
- **More extensions.** Client CHUNKING/BDAT and XOORG are supported in addition to what upstream offers.
- **Pipelining on both sides**, enabled by default in the client.
- **The mailer**, which resolves MX records, sends to several servers per call
  and reports per-recipient failures.
- **No LMTP.** Upstream supports LMTP; deltasmtp does not.

deltasmtp builds on the work of go-smtp and its contributors, and we are
grateful for it. go-smtp is mature, widely used and well maintained. Choose it
if you need LMTP or an API that has been stable for years. deltasmtp is younger
and its API still changes. It exists because we needed more performance and
proprietary extensions such as XOORG, which are out of scope for go-smtp.

## Relationship with net/smtp

The Go standard library provides an SMTP client implementation in `net/smtp`.
However `net/smtp` is frozen: it's not getting any new features. deltasmtp provides
a server implementation and a number of client improvements.

## Development

```sh
make test    # go test ./...
make race    # tests with -race
make cover   # coverage profile and HTML report
make lint    # golangci-lint
make bench   # benchmarks in benchmark/, BENCH=... TIME=... to narrow them down
make bench-compare # comparison with go-smtp (separate module in benchmark/compare)
make stats   # benchstat over .bench/*.txt
```

`.devcontainer/` holds a development container for [Devsy](https://devsy.sh)
with everything above (Go 1.27.4 on Debian, gcc for the race detector, the
tools of `go.tool.mod`). The developer has no root: no sudo, no setuid
binaries, no capabilities. There is no ssh client and `SSH_AUTH_SOCK` is
cleared, push from the host. SSH agent forwarding is a client setting, turn it
off once (check the option names with `devsy context options`):

```sh
devsy context set-options -o SSH_AGENT_FORWARDING=false
```

## Licence

MIT
