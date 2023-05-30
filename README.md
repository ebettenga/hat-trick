# ⚛️⚡ Component Library

## Features

- ⚛️ [React 18](https://reactjs.org/)
- 📚 [Storybook 6](https://storybook.js.org/) - Components preview
- 🖌️ [Tailwind CSS 3](https://tailwindcss.com/)
- ⏩ [Vite](https://vitejs.dev/) - Run and build the project blazingly fast!
- ⚡ [Vitest](https://vitest.dev/) - Components Unit Testing
- 📐 [ESLint](https://eslint.org/) & [Prettier](https://prettier.io/) - Formatting and Linting
- 🌟 [Typescript](https://www.typescriptlang.org/)
- 🐶 [Husky](https://typicode.github.io/husky) & [Lint Staged](https://www.npmjs.com/package/lint-staged) - Pre-commit Hooks
- ⏰ [Release Please](https://github.com/googleapis/release-please) — Generate the changelog with the release-please workflow
- 👷 [Github Actions](https://github.com/features/actions) — Releasing versions to NPM
- Initial components setup using [Atomic Design](https://bradfrost.com/blog/post/atomic-web-design/)

## Getting Started

1. run yarn install

2. Run `yarn prepare` command to setup [Husky](https://typicode.github.io/husky) pre-commit hooks.

3. run yarn dev to lanch a storybook.

### Main Scripts

Always prepending yarn:

- `dev`: Bootstrap the Storybook preview with Hot Reload.
- `build`: Builds the static storybook project.
- `build:lib`: Builds the component library into the **dist** folder.
- `lint:fix`: Applies linting based on the rules defined in **.eslintrc.js**.
- `format:prettier`: Formats files using the prettier rules defined in **.prettierrc**.
- `test`: Runs testing using watch mode.
- `test:cov`: Runs testing displaying a coverage report.

### Publishing the Library to NPM

**TODO**

- ci to publish library to npm
- some gitlab version of release-please to handle release versions

### Versioning

Following [Conventional Commits](https://www.conventionalcommits.org/).

## Using the library in a React frontend app

Install the library running `yarn component-library`.

To import the styles the library needs:

```js
/* _app.tsx */
import 'hat-trick/dist/style.css'
// More imports and your App component ...
```

To import library components:

```js
/* pages/index.tsx */
import { Button } from 'hat-trick'
// More imports and your Page component...
```
