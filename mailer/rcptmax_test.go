package mailer

import (
	"cmp"
	"context"
	"fmt"
	"io"
	"slices"
	"strings"
	"sync"
	"sync/atomic"
	"testing"

	"github.com/stretchr/testify/assert"
	"github.com/stretchr/testify/require"
	"github.com/uponusolutions/deltasmtp"
	"github.com/uponusolutions/deltasmtp/client"
	"github.com/uponusolutions/deltasmtp/server"
	"github.com/uponusolutions/deltasmtp/tester"
	"github.com/uponusolutions/deltasmtp/tester/testserver"
)

// TestSendRcptMax checks that the recipients are split into transactions of at
// most RCPTMAX accepted recipients, rejected ones don't count, and that every
// transaction gets the whole message, of every Message type.
func TestSendRcptMax(t *testing.T) {
	const msg = "Subject: a\r\n\r\nbody\r\n"
	from := "alice@internal.com"
	rcpts := []string{"a@x.org", "notfound1@x.org", "b@x.org", "c@x.org", "notfound2@x.org", "d@x.org", "e@x.org"}
	want := [][]string{{"a@x.org", "b@x.org"}, {"c@x.org", "d@x.org"}, {"e@x.org"}}

	sends := map[string]func(context.Context, *Mailer) (Report, error){
		"string": func(ctx context.Context, m *Mailer) (Report, error) { return m.Send(ctx, from, rcpts, msg) },
		"bytes":  func(ctx context.Context, m *Mailer) (Report, error) { return m.Send(ctx, from, rcpts, []byte(msg)) },
		"reader": func(ctx context.Context, m *Mailer) (Report, error) {
			return m.Send(ctx, from, rcpts, func() io.Reader { return strings.NewReader(msg) })
		},
		"readcloser": func(ctx context.Context, m *Mailer) (Report, error) {
			return m.Send(ctx, from, rcpts, func() (io.ReadCloser, error) { return io.NopCloser(strings.NewReader(msg)), nil })
		},
	}

	for _, chunking := range []bool{false, true} {
		for _, pipelining := range []bool{false, true} {
			for name, send := range sends {
				t.Run(fmt.Sprintf("chunking=%v/pipelining=%v/%s", chunking, pipelining, name), func(t *testing.T) {
					be := testserver.NewBackend()
					be.Rcpt = backend.Rcpt
					addr := startServer(t, be, server.WithEnableCHUNKING(chunking), server.WithMaxRecipients(2))

					m := New(withTestServer(addr), WithBasic(client.WithPipelining(pipelining)))
					t.Cleanup(func() { _ = m.Disconnect() })

					res, err := send(t.Context(), m)
					require.NoError(t, err)
					requireSplit(t, be, res, from, msg, want)
				})
			}
		}
	}
}

// TestSendRcptMaxFailsRemaining checks that an error fails the recipients of
// the transaction and all later ones, and no further transaction is started.
func TestSendRcptMaxFailsRemaining(t *testing.T) {
	var mails atomic.Int32
	be := testserver.NewBackend()
	be.Mail = func(context.Context, string, *deltasmtp.MailOptions) error {
		if mails.Add(1) > 1 {
			return deltasmtp.ErrTooManyTransactions
		}
		return nil
	}
	addr := startServer(t, be, server.WithMaxRecipients(1))

	m := New(withTestServer(addr))
	t.Cleanup(func() { _ = m.Terminate() })

	res, err := m.Send(t.Context(), "alice@internal.com", []string{"a@x.org", "b@x.org", "c@x.org"},
		"Subject: a\r\n\r\nbody\r\n")
	var status *deltasmtp.Status
	require.ErrorAs(t, err, &status)
	assert.Equal(t, 421, status.Code)

	require.Len(t, res.Responses, 1)
	assert.Equal(t, []string{"a@x.org"}, res.Responses[0].Rcpts)
	require.Len(t, res.Failures, 1)
	assert.Equal(t, []string{"b@x.org", "c@x.org"}, res.Failures[0].Rcpts)
	assert.ErrorIs(t, res.Failures[0].Error, err)
}

