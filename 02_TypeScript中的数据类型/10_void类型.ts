// void: 通常用来指定一个函数是没有返回值的, 那么他的类型就是void类型

// 这个函数我们没有写任何类型, 那么它的默认返回值类型就是void
// function sum(num1 :number, num2 :number) {
//   console.log(num1 + num2)
// }

// 也可以显示的来指定返回值是void
// function sum(num1 :number, num2 :number) :void {
//   console.log(num1 + num2)
// }

// 注意事项: 如果返回值是void类型, 可以返回undefined 也就是说, TS编译器允许这样做
function sum(num1 :number, num2 :number) :void {
  console.log(num1 + num2)
  return undefined
}

sum(10, 20)
