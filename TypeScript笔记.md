## 1.安装ts

```js
npm install typescript -g // 全局安装ts
```

## 2.ts的快速运行环境的搭建

```js
 
const path = require("path")
const HtmlWebpackPlugin = require("html-webpack-plugin")

module.exports = {
  mode: "development",
  entry: "./src/index.ts",
  output: {
    path: path.resolve(__dirname, "./dist"),
    filename: "bundle.js"
  },
  resolve: {
    extensions: [".ts", ".js", ".cjs", ".json"]
  },

  module: {
    rules: [
      {
        test: /\.ts$/,
        loader: "ts-loader"
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./index.html"
    })
  ],
  devServer: {

  }

}
```

```js
2.通过ts-node 

下载ts-node和其他依赖包
npm install ts-node -g
npm install tslib @types/node -g
```

## 3.标识符的类型注解

```ts
// 定义标识符
let username: string = "coderzxx"
let age: number = 18

// username = 18
username = "kobe"

export {}
```

## 4.标识符的类型推导

```ts
// 声明一个标识符时, 如果有直接进行赋值, 那么会根据所赋值的类型自动推导出标识符的类型注解, 这个过程就成为类型推导
// let在进行类型推导时, 推导出来的都是通用数据类型
let username = "coderzxx"

// username = 18 报错
username = "xin"

// const在进行类型推导时, 推导出来的都是字面量类型
const age = 18

const hello: "Hello" = "Hello"
```

## 5.TypeScript中的数据类型

### Array

```js

// string[]: 表示是数组类型, 并且数组中存放的都是字符串类型
let names: string[] = ["coderzxx", "coderwhy", "kobe"]

// Array<T>: 泛型
// Array<number>: 表示是数组类型, 并且数组中存放的都是数字类型
let ages: Array<number> = [18, 21, 99]

```

### Object

```ts

// let info: object = {
//   username: "coderzxx",
//   age: 18
// }
 
// console.log(info.username) // 拿不到username
// console.log(info.age) // 拿不到age

let info: {
  username: string,
  age: number,
  height: number
} = {
  username: "coderzxx",
  age: 18,
  height: 1.88
}

console.log(info.username)
console.log(info.age)
console.log(info.height)
```

### 函数参数类型

```ts

// 在定义一个TypeScript中的函数时,需要明确的指定参数的类型
function sum(num1: number, num2: number) {
  return num1 + num2
}

console.log(sum(10, 20))
```

### 函数返回值类型

```ts

// 函数的返回值类型可以明确的指定, 也可以自动进行类型推导
function sum(num1: number, num2: number):number {
  return num1 + num2
}

console.log(sum(10, 20))

export {}
```

### 匿名函数的的参数类型

```ts

const names = ["zxx", "why", "jay"]

// 匿名函数最好不要添加类型注解, 因为TS会根据forEach函数的类型以及数组的类型推断出item的类型
// 这个过程称之为上下文类型, 因为函数执行的上下文可以帮助我们确定参数的返回值是什么类型
names.forEach(function(item, index, arr) {
  console.log(typeof item)
})
```

### 对象类型/函数类型/可选属性

```ts

// 对象类型和函数类型结合使用
// function pointCoordinate(point: {x :number, y :number}) {
//   console.log("x坐标:", point.x)
//   console.log("y坐标:", point.y)
// }

// pointCoordinate({ x: 20, y: 30})

// type: 声明
type pointType = {
  x: number,
  y: number,
  z?: number // ?: 可选类型
}

function pointCoordinate(point: pointType) {
  console.log("x坐标:", point.x)
  console.log("y坐标:", point.y)
  console.log("z坐标:", point.z)
}

pointCoordinate({ x: 20, y: 30})
pointCoordinate({ x: 30, y: 50, z: 100})
```

### any类型

