import { dts } from 'rollup-plugin-dts'
import commonjs from '@rollup/plugin-commonjs'
import shebang from 'rollup-plugin-shebang-bin'

import { common } from './rollup-config/common.mjs'
import { devRun } from './rollup-config/plugins.mjs'
import { esm, esmTypes, cjs, cjsTypes, scripts } from './rollup-config/outputs.mjs'
// import pkg from './package.json' assert { type: 'json' }

export default [
  // ES JS
  common([devRun], esm),
  common([dts()], esmTypes),

  // CommonJS
  common([commonjs()], cjs),
  common([], cjsTypes),

  // Shell Scripts (should not be it's own thing)
  // common([shebang({
  //   insert: true,
  // })], scripts),
]

