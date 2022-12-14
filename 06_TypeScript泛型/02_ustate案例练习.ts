function ustate<Type>(initialState: Type): [Type, (newState: Type) => void] {
  let state = initialState

  function setState(newState: Type) {
    state = newState
  }

  return [state, setState]
}

const [count, setState] = ustate<number>(100)
const [message, setMessage] = ustate("Hello")
const [names, setNames] = ustate<any[]>([])