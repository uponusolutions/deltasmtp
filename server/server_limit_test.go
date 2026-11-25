package server_test

import (
	"bufio"
	"io"
	"net"
	"strconv"
	"strings"
	"testing"
	"time"

	"github.com/stretchr/testify/require"
	"github.com/uponusolutions/deltasmtp"
	"github.com/uponusolutions/deltasmtp/server"
)

// When the maximum message size is exceeded during DATA or BDAT the rest of the
// payload is still on the wire. The server must not try to interpret it as
// commands (desync / smuggling), so the limit breach is fatal: the server
// replies 552 and closes the connection.

// limitTestServer starts a server with the given max message size and opens a
// mail transaction (MAIL FROM + RCPT TO).
func limitTestServer(t *testing.T, be *backend, maxMessageBytes int64) (*backend, net.Conn, *bufio.Scanner) {
	t.Helper()

	if be == nil {
		be = &backend{}
	}
	be.closeErrors = make(chan error, 1)

	be, s, c, scanner := testServerAuthenticated(t, be,
		server.WithMaxMessageBytes(maxMessageBytes),
		server.WithEnableCHUNKING(true),
	)
	t.Cleanup(func() {
		_ = c.Close()
		_ = s.Close()
	})

	expect(t, c, scanner, "MAIL FROM:<root@nsa.gov>", "250 ")
	expect(t, c, scanner, "RCPT TO:<root@gchq.gov.uk>", "250 ")

	return be, c, scanner
}

// requireTooLargeAndClosed expects a 552 reply followed by the server closing
// the connection without answering anything left in the payload.
func requireTooLargeAndClosed(t *testing.T, be *backend, c net.Conn, scanner *bufio.Scanner) {
	t.Helper()

	requirePrefix(t, readReply(t, c, scanner), "552 5.3.4 ")
	require.False(t, scan(t, c, scanner), "expected connection to be closed, got reply %q", scanner.Text())
	require.NoError(t, scanner.Err(), "expected EOF, not a read timeout")

	select {
	case err := <-be.closeErrors:
		require.ErrorContains(t, err, "maximum message size exceeded")
	case <-time.After(5 * time.Second):
		t.Fatal("session was not closed")
	}
}

// requireSessionUsable checks that the connection is still in sync.
func requireSessionUsable(t *testing.T, c net.Conn, scanner *bufio.Scanner) {
	t.Helper()
	expect(t, c, scanner, "NOOP", "250 2.0.0 ")
}

func TestServerLimit_Data_TooLargeClosesConnection(t *testing.T) {
	be, c, scanner := limitTestServer(t, nil, 50)

	expect(t, c, scanner, "DATA", "354 ")

	// Everything after the first 50 bytes must never be executed as commands.
	_, _ = io.WriteString(c, strings.Repeat("x", 60)+"\r\n"+
		"RSET\r\n"+
		"MAIL FROM:<smuggled@example.com>\r\n"+
		"NOOP\r\n"+
		".\r\n")

	requireTooLargeAndClosed(t, be, c, scanner)
	require.Empty(t, be.messages)
	require.Empty(t, be.anonmsgs)
}

func TestServerLimit_Data_BackendSwallowsError(t *testing.T) {
	be, c, scanner := limitTestServer(t, &backend{swallowDataErr: true}, 50)

	expect(t, c, scanner, "DATA", "354 ")

	_, _ = io.WriteString(c, strings.Repeat("x", 60)+"\r\nNOOP\r\n.\r\n")

	// Even if the backend ignores the read error, the message must not be accepted.
	requireTooLargeAndClosed(t, be, c, scanner)
}

func TestServerLimit_Data_BackendRejectsWithoutReading(t *testing.T) {
	// The backend rejects the message without reading it, the server discards
	// the rest itself and hits the limit while doing so.
	rejected := deltasmtp.NewStatusS(554, deltasmtp.EnhancedCode{5, 6, 0}, "rejected")
	be, c, scanner := limitTestServer(t, &backend{rejectAfterOpen: rejected}, 50)

	expect(t, c, scanner, "DATA", "354 ")

	_, _ = io.WriteString(c, strings.Repeat("x", 60)+"\r\nNOOP\r\n.\r\n")

	requireTooLargeAndClosed(t, be, c, scanner)
}

