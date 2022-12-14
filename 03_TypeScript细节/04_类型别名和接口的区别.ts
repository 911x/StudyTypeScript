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

// 区别二: interface可以同时声明一个接口名称
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


export {}