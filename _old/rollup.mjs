import run from '@rollup/plugin-run'
import copy from 'rollup-plugin-copy'
import json from '@rollup/plugin-json'
import { dts } from 'rollup-plugin-dts'
import dotenv from 'rollup-plugin-dotenv'
import flatDts from 'rollup-plugin-flat-dts'
import commonjs from '@rollup/plugin-commonjs'
import typescript from '@rollup/plugin-typescript'
import nodeResolve from '@rollup/plugin-node-resolve'
import nodeExternals from 'rollup-plugin-node-externals'
import tsconfigPaths from 'rollup-plugin-tsconfig-paths'

// import eslint from '@rollup/plugin-eslint'
// import terser from '@rollup/plugin-terser'

const dev = process.env.ROLLUP_WATCH === 'true'

const plugins = [
  commonjs(),

  // Copy files from src to dist
  copy({
    // Ex:
    // targets: [
    //   { src: 'src/config', dest: 'dist' },
    // ],
  }),

  // Transpile TypeScript to JavaScript
  typescript(
    {
      tsconfig: 'tsconfig.json',
      module: 'ESNext',

      // inlineDynamicImports: true,

      isolatedModules: true,
      inlineSources: true,
      inlineSourceMap: false,
      // declaration: true,
      // declarationMap: true,
    }
  ),

  // Resolve node_modules
  nodeResolve({
    extensions: ['.ts', '.js'],
    preferBuiltins: true,
  }),

  // Lint TypeScript files
  // eslint({
  //   fix: true,
  //   throwOnError: true,
  //   throwOnWarning: false,
  //   include: ['src/**/*.ts'],
  //   exclude: ['node_modules/**', 'dist/**'],
  // }),
  // Terser
  // terser(),
  // Parse JSON files
  json(),

  // Load environment variables
  dotenv(),

  // dts(),

  // 
  // flatDts(),

  // Run the application in watch mode if run with the watch flag
  dev && run(
    {
      execArgv: ['-r', 'source-map-support/register'],
    }
  ),
]

export default {
  input: ['src/index.ts'],
  externals: [nodeExternals()],
  resolve: {
    plugins: [tsconfigPaths({ tsConfigPath: './tsconfig.json' })]
  },
  plugins,

  // [
  //   { file: 'dist/index.esm.js', format: 'esm' },
  //   { file: 'dist/index.cjs', format: 'cjs' }
  // ]

  output: [
    {
      file: '.dist/esm/index.js',
      format: 'es',
      sourcemap: true,
      // intro: '// HEADER',
      // outro: '// FOOTER',
    },
    // {
    //   file: '.dist/cjs/index.cjs',
    //   format: 'cjs',
    //   sourcemap: true,
    // },
  ]
}