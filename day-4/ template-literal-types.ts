type EventName<T extends string> = `${T}-change`;
type TEvent = EventName<"prefix">;

type concat<T extends string, U extends string> = `${T}-${U}`;

type TContant = concat<"Hello", "World">;

type Cases<T extends string> =
  `${Uppercase<T>} - ${Lowercase<T>} - ${Capitalize<T>} ${Uncapitalize<T>}`;
type TCases = Cases<"hello">;

type Alignment = "start" | "end";

type InferSide<T> = T extends `${infer R}-${Alignment}` ? R : T;

type TInferSide = InferSide<"top-start">;

type Student = {
  name: "Potter";
  age: "10";
  grade: 5;
};

type Getters<T> = {
  [K in keyof T as `get${Capitalize<string & K>}`]: () => T[K];
};
type LazyStudent = Getters<Student>;

type PropType<T, Path extends string> = string extends Path
  ? unknown
  : Path extends keyof T
  ? T[Path]
  : Path extends `${infer K}.${infer R}`
  ? K extends keyof T
    ? PropType<T[K], R>
    : unknown
  : unknown;

declare function getPropValue<T, P extends string>(
  obj: T,
  path: P
): PropType<T, P>;

const obj = {
  a: "123",
  b: { c: { d: "Huy" } },
};
const a = getPropValue(obj, "b");
