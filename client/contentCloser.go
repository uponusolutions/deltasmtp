package client

import (
	"errors"
	"io"
	"sync"

	"github.com/uponusolutions/deltasmtp"
	"github.com/uponusolutions/deltasmtp/internal/deadline"
)

// ContentCloser writes the message content.
// The whole transfer, until the reply to the end of the message, has to finish within the data timeout.
type ContentCloser struct {
	writer io.WriteCloser
	c      *Client
	closed bool
	// chunkingBuffer is the buffer of the writer, returned to chunkingBuffers
	// once the writer is closed. Nil if the writer has none.
	chunkingBuffer *[]byte
}

// chunkingBuffers holds the buffers for chunking messages of unknown size,
// shared by all clients. A buffer is only needed while a message is written,
// so a new connection does not have to allocate (and zero) its own.
var chunkingBuffers sync.Pool

// getChunkingBuffer returns a buffer of at least size bytes from the pool,
// or a new one. A pooled buffer that is too small is left to the GC.
func getChunkingBuffer(size int) *[]byte {
	if b, ok := chunkingBuffers.Get().(*[]byte); ok && cap(*b) >= size {
		return b
	}
	b := make([]byte, size)
	return &b
}

// Writer returns inner io.Writer which possible implement more methods (e.g. ReadFrom)
func (d *ContentCloser) Writer() io.Writer {
	return d.writer
}

// Write writes do underlying writer.
func (d *ContentCloser) Write(p []byte) (n int, err error) {
	if d.c.session.conn == nil {
		return 0, ErrNotConnected
	}
	n, err = d.writer.Write(p)
	// The message is only partly sent, the connection can't be used anymore.
	// A rejected BDAT chunk (*deltasmtp.Status) leaves it in sync.
	if _, ok := errors.AsType[*deltasmtp.Status](err); err != nil && !ok {
		_ = d.c.Close()
	}
	return n, err
}

// CloseWithResponse closes the data closer and returns code, msg.
func (d *ContentCloser) CloseWithResponse() (*deltasmtp.Status, error) {
	if d.closed {
		return nil, errors.New("smtp: data writer closed twice")
	}
	d.closed = true

	// e.g. closed after a malformed reply to a BDAT chunk
	if d.c.session.conn == nil {
		return nil, ErrNotConnected
	}

	err := d.writer.Close()

	// The writer is done with its buffer, even if closing failed.
	if d.chunkingBuffer != nil {
		chunkingBuffers.Put(d.chunkingBuffer)
		d.chunkingBuffer = nil
	}

	if err != nil {
		if _, ok := errors.AsType[*deltasmtp.Status](err); !ok {
			_ = d.c.Close()
		}
		return nil, err
	}

	status, err := d.c.receiveResponse()

	if err == nil && status.Code != 250 {
		err = status
		status = nil
	}

	return status, err
}

// Close closes the data closer.
func (d *ContentCloser) Close() error {
	_, err := d.CloseWithResponse()
	return err
}

// newContentCloser starts a transfer of the message content,
// the deadline of the data timeout covers the whole transfer.
func (c *Client) newContentCloser(writer io.WriteCloser) *ContentCloser {
	deadline.Set(c.session.conn, c.cfg.dataTimeout)
	c.deadline.Reset()
	return &ContentCloser{c: c, writer: writer}
}
