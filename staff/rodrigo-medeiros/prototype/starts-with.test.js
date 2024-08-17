const ChainCharacters = require(".");

const result1 = new ChainCharacters("Hello").startsWith("H", 0);
console.assert(result1 === "Hello".startsWith("H"), {
  result: result1,
  message: "Test 1 No pasado ",
});

const result2 = new ChainCharacters("Hola").startsWith("la", 0);
console.assert(result2 === "Hola".startsWith("la"), {
  result: result2,
  message: "Test 2 No pasado ",
});

const result3 = new ChainCharacters("casoSinIndice").startsWith(null, 0);
console.assert(result3 === "casoSinIndice".startsWith(null), {
  result: result3,
  message: "Test 3 No pasado ",
});
const result4 = new ChainCharacters("world").startsWith("wr", 0);
console.assert(result4 === "world".startsWith("wr"), {
  result: result4,
  message: "Test 4 No pasado ",
});