// 1.函数类型表达式写法(只能表示这是一个函数)
type fooType = (num1: number) => number 
const foo: fooType= (num1: number): number => {
  return 123
}

// 2.函数的调用签名(从对象的角度来看待这个函数, 这个函数也可以有其他属性)
interface Ibar {
  name: string,
  age: number,
  // (参数列表): 返回值
  (num1: number): number // 表示函数可以调用, 函数调用签名
}

const bar: Ibar = (num1: number): number => {
  return 123
}

bar.name = "coderzxx"
bar.age = 18
bar(100)

export {}