```ts

// 在某些情况下,无法确定一个变量的类型时,并且它可能会发生一些变化,这时可以使用any类型
// 设置为any类型后, 可以对any类型的变量进行任何的操作, 包括获取本不存在的属性或方法
// any类型的变量可以被赋值为任何的值
let message: any = "hello"

message = "aaa"

message = 123

message = {}

message = []
```

### unknown类型

```ts

// nuknown: TS中一种特殊的类型, 用于描述类型不确定的变量
let message: unknown = "hello"

message = 123

// 默认对unknown类型的变量进行操作都是非法的
// console.log(message.length) //Object is of type 'unknown'

// 对unknown类型操作之前,要求必须要进行类型的校验(缩小),才能根据缩小之后的类型进行对应的操作
// 类型缩小
if(typeof message === 'string') {
  console.log(message.length)
}
```

### void类型

```ts
// void: 通常用来指定一个函数是没有返回值的, 那么他的类型就是void类型

// 这个函数我们没有写任何类型, 那么它的默认返回值类型就是void
// function sum(num1 :number, num2 :number) {
//   console.log(num1 + num2)
// }

// 也可以显示的来指定返回值是void
// function sum(num1 :number, num2 :number) :void {
//   console.log(num1 + num2)
// }

// 注意事项: 如果返回值是void类型, 可以返回undefined 也就是说, TS编译器允许这样做
function sum(num1 :number, num2 :number) :void {
  console.log(num1 + num2)
  return undefined
}

sum(10, 20)

```

### never类型

```ts


// 封装框架或工具时, 可以使用下never
function handelMessage(message: string | number | boolean) {

  switch(typeof message) {
    case "string":
    console.log(message.length)
    break

    case "number":
    console.log(message)
    break

    case "boolean": 
    console.log(Number(message))
    break

    default: 
    const check: never = message 
  }
}

handelMessage("aaa")
```

### tuple元组类型

```ts

// 数组保存信息
const info1: any[] = ["xin", 18, 1.88]

// 对象保存信息
const info2 = {
  name: "xin",
  age: 18,
  height: 1.88
}

// tuple: 元组类型
// 元组中的每个元素都有自己特性的类型, 根据索引值获取到的值可以确定所对应的类型
let info3: [string, number, number] = ["xin", 18, 1.88]
console.log(info3[0])


// 元组类型通常可以作为函数的返回值
function useState(initiaState: number): [number, (newValue: number) => void] {
  let stateValue = initiaState

  function setValue(newValue: number) {
    stateValue = newValue
  }

  return [stateValue, setValue]
}

const [count, setCount] = useState(100)
console.log(count)
setCount(1000)
```

## 6.ts细节

### 联合类型

```ts
// 联合类型的基本使用
const demo: number | string = "123"

if(typeof demo === "string") {
  console.log(demo.length)
}

// 例子: 用户的id可能是数字类型或字符串类型, 如果是字符串类型打印id的长度, 如果是数字类型原样打印
function printId(id: number | string) {

  console.log("你的id:", id)

  if(typeof id === "string") {
    console.log(id.length)
  }else {
    console.log(id)
  }
}

printId(123)
printId("9991131")
```

### 类型别名

```ts
// 类型别名的基本使用
type ageType = number
let age: ageType = 18

type idType = number | string
function printId(id: idType) {
  console.log(id)
}

// 打印坐标
type pointType = {x: number, y: number, z?: number}
function printCoordinate(point: pointType) {
  console.log(point.x, point.y, point.z)
}
```

### 接口的基本使用

```ts
// 总结: 类型别名和接口非常相似, 在定义对象类型时, 可以任意选择使用, 接口的所有特性几乎都可以在type中使用

// type声明对象
type pointType = {
  x: number
  y: number
  z: number
}

// 使用接口声明
interface Ipoint {
  x: number,
  y: number,
}

function printCoordinate(point: Ipoint) {
  
}
```

### 类型别名type和接口Interface的区别

