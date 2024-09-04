const ChainCharacters = require(".");

const result1 = new ChainCharacters("Hello").at(2);
console.assert(result1.value === "Hello".at(2), { result: result1, message: "Test 1 No pasado "});
if (result1.value === "Hello".at(2)) console.log('Test 1 pasado');

const result2 = new ChainCharacters("Hola").at(-1);
console.assert(result2.value === "Hola".at(-1), {result: result2, message: "Test 2 No pasado "});
if (result2.value === "Hola".at(-1)) console.log('Test 2 pasado');

const result3 =  new ChainCharacters("casoSinIndice").at(null);
console.assert(result3 === "casoSinIndice".at(null), {result: result3, message: "Test 3 No pasado "});
if (result3 === "casoSinIndice".at(null)) console.log('Test 3 pasado');

const result4 = new ChainCharacters("Hola").at(-2);
console.assert(result4.value === "Hola".at(-2), {result: result4, message: "Test 4 No pasado "});
if (result4.value === "Hola".at(-2)) console.log('Test 4 pasado');