func TestServerLimit_Data_BackendRejectsWithinLimit(t *testing.T) {
	// Rejecting a message within the limit keeps the connection usable.
	rejected := deltasmtp.NewStatusS(554, deltasmtp.EnhancedCode{5, 6, 0}, "rejected")
	_, c, scanner := limitTestServer(t, &backend{rejectAfterOpen: rejected}, 50)

	expect(t, c, scanner, "DATA", "354 ")

	_, _ = io.WriteString(c, "Hello\r\n.\r\n")
	requirePrefix(t, readReply(t, c, scanner), "554 5.6.0 ")

	requireSessionUsable(t, c, scanner)
}

func TestServerLimit_Data_RejectedEndOfDataEndsTransaction(t *testing.T) {
	// A message rejected after the end of data ends the transaction, like an accepted one.
	rejected := deltasmtp.NewStatusS(554, deltasmtp.EnhancedCode{5, 6, 0}, "rejected")
	_, c, scanner := limitTestServer(t, &backend{rejectAfterOpen: rejected}, 50)

	expect(t, c, scanner, "DATA", "354 ")
	_, _ = io.WriteString(c, "Hello\r\n.\r\n")
	requirePrefix(t, readReply(t, c, scanner), "554 5.6.0 ")

	// Pipelined RCPT and DATA must not reuse the previous envelope.
	_, _ = io.WriteString(c, "RCPT TO:<root@gchq.gov.uk>\r\nDATA\r\n")
	requirePrefix(t, readReply(t, c, scanner), "5") // RCPT without MAIL
	requirePrefix(t, readReply(t, c, scanner), "5") // DATA without MAIL

	// A new transaction can be started.
	expect(t, c, scanner, "MAIL FROM:<root@nsa.gov>", "250 ")
}

func TestServerLimit_Data_RejectedCommandKeepsTransaction(t *testing.T) {
	// A DATA command rejected before 354 carried no message, the transaction stays open.
	rejected := deltasmtp.NewStatusS(554, deltasmtp.EnhancedCode{5, 6, 0}, "rejected")
	_, c, scanner := limitTestServer(t, &backend{dataErr: rejected}, 50)

	expect(t, c, scanner, "DATA", "554 5.6.0 ")

	expect(t, c, scanner, "RCPT TO:<other@gchq.gov.uk>", "250 ")
}

func TestServerLimit_Bdat_BackendRejectsWithoutReading(t *testing.T) {
	rejected := deltasmtp.NewStatusS(554, deltasmtp.EnhancedCode{5, 6, 0}, "rejected")
	be, c, scanner := limitTestServer(t, &backend{rejectAfterOpen: rejected}, 50)

	payload := strings.Repeat("x", 60) + "\r\nNOOP\r\n"
	_, _ = io.WriteString(c, "BDAT "+strconv.Itoa(len(payload))+" LAST\r\n"+payload)

	requireTooLargeAndClosed(t, be, c, scanner)
}

func TestServerLimit_Bdat_BackendRejectsWithinLimit(t *testing.T) {
	rejected := deltasmtp.NewStatusS(554, deltasmtp.EnhancedCode{5, 6, 0}, "rejected")
	_, c, scanner := limitTestServer(t, &backend{rejectAfterOpen: rejected}, 50)

	_, _ = io.WriteString(c, "BDAT 6 LAST\r\nNOOP\r\n")
	requirePrefix(t, readReply(t, c, scanner), "554 5.6.0 ")

	requireSessionUsable(t, c, scanner)
}

func TestServerLimit_Data_ExactLimit(t *testing.T) {
	be, c, scanner := limitTestServer(t, nil, 50)

	expect(t, c, scanner, "DATA", "354 ")

	body := strings.Repeat("x", 48) + "\r\n"
	_, _ = io.WriteString(c, body+".\r\n")

	requirePrefix(t, readReply(t, c, scanner), "250 ")
	require.Len(t, be.messages, 1)
	require.Equal(t, body, string(be.messages[0].Data))

	requireSessionUsable(t, c, scanner)
}

func TestServerLimit_Bdat_SingleChunkTooLarge(t *testing.T) {
	be, c, scanner := limitTestServer(t, nil, 50)

	// The chunk content looks like commands, it must not be executed.
	payload := strings.Repeat("x", 40) + "\r\nRSET\r\nNOOP\r\nMAIL FROM:<smuggled@example.com>\r\n"
	_, _ = io.WriteString(c, "BDAT "+strconv.Itoa(len(payload))+" LAST\r\n"+payload)

	requireTooLargeAndClosed(t, be, c, scanner)
	require.Empty(t, be.messages)
	require.Empty(t, be.anonmsgs)
}

