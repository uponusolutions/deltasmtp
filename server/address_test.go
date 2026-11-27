package server_test

import (
	"errors"
	"strings"
	"testing"

	"github.com/stretchr/testify/require"
	"github.com/uponusolutions/deltasmtp"
	"github.com/uponusolutions/deltasmtp/server"
)

func TestUTF8Clean(t *testing.T) {
	r := func(x rune) string { return string(x) }

	tests := []struct {
		name string
		addr string
		ok   bool
	}{
		{"ascii", "alice@example.org", true},
		{"empty", "", true},
		{"umlauts", "jösé@bücher.example", true},
		{"cjk", "用户@例子.广告", true},
		{"zero width joiner", "a" + r(0x200D) + "b@example.org", true},
		{"zero width non-joiner", "a" + r(0x200C) + "b@example.org", true},
		{"left-to-right mark", "a" + r(0x200E) + "b@example.org", true},
		{"right-to-left mark", "a" + r(0x200F) + "b@example.org", true},
		{"arabic letter mark", "a" + r(0x061C) + "b@example.org", true},
		{"no-break space", "a" + r(0x00A0) + "b@example.org", true},

		{"left-to-right embedding", "a" + r(0x202A) + "b@example.org", false},
		{"right-to-left override", "a" + r(0x202E) + "b@example.org", false},
		{"left-to-right isolate", "a" + r(0x2066) + "b@example.org", false},
		{"pop directional isolate", "a" + r(0x2069) + "b@example.org", false},
		{"next line", "a" + r(0x0085) + "b@example.org", false},
		{"line separator", "a" + r(0x2028) + "b@example.org", false},
		{"paragraph separator", "a" + r(0x2029) + "b@example.org", false},
		{"zero width space", "a" + r(0x200B) + "b@example.org", false},
		{"word joiner", "a" + r(0x2060) + "b@example.org", false},
		{"byte order mark", r(0xFEFF) + "a@example.org", false},
		{"in domain", "a@exa" + r(0x200B) + "mple.org", false},
		{"in quoted local-part", `"a` + r(0x202E) + `b"@example.org`, false},
	}
	for _, tt := range tests {
		t.Run(tt.name, func(t *testing.T) {
			err := server.UTF8Clean(tt.addr)
			if tt.ok {
				require.NoError(t, err)
			} else {
				require.Error(t, err)
			}
		})
	}

	// the error names the character
	require.ErrorContains(t, server.UTF8Clean("a"+r(0x202E)+"b@example.org"), "U+202E")
}

func TestServer_AddressValidator(t *testing.T) {
	var seen []string
	validator := func(addr string) error {
		seen = append(seen, addr)
		switch {
		case strings.HasPrefix(addr, "bad"):
			return errors.New("bad address")
		case strings.HasPrefix(addr, "custom"):
			return deltasmtp.NewStatusS(550, deltasmtp.EnhancedCode{5, 7, 1}, "Not for you").Err()
		case strings.HasPrefix(addr, "positive"):
			return deltasmtp.NewStatusS(250, deltasmtp.EnhancedCode{2, 0, 0}, "Fine").Err()
		}
		return nil
	}

	be, s, c, scanner := testServerAuthenticated(t, nil, server.WithAddressValidator(validator))
	defer func() {
		_ = s.Close()
		_ = c.Close()
	}()

	// MAIL: plain errors, custom statuses and positive statuses all reject.
	expect(t, c, scanner, "MAIL FROM:<bad@example.org>", "553 5.1.7 ")
	expect(t, c, scanner, "MAIL FROM:<custom@example.org>", "550 5.7.1 ")
	expect(t, c, scanner, "MAIL FROM:<positive@example.org>", "553 5.1.7 ")

	// The null reverse-path is no address.
	seen = nil
	expect(t, c, scanner, "MAIL FROM:<>", "250 ")
	require.Empty(t, seen)
	expect(t, c, scanner, "RSET", "250 ")

	// RCPT, a rejected recipient is not counted.
	expect(t, c, scanner, "MAIL FROM:<alice@example.org>", "250 ")
	expect(t, c, scanner, "RCPT TO:<bad@example.org>", "553 5.1.3 ")
	expect(t, c, scanner, "RCPT TO:<custom@example.org>", "550 5.7.1 ")
	expect(t, c, scanner, "DATA", "502 5.5.1 ")
	expect(t, c, scanner, "RCPT TO:<bob@example.org>", "250 ")

	// VRFY
	expect(t, c, scanner, "VRFY <bad@example.org>", "553 5.1.3 ")
	expect(t, c, scanner, "VRFY <custom@example.org>", "550 5.7.1 ")
	expect(t, c, scanner, "VRFY <bob@example.org>", "252 ")

	// The validator gets the canonical form of the address.
	seen = nil
	expect(t, c, scanner, "RSET", "250 ")
	expect(t, c, scanner, `MAIL FROM:<"carol"@example.org>`, "250 ")
	expect(t, c, scanner, `RCPT TO:<"a b"@example.org>`, "250 ")
	require.Equal(t, []string{"carol@example.org", `"a b"@example.org`}, seen)

	expect(t, c, scanner, "DATA", "354 ")
	expect(t, c, scanner, "Hey\r\n.", "250 ")
	require.Len(t, be.messages, 1)
	require.Equal(t, []string{`"a b"@example.org`}, be.messages[0].To)
}

// UTF8Clean is the default address validator.
func TestServer_DefaultAddressValidator(t *testing.T) {
	_, s, c, scanner := testServerAuthenticated(t, nil, server.WithEnableSMTPUTF8(true))
	defer func() {
		_ = s.Close()
		_ = c.Close()
	}()

	rlo := string(rune(0x202E))
	expect(t, c, scanner, "MAIL FROM:<a"+rlo+"b@example.org> SMTPUTF8", "553 5.1.7 ")
	expect(t, c, scanner, "MAIL FROM:<jösé@example.org> SMTPUTF8", "250 ")
	expect(t, c, scanner, "RCPT TO:<c"+rlo+"d@example.org>", "553 5.1.3 ")
	expect(t, c, scanner, "RCPT TO:<bob@bücher.example>", "250 ")
	expect(t, c, scanner, "VRFY <e"+rlo+"f@example.org> SMTPUTF8", "553 5.1.3 ")
}

// With the address validator disabled everything the parser accepts is passed on.
func TestServer_AddressValidatorDisabled(t *testing.T) {
	be, s, c, scanner := testServerAuthenticated(t, nil,
		server.WithEnableSMTPUTF8(true),
		server.WithAddressValidator(nil),
	)
	defer func() {
		_ = s.Close()
		_ = c.Close()
	}()

	rlo := string(rune(0x202E))
	expect(t, c, scanner, "MAIL FROM:<a"+rlo+"b@example.org> SMTPUTF8", "250 ")
	expect(t, c, scanner, "RCPT TO:<c"+rlo+"d@example.org>", "250 ")
	expect(t, c, scanner, "VRFY <e"+rlo+"f@example.org> SMTPUTF8", "252 ")
	expect(t, c, scanner, "DATA", "354 ")
	expect(t, c, scanner, "Hey\r\n.", "250 ")
	require.Len(t, be.messages, 1)
	require.Equal(t, "a"+rlo+"b@example.org", be.messages[0].From)
}
