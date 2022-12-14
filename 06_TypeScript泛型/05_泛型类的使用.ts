class Point<Type> {
  x: Type
  y: Type
  constructor(x: Type, y: Type) {
    this.x = x
    this.y = y
  }
}

const p1 = new Point(100, 200)
console.log(p1.x, p1.y)

const p2 = new Point("left", "right")
console.log(p2.x, p2.y)
