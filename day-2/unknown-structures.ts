// one way
interface UserTest {
  [key: string]: string;
}

const userTest: UserTest = {};

// second way
interface UserTest2 {
  [key: string]: string | number | boolean | bigint;
}
type Types = string | number | boolean | bigint;

type RecordUser = Record<string, UserTest2 | Types>;

const userTest2: RecordUser = {};

userTest2.test = "1234";
userTest2.data = {};
