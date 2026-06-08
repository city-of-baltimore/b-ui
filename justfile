[private]
default:
    just --list

# reruns typechecks on file changes
dev:
    watchexec -e ts,tsx npm run typecheck

# build for production
build:
    npx elena build

# run storybook
storybook:
    npm run storybook
