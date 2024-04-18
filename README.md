# `RollupJS` Exploration
- [`RollupJS` Exploration](#rollupjs-exploration)
  - [Paths](#paths)
    - [TypeScript Setup](#typescript-setup)
      - [Expectations](#expectations)
    - [Plugin Development](#plugin-development)
  - [Optional Ideas](#optional-ideas)
    - [Template Generator](#template-generator)
    - [Publish?](#publish)
  - [Reference Repos / Articles](#reference-repos--articles)

An example repo where I plan to explore 2 main paths and some other ideas I want to try out.

## Paths
### TypeScript Setup
I'm thinking of this sort of like a template to use to make other `TypeScript` powered libraries using `Rollup`.

#### Expectations
- Uses path aliases
- Compilation
  - Source to single file
  - Source maps (unless production)
  - Single type definiation file
  - Optionally export a shell script alongside source
- General configurations
  - Add a `LICENSE` file to header
  - Remove all comments & `console.log` statements
  - Handles peer deps
- Outputs
  - ES
  - CommonJS
  - Must test in a different page to confirm
    - i.e. something in an `app/` directory in a macro repo
  - Create a secondary package that contains the least amount of stuff in it and compress it to a single file (`zip`)
- Development
  - Watches code changes
    - Without `nodemon`
- Rollup config that ISN'T IN the source directory
  - Any config that does exist is merged with the automatically provided config 

### Plugin Development
- Auto generates imports for output
  - i.e. No `index.ts` file required
    - If one is provided then it overrides the default code
  - Respects function comment to ignore in the default export; defaults to public
    - i.e. `@@private`, `@@overlook`, `@@dismiss`, `@@noemit`

## Optional Ideas
### Template Generator
Create a generator using whatever template library to create a plugin using my above configurations & requirements to disk. Think [Yeoman](https://yeoman.io/)

### Publish?
I dunno, if the plugin works as I'd like perhaps publish the plugin maybe?

## Reference Repos / Articles
- https://github.com/thiswallz/rollup-react-starter-lib-ts
- https://github.com/rollup/plugins/tree/master/packages/typescript
- https://github.com/rollup/awesome
- https://www.thisdot.co/blog/how-to-setup-a-typescript-project-using-rollup-js
- https://nimesh-poudel.medium.com/building-web-sdks-and-libraries-bundle-with-rollup-in-typescript-or-javascript-a-step-by-step-284a3d261f79
- https://github.com/acrazing/dpdm?tab=readme-ov-file
- https://github.com/import-js/eslint-plugin-import/blob/main/docs/rules/no-cycle.md
- https://blog.lmerza.com/2023/10/05/building-your-own-npm-library-using-rollup-and-typescript/
- https://www.dhiwise.com/post/a-comprehensive-guide-to-the-rollup-plugin-typescript2
- https://medium.com/@chenjianfeng9335/a-comprehensive-guide-to-building-your-own-rollup-enabled-typescript-library-template-cd063dbf532
- https://github.com/saitoChen/rollup-tslib-template
- https://github.com/jate-koh/ts-rollup
- https://github.com/repalash/rollup-library-starter
- https://github.com/remahmoud/rollup-ts-react-lib/blob/main/rollup.config.mjs
- https://github.com/zollero/rollup-typescript-starter-lib/blob/master/rollup.config.js