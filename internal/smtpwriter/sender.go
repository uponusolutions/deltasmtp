package smtpwriter

import (
	"bufio"
	"cmp"
	"io"
)

// Sender is used as a wrapper around a connection to write to it.
type Sender struct {
	*bufio.Writer
}

// NewSender creates a new writer wrapper.
func NewSender(
	conn io.Writer,
	writerSize int,
) *Sender {
	writerSize = cmp.Or(writerSize, 4096) // default

	return &Sender{
		Writer: bufio.NewWriterSize(conn, writerSize),
	}
}
