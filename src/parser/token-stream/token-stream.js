const { 
  isDigit, 
  isEof,
  isIdStart,
  isOperator,
  isPunctuation,
  isWhitespace,
} = require('./utils.js')


function TokenStream(input) {
  if (input == null) {
    throw new Error('input must exist')
  }

  this.input = input
  this.token = null
} 

TokenStream.prototype.readWhile = function(predicate) {
  const s = []
  let c = this.input.peek()
  while (!isEof(c) && predicate(c)) {
    s.push(this.input.next())
    c = this.input.peek()
  }
  return s.join('')
}

TokenStream.prototype.readNext = function() {
  this.readWhile(isWhitespace)

  let c = this.input.peek()

  if (isEof(c)) {
    return null
  }

  if (isDigit(c)) {
    console.log('digit')
  }

  if (isIdStart(c)) {
    console.log('id start')
  }

  if (isOperator(c)) {
    console.log('operator')
  }

  if (isPunctuation(c)) {
    console.log('punctuation')
  }
}
