// 定义函数, 将传入的内容返回
// function bar(arg: number | string | { name: string }) {
//   return arg
// }

function bar<Type>(arg: Type): Type {
  return arg
}

// 完整的写法
const res = bar<number>(100)
const res2 = bar<string>("哈哈哈")
const res3 = bar<{name: string}>({ name: "coderzxx" })

// 省略写法
const res4 = bar(1000)
const res5 = bar("嘿嘿嘿")