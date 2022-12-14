// 需求: 定义一个函数, 可以传入字符串或数组, 获取长度

// 1.普通函数实现
function fn(arg) {
  return arg.length
}

fn("aaaaaa")
fn([1, 2, 3, 5])

// 2.使用函数重载实现
function getLength(arg: any[]): number
function getLength(arg: string): number
function getLength(arg: string | any[]) {
  return arg.length
}

getLength("coderzxx")
getLength(["哈哈", "嘻嘻", "嘿嘿"])

// 3.使用联合类型实现
function getLength2(arg: string | any[]) {
  return arg.length
}

getLength2("嗯嗯")

// 4.使用对象类型实现
function getLength3(arg: { length: number }) {
  return arg.length
}