```ts
// 区别一: 类型别名的适用范围更宽广, 接口类型只能用来声明对象
type ageType = number
type idType = string | number

// type不允许两个相同的别名同时存在
// type pointType1 = {
//   x: number
//   y: number
// }

// type pointType1 = {
//   z: number
// }

// 区别二: interface可以重复的对某个接口来定义属性和方法
interface pointType2 {
  x: number,
  y: number
}

interface pointType2 {
  z: number
}

const point: pointType2 = {
  x: 100,
  y: 200,
  z: 300
}

// 区别三: interface支持继承
interface Iperson {
  name: string,
  age: number
}

interface Ikun extends Iperson {
  height: number,
  kouhao: string
}

const admin: Ikun = {
  name: "蔡徐坤",
  age: 18,
  height: 1.88,
  kouhao: "你干嘛,嘿嘿,哎呦"
}

// 区别四: interface可以被类实现
// class Person implements Iperson {

// }

// 总结: 如果是对象类型的声明使用interface, 非对象类型的声明使用type
```

### 交叉类型

```ts
// 交叉类型: 两种或多种类型要同时满足

type ageType = string & number // 没有意义

interface Info {
  name: string,
  age: number,
  height: number
}

interface Hobby {
  game: string,
  eat: () => void,
  coding: () => void
}

type infoType = Info & Hobby

const my: infoType = {
  name: "coderzxx",
  age: 18,
  height: 1.88,
  game: "英雄联盟",
  
  eat() {
    console.log("我爱吃鱼香肉丝")
  },
  coding() {
    console.log("正在疯狂的敲代码")
  }
}

// 总结: 在开发中,通常是对对象类型进行交叉的
```

### 类型断言

```ts

// 有时TS无法获取具体的类型信息, 这时需要使用类型断言
// 比如通过doucment.getElementById, TS只知道该函数会返回HTMLElement,但并不知道它具体的类型

const imgEl = document.getElementById("img") as HTMLImageElement

// 使用类型缩小
// if(imgEl !== null) {
//   imgEl.src = "图片地址"
// }

imgEl.src = "图片地址"

// TS只允许类型断言转换为更具体, 或者不太具体的类型版本, 此规则防止不可能的强制转换
let name: string = "coderzxx" 
const name2 = name as any
const name3 = name2 as string
```

### 非空类型断言

```ts

interface Perosn {
  name: string,
  age: number,
  height: number,
  firend?: {
    name: string,
  }
}

const info: Perosn = {
  name: "coderzxx",
  age: 18,
  height: 1.88
}

// 可选链
console.log(info.firend?.name)

// 类型缩小
if(info.firend) {
  info.firend.name = "xin"
}

// 非空类型断言
info.firend!.name = "kobe"

// 非空类型断言 !: 表示可以确定某个标识符是有值的, ts在编译阶段会跳过对使用了非空类型断言的数据进行检测
```

### 字面量类型

```ts

// 1.字面量类型的基本使用
const name: "coderzxx" = "coderzxx"

// 2.可以将多个字面量类型联合起来
type driection = "top" | "bottom" | "left" | "right"
const d1: driection = "top"

// 例子: 封装请求方法
type methodType = "GET" | "POST"
function reqeust(url: string, method: methodType) {

}

reqeust("https://www.baidu.com", "POST")

// TS的细节
// const info = {
//   url: "https://www.jd.com",
//   method: "POST"
// }

// 错误的做法, info.method取到的是string类型
// reqeust(info.url, info.method)

// 解决方案一: 对info.method进行类型断言
// reqeust(info.url, info.method as "POST")

// 解决方案二: 直接让info对象的类型是一个字面量类型, 这样info.method表示的就是里面的值("POST")
const info = {
  url: "https://www.jd.com",
  method: "POST"
} as const

reqeust(info.url, info.method)
```

### 类型缩小

