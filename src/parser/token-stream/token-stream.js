const { 
  isDigit, 
  isEof,
  isKeyword,
  isIdStart,
  isOperator,
  isPunctuation,
  isWhitespace,
} = require('./utils.js')

function TokenStream(input) {
  if (typeof input !== 'string') {
    throw new TypeError('input must be type String')
  }

  let token = null

  function readIdent() {
    const id = readWhile(isId)

    return {
      type: isKeyword(id) ? 'keyword' : 'variable'
      value: id,
    }
  }

  function readNext() {
    readWhile(isWhitespace)

    let c = input.peek()

    if (isEof(c)) {
      return null
    }
  
    if (isDigit(c)) {
      return readNumber()
    }
  
    if (isIdStart(c)) {
      return readIdent()
    }
  
    if (isOperator(c)) {
      return {
        type: 'operator',
        value: readWhile(isOp),
      }
    }
  
    if (isPunctuation(c)) {
      return {
        type: 'punctuation',
        value: input.next()
      }
    }
  }

  function readNumber() {
    let hasDot = false

    const number = readWhile(c => {
      if (c === '.') {
        if (hasDot) {
          return false
        }

        return hasDot = true
      }

      return isDigit(c)
    })

    return { type: 'number', value: parseFloat(number) }
  }

  function readWhile(predicate) {
    const s = []

    for (let c = input.peek(); !isEof(c) && predicate(c); c = input.peek()) {
      s.push(input.next())
    }
    
    return s.join('')
  }
}
