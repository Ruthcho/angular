# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Change Approval Workflow (mandatory)

Before modifying any existing file, present the planned change to the user in the chat and wait for explicit approval:

1. Show **what will be deleted** — quote the exact current lines/code being removed.
2. Show **what will be added** — quote the exact replacement code.
3. Ask for confirmation and stop. Do not call Edit/Write until the user approves.

Reading files, running builds and tests, and answering questions do not require approval. Creating brand-new files is still a code change — describe them first in the same way.

## Commands

```bash
npm start                 # ng serve — dev server on http://localhost:4200
npm run build             # ng build (production config by default)
npm run watch             # ng build --watch --configuration development
npm test                  # ng test — Vitest (@angular/build:unit-test builder)
npm run ng -- generate component <name>   # scaffold; ng is not installed globally
```

Run a single spec with Vitest directly, e.g. `npx vitest run src/app/<name>.spec.ts`. Note that `@angular/build:unit-test` also supports `ng test --include <glob>`.

Build and dev-server use the `@angular/build` (esbuild-based) builders, not the legacy webpack ones. Production budgets: initial 500 kB warn / 1 MB error, component styles 4 kB warn / 8 kB error.

Prettier is configured via `.prettierrc`; there is no lint script.

## Architecture

Angular 22 standalone application (no NgModules), bootstrapped from [src/main.ts](src/main.ts) with `bootstrapApplication` and `appConfig` from [src/app/app.config.ts](src/app/app.config.ts) (currently only `provideRouter`).

- **Root component:** `DirectionComponent` in [src/app/direction.component.ts](src/app/direction.component.ts). It declares `selector: 'app-root'` and is the component bootstrapped in `main.ts` — [src/index.html](src/index.html) hosts `<app-root>`. There is no separate `AppComponent`; the default CLI `app.*` files were renamed/moved to the `direction.component.*` set and `main.ts` must import the bootstrap component from that path.
- **Component files:** `direction.component.ts` + `.html` + `.css`, referenced by `templateUrl`/`styleUrl`. Any new component follows the same split; file names must match the imports or the build fails.
- **Model:** [src/app/item.ts](src/app/item.ts) holds the `Test` interface (`subject`, `score`); the component owns a `Test[]` and derives `average` in a getter.
- **Templates** use the built-in control flow (`@for`/`@empty`, `track`), not `*ngFor`. Imports such as `FormsModule`/`RouterOutlet` must be added to the component's `imports` array only when used.
- **Routing:** [src/app/app.routes.ts](src/app/app.routes.ts) is empty; the router is wired but unused so far.
- **Styles:** global `src/styles.css` (registered in `angular.json`), static assets from `public/`.
- **Tests:** Vitest with `vitest/globals` types (see `tsconfig.spec.json`), Playwright browser provider available; `*.spec.ts` next to source files.

## Constraints

- Codebase targets strict TypeScript settings (`noImplicitReturns`, `noPropertyAccessFromIndexSignature`, `strictInputAccessModifiers`, etc.).
- Sample/demo data uses placeholder content (e.g. `מקצוע 1`, `Item 1`); real content is supplied by the user. UI text is Hebrew — keep `dir`/alignment handling RTL-friendly.
