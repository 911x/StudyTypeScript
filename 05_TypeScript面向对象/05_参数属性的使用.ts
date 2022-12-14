// class Person {
//   name: string
//   age: number
//   height: number

//   constructor(name: string, age: number, height: number) {
//     this.name = name
//     this.age = age
//     this.height = height
//   }
// }

class Person {

  // 语法糖写法
  constructor(public name: string, public age: number, public height: number) {
    this.name = name
    this.age = age
    this.height = height
  }
}

const p = new Person("coderzxx", 18, 1.88)
console.log(p.name, p.age, p.height)

export {}