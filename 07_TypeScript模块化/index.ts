import { sum } from "./utils/math"

import { price, info } from "./utils/format"

// 如果导入的是类型, 推荐前面加上type关键字
// import { type idType, type IPerson } from "./utils/type" // type第一种写法
import type { idType, IPerson } from "./utils/type" // type第二种写法

sum(10, 20)

const id: idType = 10

const p: IPerson = {
  name: "zxx",
  age: 18,
  height: 1.88
}

price.format(1000)
info.getCurrentName("coderzxx")