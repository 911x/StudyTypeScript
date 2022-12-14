function foo(this: { name: string }, info: { name: string, age: number }) {
  console.log(this, info)
}

type fooType = typeof foo

// 1.ThisParameterType: 获取fooType类型中this的类型
type fooThisType = ThisParameterType<fooType>

// 2.OmitThisParameter: 删除this参数类型, 只保留剩余的函数和参数类型
type pureFooType = OmitThisParameter<fooType>

export {}