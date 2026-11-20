package deadline

import (
	"net"
	"testing"
	"time"

	"github.com/stretchr/testify/require"
)

func TestAt(t *testing.T) {
	require.True(t, at(0).IsZero())
	require.True(t, at(-time.Second).IsZero())

	before := time.Now()
	d := at(time.Minute)
	require.False(t, d.Before(before.Add(time.Minute)))
	require.False(t, d.After(time.Now().Add(time.Minute)))
}

func TestSet(t *testing.T) {
	c1, c2 := net.Pipe()
	defer func() { _ = c1.Close(); _ = c2.Close() }()

	buf := make([]byte, 1)
	var netErr net.Error

	Set(c1, time.Millisecond)
	_, err := c1.Read(buf)
	require.ErrorAs(t, err, &netErr)
	require.True(t, netErr.Timeout())

	Set(c1, 0) // no deadline anymore
	go func() { _, _ = c2.Write([]byte("x")) }()
	_, err = c1.Read(buf)
	require.NoError(t, err)

	SetWrite(c1, time.Millisecond)
	_, err = c1.Write(buf)
	require.ErrorAs(t, err, &netErr)
	require.True(t, netErr.Timeout())
}

func TestRenewer(t *testing.T) {
	c1, c2 := net.Pipe()
	defer func() { _ = c1.Close(); _ = c2.Close() }()

	var r Renewer
	before := time.Now()
	r.Set(c1, time.Minute)
	require.False(t, r.next.Before(before.Add(15*time.Second))) // 25% of the timeout
	require.False(t, r.next.After(time.Now().Add(15*time.Second)))

	r.Set(c1, time.Millisecond) // skipped
	go func() { _, _ = c2.Write([]byte("x")) }()
	_, err := c1.Read(make([]byte, 1))
	require.NoError(t, err)

	r.Reset()
	r.Set(c1, time.Millisecond)
	var netErr net.Error
	_, err = c1.Read(make([]byte, 1))
	require.ErrorAs(t, err, &netErr)
	require.True(t, netErr.Timeout())
	_, err = c1.Write([]byte("x"))
	require.ErrorAs(t, err, &netErr)
	require.True(t, netErr.Timeout())

	r.Set(c1, 0) // no deadline is always set
	go func() { _, _ = c2.Write([]byte("x")) }()
	_, err = c1.Read(make([]byte, 1))
	require.NoError(t, err)
}
