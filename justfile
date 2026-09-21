[private]
default:
    just --list

# reruns typechecks on file changes
dev:
    watchexec -e ts,tsx npm run typecheck

# build for production
build:
    mmv -r './src/components/*/*/*.stories.*' '#3.stories.xd'
    mmv -r './src/stories/docs/*.stories.*' '#1.stories.xd'
    npx elena build
    mmv -r './src/components/*/*/*.stories.*' '#3.stories.js'
    mmv -r './src/stories/docs/*.stories.*' '#1.stories.js'
    cp ./dist/bundle.css ./src/stories/assets/b-ui.css
    cp ./dist/bundle.js ./src/stories/assets/b-ui.js

# run storybook
storybook:
    npm run storybook