```ts
// typeof: 使用最多
function printId(id: string | number) {
  if(typeof id === "string") {
    console.log(id.length, id.split(" "))
  }else {
    console.log(id)
  }
}

// ===/!==: 方向的类型判断
type driection = "top" | "bottom" | "left" | "right"
function switchDriection(driection: driection) {
  if(driection === "top") {
    console.log("角色向上移动")
  }else if(driection === "bottom") {
    console.log("角色向下移动")
  }else if(driection === "left") {
    console.log("角色向左移动")
  }else if(driection === "right") {
    console.log("角色向右移动")
  }
}

// instanceof: 传入一个日期, 打印日期
function printDate(date: string | Date) {
  // 判断传入的data是不是Date对象的实例, 如果为true,表示是Date对象的实例
  if(date instanceof Date) {
    console.log(date.getTime())
  }else {
    console.log(date)
  }
}

// in: 用于判断对象是否具有某个属性, 如果指定的属性在指定的对象或其的原型链中, 则in运算符会返回true
// 判断时候有某个属性
interface swim {
  swim: () => void
}

interface run {
  run: () => void
}

function move(animal: swim | run) {
  // 判断传入的animal内是否有swim属性/方法
  if("swim" in animal) {
    animal.swim()
  }else if("run" in animal) {
    animal.run()
  }
}

const dog: run = {
  run: function() {}
}

const fish: swim = {
  swim: function() {}
}
```

## 7.ts函数类型

### 函数类型表达式

```ts

// 方式一: 函数类型表达式
// 格式: (参数列表) => 返回值

const bar: (num1: number) => number = () => {
  return 123
}

type fooType = (num1: number, num2: number) => number
const foo = (calcFn: fooType) => {
  let num1 = 10
  let num2 = 20
  return calcFn(num1, num2)
}

function calcFn(num1: number, num2: number) {
  return num1 + num2
}

foo(calcFn)
```

### 函数的调用签名

```ts
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

// 总结: 如何选择?
// 1.如果只是描述函数类型本身(函数可以被调用),使用函数类型表达式即可
// 2.如果在描述函数作为对象可以被调用,同时也有其他属性时,使用函数调用签名
```

### 函数的构造签名

```ts
class Person {

}

interface ICTORPerson {
  new (): Person
}

function factory(fn: ICTORPerson) {
  const f = new fn()
  return f
}

factory(Person)
```

### 函数的可选参数

```ts

// y就是一个可选参数
// 可选参数的类型时什么? 是number | undefined联合类型
function foo(x: number, y?: number) {
  // 类型缩小
  if(y !== undefined) {
    console.log(y + 10)
  }

}

foo(10)
foo(10, 20)

export {}
```

### 函数参数的默认值

```ts

// 函数的参数可以有默认值
// 1.有默认值的情况下,参数的类型注解可以省略
// 2.有默认值的参数是可以接受undefined
function foo(x: number, y = 100) {

}

foo(10, undefined)

foo(10, 20)

export {}
```

### 函数的剩余参数

```ts

function foo(...args: (string | number) []) {

}

foo(123, 321)

foo("哈哈", 666, "嗯嗯")


export {}
```

### 函数的重载

```ts

// TS中函数的重载写法
// 1.先编写重载签名
function add(arg1: number, arg2: number): number
function add(arg1: string, arg2: string): string

// 2.编写通用的函数实现
function add(arg1: any, arg2: any): any {
  return arg1 + arg2
}

// 通用函数不能被调用
add(10, 20)
add("哈哈哈", "嘿嘿嘿")
```

### 函数中的this-默认类型

```ts
// 1.对象内函数中的this
const obj = {
  name: "coderzxx",
  studying: function() {
    // 默认情况下,this是any类型
    console.log(this.name, "studying")
  }
}

obj.studying()

// 2.普通函数里的this
function foo() {
  // 默认情况下,this是any类型
  // console.log(this)
}

// 在没有对TS进行特殊配置的情况下,this是any类型
```

### 函数中的this-明确类型