// TestSendTooManyRecipients checks a server limiting the recipients without
// advertising RCPTMAX, like Postfix: it rejects further recipients with
// "452 4.5.3 Error: too many recipients". They are sent in the next transaction,
// which only gets as many recipients as were accepted.
func TestSendTooManyRecipients(t *testing.T) {
	const msg = "Subject: a\r\n\r\nbody\r\n"
	from := "alice@internal.com"
	rcpts := []string{"a@x.org", "notfound1@x.org", "b@x.org", "c@x.org", "notfound2@x.org", "d@x.org", "e@x.org"}
	want := [][]string{{"a@x.org", "b@x.org"}, {"c@x.org", "d@x.org"}, {"e@x.org"}}

	for _, chunking := range []bool{false, true} {
		for _, pipelining := range []bool{false, true} {
			t.Run(fmt.Sprintf("chunking=%v/pipelining=%v", chunking, pipelining), func(t *testing.T) {
				var sent atomic.Int32
				be := postfixBackend(nil, &sent)
				addr := startServer(t, be, server.WithEnableCHUNKING(chunking), server.WithMaxRecipients(0))

				res, err := Send(t.Context(), from, rcpts, msg, withTestServer(addr),
					WithMaxRecipients(0), WithBasic(client.WithPipelining(pipelining)))
				require.NoError(t, err)
				requireSplit(t, be, res, from, msg, want)

				// Without pipelining the first transaction stops at the first 452 (c), the
				// following ones don't exceed the learned limit, nothing else is resent.
				if !pipelining {
					assert.EqualValues(t, len(rcpts)+1, sent.Load())
				}
			})
		}
	}
}

// TestSendTooManyRecipientsAcceptedAfter checks a server accepting a recipient
// after rejecting one for too many recipients. With pipelining it is already
// sent and gets the message in the same transaction, only the rejected one is
// sent again, so no recipient gets the message twice.
func TestSendTooManyRecipientsAcceptedAfter(t *testing.T) {
	const msg = "Subject: a\r\n\r\nbody\r\n"
	from, rcpts := "alice@internal.com", []string{"a@x.org", "b@x.org", "c@x.org", "d@x.org"}

	for _, pc := range []struct {
		pipelining bool
		want       [][]string
	}{
		{false, [][]string{{"a@x.org", "b@x.org"}, {"c@x.org", "d@x.org"}}},
		{true, [][]string{{"a@x.org", "b@x.org", "d@x.org"}, {"c@x.org"}}},
	} {
		t.Run(fmt.Sprintf("pipelining=%v", pc.pipelining), func(t *testing.T) {
			var mails, delivered atomic.Int32
			be := testserver.NewBackend()
			be.Mail = func(context.Context, string, *deltasmtp.MailOptions) error {
				mails.Add(1)
				return nil
			}
			be.Rcpt = func(_ context.Context, to string, _ *deltasmtp.RcptOptions) error {
				if to == "c@x.org" && mails.Load() == 1 {
					return deltasmtp.NewStatusS(452, deltasmtp.EnhancedCode{4, 5, 3}, "Error: too many recipients")
				}
				if to == "d@x.org" {
					delivered.Add(1)
				}
				return nil
			}
			addr := startServer(t, be, server.WithMaxRecipients(0))

			res, err := Send(t.Context(), from, rcpts, msg, withTestServer(addr),
				WithMaxRecipients(0), WithBasic(client.WithPipelining(pc.pipelining)))
			require.NoError(t, err)
			requireSplit(t, be, res, from, msg, pc.want)
			assert.EqualValues(t, 1, delivered.Load(), "d@x.org must be sent once")
		})
	}
}

// TestSendTooManyRecipientsLearned checks that the limit learned from a
// rejection for too many recipients is kept by the Mailer: the next Send doesn't
// exceed it.
func TestSendTooManyRecipientsLearned(t *testing.T) {
	var sent atomic.Int32
	addr := startServer(t, postfixBackend(nil, &sent), server.WithMaxRecipients(0))
	m := New(withTestServer(addr), WithMaxRecipients(0), WithBasic(client.WithPipelining(false)))
	t.Cleanup(func() { _ = m.Disconnect() })

	rcpts := []string{"a@x.org", "b@x.org", "c@x.org"}
	for _, want := range []int32{4, 3} { // c is rejected by the first Send only
		sent.Store(0)
		res, err := m.Send(t.Context(), "alice@internal.com", rcpts, "Subject: a\r\n\r\nbody\r\n")
		require.NoError(t, err)
		require.Len(t, res.Responses, 2)
		assert.Empty(t, res.Failures)
		assert.Equal(t, want, sent.Load())
	}
}

