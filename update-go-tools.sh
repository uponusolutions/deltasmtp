#!/usr/bin/env bash
#
# Updates the go.tool.mod
#

set -e

# prepare dir
cd $(dirname "$0")

mkdir -p tmp
cd tmp
echo "module github.com/uponusolutions/deltasmtp" > go.mod

# install tool
go get -tool github.com/golangci/golangci-lint/v2/cmd/golangci-lint
go get -tool mvdan.cc/gofumpt
go get -tool golang.org/x/perf/cmd/benchstat

# replace go.tool.mod and go.tool.sum
cd ..
rm go.tool.mod go.tool.sum
mv tmp/go.mod go.tool.mod
mv tmp/go.sum go.tool.sum

# gopls gets its own tool module, it requires another golang.org/x/tools than golangci-lint
cd tmp
echo "module github.com/uponusolutions/deltasmtp" > go.mod
go get -tool golang.org/x/tools/gopls
cd ..
mv tmp/go.mod go.gopls.mod
mv tmp/go.sum go.gopls.sum
rm -r -f tmp
