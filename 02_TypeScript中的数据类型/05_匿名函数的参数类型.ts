
const names = ["zxx", "why", "jay"]

// 匿名函数最好不要添加类型注解, 因为TS会根据forEach函数的类型以及数组的类型推断出item的类型
// 这个过程称之为上下文类型, 因为函数执行的上下文可以帮助我们确定参数的返回值是什么类型
names.forEach(function(item, index, arr) {
  console.log(typeof item)
})