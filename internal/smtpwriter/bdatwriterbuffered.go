package smtpwriter

import (
	"bufio"
	"io"
)

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
func (d *BdatBuffered) Close() error {
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
