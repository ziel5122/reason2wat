const { EOL } = require('os')

const InputStream = input => {
  let index = 0
  let line = 1
  let col = 0

  let c = input.charAt(index)
  
  const generator = function * () {
    while (true) {
      yield c

      if (c === EOL) {
        line++
        col = 0
      } else {
        col++
      }

      index++
      c = input.charAt(index)
    }
  }()[Symbol.iterator]()

  const next = () => {
    return generator.next().value
  }

  const peek = () => c

  return {
    next,
    peek,
  }
}

module.exports = InputStream
