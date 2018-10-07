const { readFileSync } = require('fs')

const instantiate = async (filename) => {
  const buffer = readFileSync(filename)
  const module = await WebAssembly.compile(buffer)
  const instance = await WebAssembly.instantiate(module)
  return instance.exports
}

module.exports = {
  instantiate,
}