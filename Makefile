test:
	go test ./...

race:
	go test  ./... -race

cover:
	go test ./... -tags cover -race -coverprofile=coverage.out
	go tool -modfile=go.tool.mod cover -html=coverage.out -o coverage.html

# gopls check runs the gopls analyzers as shown by editors, golangci-lint can't run
# them. gopls has its own tool module, it needs another golang.org/x/tools than golangci-lint.
lint:
	echo "Linting go"
	go tool -modfile=go.tool.mod golangci-lint run
	out=$$(go tool -modfile=go.gopls.mod gopls check $$(git ls-files --cached --others --exclude-standard '*.go' ':!:benchmark/compare/*')) && \
		if [ -n "$$out" ]; then echo "$$out"; exit 1; fi

benchlog:
	GOMAXPROCS=1 go test ./benchmark -bench . -benchmem -count=10 -run ^$$ | tee .bench/$$(date +%Y%m%dT%H%M%S).txt

BENCH	?= .
TIME	?= 1s

bench:
	GOMAXPROCS=1 go test ./benchmark -bench '$(BENCH)' -vet=off -benchmem -benchtime=$(TIME) -run ^$$

bench-mailer:
	GOMAXPROCS=1 go test ./benchmark -bench 'Mailer/$(BENCH)' -benchmem -benchtime=$(TIME) -run ^$$

bench-dot:
	GOMAXPROCS=1 go test ./benchmark -bench 'Dot/$(BENCH)' -benchmem -benchtime=$(TIME) -run ^$$

# Compares deltasmtp with github.com/emersion/go-smtp, a separate module so
# go-smtp never becomes a dependency of deltasmtp.
bench-compare:
	cd benchmark/compare && go test . -bench '$(BENCH)' -benchmem -benchtime=$(TIME) -run ^$$

stats:
	go tool -modfile=go.tool.mod benchstat .bench/*.txt

pprof:
	go test ./benchmark -bench '$(BENCH)' -benchtime=$(TIME) -run ^$$ -cpuprofile cpu.pprof -memprofile mem.pprof

pprof-cpu:
	go tool pprof -http=":8000" cpu.pprof

pprof-mem:
	go tool pprof -http=":8000" mem.pprof

vet:
	go vet ./...
