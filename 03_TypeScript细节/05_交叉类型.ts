// 交叉类型: 两种或多种类型要同时满足

type ageType = string & number // 没有意义

interface Info {
  name: string,
  age: number,
  height: number
}

interface Hobby {
  game: string,
  eat: () => void,
  coding: () => void
}

type infoType = Info & Hobby

const my: infoType = {
  name: "coderzxx",
  age: 18,
  height: 1.88,
  game: "英雄联盟",
  
  eat() {
    console.log("我爱吃鱼香肉丝")
  },
  coding() {
    console.log("正在疯狂的敲代码")
  }
}


export {}