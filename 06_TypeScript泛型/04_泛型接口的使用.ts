// <Type = string>: 泛型接口的默认值
interface Dog<Type = string> {
  name: Type,
  age: number,
  height: Type,
  hobby: Type
}

// 表示
const huzi: Dog<string> = {
  name: "虎子",
  age: 8,
  height: "大家闺秀",
  hobby: "和鑫鑫玩"
}

const lele: Dog<number> = {
  name: 999,
  age: 2,
  height: 1.11,
  hobby: 6
}