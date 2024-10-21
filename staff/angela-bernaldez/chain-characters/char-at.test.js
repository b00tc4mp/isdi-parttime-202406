const ChainCharacters = require(".");

const result1 = new ChainCharacters("Hello").charAt(2);
console.assert(result1.value === "Hello".charAt(2), {
  result: result1.value,
  message: "Test 1 No pasado ",
});

const result2 = new ChainCharacters("Hola").charAt(2);
console.assert(result2.value === "Hola".charAt(2), {
  result: result2.value,
  message: "Test 2 No pasado ",
});

const result3 = new ChainCharacters("casoSinIndice").charAt(null);
console.assert(result3.value === "casoSinIndice".charAt(null), {
  result: result3.value,
  message: "Test 3 No pasado ",
});

const result4 = new ChainCharacters("casoSinIndice").charAt("");
console.assert(result4.value === "casoSinIndice".charAt(0), {
  result: result4.value,
  message: "Test 4 No pasado ",
});

const result5 = new ChainCharacters("casoSinIndice").charAt(undefined);
console.assert(result5.value === "casoSinIndice".charAt(0), {
  result: result5.value,
  message: "Test 5 No pasado ",
});

const result6 = new ChainCharacters("casoFueraDeRango").charAt(99);
console.assert(result6.value === "casoFueraDeRango".charAt(99), {
  result: result6.value,
  message: "Test 6 No pasado ",
});