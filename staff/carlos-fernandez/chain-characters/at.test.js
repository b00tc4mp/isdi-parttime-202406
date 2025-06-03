const ChainCharacters = require(".");

const result1 = new ChainCharacters("Hello").at(2);
console.assert(result1.value === "Hello".at(2), {
  result: result1,
  message: "Test 1 No pasado ",
});

const result2 = new ChainCharacters("Hola").at(2);
console.assert(result2.value === "Hola".at(2), {
  result: result2,
  message: "Test 2 No pasado ",
});

const result3 = new ChainCharacters("casoSinIndice").at(null);
console.assert(result3 === "casoSinIndice".at(null), {
  result: result3,
  message: "Test 3 No pasado ",
});

const result4 = new ChainCharacters("casoSinIndice").at(0);
console.assert(result4.value === "casoSinIndice".at(0), {
  result: result4,
  message: "Test 4 No pasado ",
});

const result5 = new ChainCharacters("casoFueraDeRango").at(99);
console.assert(result5 === "casoFueraDeRango".at(99), {
  result: result5,
  message: "Test 5 No pasado ",
});