// TestSendMaxRecipientsDefault checks that without RCPTMAX at most 100
// recipients are sent per transaction.
func TestSendMaxRecipientsDefault(t *testing.T) {
	assert.Equal(t, 100, DefaultConfig().extra.maxRecipients)

	be := testserver.NewBackend()
	addr := startServer(t, be, server.WithMaxRecipients(0))
	rcpts := makeEmails(250)

	res, err := Send(t.Context(), "alice@internal.com", rcpts, "Subject: a\r\n\r\nbody\r\n", withTestServer(addr))
	require.NoError(t, err)
	requireSplit(t, be, res, "alice@internal.com", "Subject: a\r\n\r\nbody\r\n",
		[][]string{rcpts[:100], rcpts[100:200], rcpts[200:]})
}

func TestTooManyRcpts(t *testing.T) {
	for _, tc := range []struct {
		err  error
		want bool
	}{
		{deltasmtp.NewStatusS(452, deltasmtp.EnhancedCode{4, 5, 3}, "Error: too many recipients"), true},
		{deltasmtp.NewStatusS(452, deltasmtp.NoEnhancedCode, "Too many recipients"), true},
		{deltasmtp.NewStatusS(552, deltasmtp.EnhancedCode{5, 5, 3}, "Too many recipients"), true},
		{deltasmtp.NewStatusS(452, deltasmtp.EnhancedCode{4, 2, 2}, "Mailbox full"), false},
		{deltasmtp.NewStatusS(552, deltasmtp.NoEnhancedCode, "Too much mail data"), false},
		{deltasmtp.NewStatusS(550, deltasmtp.EnhancedCode{5, 1, 1}, "Unknown user"), false},
		{client.ErrRefused, false},
	} {
		assert.Equal(t, tc.want, tooManyRcpts(tc.err), tc.err.Error())
	}
}

// postfixBackend returns a backend that accepts at most 2 recipients per
// transaction without advertising RCPTMAX, like Postfix it rejects further ones
// with "452 4.5.3 Error: too many recipients". It counts MAIL and RCPT commands
// in mails and rcpts, if not nil.
func postfixBackend(mails, rcpts *atomic.Int32) *testserver.Backend {
	var accepted, count atomic.Int32
	mails, rcpts = cmp.Or(mails, &count), cmp.Or(rcpts, &count)
	be := testserver.NewBackend()
	be.Mail = func(context.Context, string, *deltasmtp.MailOptions) error {
		mails.Add(1)
		accepted.Store(0)
		return nil
	}
	be.Rcpt = func(ctx context.Context, to string, opts *deltasmtp.RcptOptions) error {
		rcpts.Add(1)
		if err := backend.Rcpt(ctx, to, opts); err != nil {
			return err
		}
		if accepted.Load() >= 2 {
			return deltasmtp.NewStatusS(452, deltasmtp.EnhancedCode{4, 5, 3}, "Error: too many recipients")
		}
		accepted.Add(1)
		return nil
	}
	return be
}

// TestMaxTransactions checks that a connection with as many transactions as the
// server allows, advertised by MAILMAX or set by WithMaxTransactions, is replaced
// by a new one for the next transaction of Send, also within a Send split into
// several transactions, and of a Verifier, which doesn't need RSET then.
func TestMaxTransactions(t *testing.T) {
	assert.Equal(t, 1000, DefaultConfig().extra.maxTransactions)
	from, rcpts := "alice@internal.com", []string{"bob@x.org", "carol@x.org", "dave@x.org"}

	for _, advertised := range []bool{false, true} {
		for _, pc := range pipeliningCases {
			t.Run(fmt.Sprintf("advertised=%v/%s", advertised, pc.name), func(t *testing.T) {
				srv, opts := newVerifyServer(t, pc.pipelining)
				if advertised {
					srv.Extensions = append(srv.Extensions, "LIMITS MAILMAX=2 RCPTMAX=1")
				} else {
					opts = append(opts, WithMaxTransactions(2), WithMaxRecipients(1))
				}
				m := New(opts...)
				t.Cleanup(func() { _ = m.Terminate() })

				res, err := m.Send(t.Context(), from, rcpts, "Hi\r\n")
				require.NoError(t, err)
				require.Len(t, res.Responses, 3)

				v, err := m.Verifier(VerifyRcpt, from)
				require.NoError(t, err)
				for _, rcpt := range rcpts {
					require.NoError(t, v.Verify(t.Context(), rcpt))
				}
				require.NoError(t, v.End())

				assert.Equal(t, []string{
					"MAIL", "RCPT", "DATA", "MAIL", "RCPT", "DATA", "QUIT",
					"MAIL", "RCPT", "DATA", "MAIL", "RCPT", "QUIT",
					"MAIL", "RCPT", "RSET", "MAIL", "RCPT", "RSET",
				}, verbs(srv))
				assert.Equal(t, 3, connections(srv))
			})
		}
	}
}

