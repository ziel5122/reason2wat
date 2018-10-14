const { readFileSync } = require('fs')

const testText = readFileSync('./test.txt', 'utf-8')

const InputStream = require('./input-stream')

const iStream = InputStream(testText)
