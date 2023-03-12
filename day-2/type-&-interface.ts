// what is different type alias and interface
// 1. the interface can't defin primitive type , tuple type and union type , it jutst define object and the type alias can define all them 
// 2. interface can declaration merging and type can't declaration merging 
interface Person {
  name: string;
  age: number;
}
interface Person {
  address: string;
}

type Person2 = {
  name: string;
  age: number;
};
type Person2 = {
  address: string;
};
const person: Person = {
  address: "Okie",
  age: 1,
  name: "John Cena",
};
