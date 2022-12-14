// typeof: 使用最多
function printId(id: string | number) {
  if(typeof id === "string") {
    console.log(id.length, id.split(" "))
  }else {
    console.log(id)
  }
}

// ===/!==: 方向的类型判断
type driection = "top" | "bottom" | "left" | "right"
function switchDriection(driection: driection) {
  if(driection === "top") {
    console.log("角色向上移动")
  }else if(driection === "bottom") {
    console.log("角色向下移动")
  }else if(driection === "left") {
    console.log("角色向左移动")
  }else if(driection === "right") {
    console.log("角色向右移动")
  }
}

// instanceof: 传入一个日期, 打印日期
function printDate(date: string | Date) {
  // 判断传入的data是不是Date对象的实例, 如果为true,表示是Date对象的实例
  if(date instanceof Date) {
    console.log(date.getTime())
  }else {
    console.log(date)
  }
}

// in: 用于判断对象是否具有某个属性, 如果指定的属性在指定的对象或其的原型链中, 则in运算符会返回true
// 判断时候有某个属性
interface swim {
  swim: () => void
}

interface run {
  run: () => void
}

function move(animal: swim | run) {
  // 判断传入的animal内是否有swim属性/方法
  if("swim" in animal) {
    animal.swim()
  }else if("run" in animal) {
    animal.run()
  }
}

const dog: run = {
  run: function() {}
}

const fish: swim = {
  swim: function() {}
}