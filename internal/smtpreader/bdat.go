package smtpreader

import (
	"errors"
	"io"
	"strconv"
	"strings"

	"github.com/uponusolutions/deltasmtp"
)

// Bdat reads a message sent in BDAT chunks (RFC 3030). The zero value is
// unusable, it is set up by NewBdat or Reset.
type Bdat struct {
	size            int64 // bytes left in the current chunk
	last            bool
	bytesReceived   int64
	maxMessageBytes int64
	input           io.Reader
	nextCommand     func() (string, string, error)
}

// BdatArg parses the arguments of a bdat command.
// Return smtp errors if something isn't parseable.
func BdatArg(arg string) (int64, bool, error) {
	// An array instead of strings.Fields avoids an allocation per chunk.
	var args [2]string
	n := 0
	for f := range strings.FieldsSeq(arg) {
		if n == len(args) {
			return 0, true, deltasmtp.ErrBDATTooManyArgs
		}
		args[n] = f
		n++
	}
	if n == 0 {
		return 0, true, deltasmtp.ErrBDATMissingSize
	}

	last := false
	if n == 2 {
		if !strings.EqualFold(args[1], "LAST") {
			return 0, true, deltasmtp.ErrBDATUnknownArg
		}
		last = true
	}

	// ParseUint instead of Atoi so we will not accept negative values.
	size, err := strconv.ParseUint(args[0], 10, 32)
	if err != nil || (size == 0 && !last) {
		return 0, true, deltasmtp.ErrBDATMalformedSize
	}

	return int64(size), last, nil
}

// NewBdat creates a new bdat reader.
func NewBdat(size int64, last bool, maxMessageBytes int64, input io.Reader, nextCommand func() (string, string, error)) io.Reader {
	d := &Bdat{}
	d.Reset(size, last, maxMessageBytes, input, nextCommand)
	return d
}

// Reset sets d up to read a new message like a Bdat of NewBdat. It lets a
// connection reuse its reader for every message.
func (d *Bdat) Reset(size int64, last bool, maxMessageBytes int64, input io.Reader, nextCommand func() (string, string, error)) {
	*d = Bdat{
		maxMessageBytes: maxMessageBytes,
		size:            size,
		last:            last,
		input:           input,
		nextCommand:     nextCommand,
	}
}

func (d *Bdat) Read(b []byte) (int, error) {
	if d.size == 0 {
		if d.last {
			return 0, io.EOF
		}

		cmd, arg, err := d.nextCommand()
		if err != nil {
			if errors.Is(err, io.EOF) {
				return 0, deltasmtp.ErrConnection
			}
			return 0, err
		}

		switch cmd {
		case "BDAT":
			d.size, d.last, err = BdatArg(arg)
			if err != nil {
				return 0, err
			}

			if d.last && d.size == 0 {
				return 0, io.EOF
			}
		case "RSET":
			return 0, deltasmtp.ErrBDATReset
		case "QUIT":
			return 0, deltasmtp.ErrBDATQuit
		default:
			return 0, deltasmtp.ErrBDATExpected
		}
	}

	if d.maxMessageBytes > 0 && d.bytesReceived+d.size > d.maxMessageBytes {
		return 0, deltasmtp.ErrDataTooLarge
	}

	// Never read beyond the chunk, without an io.LimitReader per chunk.
	if int64(len(b)) > d.size {
		b = b[:d.size]
	}

	n, err := d.input.Read(b)
	d.bytesReceived += int64(n)
	d.size -= int64(n)

	// the reader should never throw EOF
	if errors.Is(err, io.EOF) {
		err = deltasmtp.ErrConnection
	}

	return n, err
}
