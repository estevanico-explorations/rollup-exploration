import { dts } from 'rollup-plugin-dts'
import { plugins, devRun } from './rollup-config/plugins.mjs'
import { common } from './rollup-config/common.mjs'
import { esm, esmTypes, cjs, cjsTypes } from './rollup-config/outputs.mjs'
import pkg from './package.json' assert { type: 'json' }

export default [
  common([devRun], esm),
  common([dts()], esmTypes),

  common([], cjs),
  common([], cjsTypes),
]

