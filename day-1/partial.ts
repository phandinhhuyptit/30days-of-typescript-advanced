type PartialClone<T> = {
  [P in keyof T]?: T[P];
};

// Example Partial
interface User {
  name: string;
  age: number;
  address: string;
}

const test : PartialClone<User> = {
    name : "Huy",
    age : 1,
}



