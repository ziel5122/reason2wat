const { isDigit } = require('./utils.js')

describe('tests for isDigit method', () => {
  test('isDigit returns true given String representation of a digit', () => {
    const s = '5'
    const expectedIsDigit = true

    const receivedIsDigit = isDigit(s)

    expect(receivedIsDigit).toBe(expectedIsDigit)
  })

  test(
    'isDigit returns false given String representation of non-digit', 
    () => {
      const s = 'f'
      const expectedIsDigit = false

      const receivedIsDigit = isDigit(s)

      expect(receivedIsDigit).toBe(expectedIsDigit)
    },
  )

  test(
    'isDigit returns false given String representation of two-digit Number', 
    () => {
      const s = '54'
      const expectedIsDigit = false

      const receivedIsDigit = isDigit(s)

      expect(receivedIsDigit).toBe(expectedIsDigit)
    },
  )

  test('isDigit returns false given Null', () => {
    const n = null
    const expectedIsDigit = false

    const receivedIsDigit = isDigit(n)

    expect(receivedIsDigit).toBe(expectedIsDigit)
  })

  test('isDigit returns false given Undefined', () => {
    const u = undefined
    const expectedIsDigit = false

    const receivedIsDigit = isDigit(u)

    expect(receivedIsDigit).toBe(expectedIsDigit)
  })

  test('isDigit returns false given Boolean', () => {
    const b = true
    const expectedIsDigit = false

    const receivedIsDigit = isDigit(b)

    expect(receivedIsDigit).toBe(expectedIsDigit)
  })

  test('isDigit returns false given Object', () => {
    const o = {}
    const expectedIsDigit = false

    const receivedIsDigit = isDigit(o)

    expect(receivedIsDigit).toBe(expectedIsDigit)
  })
})