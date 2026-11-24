//go:build !cover

// Local runs a deltasmtp server in memory and sends mails to it with a
// Mailer, no network access or configuration needed.
//
//	go run ./examples/local
package main

import (
	"context"
	"fmt"
	"os"
	"os/signal"

	"github.com/uponusolutions/deltasmtp/mailer"
	"github.com/uponusolutions/deltasmtp/tester/testserver"
)

func main() {
	ctx, cancel := signal.NotifyContext(context.Background(), os.Interrupt)
	defer cancel()

	if err := run(ctx); err != nil {
		fmt.Fprintln(os.Stderr, err)
		os.Exit(1)
	}
}

func run(ctx context.Context) error {
	// A server on a random local port that keeps every mail in memory.
	s := testserver.Standard()

	l, err := s.Listen()
	if err != nil {
		return fmt.Errorf("listen: %w", err)
	}

	go func() { _ = s.Serve(ctx, l) }()

	defer func() { _ = s.Close() }()

	// A Mailer keeps its connection open: both mails below share it.
	// The local server offers no TLS, so the connection stays plain.
	m := mailer.New(
		mailer.WithServerAddresses(l.Addr().String()),
		mailer.WithSecurity(mailer.SecurityPlain),
	)
	defer func() { _ = m.Disconnect() }()

	from := "alice@example.com"
	to := []string{"bob@example.org", "carol@example.net"}

	for i := range 2 {
		msg := fmt.Sprintf("From: %s\r\nSubject: Mail %d\r\n\r\nHello!\r\n", from, i+1)

		report, err := m.Send(ctx, from, to, msg)
		if err != nil {
			return fmt.Errorf("send: %w", err)
		}

		for _, f := range report.Failures {
			fmt.Printf("rejected %v: %v\n", f.Rcpts, f.Error)
		}

		// A response per transaction, the server may limit the recipients of one.
		for _, r := range report.Responses {
			fmt.Printf("mail %d to %v: %d %s\n", i+1, r.Rcpts, r.Status.Code, r.Status.Text())
		}
	}

	// Look the last mail up in the server.
	if mail, ok := testserver.GetBackend(s).Load(from, to); ok {
		fmt.Printf("server received from %s to %v:\n%s", mail.From, mail.Recipients, mail.Data)
	}

	return nil
}
