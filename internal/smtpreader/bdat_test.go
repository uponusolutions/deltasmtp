package smtpreader

import (
	"bufio"
	"io"
	"strings"
	"testing"

	"github.com/stretchr/testify/require"
	"github.com/uponusolutions/deltasmtp"
)

// firstBdat reads the first BDAT command of input and returns the remaining
// input and the parsed arguments of the command.
func firstBdat(t *testing.T, input string) (in *bufio.Reader, size int64, last bool) {
	t.Helper()
	in = bufio.NewReader(strings.NewReader(input))
	line, prefix, err := in.ReadLine()
	require.NoError(t, err)
	require.False(t, prefix)
	size, last, err = BdatArg(string(line[5:]))
	require.NoError(t, err)
	return in, size, last
}

// nextBdat returns a nextCommand function reading the following commands from in.
func nextBdat(t *testing.T, in *bufio.Reader) func() (string, string, error) {
	return func() (string, string, error) {
		line, prefix, err := in.ReadLine()
		require.NoError(t, err)
		require.False(t, prefix)
		return string(line[0:4]), string(line[5:]), nil
	}
}

func TestBdatReaderArgErrors(t *testing.T) {
	t.Run("NoArguments", func(t *testing.T) {
		_, _, err := BdatArg("")
		require.ErrorContains(t, err, "501")
	})

	t.Run("TooManyArguments", func(t *testing.T) {
		_, _, err := BdatArg("5 b c")
		require.ErrorContains(t, err, "501")
	})

	t.Run("InvalidArguments", func(t *testing.T) {
		_, _, err := BdatArg("5 FIRST")
		require.ErrorContains(t, err, "501")

		_, _, err = BdatArg("-1")
		require.ErrorContains(t, err, "501")
	})

	t.Run("InvalidArgAtStart", func(t *testing.T) {
		_, _, _ = firstBdat(t, "BDAT 3\r\nhapBDAT 0 LAST\r\n")
		_, _, err := BdatArg("4 FIRST")
		require.ErrorContains(t, err, "501")
	})

	t.Run("InvalidArgNextCommand", func(t *testing.T) {
		in, size, last := firstBdat(t, "BDAT 3\r\nhapBDAT 0 LAST\r\n")
		_, err := io.ReadAll(NewBdat(size, last, 0, in, func() (string, string, error) {
			return "BDAT", "4 FIRST", nil
		}))
		require.ErrorContains(t, err, "501")

		_, err = io.ReadAll(NewBdat(size, last, 0, in, func() (string, string, error) {
			return "STRANGE", "4 LAST", nil
		}))
		require.ErrorContains(t, err, "501")
	})
}

func TestBdatReader(t *testing.T) {
	t.Run("LastWithoutData", func(t *testing.T) {
		in, size, last := firstBdat(t, "BDAT 3\r\nhapBDAT 0 LAST\r\n")
		res, err := io.ReadAll(NewBdat(size, last, 0, in, nextBdat(t, in)))
		require.NoError(t, err)
		require.Equal(t, "hap", string(res))
	})

	t.Run("NoChunkingLimit", func(t *testing.T) {
		in, size, last := firstBdat(t, "BDAT 3\r\nhapBDAT 2 LAST\r\npy")
		res, err := io.ReadAll(NewBdat(size, last, 0, in, nextBdat(t, in)))
		require.NoError(t, err)
		require.Equal(t, "happy", string(res))
	})

	t.Run("MaxMessageSizeExceeded", func(t *testing.T) {
		in, size, last := firstBdat(t, "BDAT 3\r\nhapBDAT 2 LAST\r\npy")
		_, err := io.ReadAll(NewBdat(size, last, 4, in, nextBdat(t, in)))
		require.ErrorIs(t, err, deltasmtp.ErrDataTooLarge)
	})

	t.Run("ToFewBytes", func(t *testing.T) {
		in, size, last := firstBdat(t, "BDAT 3\r\nhapBDAT 2 LAST\r\np")
		_, err := io.ReadAll(NewBdat(size, last, 6, in, nextBdat(t, in)))
		require.ErrorIs(t, err, deltasmtp.ErrConnection)
	})

	t.Run("NextCommandErrorEOF", func(t *testing.T) {
		in, size, last := firstBdat(t, "BDAT 3\r\nhapBDAT 2 LAST\r\npy")
		_, err := io.ReadAll(NewBdat(size, last, 4, in, func() (string, string, error) {
			return "", "", io.EOF
		}))
		require.ErrorIs(t, err, deltasmtp.ErrConnection)
	})

	t.Run("NextCommandErrorRandomSmtpError", func(t *testing.T) {
		in, size, last := firstBdat(t, "BDAT 3\r\nhapBDAT 2 LAST\r\npy")
		_, err := io.ReadAll(NewBdat(size, last, 4, in, func() (string, string, error) {
			return "", "", deltasmtp.ErrAuthFailed
		}))
		require.ErrorIs(t, err, deltasmtp.ErrAuthFailed)
	})
}

// The server relies on the limit error being sticky to detect a breach the
// backend swallowed: every further Read must fail without consuming input.
func TestBdatReaderLimitSticky(t *testing.T) {
	for _, tc := range []struct {
		name  string
		input string
		read  string
		rest  string
	}{
		{name: "FirstChunk", input: "BDAT 5 LAST\r\nhappyNOOP\r\n", read: "", rest: "happyNOOP\r\n"},
		{name: "SecondChunk", input: "BDAT 3\r\nhapBDAT 2 LAST\r\npyNOOP\r\n", read: "hap", rest: "pyNOOP\r\n"},
	} {
		t.Run(tc.name, func(t *testing.T) {
			readerInput, size, last := firstBdat(t, tc.input)
			reader := NewBdat(size, last, 4, readerInput, func() (string, string, error) {
				line, _, err := readerInput.ReadLine()
				if err != nil {
					return "", "", err
				}
				return string(line[0:4]), string(line[5:]), nil
			})

			res, err := io.ReadAll(reader)
			require.ErrorIs(t, err, deltasmtp.ErrDataTooLarge)
			require.Equal(t, tc.read, string(res))

			for range 3 {
				n, err := reader.Read(make([]byte, 10))
				require.Zero(t, n)
				require.ErrorIs(t, err, deltasmtp.ErrDataTooLarge)
			}

			// the chunk is still pending on the input
			rest, err := io.ReadAll(readerInput)
			require.NoError(t, err)
			require.Equal(t, tc.rest, string(rest))
		})
	}
}
