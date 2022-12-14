class Person {

}

// 类的作用:
// 1.可以创建类对应的实例对象
// 2.类的本身可以作为这个类的实例类型
// 3.类可以当做一个有构造签名的函数

const name: string = "aa"
const p: Person = new Person()
function printPerson(p: Person) {}

export {}