```ts
// 在设置了配置选项compilerOptions, 将noImplicitThis设置为true, 表示不允许模糊(隐式)的this存在

// 1.对象内函数中的this
const obj = {
  name: "coderzxx",
  studying: function() {
    // 默认情况下,this是any类型
    console.log(this.name, "studying")
  }
}

obj.studying()

// 2.普通函数里的this
// this: { name: string }: 设置this的类型
function foo(this: { name: string }, info: { name: string }) {
  console.log(this, info)
}

foo.call({ name: "coderzxx" }, { name: "111"})
```

### this内置工具

```ts
function foo(this: { name: string }, info: { name: string, age: number }) {
  console.log(this, info)
}

type fooType = typeof foo

// 1.ThisParameterType: 获取fooType类型中this的类型
type fooThisType = ThisParameterType<fooType>

// 2.OmitThisParameter: 删除this参数类型, 只保留剩余的函数和参数类型
type pureFooType = OmitThisParameter<fooType>
```

## 8.ts面向对象

### 类的基本使用

```ts
class Person {
  // 成员属性: 声明成员属性
  name: string
  age: number

  constructor(name: string, age: number) {
    this.name = name
    this.age = age
  }

  eating() {
    console.log(this.name + "eating")
  }

  running() {
    console.log(this.name + "running")
  }
}

// 实例对象instance
const p1 = new Person("why", 18)
const p2 = new Person("zxx", 22)
console.log(p1.name, p2.name)
```

### 类的成员修饰符

```ts
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
```

### readnoly只读属性

```ts
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
```

### getter和setter

```ts
class Person {
  private _name: string
  private _age: number

  constructor(name: string, age: number) {
    this._name = name
    this._age = age
  }

  running() {
    console.log("跑~!!")
  }

  set name(newValue: string) {
    this._name = newValue
  }

  set age(newAge: number) {
    if(newAge >= 0 && newAge <= 200) {
      this._age = newAge
    }
  }

  get name() {
    return this._name
  }

  get age() {
    return this._age
  }
}

const p = new Person("coderzxx", 18)

p.name = "嘿嘿"
p.age = 300

console.log(p.name, p.age)
```

### 参数类型的使用

```ts
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
```

### 类具有的三种特性

```ts
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
```

### 对象类型的修饰符

```ts

type personInfo = {
  name?: string
  readonly age: number
}

interface personInfo2 {
  name?: string
  readonly age: number
}

const p: personInfo2 = {
  name: "哈哈哈",
  age: 18
}

export {}
```

### 对象类型的索引签名

```ts
interface IPerson {
  name: string,
  age: number,
  height: number
}

const p: IPerson = {
  name: "zxx",
  age: 18,
  height: 1.88
}

// console.log(p.address)

interface InfoType { 
  // 索引签名: 可以通过字符串的索引,去获取到一个值,获取到的值也是字符串
  [key: string]: string
 }

function getInfo(): InfoType {
  const abc: any = "哈哈哈"
  return abc
}

const info = getInfo()
console.log(info["name"], info["age"], info["height"], info.address)

// 索引签名的案例
interface ICollection {
  [index: number]: string
  length: number
}

function printCollection(collection: ICollection) {
  for(let i = 0; i < collection.length; i++) {
    const item = collection[i]
    console.log(item)
    console.log(item.length)
  }
}

const names = ["zxx", "coderzxx", "coder", "天天开心"]

printCollection(names)
/*
	总结:
	什么是索引签名?
	有的时候, 你不能提前知道一个类型里的所有属性的名字, 但是你知道这些值的特征, 这种情	况下, 就可以用一个索引签名来描述可能的值的类型
	
	一个索引签名的属性类型必须是string或者number
	虽然TS可以同时支持string和number类型,但数字索引的返回类型一定要是字符索引返回类型	的子类型
*/
```

### 接口的继承

