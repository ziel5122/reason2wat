const { EOL } = require('os')

function ByteStream(input) {
  if (typeof input !== 'string') {
    throw new TypeError('input must be type String')
  }

  let col = 0
  let index = 0
  let line = 1

  function next() {
    const c = input.charAt(index)
    index++

    if (c === EOL) {
      line++
      col = 0
    } else {
      col++
    }

    return c
  }

  function peek() {
    return input.charAt(index)
  }

  return {
    next,
    peek,
  }
}

module.exports = ByteStream

