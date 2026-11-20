package server_test

import (
	"bufio"
	"crypto/tls"
	"io"
	"net"
	"strings"
	"testing"
	"time"

	"github.com/stretchr/testify/require"
	"github.com/uponusolutions/deltasmtp/server"
	"github.com/uponusolutions/deltasmtp/tester"
)

func TestServerEnforceSecureConnection(t *testing.T) {
	_, _, c, scanner, caps := testServerEhlo(t, nil, server.WithEnforceSecureConnection(true))

	if _, ok := caps["AUTH PLAIN"]; !ok {
		t.Fatal("AUTH PLAIN capability is missing when auth is enabled")
	}

	_, _ = io.WriteString(c, "AUTH PLAIN AHVzZXJuYW1lAHBhc3N3b3Jk\r\n")
	scan(t, c, scanner)
	if !strings.HasPrefix(scanner.Text(), "530 ") {
		t.Fatal("Should enforce STARTTLS:", scanner.Text())
	}
}

func TestServerEnforceSecureConnectionImplicitTls(t *testing.T) {
	cert, err := tester.GenX509KeyPair("localhost")
	require.NoError(t, err)

	be := new(backend)
	be.clientTls = true

	_, _, c, scanner, caps := testServerEhlo(
		t,
		be,
		server.WithEnforceSecureConnection(true),
		server.WithImplicitTLS(true),
		server.WithTLSConfig(&tls.Config{
			Certificates: []tls.Certificate{cert},
		}),
	)

	if _, ok := caps["AUTH PLAIN"]; !ok {
		t.Fatal("AUTH PLAIN capability is missing when auth is enabled")
	}

	_, _ = io.WriteString(c, "AUTH PLAIN AHVzZXJuYW1lAHBhc3N3b3Jk\r\n")
	scan(t, c, scanner)
	if !strings.HasPrefix(scanner.Text(), "235 ") {
		t.Fatal("Should succeed:", scanner.Text())
	}
}

func TestServerEnforceSecureConnectionStartTls(t *testing.T) {
	cert, err := tester.GenX509KeyPair("localhost")
	require.NoError(t, err)

	_, _, c, scanner, caps := testServerEhlo(
		t,
		nil,
		server.WithEnforceSecureConnection(true),
		server.WithTLSConfig(&tls.Config{
			Certificates: []tls.Certificate{cert},
		}),
	)

	if _, ok := caps["AUTH PLAIN"]; !ok {
		t.Fatal("AUTH PLAIN capability is missing when auth is enabled")
	}

	_, _ = io.WriteString(c, "AUTH PLAIN AHVzZXJuYW1lAHBhc3N3b3Jk\r\n")
	scan(t, c, scanner)
	if !strings.HasPrefix(scanner.Text(), "530 ") {
		t.Fatal("STARTTLS first expected:", scanner.Text())
	}
}

func TestServerEnforceSecureConnectionStartTlsStarttls(t *testing.T) {
	cert, err := tester.GenX509KeyPair("localhost")
	require.NoError(t, err)

	_, _, c, _, _ := testServerEhlo(
		t,
		nil,
		server.WithEnforceSecureConnection(true),
		server.WithTLSConfig(&tls.Config{
			Certificates: []tls.Certificate{cert},
		}),
	)

	_, _ = io.WriteString(c, "STARTTLS\r\n")

	buf := make([]byte, 30)
	_, _ = c.Read(buf)

	if string(buf) != "220 2.0.0 Ready to start TLS\r\n" {
		t.Fatal("Ready to start expected:", string(buf))
	}

	// Upgrade to TLS
	c = tls.Client(c, &tls.Config{InsecureSkipVerify: true, Certificates: []tls.Certificate{cert}})

	scanner := bufio.NewScanner(c)

	_, _ = io.WriteString(c, "EHLO localhost\r\n")
	scan(t, c, scanner)
	for strings.HasPrefix(scanner.Text(), "250-") {
		scan(t, c, scanner)
	}
	if !strings.HasPrefix(scanner.Text(), "250 ") {
		t.Fatal("hello expected expected:", scanner.Text())
	}

	_, _ = io.WriteString(c, "AUTH PLAIN AHVzZXJuYW1lAHBhc3N3b3Jk\r\n")
	scan(t, c, scanner)
	if !strings.HasPrefix(scanner.Text(), "235 ") {
		t.Fatal("Should succeed:", scanner.Text())
	}
}

