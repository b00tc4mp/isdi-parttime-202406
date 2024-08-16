const ChainCharacters = require(".");

const result1 = new ChainCharacters("Hello").endsWith("o");
console.assert(result1 === "Hello".endsWith("o"), {
  result: result1,
  message: "Test 1 No pasado ",
});
const result2 = new ChainCharacters("Hola").endsWith("la");
console.assert(result2 === "Hola".endsWith("la"), {
  result: result2,
  message: "Test 2 No pasado ",
});

const result3 = new ChainCharacters("casoSinIndice").endsWith(null);
console.assert(result3 === "casoSinIndice".endsWith(null), {
  result: result3,
  message: "Test 3 No pasado ",
});
const result4 = new ChainCharacters("world").endsWith("rd");
console.assert(result4 === "world".endsWith("rd"), {
  result: result4,
  message: "Test 4 No pasado ",
});