const ChainCharacters = require(".");

const result1 = new ChainCharacters('hola').toUpperCase();
console.assert(result1.value === "hola".toUpperCase(), { result: result1.value, message: "Test 1 No pasado "});
if (result1.value === "hola".toUpperCase()) console.log('Test 1 pasado');

const result2 = new ChainCharacters('Hola').toUpperCase();
console.assert(result2.value === "Hola".toUpperCase(), { result: result2.value, message: "Test 2 No pasado "});
if (result2.value === "Hola".toUpperCase()) console.log('Test 2 pasado');

const result3 = new ChainCharacters('HolAA').toUpperCase();
console.assert(result3.value === "HoLAA".toUpperCase(), { result: result3.value, message: "Test 3 No pasado "});
if (result3.value === "HoLAA".toUpperCase()) console.log('Test 3 pasado');