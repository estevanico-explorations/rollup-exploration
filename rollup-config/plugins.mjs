import run from '@rollup/plugin-run'
import typescript from '@rollup/plugin-typescript'
import nodeResolve from '@rollup/plugin-node-resolve'
import strip from '@rollup/plugin-strip'

const dev = process.env.ROLLUP_WATCH === 'true'

export const plugins = [
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
  }),
]

export const devRun = dev && run({ execArgv: ['-r', 'source-map-support/register'] })