// TestMaxTransactionsRejected checks the fallback for a server limiting the
// transactions per connection without MAILMAX, like Exim: a MAIL rejected with
// 421 after earlier transactions is sent again on a new connection. The limit
// isn't learned, every connection runs into it.
func TestMaxTransactionsRejected(t *testing.T) {
	from, rcpts := "alice@internal.com", []string{"bob@x.org", "carol@x.org", "dave@x.org", "erin@x.org"}

	for _, pc := range pipeliningCases {
		t.Run(pc.name, func(t *testing.T) {
			srv, opts := newVerifyServer(t, pc.pipelining)
			var mails sync.Map // *tester.FakeSession -> MAIL commands
			mail := srv.Handlers["MAIL"]
			srv.Handlers["MAIL"] = func(fs *tester.FakeSession, line string) bool {
				n, _ := mails.LoadOrStore(fs, new(int))
				if *n.(*int)++; *n.(*int) > 2 {
					fs.Reply("421 4.7.0 Too many messages in this connection")
					return false
				}
				return mail(fs, line)
			}

			m := New(opts...)
			t.Cleanup(func() { _ = m.Terminate() })
			for range 5 {
				_, err := m.Send(t.Context(), from, rcpts[:1], "Hi\r\n")
				require.NoError(t, err)
			}
			tx := []string{"MAIL", "RCPT", "DATA"}
			want := slices.Concat(tx, tx, []string{"MAIL"}, tx, tx, []string{"MAIL"}, tx)
			assert.Equal(t, want, verbs(srv))
			assert.Equal(t, 3, connections(srv))

			// A Verifier renews the connection on the 421 to its third MAIL as well.
			m = New(append(opts, WithMaxRecipients(1))...)
			t.Cleanup(func() { _ = m.Terminate() })
			v, err := m.Verifier(VerifyRcpt, from)
			require.NoError(t, err)
			for _, rcpt := range rcpts {
				require.NoError(t, v.Verify(t.Context(), rcpt))
			}
			require.NoError(t, v.End())
			assert.Equal(t, slices.Concat(want, []string{
				"MAIL", "RCPT", "RSET", "MAIL", "RCPT", "RSET", "MAIL",
				"MAIL", "RCPT", "RSET", "MAIL", "RCPT", "RSET",
			}), verbs(srv))
			assert.Equal(t, 5, connections(srv))
		})
	}
}

// startServer starts a test server with be and returns its address.
func startServer(t *testing.T, be *testserver.Backend, opts ...server.Option) string {
	t.Helper()
	srv := testserver.Standard(append([]server.Option{serverTLS, server.WithBackend(be)}, opts...)...)
	l, err := srv.Listen()
	require.NoError(t, err)
	go func() { _ = srv.Serve(context.Background(), l) }()
	t.Cleanup(func() { _ = srv.Close() })
	return l.Addr().String()
}

// requireSplit checks that msg was sent in a transaction per want and the
// notfound recipients failed.
func requireSplit(t *testing.T, be *testserver.Backend, res Report, from, msg string, want [][]string) {
	t.Helper()
	for _, f := range res.Failures {
		assert.Len(t, f.Rcpts, 1)
		assert.True(t, strings.HasPrefix(f.Rcpts[0], "notfound"), f.Rcpts[0])
		assert.ErrorContains(t, f.Error, "550")
	}

	require.Len(t, res.Responses, len(want))
	for i, r := range res.Responses {
		assert.Equal(t, want[i], r.Rcpts)
		assert.Equal(t, 250, r.Status.Code)

		mail, found := be.Load(from, want[i])
		require.True(t, found)
		assert.Equal(t, msg, string(mail.Data))
	}
}
