// console.clear()
import { firstFn } from '@first/some-fn'
import { secondFn } from '@second/second'
// import { NODE_ENV } from 'process.env'

const a = firstFn('123', '123')
const b = secondFn('asd', 'asd')

console.log(a)
console.log(b)

export const foo = async () => {
  return await 'asd'
}

export { firstFn } from '@first/some-fn'
export { secondFn } from '@second/second'

export type { First } from '@first/some-fn'
export type { Second } from '@second/second'

export const VERSION = '[VI]Version: {version} - built on {date}[/VI]'
