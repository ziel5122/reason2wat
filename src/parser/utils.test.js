const { isDigit, isEof } = require('./utils.js')

function testNullAndUndefined(f) {
  test('returns false given Null', () => {
    const n = null
    const expected = false

    const received = f(n)

    expect(received).toBe(expected)
  })

  test('returns false given Undefined', () => {
    const u = undefined
    const expected = false

    const received = f(u)

    expect(received).toBe(expected)
  })
}

describe('isDigit', () => {
  testNullAndUndefined(isDigit)

  test('returns true given String representation of a digit', () => {
    const s = '5'
    const expectedIsDigit = true

    const receivedIsDigit = isDigit(s)

    expect(receivedIsDigit).toBe(expectedIsDigit)
  })

  test('returns false given String representation of non-digit', () => {
      const s = 'f'
      const expectedIsDigit = false

      const receivedIsDigit = isDigit(s)

      expect(receivedIsDigit).toBe(expectedIsDigit)
    },
  )

  test('returns false given Boolean', () => {
    const b = true
    const expectedIsDigit = false

    const receivedIsDigit = isDigit(b)

    expect(receivedIsDigit).toBe(expectedIsDigit)
  })

  test('returns false given Object', () => {
    const o = {}
    const expectedIsDigit = false

    const receivedIsDigit = isDigit(o)

    expect(receivedIsDigit).toBe(expectedIsDigit)
  })
})

describe('isId', () => {
  testNullAndUndefined(isEof)
})
