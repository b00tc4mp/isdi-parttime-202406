const ChainCharacters = require(".");

const result1 = new ChainCharacters('holatu').slice(2, 4)
console.assert(result1.value === 'holatu'.slice(2, 4), {result: result1.value, message: "Test 1 No pasado "});
if (result1.value === 'holatu'.slice(2, 4)) console.log('Test 1 pasado')

const result2 = new ChainCharacters('').slice(2, 4)
console.assert(result2.value === ''.slice(2, 4), {result: result2.value, message: "Test 2 No pasado "});
if (result2.value === ''.slice(2, 4)) console.log('Test 2 pasado')

const result3 = new ChainCharacters('aaa bbbb ccc').slice(0, 2)
console.assert(result3.value === 'aaa bbbb ccc'.slice(0, 2), {result: result3.value, message: "Test 3 No pasado "});
if (result3.value === 'aaa bbbb ccc'.slice(0, 2)) console.log('Test 3 pasado')