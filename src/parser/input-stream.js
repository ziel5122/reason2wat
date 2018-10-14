const InputStream = (input) => {
  let col = 0
  let line = 1
  let pos = 0

  const peek = () => input.charAt(pos)

  const next = () => {
    const c = input.charAt(pos)
    pos++
    if (c === '\n') {
      line++
      col = 0
    } else {
      col++
    }
    return c
  }
  const eof = () => peek() === ''

  const croak = (msg) => {
    throw new Error(`${msg} (${line}:${col})`)
  }

  return {
    croak,
    eof,
    next,
    peek,
  }
}

module.exports = InputStream
