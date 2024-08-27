const ChainCharacters = require(".");

const result1 = new ChainCharacters('holamundo').endsWith('mundo')
console.assert(result1 === 'holamundo'.endsWith('mundo'), {result: result1, message: "Test 1 No pasado "});
if (result1) console.log('Test 1 pasado');

const result2 = new ChainCharacters('hola Rafa').endsWith('Rafa')
console.assert(result2 === 'hola Rafa'.endsWith('Rafa'), {result: result2, message: "Test 2 No pasado "});
if (result2) console.log('Test 2 pasado');

const result3 = new ChainCharacters('holamundo').endsWith(null);
console.assert(result3 === 'holamundo'.endsWith(null), {result: result3, message: "Test 3 No pasado "});
if (!result3) console.log('Test 3 pasado');