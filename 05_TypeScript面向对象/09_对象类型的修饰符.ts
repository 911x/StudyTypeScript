
type personInfo = {
  name?: string
  readonly age: number
}

interface personInfo2 {
  name?: string
  readonly age: number
}

const p: personInfo2 = {
  name: "哈哈哈",
  age: 18
}

export {}