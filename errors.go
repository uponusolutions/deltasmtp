package deltasmtp

import "errors"

var (
	// ErrTooLongLine occurs if the smtp line is too long.
	ErrTooLongLine = errors.New("smtp: too long a line in input stream")

	// ErrBDATReset is returned by the reader passed to Session.Data if the
	// client sends RSET instead of another BDAT command.
	ErrBDATReset = errors.New("smtp: BDAT transfer reset by client")
	// ErrBDATQuit is returned by the reader passed to Session.Data if the
	// client sends QUIT instead of another BDAT command.
	ErrBDATQuit = errors.New("smtp: BDAT transfer ended by client QUIT")
)

// Rejections, shared by all connections. They must not be modified.
var (
	// Connection errors.

	// ErrConnection is returned if a connection error occurs.
	ErrConnection = &StatusError{
		Code:         421,
		EnhancedCode: EnhancedCode{4, 4, 0},
		Lines:        []string{"Connection error, sorry"},
	}
	// ErrInternal is returned if the server recovered from an internal error (panic).
	ErrInternal = &StatusError{
		Code:         421,
		EnhancedCode: EnhancedCode{4, 0, 0},
		Lines:        []string{"Internal server error"},
	}
	// ErrTooManyConnections is returned if the server's concurrent connection limit is exceeded.
	ErrTooManyConnections = &StatusError{
		Code:         421,
		EnhancedCode: EnhancedCode{4, 3, 2},
		Lines:        []string{"Too many concurrent connections, try again later"},
	}
	// ErrTooManyTransactions is returned if the client exceeded the
	// transactions per session (RFC 9422 MAILMAX). The connection is closed.
	ErrTooManyTransactions = &StatusError{
		Code:         421,
		EnhancedCode: EnhancedCode{4, 7, 0},
		Lines:        []string{"Too many transactions in this session"},
	}
	// ErrIdleTimeout is returned if the client exceeded the read timeout.
	ErrIdleTimeout = &StatusError{
		Code:         421,
		EnhancedCode: EnhancedCode{4, 4, 2},
		Lines:        []string{"Idle timeout, bye bye"},
	}
	// ErrCommandLineTooLong is returned if a command line exceeds the maximum line length.
	ErrCommandLineTooLong = &StatusError{
		Code:         500,
		EnhancedCode: EnhancedCode{5, 4, 0},
		Lines:        []string{"Too long line"},
	}

	// Command and sequence errors.

	// ErrBadSyntax is returned if a command line can't be parsed.
	ErrBadSyntax = &StatusError{
		Code:         500,
		EnhancedCode: EnhancedCode{5, 5, 2},
		Lines:        []string{"Error: bad syntax"},
	}
	// ErrBadSequence is returned if a command is invalid at this point.
	ErrBadSequence = &StatusError{
		Code:         503,
		EnhancedCode: EnhancedCode{5, 5, 1},
		Lines:        []string{"Bad sequence of commands"},
	}
	// ErrHeloArgRequired is returned if HELO or EHLO is sent without an argument.
	ErrHeloArgRequired = &StatusError{
		Code:         501,
		EnhancedCode: EnhancedCode{5, 5, 2},
		Lines:        []string{"Domain/address argument required for HELO"},
	}
	// ErrSecureConnectionRequired is returned if a secure connection is enforced and the client didn't use TLS.
	ErrSecureConnectionRequired = &StatusError{
		Code:         530,
		EnhancedCode: EnhancedCode{5, 7, 0},
		Lines:        []string{"Must issue a STARTTLS command first"},
	}
	// ErrNoAuthMechanism is returned if authentication is enforced but the session offers no mechanism.
	ErrNoAuthMechanism = &StatusError{
		Code:         451,
		EnhancedCode: EnhancedCode{4, 0, 0},
		Lines:        []string{"No auth mechanism available but authentication enforced"},
	}

	// MAIL errors.

	// ErrMailSyntax is returned if the MAIL command can't be parsed.
	ErrMailSyntax = &StatusError{
		Code:         501,
		EnhancedCode: EnhancedCode{5, 5, 2},
		Lines:        []string{"Was expecting MAIL arg syntax of FROM:<address>"},
	}
	// ErrMailParams is returned if the MAIL ESMTP parameters can't be parsed.
	ErrMailParams = &StatusError{
		Code:         501,
		EnhancedCode: EnhancedCode{5, 5, 4},
		Lines:        []string{"Unable to parse MAIL ESMTP parameters"},
	}
	// ErrUnknownMailArg is returned if MAIL contains an unknown parameter.
	ErrUnknownMailArg = &StatusError{
		Code:         500,
		EnhancedCode: EnhancedCode{5, 5, 4},
		Lines:        []string{"Unknown MAIL FROM argument"},
	}
	// ErrNonASCIISender is returned if the MAIL address contains non-ASCII
	// characters but SMTPUTF8 was not requested (RFC 6531 section 3.5).
	ErrNonASCIISender = &StatusError{
		Code:         550,
		EnhancedCode: EnhancedCode{5, 6, 7},
		Lines:        []string{"Non-ASCII addresses not permitted for that sender"},
	}
	// ErrSenderNotAccepted is returned if the address validator rejected the
	// MAIL address (RFC 5321 section 4.2.2).
	ErrSenderNotAccepted = &StatusError{
		Code:         553,
		EnhancedCode: EnhancedCode{5, 1, 7},
		Lines:        []string{"Sender address not accepted"},
	}
	// ErrMailNotAccepted is returned if the backend rejected MAIL with a non-SMTP error.
	ErrMailNotAccepted = &StatusError{
		Code:         451,
		EnhancedCode: EnhancedCode{4, 0, 0},
		Lines:        []string{"Mail not accepted"},
	}
	// ErrMalformedSize is returned if the SIZE parameter isn't a valid integer.
	ErrMalformedSize = &StatusError{
		Code:         501,
		EnhancedCode: EnhancedCode{5, 5, 4},
		Lines:        []string{"Unable to parse SIZE as an integer"},
	}
	// ErrMalformedXOORG is returned if the XOORG parameter is malformed.
	ErrMalformedXOORG = &StatusError{
		Code:         500,
		EnhancedCode: EnhancedCode{5, 5, 4},
		Lines:        []string{"Malformed XOORG parameter value"},
	}
	// ErrXOORGNotImplemented is returned if XOORG is used but not enabled.
	ErrXOORGNotImplemented = &StatusError{
		Code:         504,
		EnhancedCode: EnhancedCode{5, 5, 4},
		Lines:        []string{"EnableXOORG is not implemented"},
	}
	// ErrSMTPUTF8NotImplemented is returned if SMTPUTF8 is used but not enabled.
	ErrSMTPUTF8NotImplemented = &StatusError{
		Code:         504,
		EnhancedCode: EnhancedCode{5, 5, 4},
		Lines:        []string{"SMTPUTF8 is not implemented"},
	}
	// ErrREQUIRETLSNotImplemented is returned if REQUIRETLS is used but not enabled.
	ErrREQUIRETLSNotImplemented = &StatusError{
		Code:         504,
		EnhancedCode: EnhancedCode{5, 5, 4},
		Lines:        []string{"REQUIRETLS is not implemented"},
	}
	// ErrBINARYMIMENotImplemented is returned if BODY=BINARYMIME is used but not enabled.
	ErrBINARYMIMENotImplemented = &StatusError{
		Code:         504,
		EnhancedCode: EnhancedCode{5, 5, 4},
		Lines:        []string{"BINARYMIME is not implemented"},
	}
	// ErrUnknownBody is returned if the BODY parameter has an unknown value.
	ErrUnknownBody = &StatusError{
		Code:         501,
		EnhancedCode: EnhancedCode{5, 5, 4},
		Lines:        []string{"Unknown BODY value"},
	}
	// ErrRETNotImplemented is returned if RET is used but DSN isn't enabled.
	ErrRETNotImplemented = &StatusError{
		Code:         504,
		EnhancedCode: EnhancedCode{5, 5, 4},
		Lines:        []string{"RET is not implemented"},
	}
	// ErrUnknownRET is returned if the RET parameter has an unknown value.
	ErrUnknownRET = &StatusError{
		Code:         501,
		EnhancedCode: EnhancedCode{5, 5, 4},
		Lines:        []string{"Unknown RET value"},
	}
	// ErrENVIDNotImplemented is returned if ENVID is used but DSN isn't enabled.
	ErrENVIDNotImplemented = &StatusError{
		Code:         504,
		EnhancedCode: EnhancedCode{5, 5, 4},
		Lines:        []string{"ENVID is not implemented"},
	}
	// ErrMalformedENVID is returned if the ENVID parameter is malformed.
	ErrMalformedENVID = &StatusError{
		Code:         501,
		EnhancedCode: EnhancedCode{5, 5, 4},
		Lines:        []string{"Malformed ENVID parameter value"},
	}
	// ErrMalformedAUTH is returned if the MAIL AUTH parameter is malformed.
	ErrMalformedAUTH = &StatusError{
		Code:         500,
		EnhancedCode: EnhancedCode{5, 5, 4},
		Lines:        []string{"Malformed AUTH parameter value"},
	}
	// ErrMalformedAUTHMailbox is returned if the MAIL AUTH parameter contains an invalid mailbox.
	ErrMalformedAUTHMailbox = &StatusError{
		Code:         500,
		EnhancedCode: EnhancedCode{5, 5, 4},
		Lines:        []string{"Malformed AUTH parameter mailbox"},
	}
	// ErrDELIVERBYNotImplemented is returned if BY is used but DELIVERBY isn't enabled.
	ErrDELIVERBYNotImplemented = &StatusError{
		Code:         501,
		EnhancedCode: EnhancedCode{5, 5, 4},
		Lines:        []string{"DELIVERBY is not implemented"},
	}
	// ErrMalformedBY is returned if the BY parameter is malformed.
	ErrMalformedBY = &StatusError{
		Code:         501,
		EnhancedCode: EnhancedCode{5, 5, 4},
		Lines:        []string{"Malformed BY parameter value"},
	}
	// ErrBYBelowMinimum is returned if the BY parameter is below the configured minimum.
	ErrBYBelowMinimum = &StatusError{
		Code:         501,
		EnhancedCode: EnhancedCode{5, 5, 4},
		Lines:        []string{"BY parameter is below server minimum"},
	}
	// ErrMTPRIORITYNotImplemented is returned if MT-PRIORITY is used but not enabled.
	ErrMTPRIORITYNotImplemented = &StatusError{
		Code:         501,
		EnhancedCode: EnhancedCode{5, 5, 4},
		Lines:        []string{"MT-PRIORITY is not implemented"},
	}
	// ErrMalformedMTPRIORITY is returned if the MT-PRIORITY parameter is malformed.
	ErrMalformedMTPRIORITY = &StatusError{
		Code:         501,
		EnhancedCode: EnhancedCode{5, 5, 4},
		Lines:        []string{"Malformed MT-PRIORITY parameter value"},
	}
	// ErrMTPRIORITYOutOfRange is returned if the MT-PRIORITY parameter is outside the valid range.
	ErrMTPRIORITYOutOfRange = &StatusError{
		Code:         501,
		EnhancedCode: EnhancedCode{5, 5, 4},
		Lines:        []string{"MT-PRIORITY is outside valid range"},
	}

	// RCPT errors.

	// ErrRcptSyntax is returned if the RCPT command can't be parsed.
	ErrRcptSyntax = &StatusError{
		Code:         501,
		EnhancedCode: EnhancedCode{5, 5, 2},
		Lines:        []string{"Was expecting RCPT arg syntax of TO:<address>"},
	}
	// ErrRcptParams is returned if the RCPT ESMTP parameters can't be parsed.
	ErrRcptParams = &StatusError{
		Code:         501,
		EnhancedCode: EnhancedCode{5, 5, 4},
		Lines:        []string{"Unable to parse RCPT ESMTP parameters"},
	}
	// ErrUnknownRcptArg is returned if RCPT contains an unknown parameter.
	ErrUnknownRcptArg = &StatusError{
		Code:         500,
		EnhancedCode: EnhancedCode{5, 5, 4},
		Lines:        []string{"Unknown RCPT TO argument"},
	}
	// ErrNonASCIIRecipient is returned if a RCPT address contains non-ASCII
	// characters but SMTPUTF8 was not requested (RFC 6531 section 3.5).
	ErrNonASCIIRecipient = &StatusError{
		Code:         553,
		EnhancedCode: EnhancedCode{5, 6, 7},
		Lines:        []string{"Non-ASCII addresses not permitted for that recipient"},
	}
	// ErrRcptAddressNotAccepted is returned if the address validator rejected a
	// RCPT address (RFC 5321 section 4.2.2).
	ErrRcptAddressNotAccepted = &StatusError{
		Code:         553,
		EnhancedCode: EnhancedCode{5, 1, 3},
		Lines:        []string{"Recipient address not accepted"},
	}
	// ErrRcptNotAccepted is returned if the backend rejected RCPT with a non-SMTP error.
	ErrRcptNotAccepted = &StatusError{
		Code:         451,
		EnhancedCode: EnhancedCode{4, 0, 0},
		Lines:        []string{"Recipient not accepted"},
	}
	// ErrNOTIFYNotImplemented is returned if NOTIFY is used but DSN isn't enabled.
	ErrNOTIFYNotImplemented = &StatusError{
		Code:         504,
		EnhancedCode: EnhancedCode{5, 5, 4},
		Lines:        []string{"NOTIFY is not implemented"},
	}
	// ErrMalformedNOTIFY is returned if the NOTIFY parameter is malformed.
	ErrMalformedNOTIFY = &StatusError{
		Code:         501,
		EnhancedCode: EnhancedCode{5, 5, 4},
		Lines:        []string{"Malformed NOTIFY parameter value"},
	}
	// ErrORCPTNotImplemented is returned if ORCPT is used but DSN isn't enabled.
	ErrORCPTNotImplemented = &StatusError{
		Code:         504,
		EnhancedCode: EnhancedCode{5, 5, 4},
		Lines:        []string{"ORCPT is not implemented"},
	}
	// ErrMalformedORCPT is returned if the ORCPT parameter is malformed.
	ErrMalformedORCPT = &StatusError{
		Code:         501,
		EnhancedCode: EnhancedCode{5, 5, 4},
		Lines:        []string{"Malformed ORCPT parameter value"},
	}
	// ErrRRVSNotImplemented is returned if RRVS is used but not enabled.
	ErrRRVSNotImplemented = &StatusError{
		Code:         501,
		EnhancedCode: EnhancedCode{5, 5, 4},
		Lines:        []string{"RRVS is not implemented"},
	}
	// ErrMalformedRRVS is returned if the RRVS parameter is malformed.
	ErrMalformedRRVS = &StatusError{
		Code:         501,
		EnhancedCode: EnhancedCode{5, 5, 4},
		Lines:        []string{"Malformed RRVS parameter value"},
	}

	// VRFY errors.

	// ErrVrfySyntax is returned if the VRFY command can't be parsed.
	ErrVrfySyntax = &StatusError{
		Code:         501,
		EnhancedCode: EnhancedCode{5, 5, 2},
		Lines:        []string{"Was expecting <address>"},
	}
	// ErrVrfyParams is returned if the VRFY ESMTP parameters can't be parsed.
	ErrVrfyParams = &StatusError{
		Code:         501,
		EnhancedCode: EnhancedCode{5, 5, 4},
		Lines:        []string{"Unable to parse VRFY ESMTP parameters"},
	}
	// ErrUTF8ReplyRequired is returned if the reply to VRFY requires UTF-8 but
	// SMTPUTF8 was not requested (RFC 6531 section 3.7.4.2).
	ErrUTF8ReplyRequired = &StatusError{
		Code:         550,
		EnhancedCode: EnhancedCode{5, 6, 8},
		Lines:        []string{"UTF-8 string reply is required, but not permitted by the SMTP client"},
	}
	// ErrVrfyAddressNotAccepted is returned if the address validator rejected
	// the VRFY address (RFC 5321 section 4.2.2).
	ErrVrfyAddressNotAccepted = &StatusError{
		Code:         553,
		EnhancedCode: EnhancedCode{5, 1, 3},
		Lines:        []string{"Address not accepted"},
	}

	// AUTH errors.

	// ErrAuthRequired is returned if authentication is required before the command (RFC 4954).
	ErrAuthRequired = &StatusError{
		Code:         530,
		EnhancedCode: EnhancedCode{5, 7, 0},
		Lines:        []string{"Authentication required"},
	}
	// ErrAuthFailed is returned if the authentication failed.
	ErrAuthFailed = &StatusError{
		Code:         535,
		EnhancedCode: EnhancedCode{5, 7, 8},
		Lines:        []string{"Authentication failed"},
	}
	// ErrAuthTemporaryFailure is returned if authentication failed with a non-SMTP error (RFC 4954).
	ErrAuthTemporaryFailure = &StatusError{
		Code:         454,
		EnhancedCode: EnhancedCode{4, 7, 0},
		Lines:        []string{"Temporary authentication failure"},
	}
	// ErrAuthUnsupported is returned if the authentication is not supported.
	ErrAuthUnsupported = &StatusError{
		Code:         502,
		EnhancedCode: EnhancedCode{5, 7, 0},
		Lines:        []string{"Authentication not supported"},
	}
	// ErrAuthUnknownMechanism is returned if AUTH uses a mechanism that isn't offered (RFC 4954).
	ErrAuthUnknownMechanism = &StatusError{
		Code:         504,
		EnhancedCode: EnhancedCode{5, 5, 4},
		Lines:        []string{"Unrecognized authentication type"},
	}
	// ErrAlreadyAuthenticated is returned if AUTH is sent after a successful authentication.
	ErrAlreadyAuthenticated = &StatusError{
		Code:         503,
		EnhancedCode: EnhancedCode{5, 5, 1},
		Lines:        []string{"Already authenticated"},
	}
	// ErrAuthMissingParam is returned if AUTH is sent without a mechanism.
	ErrAuthMissingParam = &StatusError{
		Code:         502,
		EnhancedCode: EnhancedCode{5, 5, 4},
		Lines:        []string{"Missing parameter"},
	}
	// ErrInvalidBase64 is returned if an AUTH response isn't valid base64.
	ErrInvalidBase64 = &StatusError{
		Code:         454,
		EnhancedCode: EnhancedCode{4, 7, 0},
		Lines:        []string{"Invalid base64 data"},
	}
	// ErrNoAuthHandler is returned if the session returned no handler for an offered mechanism.
	ErrNoAuthHandler = &StatusError{
		Code:         451,
		EnhancedCode: EnhancedCode{4, 0, 0},
		Lines:        []string{"No auth handler received, but mechanism seems valid."},
	}
	// ErrAuthCancelled is returned if the client cancelled the AUTH exchange.
	ErrAuthCancelled = &StatusError{
		Code:         501,
		EnhancedCode: EnhancedCode{5, 0, 0},
		Lines:        []string{"Negotiation cancelled"},
	}

	// STARTTLS errors.

	// ErrAlreadyTLS is returned if STARTTLS is sent on an encrypted connection.
	ErrAlreadyTLS = &StatusError{
		Code:         502,
		EnhancedCode: EnhancedCode{5, 5, 1},
		Lines:        []string{"Already running in TLS"},
	}
	// ErrTLSNotSupported is returned if STARTTLS is sent but no TLS config is set.
	ErrTLSNotSupported = &StatusError{
		Code:         502,
		EnhancedCode: EnhancedCode{5, 5, 1},
		Lines:        []string{"TLS not supported"},
	}
	// ErrTLSConfig is returned if the TLS config couldn't be retrieved.
	ErrTLSConfig = &StatusError{
		Code:         451,
		EnhancedCode: EnhancedCode{4, 0, 0},
		Lines:        []string{"TLS config retrieval failed"},
	}
	// ErrTLSConfigNil is returned if the TLS config retrieval returned nil.
	ErrTLSConfigNil = &StatusError{
		Code:         451,
		EnhancedCode: EnhancedCode{4, 0, 0},
		Lines:        []string{"TLS config retrieval nil returned"},
	}

	// DATA and BDAT errors.

	// ErrNoRecipients is returned if no recipients are set.
	ErrNoRecipients = &StatusError{
		Code:         502,
		EnhancedCode: EnhancedCode{5, 5, 1},
		Lines:        []string{"Missing RCPT TO command."},
	}
	// ErrDataTooLarge is returned if the maximum message size is exceeded.
	ErrDataTooLarge = &StatusError{
		Code:         552,
		EnhancedCode: EnhancedCode{5, 3, 4},
		Lines:        []string{"Maximum message size exceeded"},
	}
	// ErrDataArgs is returned if DATA is sent with arguments.
	ErrDataArgs = &StatusError{
		Code:         501,
		EnhancedCode: EnhancedCode{5, 5, 4},
		Lines:        []string{"DATA command should not have any arguments"},
	}
	// ErrDataBINARYMIME is returned if DATA is used for a BINARYMIME message.
	ErrDataBINARYMIME = &StatusError{
		Code:         502,
		EnhancedCode: EnhancedCode{5, 5, 1},
		Lines:        []string{"DATA not allowed for BINARYMIME messages"},
	}
	// ErrCHUNKINGNotImplemented is returned if BDAT is used but CHUNKING isn't enabled.
	ErrCHUNKINGNotImplemented = &StatusError{
		Code:         504,
		EnhancedCode: EnhancedCode{5, 5, 4},
		Lines:        []string{"CHUNKING is not implemented"},
	}
	// ErrBDATMissingSize is returned if BDAT is sent without a chunk size.
	ErrBDATMissingSize = &StatusError{
		Code:         501,
		EnhancedCode: EnhancedCode{5, 5, 4},
		Lines:        []string{"Missing chunk size argument"},
	}
	// ErrBDATTooManyArgs is returned if BDAT is sent with too many arguments.
	ErrBDATTooManyArgs = &StatusError{
		Code:         501,
		EnhancedCode: EnhancedCode{5, 5, 4},
		Lines:        []string{"Too many arguments"},
	}
	// ErrBDATUnknownArg is returned if BDAT contains an unknown argument.
	ErrBDATUnknownArg = &StatusError{
		Code:         501,
		EnhancedCode: EnhancedCode{5, 5, 4},
		Lines:        []string{"Unknown BDAT argument"},
	}
	// ErrBDATMalformedSize is returned if the BDAT chunk size is malformed.
	ErrBDATMalformedSize = &StatusError{
		Code:         501,
		EnhancedCode: EnhancedCode{5, 5, 4},
		Lines:        []string{"Malformed size argument"},
	}
	// ErrBDATExpected is returned if another command is sent during a BDAT transfer.
	ErrBDATExpected = &StatusError{
		Code:         501,
		EnhancedCode: EnhancedCode{5, 5, 4},
		Lines:        []string{"BDAT, RSET or QUIT command expected"},
	}
)
