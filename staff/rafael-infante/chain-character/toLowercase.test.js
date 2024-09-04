const ChainCharacters = require(".");

const result1 = new ChainCharacters('HOLA').toLowerCase();
console.assert(result1.value === 'HOLA'.toLowerCase(), { result: result1.value, message: "Test 1 No pasado ",});
if (result1.value === 'HOLA'.toLowerCase()) console.log('Test 1 pasado');

const result2 = new ChainCharacters('hOLA').toLowerCase();
console.assert(result2.value === 'hOLA'.toLowerCase(), { result: result2.value, message: "Test 2 No pasado ",});
if (result2.value === 'hOLA'.toLowerCase()) console.log('Test 2 pasado');

const result3 = new ChainCharacters('HOlaaa').toLowerCase();
console.assert(result3.value === 'HOlaaa'.toLowerCase(), { result: result3.value, message: "Test 3 No pasado ",});
if (result3.value === 'HOlaaa'.toLowerCase()) console.log('Test 3 pasado');