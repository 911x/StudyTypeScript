interface Person {
  name: string,
  age: number,
  height: number
}

// 奇怪现象一: 
const xin: Person = {
  name: "zxx",
  age: 18,
  height: 1.88,

  // 不能额外添加一个属性
  // address: "北京"
}

// 但是将对象先保存到另一个对象内再赋值过去就不会报错
const obj = {
  name: "zxx",
  age: 18,
  height: 1.88,
  address: "北京市"
}

const xin2: Person = obj

// 奇怪现象二:
function printInfo(person: Person) {}

// printInfo({ name: "coderzxx", age: 11, height: 1.11, address: "北京市"}) // 会报错

const obj2 = {
  name: "coderzxx",
  age: 11,
  height: 1.11,
  address: "北京市"
}

printInfo(obj2)

// 解释现象: 
// 第一次创建的对象字面量, 称之为fresh(新鲜的)
// 对于新鲜的字面量,会进行严格的类型检测,必须完全满足类型的要求(不能有多余的属性)
