#!/usr/bin/env bash
# Publishes a benchmark page to gh-pages, next to the data.js that
# github-action-benchmark committed to the local gh-pages branch (auto-push
# disabled). The action only creates index.html if it is missing, so it never
# overwrites the page.
#
# Usage: publish.sh <directory on gh-pages> <page in benchmark/pages>
# e.g.   publish.sh dev/bench bench.html
set -euo pipefail

dir=$1
page=$2
src=$(cd "$(dirname "$0")" && pwd)
wt="${RUNNER_TEMP:-$(mktemp -d)}/gh-pages-$$"

git worktree add "$wt" gh-pages
mkdir -p "$wt/$dir"
cp "$src/$page" "$wt/$dir/index.html"
cp "$src/common.css" "$src/common.js" "$wt/$dir/"

cd "$wt"
git config user.name "github-actions[bot]"
git config user.email "41898282+github-actions[bot]@users.noreply.github.com"
git add "$dir"
git diff --cached --quiet || git commit -m "update $dir page"

# Other jobs and workflows push to gh-pages as well.
for _ in 1 2 3 4 5; do
  git push origin gh-pages:gh-pages && exit 0
  git pull --rebase origin gh-pages
done
exit 1