```ts
interface Person {
  name: string,
  age: number
}

interface xin extends Person {
  height: number
}

const coderzxx: xin = {
  name: "coderzxx",
  age: 18,
  height: 1.88
}

/*
  总结:
  接口可以从其他的接口中将属性继承过来
  1.减少了相同代码的重复编写
  2.如果使用第三方库时,第三方库已经为我们定义了一些属性, 如果希望自己自定义的接口也拥		有第三方库中某一个类型中所有的属性时,可以使用接口继承完成
*/
```

### 接口的类实现

```ts
interface Ikun {
  name: string,
  age: number,
  height: number,

  running: () => void
}

interface Dog {
  eat: () => void
}

// 将接口当做类型使用
const xin: Ikun = {
  name: "coderzxx",
  age: 18,
  height: 1.88,
  running: function() {}
}

// 通过类实现接口
class Person implements Ikun, Dog {
  name: string
  age: number
  height: number
  running: () => void
  eat: () => void
}


const p = new Person()
console.log(p.name, p.age, p.height)

export {}
```

### 对象字面量严格赋值检测

```ts
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
```

### 枚举类型的基本使用

```ts
// 定义枚举类型
enum Direction {
  RIGHT,
  LEFT
}

const d1: Direction = Direction.LEFT

function turnDirection(direction: Direction) {
  switch(direction) {
    case Direction.LEFT:
      console.log("角色向左移动")
      break

    case Direction.RIGHT:
      console.log("角色向右移动")
      break
  }
}

/*
	总结:
		枚举其实就是将一组可能出现的值一个个的列举出来,定义在一个类型中,这个类型就是枚举			类型
		
		枚举允许开发者定义一组命名常量, 常量可以是数字和字符串类型
*/
```

### 枚举类型的默认值和设置值

```ts
// 定义枚举类型
enum Direction {
  // 枚举默认是有值的
  LEFT, // 默认值是0
  RIGHT, // 默认值是1, 以此类推

  TOP = "TOP", // 手动设置值
  XIN = 1000 
}
```

## 9.泛型

### 类型的参数化

```ts
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

/*
	总结: 
		虽然any是可以的, 但是定义为any的时候, 我们其实已经丢失了类型信息
		比如传入的是number类型, 那么我希望返回的可不是any类型, 而依然是number类型, 
		所以,我们需要在函数中可以捕获到参数的类型是number,并且同时使用它作为返回值的类型
		
	需要使用到一种特性的变量-类型变量, 他作用于类型而不是值
	function foo<Type>(arg: Type): Type {
		return arg
	}
	
	可以通过两种方式来调用它:
	1.通过<类型>的方式将类型传递给函数
	2.通过类型推导,自动推导出我们传入的变量是什么类型
*/
```

### 传入多个类型

```ts
// function foo<Type, Element>(arg1: Type, arg2: Element) {}
function foo<T, E>(arg1: T, arg2: E) {}


foo(10, 20)
foo("哈哈哈", 100)
foo(1000, { name: "coderzxx" })
```

### 泛型的常见名称

```ts
T: Type 类型
K: key 键值对名字
V: value 键值对值
E: Element 元素
O: Object 对象
```

### 泛型接口

```ts
// <Type = string>: 泛型接口的默认值
interface Dog<Type = string> {
  name: Type,
  age: number,
  height: Type,
  hobby: Type
}

const huzi: Dog<string> = {
  name: "虎子",
  age: 8,
  height: "大家闺秀",
  hobby: "和鑫鑫玩"
}

const lele: Dog<number> = {
  name: 999,
  age: 2,
  height: 1.11,
  hobby: 6
}
```

### 泛型类

```ts
class Point<Type> {
  x: Type
  y: Type
  constructor(x: Type, y: Type) {
    this.x = x
    this.y = y
  }
}

const p1 = new Point(100, 200)
console.log(p1.x, p1.y)

const p2 = new Point("left", "right")
console.log(p2.x, p2.y)
```

### 泛型约束

