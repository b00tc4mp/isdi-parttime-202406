const ChainCharacters = require("./");

const result1 = new ChainCharacters("Hello").charAt(2);
console.assert(result1 === "Hello".charAt(2), { result: result1, message: "Test 1 No pasado " })

const result2 = new ChainCharacters("Hola").charAt(2);
console.assert(result2 === "Hola".charAt(2), { result: result2, message: "Test 2 No pasado " })

const result3 = new ChainCharacters("casosSinIndice").charAt(null);
console.assert(result3 === "casoSinIndice".charAt(null), { result: result3, message: "Test 3 No pasado " })
