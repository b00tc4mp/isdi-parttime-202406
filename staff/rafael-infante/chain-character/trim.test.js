const ChainCharacters = require(".");

const result1 = new ChainCharacters(' Hello  ').trim()
console.assert(result1 === '  Hello  '.trim(), {result: result1, message: "Test 1 No pasado "});
if (result1 === '  Hello  '.trim()) console.log('Test 1 pasado');

const result2 = new ChainCharacters('Hola  ').trim()
console.assert(result2 === 'Hola  '.trim(), {result: result2, message: "Test 2 No pasado "});
if (result2 === 'Hola  '.trim()) console.log('Test 2 pasado');

const result3 = new ChainCharacters('').trim()
console.assert(result3 === ''.trim(), {result: result3, message: "Test 3 No pasado "});
if (result3 === ''.trim()) console.log('Test 3 pasado');