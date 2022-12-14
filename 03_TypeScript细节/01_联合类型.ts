// 联合类型的基本使用
const demo: number | string = "123"

if(typeof demo === "string") {
  console.log(demo.length)
}

// 例子: 用户的id可能是数字类型或字符串类型, 如果是字符串类型打印id的长度, 如果是数字类型原样打印
function printId(id: number | string) {

  console.log("你的id:", id)

  if(typeof id === "string") {
    console.log(id.length)
  }else {
    console.log(id)
  }
}

printId(123)
printId("9991131")