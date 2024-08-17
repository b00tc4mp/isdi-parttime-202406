const ChainCharacters = require(".");

const result1 = new ChainCharacters('hola mundo').replace('mundo', 'universo')
  console.assert(result1 === 'hola mundo'.replace('mundo','universo'), {result: result1, message: "Test 1 No pasado "})
const result2 = new ChainCharacters('hola mundo').replace('mundo', 'galaxia')
  console.assert(result2 === 'hola mundo'.replace('mundo','galaxia'), {result: result2, message: "Test 1 No pasado "})