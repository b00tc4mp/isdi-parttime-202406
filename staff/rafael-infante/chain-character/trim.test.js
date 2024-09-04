const ChainCharacters = require(".");

const result1 = new ChainCharacters(' Hello  ').trim()
console.assert(result1.value === '  Hello  '.trim(), {result: result1.value, message: "Test 1 No pasado "});
if (result1.value === '  Hello  '.trim()) console.log('Test 1 pasado');

const result2 = new ChainCharacters('Hola  ').trim()
console.assert(result2.value === 'Hola  '.trim(), {result: result2.value, message: "Test 2 No pasado "});
if (result2.value === 'Hola  '.trim()) console.log('Test 2 pasado');

const result3 = new ChainCharacters('').trim()
console.assert(result3.value === ''.trim(), {result: result3.value, message: "Test 3 No pasado "});
if (result3.value === ''.trim()) console.log('Test 3 pasado');