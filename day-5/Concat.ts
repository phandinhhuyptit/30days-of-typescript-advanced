/*
  ### Question

  Implement the JavaScript `Array.concat` function in the type system. A type takes the two arguments. The output should be a new array that includes inputs in ltr order

  For example:

  ```ts
  type Result = Concat<[1], [2]> // expected to be [1, 2]
  ```

  > View on GitHub: https://tsch.js.org/533
*/

type Concat<T extends any[], U extends any[]> = [...T, ...U];
type TConcat = Concat<[1, 2, 3, 4], [1, 2, 3, 4]>;
const test : TConcat = [1]
