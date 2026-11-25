package server_test

import (
	"bufio"
	"crypto/tls"
	"io"
	"net"
	"testing"
	"time"

	"github.com/stretchr/testify/require"
	"github.com/uponusolutions/deltasmtp/server"
	"github.com/uponusolutions/deltasmtp/tester"
)

const authPlain = "AUTH PLAIN AHVzZXJuYW1lAHBhc3N3b3Jk"

// tlsConfig returns a server TLS config with a certificate for localhost.
func tlsConfig(t *testing.T) *tls.Config {
	t.Helper()
	cert, err := tester.GenX509KeyPair("localhost")
	require.NoError(t, err)
	return &tls.Config{Certificates: []tls.Certificate{cert}}
}

// ehlo sends EHLO and reads the complete multiline reply.
func ehlo(t *testing.T, c net.Conn, scanner *bufio.Scanner) {
	t.Helper()
	requirePrefix(t, send(t, c, scanner, "EHLO localhost"), "250-")
	readCaps(t, c, scanner)
}

func TestServerEnforceSecureConnection(t *testing.T) {
	_, _, c, scanner, caps := testServerEhlo(t, nil, server.WithEnforceSecureConnection(true))
	require.True(t, caps["AUTH PLAIN"], "AUTH PLAIN capability is missing when auth is enabled")

	// STARTTLS is enforced
	expect(t, c, scanner, authPlain, "530 ")
}

func TestServerEnforceSecureConnectionImplicitTls(t *testing.T) {
	be := &backend{clientTls: true}
	_, _, c, scanner, caps := testServerEhlo(t, be,
		server.WithEnforceSecureConnection(true),
		server.WithImplicitTLS(true),
		server.WithTLSConfig(tlsConfig(t)),
	)
	require.True(t, caps["AUTH PLAIN"], "AUTH PLAIN capability is missing when auth is enabled")

	expect(t, c, scanner, authPlain, "235 ")
}

func TestServerEnforceSecureConnectionStartTls(t *testing.T) {
	_, _, c, scanner, caps := testServerEhlo(t, nil,
		server.WithEnforceSecureConnection(true),
		server.WithTLSConfig(tlsConfig(t)),
	)
	require.True(t, caps["AUTH PLAIN"], "AUTH PLAIN capability is missing when auth is enabled")

	// STARTTLS first
	expect(t, c, scanner, authPlain, "530 ")
}

// requireStartTLSAuth upgrades the connection with STARTTLS and authenticates.
func requireStartTLSAuth(t *testing.T, opts ...server.Option) {
	t.Helper()
	cfg := tlsConfig(t)
	_, _, c, _, _ := testServerEhlo(t, nil, append(opts, server.WithTLSConfig(cfg))...)

	// Read the reply unbuffered, the TLS handshake follows directly.
	_, _ = io.WriteString(c, "STARTTLS\r\n")
	buf := make([]byte, 30)
	_, _ = c.Read(buf)
	require.Equal(t, "220 2.0.0 Ready to start TLS\r\n", string(buf))

	c = tls.Client(c, &tls.Config{InsecureSkipVerify: true, Certificates: cfg.Certificates})
	scanner := bufio.NewScanner(c)

	ehlo(t, c, scanner)
	expect(t, c, scanner, authPlain, "235 ")
}

func TestServerEnforceSecureConnectionStartTlsStarttls(t *testing.T) {
	requireStartTLSAuth(t, server.WithEnforceSecureConnection(true))
}

func TestServerNoEnforceSecureConnectionStartTlsStarttls(t *testing.T) {
	requireStartTLSAuth(t, server.WithEnforceAuthentication(true), server.WithEnforceSecureConnection(false))
}

// RFC 3207 section 4.2: the server discards the EHLO knowledge and the
// authentication after STARTTLS.
func TestServerStartTlsDiscardsSettings(t *testing.T) {
	_, _, c, scanner, _ := testServerEhlo(t, nil, server.WithTLSConfig(tlsConfig(t)))

	require.Equal(t, "235 2.0.0 Authentication succeeded", send(t, c, scanner, authPlain))
	require.Equal(t, "220 2.0.0 Ready to start TLS", send(t, c, scanner, "STARTTLS"))

	c = tls.Client(c, &tls.Config{InsecureSkipVerify: true})
	scanner = bufio.NewScanner(c)

	// The auth mechanisms from the EHLO before STARTTLS are discarded.
	expect(t, c, scanner, "HELO localhost", "250 ")
	require.Equal(t, "502 5.7.0 Authentication not supported", send(t, c, scanner, authPlain))

	// The authentication is revoked, the client has to authenticate again.
	ehlo(t, c, scanner)
	require.Equal(t, "235 2.0.0 Authentication succeeded", send(t, c, scanner, authPlain))
}

// requireClosedWithin checks that the server closes c within d.
func requireClosedWithin(t *testing.T, c net.Conn, d time.Duration) {
	t.Helper()
	start := time.Now()
	_ = c.SetReadDeadline(start.Add(5 * time.Second))
	_, err := io.Copy(io.Discard, c)
	require.NoError(t, err) // EOF, not the read deadline
	require.Less(t, time.Since(start), d)
}

// A client that never starts the implicit TLS handshake is disconnected after the
// TLS handshake timeout, not the command timeout.
func TestServerTLSHandshakeTimeoutImplicitTLS(t *testing.T) {
	_, _, c, _ := testServer(t, nil,
		server.WithImplicitTLS(true),
		server.WithTLSConfig(tlsConfig(t)),
		server.WithTLSHandshakeTimeout(100*time.Millisecond))
	defer func() { _ = c.Close() }()

	requireClosedWithin(t, c, 2*time.Second)
}

// A client that never completes the STARTTLS handshake is disconnected after the
// TLS handshake timeout, not the command timeout.
func TestServerTLSHandshakeTimeoutStartTLS(t *testing.T) {
	_, _, c, scanner, _ := testServerEhlo(t, nil,
		server.WithTLSConfig(tlsConfig(t)),
		server.WithTLSHandshakeTimeout(100*time.Millisecond))
	defer func() { _ = c.Close() }()

	expect(t, c, scanner, "STARTTLS", "220 ")
	requireClosedWithin(t, c, 2*time.Second)
}
