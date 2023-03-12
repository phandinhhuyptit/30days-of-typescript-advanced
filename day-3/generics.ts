type Get<T, U extends keyof T> = T[U];

type T5 = Get<{ foo: "what"; bar: "foo" }, "bar">;



type GetArrayValues<T extends Array<unknown>> = T extends Array<infer U>
  ? U
  : never;

type TestGetArrayValue = GetArrayValues<number[]>