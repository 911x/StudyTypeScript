interface Person {
  name: string,
  age: number
}

interface xin extends Person {
  height: number
}

const coderzxx: xin = {
  name: "coderzxx",
  age: 18,
  height: 1.88
}

/*
  总结:
  接口可以从其他的接口中将属性继承过来
  1.减少了相同代码的重复编写
  2.如果使用第三方库时,第三方库已经为我们定义了一些属性, 如果希望自己自定义的接口也拥有第三方库中某一个类型中所有的属性时
  可以使用接口继承完成
*/