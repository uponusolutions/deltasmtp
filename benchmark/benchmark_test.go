// Package benchmark holds the benchmarks of deltasmtp. They run in CI and are
// published on the benchmark page.
//
// The comparison with github.com/emersion/go-smtp lives in the compare
// subdirectory, a separate module so go-smtp never becomes a dependency of
// deltasmtp.
package benchmark

import (
	"os"
	"testing"
)

// setBytes reports the size of the input so the benchmark prints throughput in
// MB/s. Set NOSETBYTES=1 to suppress it, e.g. when comparing ns/op or
// allocations across inputs of different sizes, where a MB/s column is only
// noise.
func setBytes(b *testing.B, n int) {
	b.Helper()

	if os.Getenv("NOSETBYTES") != "" {
		return
	}

	b.SetBytes(int64(n))
}
