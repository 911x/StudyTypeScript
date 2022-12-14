class Person {
  protected name: string
  private age: number

  constructor(name: string, age: number) {
    this.name = name
    this.age = age
  }

  // 方法变成私有方法时, 只能在类的内部才能访问
  private eating() {
    console.log("吃东西")
  }
}

const p = new Person("zxx", 18)
// console.log(p.name, p.age)

// 子类中不能访问私有属性或方法
class Student extends Person {
  constructor(name: string, age: number) {
    super(name, age)
  }

  studying() {
    // console.log("在学习", this.age)
  }
}