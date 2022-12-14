
interface Person {
  name: string
  age: number
}

type personKyes = keyof Person // "name" | "age" 联合类型


// 获取一个对象给定属性名的值
// <O, K extends keyof O>: 需要确保不会获取obj上不存在的属性
function getObjectProperty<O, K extends keyof O>(obj: O, key: K) {
  return obj[key]
}

const info = {
  name: "coderzxx",
  age: 18,
  height: 1.88
}

const name = getObjectProperty(info, "age")

export {}