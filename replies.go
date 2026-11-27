package deltasmtp

// Success and intermediate replies, shared by all connections. They must not be modified.
var (
	// Noop default return.
	Noop = &Status{
		Code:         250,
		EnhancedCode: EnhancedCode{2, 0, 0},
		Lines:        []string{"I have successfully done nothing"},
	}
	// Quit is the reply to QUIT.
	Quit = &Status{
		Code:         221,
		EnhancedCode: EnhancedCode{2, 0, 0},
		Lines:        []string{"Bye"},
	}
	// Reset is the reply to RSET.
	Reset = &Status{
		Code:         250,
		EnhancedCode: EnhancedCode{2, 0, 0},
		Lines:        []string{"Session reset"},
	}
	// VRFY default return.
	VRFY = &Status{
		Code:         252,
		EnhancedCode: EnhancedCode{2, 5, 0},
		Lines:        []string{"Cannot VRFY user, but will accept message"},
	}
	// AuthSucceeded is returned if the authentication succeeded.
	AuthSucceeded = &Status{
		Code:         235,
		EnhancedCode: EnhancedCode{2, 0, 0},
		Lines:        []string{"Authentication succeeded"},
	}
	// StartTLS is returned before the TLS handshake of STARTTLS.
	StartTLS = &Status{
		Code:         220,
		EnhancedCode: EnhancedCode{2, 0, 0},
		Lines:        []string{"Ready to start TLS"},
	}
	// BDATContinue is returned after a BDAT chunk that isn't the last one.
	BDATContinue = &Status{
		Code:         250,
		EnhancedCode: EnhancedCode{2, 0, 0},
		Lines:        []string{"Continue"},
	}
	// Queued is returned if a message was accepted without a queue id.
	Queued = &Status{
		Code:         250,
		EnhancedCode: EnhancedCode{2, 0, 0},
		Lines:        []string{"OK: queued"},
	}
	// StartMailInput is returned if the server is ready to receive the DATA content.
	StartMailInput = &Status{
		Code:         354,
		EnhancedCode: NoEnhancedCode,
		Lines:        []string{"Go ahead. End your data with <CR><LF>.<CR><LF>"},
	}
)
