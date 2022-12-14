
// 函数的参数可以有默认值
// 1.有默认值的情况下,参数的类型注解可以省略
// 2.有默认值的参数是可以接受undefined
function foo(x: number, y = 100) {

}

foo(10, undefined)

foo(10, 20)

export {}