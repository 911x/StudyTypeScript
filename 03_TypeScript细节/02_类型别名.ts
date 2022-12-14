// 类型别名的基本使用
type ageType = number
let age: ageType = 18

type idType = number | string
function printId(id: idType) {
  console.log(id)
}

// 打印坐标
type pointType = {x: number, y: number, z?: number}
function printCoordinate(point: pointType) {
  console.log(point.x, point.y, point.z)
}