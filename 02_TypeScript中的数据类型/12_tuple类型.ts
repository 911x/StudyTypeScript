
// 数组保存信息
const info1: any[] = ["xin", 18, 1.88]

// 对象保存信息
const info2 = {
  name: "xin",
  age: 18,
  height: 1.88
}

// tuple: 元组类型
// 元组中的每个元素都有自己特性的类型, 根据索引值获取到的值可以确定所对应的类型
let info3: [string, number, number] = ["xin", 18, 1.88]
console.log(info3[0])


// 元组类型通常可以作为函数的返回值
function useState(initiaState: number): [number, (newValue: number) => void] {
  let stateValue = initiaState

  function setValue(newValue: number) {
    stateValue = newValue
  }

  return [stateValue, setValue]
}

const [count, setCount] = useState(100)
console.log(count)
setCount(1000)