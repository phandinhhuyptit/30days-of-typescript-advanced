/*
  ### Question

  Implement the generic version of ```Array.push```

  For example:

  ```typescript
  type Result = Push<[1, 2], '3'> // [1, 2, '3']
  ```
*/


type Push<T extends any[], U> =  [...T,U]

type test = Push<[1, 2], '3'>