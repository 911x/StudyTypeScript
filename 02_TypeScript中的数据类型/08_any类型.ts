
// 在某些情况下,无法确定一个变量的类型时,并且它可能会发生一些变化,这时可以使用any类型
// 设置为any类型后, 可以对any类型的变量进行任何的操作, 包括获取本不存在的属性或方法
// any类型的变量可以被赋值为任何的值
let message: any = "hello"

message = "aaa"

message = 123

message = {}

message = []