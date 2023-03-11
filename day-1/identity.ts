function identity<T,U>(value : T, message : U) : T {
    console.log(message);
    return value;
}
identity<number,string>(2,"Hello world");
identity(2,2);
