
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


export {}