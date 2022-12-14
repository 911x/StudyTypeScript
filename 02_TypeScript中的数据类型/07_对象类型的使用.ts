
// 对象类型和函数类型结合使用
// function pointCoordinate(point: {x :number, y :number}) {
//   console.log("x坐标:", point.x)
//   console.log("y坐标:", point.y)
// }

// pointCoordinate({ x: 20, y: 30})

// type: 声明
type pointType = {
  x: number
  y: number
  z?: number // ?: 可选类型
}

function pointCoordinate(point: pointType) {
  console.log("x坐标:", point.x)
  console.log("y坐标:", point.y)
  console.log("z坐标:", point.z)
}

pointCoordinate({ x: 20, y: 30})
pointCoordinate({ x: 30, y: 50, z: 100})