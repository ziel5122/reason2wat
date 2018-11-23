const { EOF } = require('os')

const DIGIT_REGEX = /[0-9]/
const ID_REGEX = /[a-z0-9-_]/ 
const ID_START_REGEX = /[a-z_]/
const OPERATOR_REGEX = /[+\-\*/%=&|<>!]/ 
const PUNCTUATION_REGEX = /[,;(){}\[\]]/
const WHITESPACE_REGEX = /[ \t\n]/

const KEYWORDS = {
  else: true,
  if: true,
  let: true,
}

const isDigit = c => DIGIT_REGEX.test(c)

const isEof = c => c === EOF

const isId = c => ID_REGEX.test(c)

const isIdStart = c => ID_START_REGEX.test(c)

const isKeyword = c => !!KEYWORDS[c]

const isOperator = c => OPERATOR_REGEX.test(c)

const isPunctuation = c => PUNCTUATION_REGEX.test(c)

const isWhitespace = c => WHITESPACE_REGEX.test(c)

module.exports = {
  isDigit,
  isEof,
  isId,
  isIdStart,
  isKeyword,
  isOperator,
  isPunctuation,
  isWhitespace,
}
