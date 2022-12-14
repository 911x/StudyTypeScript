interface Ilength {
  length: number
}


// 1.getLength没有必要用泛型
function getLength(arg: Ilength) {
  return arg.length
}

const length1 = getLength("aaaa")
const length2 = getLength(["a", "b", "c", "d"])

// 2.获取传入的内容, 这个内容必须具有Length属性
// Type相当于是一个变量,用于记录本次调用的类型,所以在整个函数的执行周期中,一直保留着参数的类型
function getLength2<Type extends Ilength>(arg: Type) {
  return arg.length
}

const info1 = getLength2("bbb")
const info2 = getLength2(["a", "b", "c"])