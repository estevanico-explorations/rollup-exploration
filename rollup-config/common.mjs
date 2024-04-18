import nodeExternals from 'rollup-plugin-node-externals'
import tsconfigPaths from 'rollup-plugin-tsconfig-paths'
import { plugins } from './plugins.mjs'

export const common = (plugOpts, output) => ({
  input: './src/index.ts',
  externals: [nodeExternals()],
  resolve: {
    plugins: [tsconfigPaths({ tsConfigPath: '../tsconfig.json' })]
  },

  plugins: [
    ...plugins,
    ...plugOpts,
  ],

  output: [output]
})
