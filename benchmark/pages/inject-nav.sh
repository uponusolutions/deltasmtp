#!/usr/bin/env bash
# Inserts the menu (nav.html) into a page of gh-pages and marks the current
# page. The benchmark pages carry a <!-- site-nav --> marker, otherwise (the
# coverage report) the menu is inserted right after <body>.
#
# Usage: inject-nav.sh <html file> <path to the site root> <page>
# e.g.   inject-nav.sh coverage/index.html ../ coverage
set -euo pipefail

file=$1
root=$2
page=$3
src=$(cd "$(dirname "$0")" && pwd)

nav=$(mktemp)
trap 'rm -f "$nav" "$file.tmp"' EXIT

sed -e "s|{{root}}|$root|g" \
    -e "s|data-page=\"$page\"|data-page=\"$page\" aria-current=\"page\"|" \
    "$src/nav.html" > "$nav"

marker=0
grep -q '<!-- site-nav -->' "$file" && marker=1

awk -v nav="$nav" -v marker="$marker" '
  function emit(  line) { while ((getline line < nav) > 0) print line; close(nav) }
  !done && marker && index($0, "<!-- site-nav -->") { emit(); done = 1; next }
  !done && !marker && /<body[ >]/ { print; emit(); done = 1; next }
  { print }
  END { if (!done) exit 1 }
' "$file" > "$file.tmp"

mv "$file.tmp" "$file"
