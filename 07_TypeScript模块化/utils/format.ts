// TS的命名空间

export namespace price {
  export function format(price) {
    return "¥" + price
  }
}

export namespace info {
  export function getCurrentName(name: string) {
    return name
  }
}