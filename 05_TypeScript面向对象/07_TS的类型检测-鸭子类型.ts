class Person {
  constructor(public name: string, public age: number) {

  }

  running() {}
}

function printPerson(p: Person) {
  console.log(p.name, p.age)
}

printPerson(new Person("zxx", 18))

printPerson({ name: "coderzxx", age: 18, running: function(){}})


export {}