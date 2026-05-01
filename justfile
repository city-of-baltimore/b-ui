[private]
default:
    just --list

dev:
    npm run dev -- --host

build:
    rm -rf dist
    npm run build

storybook:
    npm run storybook

fixerrs:
    watchexec -e ts,tsx npm run build

