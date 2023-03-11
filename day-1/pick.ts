type PickClone<T, K extends keyof T> = {
  [P in K]: T[P];
};

interface User {
  name: string;
  age: number;
  address: string;
}

const user: PickClone<User, "address" | "age"> = {
  address: "1234",
  age: 1,
};
const user2: PickClone<User, "address" | "age"> = {
    address: "1234",
    age: 1,
    name: "hello",
  };
  
