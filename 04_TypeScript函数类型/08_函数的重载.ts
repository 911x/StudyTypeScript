
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

export {}