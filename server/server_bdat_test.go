package server_test

import (
	"io"
	"net"
	"strconv"
	"strings"
	"testing"
	"time"

	"github.com/stretchr/testify/require"
	"github.com/uponusolutions/deltasmtp/server"
)

// The server always propagates that it is supporting pipelining.
// If the client uses pipelining, MAIL FROM and RCPT TO and BDAT can happen in the same group.
// Which means when the server receives a BDAT command
//  - before MAIL FROM (or after a failed MAIL FROM - pipelining)
//  - before any RCPT TO (or after only failed RCPT TO - pipelining)
// The server needs to read and discard the chunk.

// TestServerChunkingDefault checks that CHUNKING is advertised by default and
// can be disabled.
func TestServerChunkingDefault(t *testing.T) {
	for _, tc := range []struct {
		name string
		opts []server.Option
		want bool
	}{
		{name: "default", want: true},
		{name: "disabled", opts: []server.Option{server.WithEnableCHUNKING(false)}, want: false},
	} {
		t.Run(tc.name, func(t *testing.T) {
			_, s, c, _, caps := testServerEhlo(t, nil, tc.opts...)
			defer func() {
				_ = s.Close()
				_ = c.Close()
			}()

			require.Equal(t, tc.want, caps["CHUNKING"], "CHUNKING advertised")
		})
	}
}

// TestServerBdatDiscard checks if a BDAT chunk is discarded if it is issued directly after connection.
func TestServerBdatDiscard(t *testing.T) {
	_, s, c, scanner, caps := testServerEhlo(t, nil, server.WithEnableCHUNKING(true))
	defer func() {
		_ = s.Close()
		_ = c.Close()
	}()
	require.True(t, caps["CHUNKING"], "server does not advertise CHUNKING")

	// MAIL FROM as chunk content
	_, _ = io.WriteString(c, "BDAT 9 LAST\r\nMAIL FROM")
	requirePrefix(t, readReply(t, c, scanner), "5")

	// If the BDAT chunk isn't discarded, MAIL FROM is executed as command:
	// 501 5.5.2 Was expecting MAIL arg syntax of FROM:<address>
	expect(t, c, scanner, "NOOP", "250 2.0.0")
}

// TestServerBdatDiscard checks if a BDAT chunk is discarded if it is issued without recipients.
func TestServerBdatNoRecipientsDiscard(t *testing.T) {
	_, s, c, scanner, caps := testServerEhlo(t, nil, server.WithEnableCHUNKING(true))
	defer func() {
		_ = s.Close()
		_ = c.Close()
	}()
	require.True(t, caps["CHUNKING"], "server does not advertise CHUNKING")

	expect(t, c, scanner, "MAIL FROM:<alice@wonderland.book>", "250 2.0.0")

	// RCPT TO as chunk content
	_, _ = io.WriteString(c, "BDAT 7 LAST\r\nRCPT TO")
	requirePrefix(t, readReply(t, c, scanner), "5")

	// If the BDAT chunk isn't discarded, RCPT TO is executed as command.
	expect(t, c, scanner, "NOOP", "250 2.0.0")
}

// writeSlowly writes s in parts with pauses, taking longer in total than the read timeout.
func writeSlowly(c net.Conn, s string, parts int, pause time.Duration) {
	step := len(s) / parts
	for i := range parts - 1 {
		_, _ = io.WriteString(c, s[i*step:(i+1)*step])
		time.Sleep(pause)
	}
	_, _ = io.WriteString(c, s[(parts-1)*step:])
}

// BDAT uses the data timeout, a chunk taking longer than the read timeout must succeed.
func TestServerBdatCommandTimeoutSlowChunk(t *testing.T) {
	be, s, c, scanner, _ := testServerEhlo(t, nil,
		server.WithEnableCHUNKING(true), server.WithCommandTimeout(150*time.Millisecond))
	defer func() {
		_ = s.Close()
		_ = c.Close()
	}()

	send(t, c, scanner, "MAIL FROM:<alice@wonderland.book>")
	send(t, c, scanner, "RCPT TO:<bob@wonderland.book>")

	body := "From: alice@wonderland.book\r\n\r\nslow but steady\r\n"
	_, _ = io.WriteString(c, "BDAT "+strconv.Itoa(len(body))+" LAST\r\n")
	writeSlowly(c, body, 6, 50*time.Millisecond)

	requirePrefix(t, readReply(t, c, scanner), "250 ")
	require.Len(t, be.anonmsgs, 1)
	require.NotNil(t, be.anonmsgs[0].Data)
}

// Discarding a BDAT chunk uses the data timeout, it may take longer than the read timeout.
func TestServerBdatCommandTimeoutSlowDiscard(t *testing.T) {
	_, s, c, scanner, _ := testServerEhlo(t, nil,
		server.WithEnableCHUNKING(true), server.WithCommandTimeout(150*time.Millisecond))
	defer func() {
		_ = s.Close()
		_ = c.Close()
	}()

	send(t, c, scanner, "MAIL FROM:<alice@wonderland.book>")

	// no recipients, the chunk gets discarded
	body := strings.Repeat("x", 60)
	_, _ = io.WriteString(c, "BDAT "+strconv.Itoa(len(body))+" LAST\r\n")
	writeSlowly(c, body, 6, 50*time.Millisecond)

	requirePrefix(t, readReply(t, c, scanner), "5")
	expect(t, c, scanner, "NOOP", "250 ")
}

// A client going silent in the middle of a BDAT chunk is disconnected after the data timeout.
func TestServerBdatDataTimeoutStalled(t *testing.T) {
	_, s, c, scanner, _ := testServerEhlo(t, nil,
		server.WithEnableCHUNKING(true), server.WithDataTimeout(100*time.Millisecond))
	defer func() {
		_ = s.Close()
		_ = c.Close()
	}()

	send(t, c, scanner, "MAIL FROM:<alice@wonderland.book>")
	send(t, c, scanner, "RCPT TO:<bob@wonderland.book>")

	_, _ = io.WriteString(c, "BDAT 100 LAST\r\nonly a part")
	requirePrefix(t, readReply(t, c, scanner), "421 4.4.2 ")
}

// The data timeout covers all chunks of a BDAT transfer, including the command lines in between.
func TestServerBdatDataTimeoutWholeTransfer(t *testing.T) {
	_, s, c, scanner, _ := testServerEhlo(t, nil,
		server.WithEnableCHUNKING(true), server.WithDataTimeout(150*time.Millisecond))
	defer func() {
		_ = s.Close()
		_ = c.Close()
	}()

	send(t, c, scanner, "MAIL FROM:<alice@wonderland.book>")
	send(t, c, scanner, "RCPT TO:<bob@wonderland.book>")

	// every chunk is fast, but the transfer as a whole is too slow
	for i := range 10 {
		_, _ = io.WriteString(c, "BDAT 3\r\nabc")
		reply := readReply(t, c, scanner)
		if strings.HasPrefix(reply, "421 4.4.2 ") {
			require.NotZero(t, i, "first chunk should be accepted")
			return
		}
		requirePrefix(t, reply, "250 ")
		time.Sleep(50 * time.Millisecond)
	}
	require.FailNow(t, "expected the data timeout to end the BDAT transfer")
}
