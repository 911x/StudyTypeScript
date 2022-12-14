
type fooType = (num1: number, num2: number) => number
const foo = (calcFn: fooType) => {
  let num1 = 10
  let num2 = 20
  return calcFn(num1, num2)
}

function calcFn(num1: number, num2: number) {
  return num1 + num2
}

foo(calcFn)