func TestServerNoEnforceSecureConnectionStartTlsStarttls(t *testing.T) {
	cert, err := tester.GenX509KeyPair("localhost")
	require.NoError(t, err)

	_, _, c, _, _ := testServerEhlo(
		t,
		nil,
		server.WithEnforceAuthentication(true),
		server.WithEnforceSecureConnection(false),
		server.WithTLSConfig(&tls.Config{
			Certificates: []tls.Certificate{cert},
		}),
	)

	_, _ = io.WriteString(c, "STARTTLS\r\n")

	buf := make([]byte, 30)
	_, _ = c.Read(buf)

	if string(buf) != "220 2.0.0 Ready to start TLS\r\n" {
		t.Fatal("Ready to start expected:", string(buf))
	}

	// Upgrade to TLS
	c = tls.Client(c, &tls.Config{InsecureSkipVerify: true, Certificates: []tls.Certificate{cert}})

	scanner := bufio.NewScanner(c)

	_, _ = io.WriteString(c, "EHLO localhost\r\n")
	scan(t, c, scanner)
	for strings.HasPrefix(scanner.Text(), "250-") {
		scan(t, c, scanner)
	}
	if !strings.HasPrefix(scanner.Text(), "250 ") {
		t.Fatal("hello expected expected:", scanner.Text())
	}

	_, _ = io.WriteString(c, "AUTH PLAIN AHVzZXJuYW1lAHBhc3N3b3Jk\r\n")
	scan(t, c, scanner)
	if !strings.HasPrefix(scanner.Text(), "235 ") {
		t.Fatal("Should succeed:", scanner.Text())
	}
}

// RFC 3207 section 4.2: the server discards the EHLO knowledge and the
// authentication after STARTTLS.
func TestServerStartTlsDiscardsSettings(t *testing.T) {
	cert, err := tester.GenX509KeyPair("localhost")
	require.NoError(t, err)

	_, _, c, scanner, _ := testServerEhlo(
		t,
		nil,
		server.WithTLSConfig(&tls.Config{
			Certificates: []tls.Certificate{cert},
		}),
	)

	_, _ = io.WriteString(c, "AUTH PLAIN AHVzZXJuYW1lAHBhc3N3b3Jk\r\n")
	scan(t, c, scanner)
	require.Equal(t, "235 2.0.0 Authentication succeeded", scanner.Text())

	_, _ = io.WriteString(c, "STARTTLS\r\n")
	scan(t, c, scanner)
	require.Equal(t, "220 2.0.0 Ready to start TLS", scanner.Text())

	c = tls.Client(c, &tls.Config{InsecureSkipVerify: true})
	scanner = bufio.NewScanner(c)

	// The auth mechanisms from the EHLO before STARTTLS are discarded.
	_, _ = io.WriteString(c, "HELO localhost\r\n")
	scan(t, c, scanner)
	require.True(t, strings.HasPrefix(scanner.Text(), "250 "), scanner.Text())

	_, _ = io.WriteString(c, "AUTH PLAIN AHVzZXJuYW1lAHBhc3N3b3Jk\r\n")
	scan(t, c, scanner)
	require.Equal(t, "502 5.7.0 Authentication not supported", scanner.Text())

	// The authentication is revoked, the client has to authenticate again.
	_, _ = io.WriteString(c, "EHLO localhost\r\n")
	scan(t, c, scanner)
	for strings.HasPrefix(scanner.Text(), "250-") {
		scan(t, c, scanner)
	}
	require.True(t, strings.HasPrefix(scanner.Text(), "250 "), scanner.Text())

	_, _ = io.WriteString(c, "AUTH PLAIN AHVzZXJuYW1lAHBhc3N3b3Jk\r\n")
	scan(t, c, scanner)
	require.Equal(t, "235 2.0.0 Authentication succeeded", scanner.Text())
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
	cert, err := tester.GenX509KeyPair("localhost")
	require.NoError(t, err)

	_, _, c, _ := testServer(t, nil,
		server.WithImplicitTLS(true),
		server.WithTLSConfig(&tls.Config{Certificates: []tls.Certificate{cert}}),
		server.WithTLSHandshakeTimeout(100*time.Millisecond))
	defer func() { _ = c.Close() }()

	requireClosedWithin(t, c, 2*time.Second)
}

// A client that never completes the STARTTLS handshake is disconnected after the
// TLS handshake timeout, not the command timeout.
func TestServerTLSHandshakeTimeoutStartTLS(t *testing.T) {
	cert, err := tester.GenX509KeyPair("localhost")
	require.NoError(t, err)

	_, _, c, scanner, _ := testServerEhlo(t, nil,
		server.WithTLSConfig(&tls.Config{Certificates: []tls.Certificate{cert}}),
		server.WithTLSHandshakeTimeout(100*time.Millisecond))
	defer func() { _ = c.Close() }()

	_, _ = io.WriteString(c, "STARTTLS\r\n")
	scanOk(t, c, scanner)
	require.True(t, strings.HasPrefix(scanner.Text(), "220 "), scanner.Text())

	requireClosedWithin(t, c, 2*time.Second)
}
