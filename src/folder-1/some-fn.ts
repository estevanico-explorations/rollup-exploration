export interface First {
  lorem: string
  ipsum: string
}

export const firstFn = (p1: string, p2: string): First => {
  console.log('firstFn()', {
    p1, p2
  })

  return {
    lorem: 'foo',
    ipsum: 'bar',
  }
}
