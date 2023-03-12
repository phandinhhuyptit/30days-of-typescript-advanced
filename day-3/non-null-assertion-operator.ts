let nullable1: null | number;
let nullable2: undefined | string;

let foo  = nullable1! // type foo: number
let fooz = nullable2! // type fooz: string


