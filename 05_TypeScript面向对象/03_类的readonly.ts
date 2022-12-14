class Person {
  readonly name: string
  age: number

  constructor(name: string, age: number) {
    this.name = name
    this.age = age
  }
}

const p = new Person("coderzxx", 18)

console.log(p.name, p.age)

// 只读属性不能被写入
// p.name = "哈哈哈"
p.age = 22

export {}