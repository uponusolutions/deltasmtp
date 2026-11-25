package mailer

import (
	"fmt"
	"io"
	"sync"
)

// content is a message opened for a transaction: data or str, or r if it isn't nil.
type content struct {
	r    io.Reader
	data []byte
	str  string
}

// open opens msg for a transaction.
func open[M Message](msg M) (content, error) {
	switch m := any(msg).(type) {
	case string:
		return content{str: m}, nil
	case []byte:
		return content{data: m}, nil
	case func() io.Reader:
		return content{r: m()}, nil
	case func() (io.ReadCloser, error):
		r, err := m()
		if err != nil {
			return content{}, fmt.Errorf("mailer: open message: %w", err)
		}
		return content{r: r}, nil
	default:
		panic("unreachable")
	}
}

// size returns the size of the message, 0 if unknown.
func (m content) size() int {
	if m.r == nil {
		return len(m.data) + len(m.str)
	}
	if l, ok := m.r.(Len); ok {
		return l.Len()
	}
	return 0
}

// close closes the reader if it is an io.Closer.
func (m content) close() {
	if closer, ok := m.r.(io.Closer); ok {
		_ = closer.Close()
	}
}

// writeTo writes the message to w.
func (m content) writeTo(w io.Writer) error {
	if m.data != nil {
		_, err := w.Write(m.data)
		return err
	}

	buf := getCopyBuffer()
	defer copyBuffers.Put(buf)
	if m.r != nil {
		_, err := io.CopyBuffer(w, m.r, *buf)
		return err
	}
	// []byte(m.str), also by io.WriteString, would copy the whole message.
	for s := m.str; len(s) > 0; {
		n := copy(*buf, s)
		if _, err := w.Write((*buf)[:n]); err != nil {
			return err
		}
		s = s[n:]
	}
	return nil
}

// copyBuffers avoids that io.Copy allocates 32 KB for every message.
var copyBuffers sync.Pool

func getCopyBuffer() *[]byte {
	if b, ok := copyBuffers.Get().(*[]byte); ok {
		return b
	}
	b := make([]byte, 32*1024)
	return &b
}