func TestServerLimit_Bdat_SecondChunkTooLarge(t *testing.T) {
	be, c, scanner := limitTestServer(t, nil, 50)

	_, _ = io.WriteString(c, "BDAT 30\r\n"+strings.Repeat("a", 30))
	requirePrefix(t, readReply(t, c, scanner), "250 ")

	payload := strings.Repeat("b", 15) + "\r\nNOOP\r\nRSET\r\n"
	_, _ = io.WriteString(c, "BDAT "+strconv.Itoa(len(payload))+" LAST\r\n"+payload)

	requireTooLargeAndClosed(t, be, c, scanner)
	require.Empty(t, be.messages)
	require.Empty(t, be.anonmsgs)
}

func TestServerLimit_Bdat_PipelinedChunksTooLarge(t *testing.T) {
	be, c, scanner := limitTestServer(t, nil, 50)

	// All chunks are pipelined, the second one breaches the limit.
	_, _ = io.WriteString(c,
		"BDAT 30\r\n"+strings.Repeat("a", 30)+
			"BDAT 30\r\nNOOP\r\nNOOP\r\nNOOP\r\nNOOP\r\nNOOP\r\n"+
			"BDAT 6 LAST\r\nNOOP\r\n")

	// reply for the first chunk
	requirePrefix(t, readReply(t, c, scanner), "250 ")
	requireTooLargeAndClosed(t, be, c, scanner)
	require.Empty(t, be.messages)
}

func TestServerLimit_Bdat_BackendSwallowsError(t *testing.T) {
	be, c, scanner := limitTestServer(t, &backend{swallowDataErr: true}, 50)

	payload := strings.Repeat("x", 60) + "\r\nNOOP\r\n"
	_, _ = io.WriteString(c, "BDAT "+strconv.Itoa(len(payload))+" LAST\r\n"+payload)

	requireTooLargeAndClosed(t, be, c, scanner)
}

func TestServerLimit_Bdat_ExactLimit(t *testing.T) {
	be, c, scanner := limitTestServer(t, nil, 50)

	_, _ = io.WriteString(c, "BDAT 25\r\n"+strings.Repeat("a", 25))
	requirePrefix(t, readReply(t, c, scanner), "250 ")
	_, _ = io.WriteString(c, "BDAT 25 LAST\r\n"+strings.Repeat("b", 25))
	requirePrefix(t, readReply(t, c, scanner), "250 ")

	require.Len(t, be.messages, 1)
	require.Equal(t, strings.Repeat("a", 25)+strings.Repeat("b", 25), string(be.messages[0].Data))

	requireSessionUsable(t, c, scanner)
}

// A backend may reject with 552 on its own (e.g. its own size policy) without
// the server limit being hit. The stream is in sync, so the connection stays open.
func TestServerLimit_Data_BackendOwnTooLarge(t *testing.T) {
	_, c, scanner := limitTestServer(t, &backend{rejectAfterOpen: deltasmtp.ErrDataTooLarge}, 50)

	expect(t, c, scanner, "DATA", "354 ")

	_, _ = io.WriteString(c, "Hello\r\n.\r\n")
	requirePrefix(t, readReply(t, c, scanner), "552 5.3.4 ")

	requireSessionUsable(t, c, scanner)
}

func TestServerLimit_Bdat_BackendOwnTooLarge(t *testing.T) {
	_, c, scanner := limitTestServer(t, &backend{rejectAfterOpen: deltasmtp.ErrDataTooLarge}, 50)

	_, _ = io.WriteString(c, "BDAT 6 LAST\r\nNOOP\r\n")
	requirePrefix(t, readReply(t, c, scanner), "552 5.3.4 ")

	requireSessionUsable(t, c, scanner)
}

// dialGreeted opens a connection and returns the first reply line.
func dialGreeted(t *testing.T, addr string) (net.Conn, string) {
	t.Helper()

	c, err := net.Dial("tcp", addr)
	require.NoError(t, err)
	t.Cleanup(func() { _ = c.Close() })

	scanner := bufio.NewScanner(c)
	return c, readReply(t, c, scanner)
}

