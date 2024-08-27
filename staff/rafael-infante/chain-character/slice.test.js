const ChainCharacters = require(".");

const result1 = new ChainCharacters('holatu').slice(2, 4)
console.assert(result1 === 'holatu'.slice(2, 4), {result: result1, message: "Test 1 No pasado "});
if (result1 === 'holatu'.slice(2, 4)) console.log('Test 1 pasado')

const result2 = new ChainCharacters('').slice(2, 4)
console.assert(result2 === ''.slice(2, 4), {result: result2, message: "Test 2 No pasado "});
if (result2 === ''.slice(2, 4)) console.log('Test 2 pasado')

const result3 = new ChainCharacters('aaa bbbb ccc').slice(0, 2)
console.assert(result3 === 'aaa bbbb ccc'.slice(0, 2), {result: result3, message: "Test 3 No pasado "});
if (result3 === 'aaa bbbb ccc'.slice(0, 2)) console.log('Test 3 pasado')