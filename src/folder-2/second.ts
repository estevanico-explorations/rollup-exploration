export interface Second {
  hey: string
  there: string
}

export const secondFn = (p1: string, p2: string): Second => {
  console.log('secondFn()', {
    p1, p2
  })

  return {
    hey: 'hey',
    there: 'butts'
  }
}