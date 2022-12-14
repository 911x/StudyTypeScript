
// nuknown: TS中一种特殊的类型, 用于描述类型不确定的变量
let message: unknown = "hello"

message = 123

// 默认对unknown类型的变量进行操作都是非法的
// console.log(message.length) //Object is of type 'unknown'

// 对unknown类型操作之前,要求必须要进行类型的校验(缩小),才能根据缩小之后的类型进行对应的操作
// 类型缩小
if(typeof message === 'string') {
  console.log(message.length)
}