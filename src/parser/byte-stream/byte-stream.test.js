const { readFileSync } = require('fs')
const { EOL } = require('os')
const { join } = require('path')

const ByteStream = require('./byte-stream')

const EMPTY_FILE_PATH = join(__dirname, '../test-files/empty.txt')
const TEST_FILE_PATH = join(__dirname, '../test-files/test.txt')

describe('ByteStream constructor', () => {
  const expectedErrorMessage = 'input must be type String'

  test(
    "throws error 'input must be type String' if input argument is null", 
    () => {
      try {
        ByteStream(null)
      } catch (error) {
        expect(error.message).toBe(expectedErrorMessage)
      }
    },
  )

  test(
    "throws error 'input must be type String' if input argument is undefined", 
    () => {
      try {
        ByteStream()
      } catch (error) {
        expect(error.message).toBe(expectedErrorMessage)
      }
    },
  )
})

describe('tests for InputStream next on empty file', () => {
  let emptyString

  beforeAll(() => {
    emptyString = readFileSync(EMPTY_FILE_PATH, 'utf-8')
  })

  test('an empty file returns an empty string', () => {
    const emptyStringStream = ByteStream(emptyString)
    const expectedNext = ''

    const next = emptyStringStream.next()

    expect(next).toBe(expectedNext)
  })

  test('an empty file returns an empty string after next is called', () => {
    const emptyStringStream = ByteStream(emptyString)
    const expectedNext = ''

    emptyStringStream.next()
    const next = emptyStringStream.next()

    expect(next).toBe(expectedNext)
  })
})

describe('tests for InputStream next on non-empty file', () => {
  let nonEmptyString

  beforeAll(() => {
    nonEmptyString = readFileSync(TEST_FILE_PATH, 'utf-8')
  })

  test('a file with one letter returns the one letter', () => {
    const nonEmptyStringStream = ByteStream(nonEmptyString)
    const expectedNext = 't'

    const next = nonEmptyStringStream.next()

    expect(next).toBe(expectedNext)
  })

  test('a file with one letter returns empty string after next is called', () => {
    const nonEmptyStringStream = ByteStream(nonEmptyString)
    const expectedNext = ''

    nonEmptyStringStream.next()
    nonEmptyStringStream.next()
    const next = nonEmptyStringStream.next()

    expect(next).toBe(expectedNext)
  })
})
