// 定义枚举类型
enum Direction {
  RIGHT,
  LEFT
}

const d1: Direction = Direction.LEFT

function turnDirection(direction: Direction) {
  switch(direction) {
    case Direction.LEFT:
      console.log("角色向左移动")
      break

    case Direction.RIGHT:
      console.log("角色向右移动")
      break
  }
}