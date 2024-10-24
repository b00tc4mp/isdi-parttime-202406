
const ChainCharacter = require(".")

const result1 = new ChainCharacter("Hello").charAt(2);
console.assert(result1 === "Hello".charAt(2), {
  result: result1,
  message: "Test 1 No pasado ",
});

const result2 = new ChainCharacter("Hola").charAt(2);
console.assert(result2 === "Hola".charAt(2), {
  result: result2,
  message: "Test 2 No pasado ",
});

const result3 = new ChainCharacter("casoSinIndice", null);
console.assert(result3 === "casoSinIndice".charAt(null), {
  result: result3,
  message: "Test 3 No pasado ",
});

const result4 = new ChainCharacter("casoSinIndice").charAt();
console.assert(result4 === "casoSinIndice".charAt(0), {
  result: result4,
  message: "Test 4 No pasado ",
});

const result5 = new ChainCharacter("casoSinIndice").charAt(undefined);
console.assert(result5 === "casoSinIndice".charAt(0), {
  result: result5,
  message: "Test 5 No pasado ",
});

const result6 = new ChainCharacter("casoFueraDeRango").charAt(99);
console.assert(result6 === "casoFueraDeRango".charAt(99), {
  result: result6,
  message: "Test 6 No pasado ",});