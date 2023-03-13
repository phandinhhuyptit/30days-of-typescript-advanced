type PartialByKeys<T, K extends keyof T> = {
  [P in K]?: T[P];
} & Pick<T, Exclude<keyof T, K>>;

type U1 = {
    id : string
    name : string
    age : number
}

type Simplify<T> = {
    [P in keyof T] : T[P]
}

type TU1 = Simplify<PartialByKeys<U1, "id">>


type U2 = {
    id? : string
    name? : string
    age? : number
}

type RequiredByKeys<T,K extends keyof T> = {
     [P in K]-?: T[P]   
} & Pick<T, Exclude<keyof T, K >> 

type TU2 = Simplify<RequiredByKeys<U2,"id">> 
