//go:build !cover

// Send delivers a mail with the mailer, either directly to the MX servers of
// the recipients or through a relay (submission server).
//
//	go run ./examples/send -from alice@example.com bob@example.org carol@example.net
//	go run ./examples/send -from alice@example.com -relay smtp.example.com:587 \
//	    -user alice -pass secret bob@example.org
package main

import (
	"context"
	_ "embed"
	"flag"
	"fmt"
	"io"
	"os"
	"strings"
	"time"

	"github.com/uponusolutions/deltasmtp/mailer"
	"github.com/uponusolutions/go-sasl"
)

//go:embed testdata/example.eml
var eml string

func main() {
	from := flag.String("from", "", "envelope sender (MAIL FROM)")
	relay := flag.String("relay", "", "relay host:port, empty delivers to the MX servers of the recipients")
	user := flag.String("user", "", "username for SMTP AUTH PLAIN (relay only)")
	pass := flag.String("pass", "", "password for SMTP AUTH PLAIN (relay only)")
	flag.Usage = func() {
		_, _ = fmt.Fprintln(flag.CommandLine.Output(), "usage: send -from <addr> [flags] <rcpt>...")
		flag.PrintDefaults()
	}
	flag.Parse()

	rcpts := flag.Args()
	if *from == "" || len(rcpts) == 0 {
		flag.Usage()
		os.Exit(2)
	}

	var opts []mailer.Option
	if *relay != "" {
		// A relay is a submission server: STARTTLS is required (the default)
		// and credentials are only sent over the encrypted connection.
		opts = append(opts, mailer.WithServerAddresses(*relay))
		if *user != "" {
			opts = append(opts, mailer.WithSASLClient(sasl.NewPlainClient("", *user, *pass)))
		}
	} else {
		// Many MX servers have no valid certificate, mail servers use
		// opportunistic TLS among each other.
		opts = append(opts, mailer.WithSecurity(mailer.SecurityPreferStartTLS))
	}

	ctx, cancel := context.WithTimeout(context.Background(), time.Minute)
	defer cancel()

	// The message is a factory: it is read once per target server.
	report, err := mailer.Send(ctx, *from, rcpts, func() io.Reader { return strings.NewReader(eml) }, opts...)
	if err != nil {
		fmt.Fprintln(os.Stderr, "send:", err)
		os.Exit(1)
	}

	for _, r := range report.Responses {
		fmt.Printf("accepted %v: %d %s\n", r.Rcpts, r.Status.Code, r.Status.Text())
	}

	for _, f := range report.Failures {
		fmt.Printf("failed   %v: %v\n", f.Rcpts, f.Error)
	}

	if len(report.Failures) > 0 {
		os.Exit(1)
	}
}
