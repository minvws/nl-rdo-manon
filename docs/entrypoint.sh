#!/bin/sh
set -e

THEME="${THEME:-'icore-open'}"
echo "@use \"@minvws/manon-themes/${THEME}\";" >/app/docs/src/scss/theme.scss

pnpm run dev --host
