const ChainCharacters = require(".");

const result1 = new ChainCharacters('HOLA').toLowerCase();
console.assert(result1 === 'HOLA'.toLowerCase(), { result: result1, message: "Test 1 No pasado ",});
if (result1 === 'HOLA'.toLowerCase()) console.log('Test 1 pasado');

const result2 = new ChainCharacters('hOLA').toLowerCase();
console.assert(result2 === 'hOLA'.toLowerCase(), { result: result2, message: "Test 2 No pasado ",});
if (result2 === 'hOLA'.toLowerCase()) console.log('Test 2 pasado');

const result3 = new ChainCharacters('HOlaaa').toLowerCase();
console.assert(result3 === 'HOlaaa'.toLowerCase(), { result: result3, message: "Test 3 No pasado ",});
if (result3 === 'HOlaaa'.toLowerCase()) console.log('Test 3 pasado');