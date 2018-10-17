const { join } = require('path')

const { instantiate } = require('../wasm')

const MATH_WASM_FILE_PATH = join(__dirname, 'math.wasm')

let add, divide, multiply, subtract

beforeAll(async () => {
  const math = await instantiate(MATH_WASM_FILE_PATH)
  add = math.add
  divide = math.divide
  multiply = math.multiply
  subtract = math.subtract
})

test('the result of adding 1 to 2 is 3', () => {
  const x = 1
  const y = 2
  const expected = 3

  const result = add(x, y)

  expect(result).toBe(expected)
})

test('the result of subtracting 3 from 5 is 2', () => {
  const x = 5
  const y = 3
  const expected = 2

  const result = subtract(5, 3)

  expect(result).toBe(expected)
})

test('the result of multiplying 2 and 3 is 6', () => {
  const x = 2
  const y = 3
  const expected = 6

  const result = multiply(x, y)

  expect(result).toBe(expected)
})

test('the result of dividing 12 by 3 is 4', () => {
  const x = 12
  const y = 3
  const expected = 4

  const result = divide(x, y)

  expect(result).toBe(expected)
})
