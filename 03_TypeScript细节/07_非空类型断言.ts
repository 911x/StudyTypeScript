
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

export {}