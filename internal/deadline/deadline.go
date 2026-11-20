// Package deadline sets connection deadlines from timeouts.
// A zero or negative timeout always means no deadline.
package deadline

import (
	"net"
	"time"
)

// Set sets the read and write deadline of conn to now plus timeout.
func Set(conn net.Conn, timeout time.Duration) {
	_ = conn.SetDeadline(at(timeout))
}

// SetWrite sets the write deadline of conn to now plus timeout.
func SetWrite(conn net.Conn, timeout time.Duration) {
	_ = conn.SetWriteDeadline(at(timeout))
}

// Renewer renews the deadline of a connection with fewer calls, setting a
// deadline on a net.Conn is comparatively expensive. A renewal sets the deadline
// to now plus 125% of the timeout and skips renewals for the first 25%, so the
// deadline is always at least the timeout from now. Reset is required when the
// deadline is set otherwise or the timeout changes. The zero value is ready to use.
type Renewer struct {
	next time.Time // renewals before are skipped
}

// Reset makes the next renewal set the deadline.
func (r *Renewer) Reset() { r.next = time.Time{} }

// Set renews the read and write deadline of conn.
func (r *Renewer) Set(conn net.Conn, timeout time.Duration) {
	if timeout <= 0 {
		_ = conn.SetDeadline(time.Time{})
		return
	}
	now := time.Now()
	if now.Before(r.next) {
		return
	}
	r.next = now.Add(timeout / 4)
	_ = conn.SetDeadline(now.Add(timeout + timeout/4))
}

func at(timeout time.Duration) time.Time {
	if timeout <= 0 {
		return time.Time{}
	}
	return time.Now().Add(timeout)
}
