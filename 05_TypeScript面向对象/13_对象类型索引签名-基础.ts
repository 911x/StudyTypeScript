interface IPerson {
  name: string,
  age: number,
  height: number
}

const p: IPerson = {
  name: "zxx",
  age: 18,
  height: 1.88
}

console.log(p.name, p.age, p.height)
// console.log(p.address)

interface InfoType { 
  // 索引签名: 可以通过字符串的索引,去获取到一个值,获取到的值也是字符串
  [key: string]: string
 }

function getInfo(): InfoType {
  const abc: any = "哈哈哈"
  return abc
}

const info = getInfo()
console.log(info["name"], info["age"], info["height"], info.address)

// 索引签名的案例
interface ICollection {
  [index: number]: string
  length: number
}

function printCollection(collection: ICollection) {
  for(let i = 0; i < collection.length; i++) {
    const item = collection[i]
    console.log(item)
    console.log(item.length)
  }
}

const names = ["zxx", "coderzxx", "coder", "天天开心"]

printCollection(names)

export {}