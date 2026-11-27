package server_test

import (
	"io"
	"testing"

	"github.com/stretchr/testify/require"

	"github.com/uponusolutions/deltasmtp"
	"github.com/uponusolutions/deltasmtp/server"
)

// Verify answers VRFY with a positive status, nil answers 252, a rejection is
// sent and the session goes on.
func TestServer_VerifyReplies(t *testing.T) {
	be, s, c, scanner := testServerAuthenticated(t, nil)
	defer func() {
		_ = s.Close()
		_ = c.Close()
	}()

	expect(t, c, scanner, "VRFY <alice@example.org>", "252 2.5.0 ")

	be.verifyStatus = deltasmtp.NewStatusS(250, deltasmtp.EnhancedCode{2, 1, 5}, "Alice <alice@example.org>")
	expect(t, c, scanner, "VRFY <alice@example.org>", "250 2.1.5 Alice <alice@example.org>")

	be.verifyStatus = nil
	be.verifyErr = deltasmtp.NewStatusS(550, deltasmtp.EnhancedCode{5, 1, 1}, "No such user").Err()
	expect(t, c, scanner, "VRFY <bob@example.org>", "550 5.1.1 No such user")

	expect(t, c, scanner, "NOOP", "250 ")
}

// A positive status returned as error is no rejection, the connection is closed.
func TestServer_VerifyPositiveErrorCloses(t *testing.T) {
	be, s, c, scanner := testServerAuthenticated(t, nil)
	defer func() {
		_ = s.Close()
		_ = c.Close()
	}()

	be.verifyErr = deltasmtp.NewStatusS(250, deltasmtp.NoEnhancedCode, "yes").Err()
	expect(t, c, scanner, "VRFY <alice@example.org>", "421 4.4.0 ")
	require.False(t, scanner.Scan(), "connection must be closed")
}

// A positive status returned as error by Mail isn't a success, it is handled
// like any other error.
func TestServer_MailPositiveStatusErrorRejects(t *testing.T) {
	be := &backend{userErr: deltasmtp.NewStatusS(250, deltasmtp.EnhancedCode{2, 0, 0}, "Fine").Err()}
	_, s, c, scanner := testServerAuthenticated(t, be)
	defer func() {
		_ = s.Close()
		_ = c.Close()
	}()

	expect(t, c, scanner, "MAIL FROM:<root@nsa.gov>", "451 4.0.0 ")
	// no transaction was started
	expect(t, c, scanner, "RCPT TO:<root@gchq.gov.uk>", "502 5.5.1 ")
}

// QUIT instead of the next BDAT chunk ends the session like QUIT does.
func TestServer_Chunking_QuitClosesConnection(t *testing.T) {
	be, s, c, scanner := testServerAuthenticated(t, nil, server.WithEnableCHUNKING(true))
	defer func() {
		_ = s.Close()
		_ = c.Close()
	}()
	be.dataErrors = make(chan error, 10)

	expect(t, c, scanner, "MAIL FROM:<root@nsa.gov>", "250 ")
	expect(t, c, scanner, "RCPT TO:<root@gchq.gov.uk>", "250 ")
	_, _ = io.WriteString(c, "BDAT 8\r\nHey <3\r\n")
	requirePrefix(t, readReply(t, c, scanner), "250 ")

	expect(t, c, scanner, "QUIT", "221 ")
	require.ErrorIs(t, <-be.dataErrors, deltasmtp.ErrBDATQuit)
	require.False(t, scanner.Scan(), "connection must be closed after 221")
	require.NoError(t, scanner.Err())
}
