/*
  ### Question

  Implement the JavaScript `Array.includes` function in the type system. A type takes the two arguments. The output should be a boolean `true` or `false`.

  For example:

  ```ts
  type isPillarMen = Includes<['Kars', 'Esidisi', 'Wamuu', 'Santana'], 'Dio'> // expected to be `false`
  ```

  > View on GitHub: https://tsch.js.org/898
*/

type Equal<X, Y> = (<T>() => T extends X ? 1 : 2) extends <T>() => T extends Y
  ? 1
  : 2
  ? true
  : false;
// one way
type Includes<T extends readonly any[], U> = T extends [infer R1, ...infer R2]
  ? Equal<R1, U> extends true
    ? true
    : Includes<R2, U>
  : false;

// second way
type Includes2<T extends any[], U extends unknown> = U extends T[number]
  ? true
  : false;

type isPillarMen = Includes<["Kars", "Esidisi", "Wamuu", "Santana"], "Santana">;
type isPillarMen2 = Includes2<
  ["Kars", "Esidisi", "Wamuu", "Santana"],
  "Santana"
>;
