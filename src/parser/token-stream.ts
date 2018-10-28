const { isDigit, isIdStart } = require('./utils.js')

const keywordList = ['let', 'if', 'else']

const keywords = keywordList.reduce(
  (keywords, keyword) => {
    keywords[keyword] = true
    return keywords
  }, 
  {},
)

function TokenStream(input) {
  let token = null

  const isKeyword = t => !!keywords[t]
} 

// const TokenStream = input => {

//   const isKeyWord = t => !!keywords[t]

//   const isOpChar = c => /[+-\*/%=&|>?!]/i.test(c)

//   const isPunc = c => /[,;(){}\[\]]/i.test(c)

//   const isWhitespace = c => /[ \t\n]/i.test(c)

//   const readWhile = predicate => {
//     let s = ''
//     while (!input.eof() && predicate(input.peek())) {
//       s += input.next()
//     }
//     return s
//   }

//   const readEscaped = end => {
//     let escaped = false
//     let s = ''
//     input.next();
//     while (!input.eof()) {
//       let c = input.next()
//       if (escaped) {
//         s += c
//         escaped = false
//       } else if (c === '\\') {
//         escaped = true
//       } else if (c === end) {
//         break
//       } else {
//         s += c
//       }
//     }
//     return s
//   }

//   const readIdent = () => {
//     let id = readWhile(isId)
//     return {
//       type: isKeyWord(id) ? 'kw' : 'var',
//       value: id,
//     }
//   }

//   const readNumber = () => {
//     let hasDot = false
//     let number = readWhile((c) => {
//       if (c === '.') {
//         if (hasDot) {
//           return false
//         }
//         hasDot = true
//         return true
//       }
//       return isDigit(c)
//     })
//     return { 
//       type: 'num', 
//       value: parseFloat(number),
//     }
//   }

//   const readString = () => ({ type: 'str', value: readEscaped('"') })

//   const skipComment = () => {
//     readWhile(c => c !== '\n')
//     input.next()
//   }

//   const readNext = () => {
//     readWhile(isWhitespace)
//     if (input.eof()) {
//       return null
//     }
//     let c = input.peek()
//     if (c === '#') {
//       skipComment()
//       return readNext()
//     }
//     if (c === '"') {
//       return readString()
//     }
//     if (isDigit(c)) {
//       return readNumber()
//     }
//     if (isIdStart(c)) {
//       return readIdent()
//     }
//     if (isPunc(c)) {
//       return {
//         type: 'punc',
//         value: input.next(),
//       }
//     }
//     if (isOpChar(c)) {
//       return {
//         type: 'op',
//         value: readWhile(isOpChar),
//       }
//     }
//     input.croak(`Can't handle character: ${c}`)
//   }

//   const peek = () => token || (token = readNext())

//   const next = () => {
//     let t = token
//     token = null
//     return t || readNext()
//   }

//   const eof = () => peek() === null

//   return {
//       next  : next,
//       peek  : peek,
//       eof   : eof,
//       croak : input.croak
//   };
// }