```ts
interface Ilength {
  length: number
}


// 1.getLength没有必要用泛型
function getLength(arg: Ilength) {
  return arg.length
}

const length1 = getLength("aaaa")
const length2 = getLength(["a", "b", "c", "d"])

// 2.获取传入的内容, 这个内容必须具有Length属性
// Type相当于是一个变量,用于记录本次调用的类型,所以在整个函数的执行周期中,一直保留着参数的类型

/* 
		有时我们希望传入的类型有某些共性,但是这些共性可能不是在同一种类型中,
		比如string和array都是有length的, 或者某些对象也是会有length属性的, 那么只要			是拥有length的属性都可以作为我们的参数类型,该如何操作?
*/
function getLength2<Type extends Ilength>(arg: Type) {
  return arg.length
}

const info1 = getLength2("bbb")
const info2 = getLength2(["a", "b", "c"])

/*
总结: 这里表示的是传入的类型必须有这个属性, 也可以有其他属性, 但是必须至少有这个属性	
*/
```

### 泛型参数使用约束

```ts

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
```

## 10.ts模块化

### 非模块

```ts
我们需要先理解TS认为什么才是一个模块:
	JS规范声明任何没有export的JS文件都应该被认为是一个脚本, 而非一个模块
	在一个脚本文件中,变量和类型会被声明在共享的全局作用域,将多个输入文件合并成一个输出	文件, 或者在HTML使用多个<script>元素加载这些文件

如果你有一个文件,现在没有任何import或者export,但是你希望他被作为模块处理,添加 export{}, 这会把文件改成一个没有导出任何内容的模块,这个语法可以生效,无论你的模块目标是什么
```

### 内置类型导入

```ts
import { sum } from "./utils/math"

// 如果导入的是类型, 推荐前面加上type关键字
import { type idType, type IPerson } from "./utils/type" // type第一种写法
import type { idType, IPerson } from "./utils/type" // type第二种写法

sum(10, 20)

const id: idType = 10

const p: IPerson = {
  name: "zxx",
  age: 18,
  height: 1.88
}

// 总结: 导入的是类型时, 为什么要加上type关键字?

// 答: 可以让不是TS的编译器, 比如babel swc esbuild知道什么样的导入可以被安全移除
```

### 命名空间(不常用)

```ts
// TS的命名空间

export namespace price {
  export function format(price) {
    return "¥" + price
  }
}

export namespace info {
  export function getCurrentName(name: string) {
    return name
  }
}
```

```ts
// 使用TS的命名空间
import { price, info } from "./utils/format"

price.format(1000)
info.getCurrentName("coderzxx")
```

## 11.类型的查找

```ts
之前我们所有的TS中的类型,几乎都是我们自己编写的,但是我们也有用到一些其他的类型: 
const imageEl = document.getElementById("image") as HTMLImageElement

思考: 
HTMLImageElement类型来自哪里? 甚至document为什么可以有HTMLImageElement方法,
其实这里就涉及到TS对类型的管理和查找规则了

另一种TS文件 .d.ts文件
我们之前编写的TS文件都是.ts文件, 这些文件最终会输出位.js文件, 也就是我们通常编写代码的地方

还有另外一种文件 .d.ts文件, 他是用来做类型的声明(declare), 称之为类型声明或类型定义文件, 它仅仅用来做类型检测, 告知TS我们有哪些类型, 并且.d.ts文件内不能编写逻辑代码

那么TS会在哪里查找我们的类型声明呢?
  1.内置类型声明
	2.外部定义类型声明
	3.自己定义的类型声明
```

### 内置类型声明

```ts
内置类型声明是TS自带的,帮助我们内置了JS运行时的一些标准化API的声明文件
	包括Function String Math Date等内置类型, 也包括运行环境中的DOM API, window, 	Doucment等

TS使用模式命名这些声明文件lib.[something].d.ts
内置类型声明通常在我们安装TS的环境中会带有的
```
