const { EOL } = require('os')

function ByteStream(input) {
  this.input = input
  this.index = 0
  this.col = 0
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
