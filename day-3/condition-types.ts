// Pick Properties
type PickProperties<T, U> = {
    [K in keyof T] : T[K] extends U ? K : never
}[keyof T];

type TestPickPros = PickProperties<{name : string , age : number }, string | number>


/**
 * Exclude
 * 
 * @example
 *
 * 
 */

type ExcludeClone<T, U> = T extends U ? never : T 
type T0 = ExcludeClone<"a" | "b" | "c", "a" |"b">


/**
 * Extract
 *  
 * @example
 * 
 */
type ExtractClone<T,U> =   T extends U ? T : never 
type T1 = ExtractClone<"a" | "b" | "c", "a" |"b">


/**
 * NonNullaBle
 *  
 * @example
 * 
 */

type NonNullaBleClone<T> = T extends null | undefined ? never : T; 
type T2 = NonNullaBleClone<string>

/**
 * Parametes
 *  
 * @example
 * 
 */

type ParametersClone<T extends (...args: any) => any>  = T extends  (...args: infer P) => any ? P : never
type T3 = ParametersClone<(name : string , price :  number) => string >


