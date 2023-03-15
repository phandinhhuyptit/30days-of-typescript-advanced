/*
  ### Question

  Implement the built-in `Omit<T, K>` generic without using it.

  Constructs a type by picking all properties from `T` and then removing `K`

  For example

  ```ts
  interface Todo {
    title: string
    description: string
    completed: boolean
  }

  type TodoPreview = MyOmit<Todo, 'description' | 'title'>

  const todo: TodoPreview = {
    completed: false,
  }
  ```
*/


type MyOmit<T,K extends keyof T> = {
    [P in keyof T as P extends K ? never : P]: T[P]  
} 

interface Todo {
    title: string
    description: string
    completed: boolean
  }
  

 type  TOmit =  MyOmit<Todo, 'description'>