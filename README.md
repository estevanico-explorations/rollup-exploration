# `RollupJS` Exploration
- [`RollupJS` Exploration](#rollupjs-exploration)
  - [Paths](#paths)
    - [TypeScript Setup](#typescript-setup)
      - [Expectations](#expectations)
    - [Plugin Development](#plugin-development)
  - [Optional Ideas](#optional-ideas)
    - [Template Generator](#template-generator)
    - [Publish?](#publish)
  - [Useful Plugins](#useful-plugins)
  - [Reference Repos / Articles](#reference-repos--articles)
  - [TODO](#todo)

An example repo where I plan to explore 2 main paths and some other ideas I want to try out.

## Paths
### TypeScript Setup
I'm thinking of this sort of like a template to use to make other `TypeScript` powered libraries using `Rollup`.

#### Expectations
- [x] Uses path aliases
- [ ] Compilation
  - [x] Source to single file
  - [x] Source maps (unless production)
  - [x] Single type definiation file
  - [ ] Optionally export a shell script alongside source
- General configurations
  - [x] Add a `LICENSE` file to header
  - [x] Remove all comments & `console.log` statements
  - [ ] Handles peer deps
- Outputs
  - [x] ES
  - [x] CommonJS
  - [ ] Must test in a different page to confirm
    - i.e. something in an `app/` directory in a macro repo
  - [ ] Create a secondary package that contains the least amount of stuff in it and compress it to a single file (`zip`)
- Development
  - [x] Watches code changes
    - [x] Without `nodemon`
- [ ] Rollup config that ISN'T IN the source directory
  - [ ] Any config that does exist is merged with the automatically provided config 

### Plugin Development
- Auto generates imports for output
  - i.e. No `index.ts` file required
    - If one is provided then it overrides the default code
  - Respects function comment to ignore in the default export; defaults to public
    - i.e. `@@private`, `@@overlook`, `@@dismiss`, `@@noemit`

## Optional Ideas
### Template Generator
Create a generator using whatever template library to create a plugin using my above configurations & requirements to disk. Think [Yeoman](https://yeoman.io/)

Some interesting packages to look into
- [Yellicode](https://www.yellicode.com/docs/quickstart/)
- [Automating boilerplate code generation](https://dev.to/kapantzak/automating-boilerplate-code-generation-with-node-js-and-handlebars-2c09)
- [Node JS Code Generator](https://dev.to/gokulnathp/boost-your-productivity-with-a-node-js-code-generator-51mk)
  - [GokulnathP/code-generator](https://github.com/GokulnathP/code-generator)
- [jondot/hygen](https://github.com/jondot/hygen)
- [Simple Scaffold](https://chenasraf.github.io/simple-scaffold/) 
  - [chenasraf/simple-scaffold](https://github.com/chenasraf/simple-scaffold)
  - Can it do full projects? (multiple pages & directories)
- [lbagic/scaffold](https://github.com/lbagic/scaffold)

### Publish?
I dunno, if the plugin works as I'd like perhaps publish the plugin maybe?

## Useful Plugins
Where I found them all: [rollup/awesome: ⚡️](https://github.com/rollup/awesome?tab=readme-ov-file)

- https://github.com/developit/rollup-plugin-preserve-shebang
- https://github.com/rollup/plugins/tree/master/packages/alias
- https://github.com/rollup/plugins/tree/master/packages/eslint
- https://github.com/rollup/plugins/tree/master/packages/image
- https://github.com/rollup/plugins/tree/master/packages/yaml
  - Interested to see how this works in VSCode
- https://github.com/rollup/plugins/tree/master/packages/run
- https://github.com/rollup/plugins/tree/master/packages/replace
- https://github.com/doesdev/rollup-plugin-analyzer
- https://github.com/thgh/rollup-plugin-serve
  - I wonder if this would be like an "app" type of thing 🤔
- https://github.com/ondras/rollup-plugin-graph
- https://github.com/victornpb/rollup-plugin-baked-env
- https://github.com/mentaljam/rollup-plugin-zip
- https://github.com/djhouseknecht/rollup-plugin-version-injector
- https://github.com/sebastian-software/rollup-plugin-rebase
- https://github.com/mjeanroy/rollup-plugin-prettier
- https://github.com/thgh/rollup-plugin-livereload
- https://github.com/mjeanroy/rollup-plugin-license
- https://github.com/juliendargelos/rollup-plugin-html-minifier
- https://github.com/phamann/rollup-plugin-hash
- https://github.com/vladshcherbin/rollup-plugin-delete
- https://github.com/TrickyPi/rollup-copy-smartly
- https://github.com/vladshcherbin/rollup-plugin-copy
- https://github.com/sheltondong/rollup-plugin-clear
- https://github.com/pschroen/rollup-plugin-bundleutils
- https://github.com/yingye/rollup-plugin-banner
  - Can do with `intro: ''`
- https://github.com/wessberg/rollup-plugin-ts
- 

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
- https://miguelcrespo.co/posts/my-notes-of-how-to-compile-a-typescript-library
- https://github.com/repalash/rollup-library-starter/blob/master/rollup.config.mjs
- https://rollupjs.org/configuration-options/#no-side-effects


## TODO
- Production configs
- development configs
- ~~Add a banner~~
- ~~Support versioning~~
- support bin files
- Write a rollup runner that uses it's own configs and no those stored within the codebase
- that auto injector plugin
- a minifier of some sort
- play more with exported types
- a special manifest type of thing
- what types of watch modes are really nessessary?
- metrics & observability
