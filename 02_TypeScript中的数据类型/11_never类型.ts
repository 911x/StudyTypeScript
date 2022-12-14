

// 封装框架或工具时, 可以使用下never
// 对于一些没有处理的case, 可以直接报错
function handelMessage(message: string | number | boolean) {

  switch(typeof message) {
    case "string":
    console.log(message.length)
    break

    case "number":
    console.log(message)
    break

    case "boolean": 
    console.log(Number(message))
    break

    default: 
    const check: never = message 
  }
}

handelMessage("aaa")