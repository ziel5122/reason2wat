const { EOL } = require('os')

function ByteStream(input) {
  if (input == null) {
    throw new Error('input must exist')
  }

  this.col = 0
  this.index = 0
  this.input = input
  this.line = 1
}

ByteStream.prototype.next = function() {
  const c = this.input.charAt(this.index++)

  if (c === EOL) {
    this.line++
    this.col = 0
  } else {
    this.col++
  }

  return c
}

ByteStream.prototype.peek = function () {
  return this.input.charAt(this.index)
}

module.exports = ByteStream
