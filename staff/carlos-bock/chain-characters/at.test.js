const ChainCharacters = require("./");

const result1 = new ChainCharacters("Hello").at(2);
console.assert(result1 === "Hello".at(2), {
  result: result1,
  message: "Test 1 No pasado ",
});

const result2 = new ChainCharacters("Hola").at(-1);
console.assert(result2 === "Hola".at(-1), {
  result: result2,
  message: "Test 2 No pasado ",
});

const result3 = new ChainCharacters("casoSinIndice").at(null);
console.assert(result3 === "casoSinIndice".at(null), {
  result: result3,
  message: "Test 3 No pasado ",
});