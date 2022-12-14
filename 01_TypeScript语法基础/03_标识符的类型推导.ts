
// 声明一个标识符时, 如果有直接进行赋值, 那么会根据所赋值的类型自动推导出标识符的类型注解, 这个过程就成为类型推导
// let在进行类型推导时, 推导出来的都是通用数据类型
let username = "coderzxx"

// username = 18
username = "xin"

// const在进行类型推导时, 推导出来的都是字面量类型
const age = 18

const hello: "Hello" = "Hello"