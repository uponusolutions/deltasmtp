package server

import (
	"context"
	"crypto/tls"
	"io"
	"log/slog"

	"github.com/uponusolutions/deltasmtp"
	"github.com/uponusolutions/go-sasl"
)

// Backend is a SMTP server backend.
type Backend interface {
	NewSession(ctx context.Context, c *Conn) (context.Context, Session, error)
}

// BackendFunc is an adapter to allow the use of an ordinary function as a
// Backend.
type BackendFunc func(ctx context.Context, c *Conn) (context.Context, Session, error)

// NewSession calls f(c).
// The returning context is used in the session.
func (f BackendFunc) NewSession(ctx context.Context, c *Conn) (context.Context, Session, error) {
	return f(ctx, c)
}

// Session is used by servers to respond to an SMTP client.
//
// The methods are called when the remote client issues the matching command.
type Session interface {
	// Discard currently processed message.
	// The returning context replaces the context used in the current session.
	// Upgrade is true when the reset is called after a tls upgrade.
	Reset(ctx context.Context, upgrade bool) (context.Context, error)

	// Free all resources associated with session.
	// Error is set if an error occurred during session or connection.
	// Close is always called after the session is done.
	Close(ctx context.Context, err error)

	// Returns logger to use when an error occurs inside a session.
	// If no logger is returned the default *slog.Logger is used.
	Logger(ctx context.Context) *slog.Logger

	// Set return path for currently processed message.
	// A *deltasmtp.StatusError with a negative reply rejects MAIL with that reply,
	// any other error is logged and rejects it with 451 4.0.0.
	Mail(ctx context.Context, from string, opts *deltasmtp.MailOptions) error

	// Add recipient for currently processed message.
	// A *deltasmtp.StatusError with a negative reply rejects RCPT with that reply,
	// any other error is logged and rejects it with 451 4.0.0.
	Rcpt(ctx context.Context, to string, opts *deltasmtp.RcptOptions) error

	// Verify checks the validity of an email address on the server.
	// The status is sent as reply, nil sends 252 2.5.0. A *deltasmtp.StatusError with
	// a negative reply is sent as reply, any other error closes the connection.
	Verify(ctx context.Context, addr string, opts *deltasmtp.VrfyOptions) (*deltasmtp.Status, error)

	// Set currently processed message contents and send it.
	// If r is called then the data must be consumed completely before returning.
	// The queuedid must not be unique.
	// A *deltasmtp.StatusError with a negative reply rejects the message with that
	// reply, any other error closes the connection. With BDAT the reader returns
	// deltasmtp.ErrBDATReset or deltasmtp.ErrBDATQuit if the client sends RSET or
	// QUIT instead of the next chunk, the session should return it.
	Data(ctx context.Context, r func() io.Reader) (queueid string, err error)

	// AuthMechanisms returns valid auth mechanism.
	// Nil or an empty list means no authentication mechanism is allowed.
	AuthMechanisms(ctx context.Context) []string

	// Auth returns a matching sasl server for the given mech.
	Auth(ctx context.Context, mech string) (sasl.Server, error)

	// STARTTLS returns a valid *tls.Config.
	// Is called with the default tls config and the returned tls config is used in the tls upgrade.
	// If the tls.Config is nil or an error is returned, the tls upgrade is aborted and the connection closed.
	// The *tls.Config received must not be changed.
	STARTTLS(ctx context.Context, tls *tls.Config) (*tls.Config, error)
}
