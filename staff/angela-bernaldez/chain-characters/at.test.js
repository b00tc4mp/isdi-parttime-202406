const ChainCharacters = require(".")

const result1 = new ChainCharacters("Hello").at(2);
console.assert(result1.value === "Hello".at(2), {
  result: result1.value,
  message: "Test 1 No pasado ",
});

const result2 = new ChainCharacters("Hola").at(-1);
console.assert(result2.value === "Hola".at(-1), {
  result: result2.value,
  message: "Test 2 No pasado ",
});

const result3 = new ChainCharacters("casoSinIndice").at(null);
console.assert(result3.value === "casoSinIndice".at(null), {
  result: result3.value,
  message: "Test 3 No pasado ",
});