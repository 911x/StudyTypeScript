// 1.对象内函数中的this
const obj = {
  name: "coderzxx",
  studying: function() {
    // 默认情况下,this是any类型
    console.log(this.name, "studying")
  }
}

obj.studying()

// 2.普通函数里的this
function foo() {
  // 默认情况下,this是any类型
  // console.log(this)
}

export {}

// 在没有对TS进行特殊配置的情况下,this是any类型