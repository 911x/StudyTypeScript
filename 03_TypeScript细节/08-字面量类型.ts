
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

export {}