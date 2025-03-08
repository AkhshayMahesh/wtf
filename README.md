# Festember '24 Frontend

The official frontend codebase of Festember '24 Main Website!

### Setup

1. Fork this repo and clone your fork (please be careful to include `--recurse-submodules` in order to clone the submodule as well)

```bash
git clone --recurse-submodules <FORK_URL>
```

2. Copy the config file and fill it up

```bash
cp ./src/config/config.example.ts ./src/config/config.ts
```

3. Enable corepack and install pnpm

```bash
corepack enable pnpm
```

4. Install necessary packages

```bash
pnpm install
```

5. Install API clients

```bash
(cd fest-web-client/client && npm install)
```

6. Run the development server

```bash
pnpm dev
```

_The website will be up and running on http://localhost:3000_

### Notes

-   `pnpm format` can be used to format the code using [prettier](https://prettier.io/docs/en/).
-   `fest-web-client` is a submodule that contains `client` folder which provides auto-generated classes for integrating with FestAPIv2.
-   Docs for submodule concept - [Git Tools - Submodules](https://www.git-scm.com/book/en/v2/Git-Tools-Submodules).
-   If you forgot to use `--recurse-submodules` option during git clone, run `git submodule update --init`.

### Development Tools Utilized

-   [commitlint](https://commitlint.js.org) - Linter for commit messages
-   [ESLint](https://eslint.org/docs/v8.x/) - Typescript & React linter
-   [husky](https://typicode.github.io/husky/) - Auto runs linters upon committing
-   [lint-staged](https://github.com/lint-staged/lint-staged) - Runs linters on staged git files
-   [prettier](https://prettier.io/docs/en/) - Opinionated code formatter
-   [Tailwind CSS](https://tailwindcss.com/docs/installation) - Class based CSS framework
-   [Vite](https://vitejs.dev/) - Frontend developer environment tool
