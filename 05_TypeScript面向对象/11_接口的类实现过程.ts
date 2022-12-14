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