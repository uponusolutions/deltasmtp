package smtpwriter

import (
	"bufio"
	"errors"
	"io"
)

// ErrClosed is returned by a write to a closed BdatBuffered.
var ErrClosed = errors.New("smtp: write to closed content writer")

// NewBdatWriterBuffered returns a writer that can be used to write bdat commands to w.
// The caller should close the BdatWriter before the next call to a method on w.
// Without a buffer (len(buffer) == 0) the unbuffered bdat writer is returned,
// buffering into an empty buffer would never make progress.
func NewBdatWriterBuffered(writer *bufio.Writer, read func() error, size int, buffer []byte) io.WriteCloser {
	if len(buffer) == 0 {
		return NewBdat(writer, read, size)
	}
	d := &BdatBuffered{}
	d.Reset(writer, read, size, buffer)
	return d
}

// BdatBuffered writes a message as BDAT chunks of the size of its buffer, see
// NewBdatWriterBuffered.
type BdatBuffered struct {
	buffer   []byte
	position int
	writer   Bdat
	// closed is set by Close and Discard, the buffer may be reused by then.
	closed bool
}

// Reset sets d up to write a new message like NewBdatWriterBuffered, the buffer
// must not be empty. It lets a connection reuse its writer for every message.
func (d *BdatBuffered) Reset(writer *bufio.Writer, read func() error, size int, buffer []byte) {
	*d = BdatBuffered{buffer: buffer}
	d.writer.Reset(writer, read, size)
}

// ReadFrom implements io.ReaderFrom, it reads r into the buffer and sends every
// full buffer as bdat chunk. Like Write, a full buffer is only sent once more
// data follows, so Close can send the last one as LAST.
func (d *BdatBuffered) ReadFrom(r io.Reader) (n int64, err error) {
	if d.closed {
		return 0, ErrClosed
	}
	for {
		if err = d.flushFull(); err != nil {
			return n, err
		}
		p, errRead := r.Read(d.buffer[d.position:])
		n += int64(p)
		d.position += p
		switch {
		case errRead == io.EOF: // not returned, see io.Copy
			return n, nil
		case errRead != nil:
			return n, errRead
		}
	}
}

// Write buffers b, every full buffer is sent as bdat chunk.
// Writes larger than the buffer are passed through if the buffer is empty.
func (d *BdatBuffered) Write(b []byte) (n int, err error) {
	if d.closed {
		return 0, ErrClosed
	}
	var p int

	for n < len(b) {
		p, err = d.write(b[n:])
		n += p
		if err != nil {
			return n, err
		}
	}

	return n, err
}

func (d *BdatBuffered) write(b []byte) (int, error) {
	if err := d.flushFull(); err != nil {
		return 0, err
	}
	// The buffer would only be filled and sent, send b directly.
	if d.position == 0 && len(b) > len(d.buffer) {
		return d.writer.Write(b)
	}
	n := copy(d.buffer[d.position:], b)
	d.position += n
	return n, nil
}

// flushFull sends the buffer as bdat chunk if it is full.
func (d *BdatBuffered) flushFull() error {
	if d.position < len(d.buffer) {
		return nil
	}
	d.position = 0
	_, err := d.writer.Write(d.buffer)
	return err
}

// Close sends the buffered rest of the message as the last chunk.
// Afterwards, even if it failed, d no longer uses its buffer, so the buffer
// can be reused. Every write returns ErrClosed until the next Reset.
func (d *BdatBuffered) Close() error {
	if d.closed {
		return ErrClosed
	}
	defer d.Discard()

	if d.position > 0 {
		// force bdat last, if size is unknown
		if !d.writer.knownSize {
			d.writer.knownSize = true
			d.writer.remainingSize = d.position
		}
		if _, err := d.writer.Write(d.buffer[:d.position]); err != nil {
			return err
		}
		d.position = 0
	}

	return d.writer.Close()
}

// Discard drops the buffer without sending it, every write returns ErrClosed
// until the next Reset. It is used if the message can't be finished, e.g. the connection
// is gone, so the buffer can be reused.
func (d *BdatBuffered) Discard() {
	d.closed = true
	d.buffer = nil
	d.position = 0
}
