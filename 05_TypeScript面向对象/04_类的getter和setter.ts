class Person {
  private _name: string
  private _age: number

  constructor(name: string, age: number) {
    this._name = name
    this._age = age
  }

  running() {
    console.log("跑~!!")
  }

  set name(newValue: string) {
    this._name = newValue
  }

  set age(newAge: number) {
    if(newAge >= 0 && newAge <= 200) {
      this._age = newAge
    }
  }

  get name() {
    return this._name
  }

  get age() {
    return this._age
  }
}

const p = new Person("coderzxx", 18)

p.name = "嘿嘿"
p.age = 300

console.log(p.name, p.age)