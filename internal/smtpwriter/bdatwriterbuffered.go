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
	return &bdatWriterBuffered{
		writer: bdat{
			w:             writer,
			read:          read,
			remainingSize: size,
			knownSize:     size > 0,
		},
		buffer:   buffer,
		position: 0,
	}
}

type bdatWriterBuffered struct {
	buffer   []byte
	position int
	writer   bdat
}

// ReadFrom implements io.ReaderFrom, it reads r into the buffer and sends every
// full buffer as bdat chunk. Like Write, a full buffer is only sent once more
// data follows, so Close can send the last one as LAST.
func (d *bdatWriterBuffered) ReadFrom(r io.Reader) (n int64, err error) {
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
func (d *bdatWriterBuffered) Write(b []byte) (n int, err error) {
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

func (d *bdatWriterBuffered) write(b []byte) (int, error) {
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
func (d *bdatWriterBuffered) flushFull() error {
	if d.position < len(d.buffer) {
		return nil
	}
	d.position = 0
	_, err := d.writer.Write(d.buffer)
	return err
}

func (d *bdatWriterBuffered) Close() error {
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
