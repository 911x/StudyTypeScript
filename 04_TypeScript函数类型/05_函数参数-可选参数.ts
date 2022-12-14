
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