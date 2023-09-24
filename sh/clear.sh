#! /usr/bin/env sh

find . -name node_modules -type d -prune -exec rm -rf '{}' \; && rm ./dist ./es ./lib ./pnpm-lock.yaml ./yarn.lock -rf \
&& bit clear-cache
