const ChainCharacters = require(".");

const result1 = new ChainCharacters('a').concat('b');
console.assert(result1.value === 'a'.concat('b'), {result: result1, message: "Test 1 No pasado "});
if (result1.value === 'a'.concat('b')) console.log('Test 1 pasado');

const result2 = new ChainCharacters('a').concat('b', 'c')
console.assert(result2.value === 'a'.concat('b','c'), {result: result2, message: "Test 2 No pasado "});
if (result2.value === 'a'.concat('b','c')) console.log('Test 2 pasado');

const result3 = new ChainCharacters('hola ').concat('mundo ', 'cruel')
console.assert(result3.value === 'hola '.concat('mundo ', 'cruel'), {result: result3, message: "Test 3 No pasado "});
if (result3.value === 'hola '.concat('mundo ', 'cruel')) console.log('Test 3 pasado');