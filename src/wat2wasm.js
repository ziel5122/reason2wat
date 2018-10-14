const { readFileSync, writeFileSync } = require('fs')
const wabt = require('wabt')()
const path = require('path')

const getWasmFilename = (watFilename) => {
  const noSuffix = watFilename.replace('.wat', '')
  return `${noSuffix}.wasm`
}

const watFilename = process.argv[2]
const wasmFilename = process.argv[3] || getWasmFilename(watFilename)

const watFile = readFileSync(watFilename, 'utf8')
const wasmModule = wabt.parseWat(watFilename, watFile)
const { buffer } = wasmModule.toBinary({})

writeFileSync(wasmFilename, new Buffer(buffer))