func TestServerLimit_Connections(t *testing.T) {
	noPerIP := server.WithMaxConnectionsPerIP(0)
	perIP := "421 4.7.0 localhost Error: too many connections from 127.0.0.1"
	total := "421 4.3.2 Too many concurrent connections, try again later"

	tests := []struct {
		name string
		opts []server.Option
		// Connections that must be accepted.
		accepted int
		// Reply to the next connection, empty if it must be accepted.
		rejected string
	}{
		{name: "per ip default", accepted: 10, rejected: perIP},
		{name: "per ip custom", opts: []server.Option{server.WithMaxConnectionsPerIP(2)}, accepted: 2, rejected: perIP},
		{name: "per ip disabled", opts: []server.Option{noPerIP}, accepted: 20},
		{name: "total default", opts: []server.Option{noPerIP}, accepted: 1000, rejected: total},
		{name: "total custom", opts: []server.Option{noPerIP, server.WithMaxConnections(2)}, accepted: 2, rejected: total},
		{
			name:     "total before per ip",
			opts:     []server.Option{server.WithMaxConnections(2), server.WithMaxConnectionsPerIP(2)},
			accepted: 2,
			rejected: total,
		},
		{name: "total disabled", opts: []server.Option{noPerIP, server.WithMaxConnections(0)}, accepted: 1001},
	}

	for _, tt := range tests {
		t.Run(tt.name, func(t *testing.T) {
			_, s, c, scanner := testServerGreeted(t, nil, tt.opts...)
			t.Cleanup(func() {
				_ = c.Close()
				_ = s.Close()
			})
			addr := c.RemoteAddr().String()

			// The first connection is already open.
			for range tt.accepted - 1 {
				_, reply := dialGreeted(t, addr)
				requirePrefix(t, reply, "220 ")
			}

			if tt.rejected == "" {
				return
			}

			cc, reply := dialGreeted(t, addr)
			require.Equal(t, tt.rejected, reply)
			require.False(t, scan(t, cc, bufio.NewScanner(cc)), "expected connection to be closed")

			// Closing a connection frees a slot.
			expect(t, c, scanner, "QUIT", "221 ")
			_ = c.Close()

			require.Eventually(t, func() bool {
				cc, err := net.Dial("tcp", addr)
				if err != nil {
					return false
				}
				defer func() { _ = cc.Close() }()
				sc := bufio.NewScanner(cc)
				return scan(t, cc, sc) && strings.HasPrefix(sc.Text(), "220 ")
			}, 5*time.Second, 10*time.Millisecond)
		})
	}
}

// limitsCap returns the LIMITS capability of the EHLO response, or "" if missing.
func limitsCap(caps map[string]bool) string {
	for c := range caps {
		if strings.HasPrefix(c, "LIMITS") {
			return c
		}
	}
	return ""
}

func TestServerLimit_LimitsAdvertised(t *testing.T) {
	tests := []struct {
		name string
		opts []server.Option
		want string
	}{
		{
			name: "custom", opts: []server.Option{server.WithMaxTransactions(5), server.WithMaxRecipients(20)},
			want: "LIMITS MAILMAX=5 RCPTMAX=20",
		},
		{name: "mailmax disabled", opts: []server.Option{server.WithMaxTransactions(0)}, want: "LIMITS RCPTMAX=1000"},
		{name: "rcptmax disabled", opts: []server.Option{server.WithMaxRecipients(0)}, want: "LIMITS MAILMAX=1000"},
		{name: "both disabled", opts: []server.Option{server.WithMaxTransactions(0), server.WithMaxRecipients(0)}},
		// RFC 9422 allows at most six digits.
		{
			name: "maximum", opts: []server.Option{server.WithMaxTransactions(999999), server.WithMaxRecipients(1000000)},
			want: "LIMITS MAILMAX=999999",
		},
	}

	for _, tt := range tests {
		t.Run(tt.name, func(t *testing.T) {
			_, s, c, _, caps := testServerEhlo(t, nil, tt.opts...)
			t.Cleanup(func() {
				_ = c.Close()
				_ = s.Close()
			})
			require.Equal(t, tt.want, limitsCap(caps))
		})
	}
}

