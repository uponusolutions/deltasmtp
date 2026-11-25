package parse

import (
	"testing"

	"github.com/stretchr/testify/assert"
)

func TestParser(t *testing.T) {
	validReversePaths := []struct {
		raw, path, after string
	}{
		{"<>", "", ""},
		{"<> SIZE=10", "", "SIZE=10"},
		{"<root@nsa.gov>", "root@nsa.gov", ""},
		{"root@nsa.gov", "root@nsa.gov", ""},
		{"<root@nsa.gov> AUTH=asdf@example.org", "root@nsa.gov", "AUTH=asdf@example.org"},
		{"root@nsa.gov AUTH=asdf@example.org", "root@nsa.gov", "AUTH=asdf@example.org"},
	}
	for _, tc := range validReversePaths {
		p := Parser{tc.raw}
		path, err := p.ReversePath()
		if assert.NoError(t, err, tc.raw) {
			assert.Equal(t, tc.path, path, tc.raw)
			assert.Equal(t, tc.after, p.S, tc.raw)
		}
	}

	invalidReversePaths := []string{
		"",
		" ",
		"asdf",
		"<>x",
		"<Foo Bar <root@nsa.gov>>",
		" BODY=8BITMIME SIZE=12345",
		"a:b:c@example.org",
		"<root@nsa.gov",
	}
	for _, tc := range invalidReversePaths {
		p := Parser{tc}
		_, err := p.ReversePath()
		assert.Error(t, err, tc)
	}
}

func TestParserPath(t *testing.T) {
	valid := []struct {
		raw, path, after string
	}{
		// dot-string
		{"<user@example.org>", "user@example.org", ""},
		{"<first.last@example.org>", "first.last@example.org", ""},
		{"<a!#$%&'*+-/=?^_`{|}~z@example.org>", "a!#$%&'*+-/=?^_`{|}~z@example.org", ""},
		{"<user@sub-1.example.org> NOTIFY=NEVER", "user@sub-1.example.org", "NOTIFY=NEVER"},
		// quoted-string whose content is a dot-string is unquoted
		{`<"user"@example.org>`, "user@example.org", ""},
		{`<"first.last"@example.org>`, "first.last@example.org", ""},
		{`<"us\er"@example.org>`, "user@example.org", ""},
		// quoted-string that needs quoting stays quoted
		{`<"x> NOTIFY=NEVER ORCPT=rfc822;y"@example.org>`, `"x> NOTIFY=NEVER ORCPT=rfc822;y"@example.org`, ""},
		{`<"user@internal"@example.org>`, `"user@internal"@example.org`, ""},
		{`<"a b"@example.org>`, `"a b"@example.org`, ""},
		{`<"a\"b"@example.org>`, `"a\"b"@example.org`, ""},
		{`<"a\\b"@example.org>`, `"a\\b"@example.org`, ""},
		{`<"a\ b"@example.org>`, `"a b"@example.org`, ""},
		{`<"a..b"@example.org>`, `"a..b"@example.org`, ""},
		{`<""@example.org>`, `""@example.org`, ""},
		// source route is discarded
		{"<@a.example,@b.example:user@example.org>", "user@example.org", ""},
		{"<@a.example:user@example.org>", "user@example.org", ""},
		// address literals
		{"<user@[192.0.2.1]>", "user@[192.0.2.1]", ""},
		{"<user@[IPv6:2001:db8::1]>", "user@[IPv6:2001:db8::1]", ""},
		{"<user@[x-tag:some-content]>", "user@[x-tag:some-content]", ""},
		// SMTPUTF8 (RFC 6531)
		{"<jösé@bücher.example>", "jösé@bücher.example", ""},
		{`<"jö sé"@example.org>`, `"jö sé"@example.org`, ""},
	}
	for _, tc := range valid {
		p := Parser{tc.raw}
		path, err := p.Path()
		if assert.NoError(t, err, tc.raw) {
			assert.Equal(t, tc.path, path, tc.raw)
			assert.Equal(t, tc.after, p.S, tc.raw)
		}
	}

	invalid := []string{
		"<>",
		"<user>",
		"<@example.org>",
		"<user@>",
		"<a@b@c>",
		"a@b@c",
		"<user@example.org>x",
		"user@example.org>",
		"<user@example.org",
		// dot-string
		"<.user@example.org>",
		"<user.@example.org>",
		"<a..b@example.org>",
		"<a b@example.org>",
		"<a\"b@example.org>",
		"<a\\b@example.org>",
		"<a(b)@example.org>",
		"<a,b@example.org>",
		"<a;b@example.org>",
		"<a:b@example.org>",
		"<a[b]@example.org>",
		// quoted-string
		`<"user@example.org>`,
		`<"a"b"@example.org>`,
		"<\"a\tb\"@example.org>",
		"<\"a\x00b\"@example.org>",
		"<\"a\\\x00\"@example.org>",
		"<\"\xff\"@example.org>",
		// domain
		"<user@-example.org>",
		"<user@example-.org>",
		"<user@example..org>",
		"<user@.example.org>",
		"<user@example.org.>",
		"<user@exa_mple.org>",
		"<user@example.org;x>",
		"<user@\xffexample.org>",
		// address literal
		"<user@[192.0.2.1>",
		"<user@[]>",
		"<user@[192.0.2]>",
		"<user@[192.0.2.256]>",
		"<user@[IPv6:192.0.2.1]>",
		"<user@[IPv6:fe80::1%eth0]>",
		"<user@[IPv6:zz::1]>",
		"<user@[-tag:x]>",
		"<user@[tag:]>",
		"<user@[tag:a b]>",
		"<user@[192.0.2.1]x>",
		// source route
		"<@:user@example.org>",
		"<@a.example user@example.org>",
		"<@a.example,b.example:user@example.org>",
		"@a.example:user@example.org",
	}
	for _, tc := range invalid {
		p := Parser{tc}
		_, err := p.Path()
		assert.Error(t, err, tc)
	}
}

func TestParserMailbox(t *testing.T) {
	for _, tc := range []struct{ raw, mbox, after string }{
		{"user@example.org", "user@example.org", ""},
		{`"a b"@example.org`, `"a b"@example.org`, ""},
		{"user@example.org>", "user@example.org", ">"},
	} {
		p := Parser{tc.raw}
		mbox, err := p.Mailbox()
		if assert.NoError(t, err, tc.raw) {
			assert.Equal(t, tc.mbox, mbox, tc.raw)
			assert.Equal(t, tc.after, p.S, tc.raw)
		}
	}
}

func TestIsASCII(t *testing.T) {
	for s, want := range map[string]bool{
		"":                 true,
		"user@example.org": true,
		"\x00\x7f":         true,
		"jösé@example.org": false,
		"user@bücher.de":   false,
		"\x80":             false,
	} {
		assert.Equal(t, want, IsASCII(s), s)
	}
}
