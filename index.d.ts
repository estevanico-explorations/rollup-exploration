declare module "rollup-exploration" {
    export interface First {
        lorem: string;
        ipsum: string;
    }
    export const firstFn: (p1: string, p2: string) => First;
}

declare module "rollup-exploration" {
    export interface Second {
        hey: string;
        there: string;
    }
    export const secondFn: (p1: string, p2: string) => Second;
}