// RFC 9422 MAILMAX: every MAIL command counts, also rejected ones and across RSET.
func TestServerLimit_MaxTransactions(t *testing.T) {
	be := &backend{closeErrors: make(chan error, 1)}
	_, s, c, scanner := testServerAuthenticated(t, be, server.WithMaxTransactions(3))
	t.Cleanup(func() {
		_ = c.Close()
		_ = s.Close()
	})

	expect(t, c, scanner, "MAIL FROM:invalid", "501 ")

	for range 2 {
		expect(t, c, scanner, "MAIL FROM:<root@nsa.gov>", "250 ")
		expect(t, c, scanner, "RSET", "250 ")
	}

	require.Equal(t, "421 4.7.0 Too many transactions in this session", send(t, c, scanner, "MAIL FROM:<root@nsa.gov>"))
	require.False(t, scan(t, c, scanner), "expected connection to be closed, got %q", scanner.Text())

	select {
	case err := <-be.closeErrors:
		require.ErrorContains(t, err, "maximum transactions exceeded")
	case <-time.After(5 * time.Second):
		t.Fatal("session was not closed")
	}
}

// RFC 9422 RCPTMAX doesn't require counting rejected RCPT commands, a client
// keeping to the advertised limit works either way. Only accepted recipients count.
func TestServerLimit_MaxRecipients(t *testing.T) {
	_, c, scanner := limitTestServerRcpt(t, server.WithMaxRecipients(3))

	// limitTestServerRcpt already sent one RCPT, a rejected one doesn't count.
	expect(t, c, scanner, "RCPT TO:invalid", "501 ")

	for _, rcpt := range []string{"a", "b"} {
		expect(t, c, scanner, "RCPT TO:<"+rcpt+"@gchq.gov.uk>", "250 ")
	}

	require.Equal(t, "452 4.5.3 Maximum limit of 3 recipients reached", send(t, c, scanner, "RCPT TO:<c@gchq.gov.uk>"))

	// A new transaction starts counting again.
	_, _ = io.WriteString(c, "RSET\r\nMAIL FROM:<root@nsa.gov>\r\nRCPT TO:<b@gchq.gov.uk>\r\n")
	for range 3 {
		requirePrefix(t, readReply(t, c, scanner), "250 ")
	}
}

// limitTestServerRcpt starts a server with the given options and opens a mail
// transaction with one recipient.
func limitTestServerRcpt(t *testing.T, opts ...server.Option) (*backend, net.Conn, *bufio.Scanner) {
	t.Helper()

	be, s, c, scanner := testServerAuthenticated(t, nil, opts...)
	t.Cleanup(func() {
		_ = c.Close()
		_ = s.Close()
	})

	expect(t, c, scanner, "MAIL FROM:<root@nsa.gov>", "250 ")
	expect(t, c, scanner, "RCPT TO:<root@gchq.gov.uk>", "250 ")

	return be, c, scanner
}

// A BDAT chunk that isn't processed (wrong state, no recipients or CHUNKING
// disabled) is discarded, limited to the maximum message size like a processed one.
func TestServerLimit_BdatDiscard(t *testing.T) {
	paths := []struct {
		name     string
		chunking bool
		mail     bool
		reply    string
	}{
		{name: "before MAIL", chunking: true, reply: "503 5.5.1 "},
		{name: "no recipients", chunking: true, mail: true, reply: "502 5.5.1 "},
		{name: "CHUNKING disabled", reply: "504 5.5.4 "},
	}

	for _, p := range paths {
		for _, size := range []int{50, 51} {
			t.Run(p.name+"/"+strconv.Itoa(size), func(t *testing.T) {
				be := &backend{closeErrors: make(chan error, 1)}
				be, s, c, scanner := testServerAuthenticated(t, be,
					server.WithMaxMessageBytes(50),
					server.WithEnableCHUNKING(p.chunking),
				)
				t.Cleanup(func() {
					_ = c.Close()
					_ = s.Close()
				})

				if p.mail {
					expect(t, c, scanner, "MAIL FROM:<root@nsa.gov>", "250 ")
				}

				// The chunk content must never be executed as commands.
				payload := "RSET\r\nMAIL FROM:<smuggled@example.com>\r\n"
				payload += strings.Repeat("x", size-len(payload))
				_, _ = io.WriteString(c, "BDAT "+strconv.Itoa(size)+" LAST\r\n"+payload)

				if size > 50 {
					requireTooLargeAndClosed(t, be, c, scanner)
					return
				}

				requirePrefix(t, readReply(t, c, scanner), p.reply)
				requireSessionUsable(t, c, scanner)
			})
		}
	}
}
