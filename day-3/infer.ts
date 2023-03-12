type ArrayElementType<T> = T extends (infer E)[] ? E : T;

// type of item1 is `number`
type item1 = ArrayElementType<number[]>;
// type of item1 is `{name: string}`
type item2 = ArrayElementType<{ name: string }>;


const newPerson = { name: "Fred" };
const functionPerson = ( person : { name : string, age  : number } ) =>  10
type FunctionReturnType<T> = T extends (...args: any) => infer R ? R : T

type PersonType = FunctionReturnType<typeof functionPerson>


type ObjectType<T> = T extends { [key: string]: infer U } ? U : never;
type MyObject = ObjectType<{ name: string, age: number, object : { test : number , test2 : string } }>;