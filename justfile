[private]
default:
    just --list

# reruns typechecks on file changes
dev:
    watchexec -e ts,tsx npm run typecheck

# build for production
build:
    mmv -r './src/components/*/*/*.stories.*' '#2.stories.xd'
    npx elena build
    mmv -r './src/components/*/*/*.stories.*' '#2.stories.js'

# run storybook
storybook:
    npm run storybook
