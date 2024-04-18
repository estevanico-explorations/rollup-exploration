interface First {
    lorem: string;
    ipsum: string;
}
declare const firstFn: (p1: string, p2: string) => First;

interface Second {
    hey: string;
    there: string;
}
declare const secondFn: (p1: string, p2: string) => Second;

declare const foo: () => Promise<string>;

export { type First, type Second, firstFn, foo, secondFn };
