const ChainCharacters = require(".");

const result1 = new ChainCharacters("Hello").includes("H");
console.assert(result1 === "Hello".includes("H"), {result: result1, message: "Test 1 No pasado "});
if (result1) console.log('Test 1 pasado');

const result2 = new ChainCharacters("Hola").includes("Ho");
console.assert(result2 === "Hola".includes("Ho"), {result: result2, message: "Test 2 No pasado "});
if (result2) console.log('Test 2 pasado');

const result3 = new ChainCharacters("casoSinIndice").includes(null);
console.assert(result3 === "casoSinIndice".includes(null), {result: result3, message: "Test 3 No pasado "});
if (!result3) console.log('Test 3 pasado');

const result4 = new ChainCharacters("world").includes("wr");
console.assert(result4 === "world".includes("wr"), {result: result4, message: "Test 4 No pasado "});
if (!result4) console.log('Test 4 pasado');