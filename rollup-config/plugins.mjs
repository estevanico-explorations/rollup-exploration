import ver from 'rollup-plugin-version-injector';
import run from '@rollup/plugin-run'
import typescript from '@rollup/plugin-typescript'
import nodeResolve from '@rollup/plugin-node-resolve'
// import bakedEnv from 'rollup-plugin-baked-env'

// Output manipulation
import strip from '@rollup/plugin-strip'

// Paperwork
import license from 'rollup-plugin-license'
import clear from 'rollup-plugin-clear'
import del from 'rollup-plugin-delete'

const dev = process.env.ROLLUP_WATCH === 'true'

export const plugins = [
  // bakedEnv({
  //   NODE_ENV: 'DEVELOPMENT',
  // }),

  // https://github.com/rollup/plugins/tree/master/packages/typescript
  typescript({
    tsconfig: 'tsconfig.json',
    isolatedModules: true,
    inlineSources: true,
    inlineSourceMap: false,
  }),

  // Resolve node_modules
  nodeResolve({
    extensions: ['.mjs', '.js', '.json', '.node', '.ts'],
    preferBuiltins: true,
  }),

  // Only run this on production builds.
  strip({
    include: '**/*.(mjs|js|ts)',
    functions: ['console.log', 'console.clear'],
  }),

  ver(),

  del({
    targets: [ '.dist/*' ],
    verbose: true,
    runOnce: true,
  }),

  // clear({
  //   // required, point out which directories should be clear.
  //   targets: ['.dist/*'],
  //   watch: true,
  // })

  // https://github.com/mjeanroy/rollup-plugin-license
  license({
    sourcemap: true,
    cwd: process.cwd(),
    banner: {
      commentStyle: 'regular',
      content: {
        file: './LICENSE',
        encoding: 'utf-8',
      },
    },
  }),
]

export const devRun = dev && run({ execArgv: ['-r', 'source-map-support/register'] })
