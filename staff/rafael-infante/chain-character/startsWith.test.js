const ChainCharacters = require(".");

const result1 = new ChainCharacters('holamundo').startsWith('hola')
console.assert(result1 === 'holamundo'.startsWith('hola'), {result: result1, message: "Test 1 No pasado "});
if (result1)console.log('Test 1 pasado');

const result2 = new ChainCharacters('holamundo').startsWith('holi')
console.assert(result2 === 'holamundo'.startsWith('holi'), {result: result2, message: "Test 2 No pasado "});
if (!result2) console.log('Test 2 pasado');

const result3 = new ChainCharacters('holamundo').startsWith(null)
console.assert(result3 === 'holamundo'.startsWith(null), {result: result3, message: "Test 3 No pasado "});
if (!result3) console.log('Test 3 pasado');