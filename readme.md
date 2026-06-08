:# OPI Component Library

## Installation/Usage

- Go to `Github > Settings > Developer Settings > Personal Access Tokens > Tokens (classic) > Generate new token`.
- Click on '(classic)' and select the `read:packages` permission

- Create `.npmrc` file at the root of your project with these contents:
```
//npm.pkg.github.com/:_authToken=<YOUR-ACCESS-TOKEN-replace-including-angle-brackets>
@balt-opi:registry=https://npm.pkg.github.com
```

- Add `.npmrc` to `.gitignore`
- Install the component library [check latest version](https://github.com/balt-opi/ui-components/pkgs/npm/ui-components)
```
npm install @balt-opi/ui-components
```

## Development

###  Setup dev environment
Tools: 
- [just](https://github.com/casey/just#cross-platform)
- [watchexec](https://github.com/watchexec/watchexec#install)
- nodejs/npm

Install dependencies
```
npm i
```

### Preview components with [storybook](https://storybook.js.org)
```
npm run storybook

# or
just storybook
```

### run to find more `just` commands or open the `justfile`
```
just
```

