find . -name node_modules -type d -prune -exec rm -rf '{}' \; && rm ./dist ./es ./lib ./pnpm-lock.yaml -rf \
&& bit clear-cache
