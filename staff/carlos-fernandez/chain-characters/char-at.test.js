const ChainCharacters = require(".");

const result1 = new ChainCharacters("Hello").charAt(2);
console.assert(result1.value === "Hello".charAt(2), {
  result: result1,
  message: "Test 1 No pasado ",
});
if (result1 === "Hello".charAt(2)) console.log("Test 1 pasado");

const result2 = new ChainCharacters("Hola").charAt(2);
console.assert(result2.value === "Hola".charAt(2), {
  result: result2,
  message: "Test 2 No pasado ",
});
if (result2 === "Hola".charAt(2)) console.log("Test 2 pasado");

const result3 = new ChainCharacters("casoSinIndice").charAt(null);
console.assert(result3.value === "casoSinIndice".charAt(null), {
  result: result3,
  message: "Test 3 No pasado ",
});
if (result3 === "casoSinIndice".charAt(null)) console.log("Test 3 pasado");

const result4 = new ChainCharacters("casoSinIndice").charAt(0);
console.assert(result4.value === "casoSinIndice".charAt(0), {
  result: result4,
  message: "Test 4 No pasado ",
});
if (result4 === "casoSinIndice".charAt(0)) console.log("Test 4 pasado");

const result5 = new ChainCharacters("casoSinIndice").charAt("");
console.assert(result5.value === "casoSinIndice".charAt(""), {
  result: result5,
  message: "Test 5 No pasado ",
});
if (result5 === "casoSinIndice".charAt(0)) console.log("Test 5 pasado");

const result6 = new ChainCharacters("casoFueraDeRango").charAt(99);
console.assert(result6.value === "casoFueraDeRango".charAt(99), {
  result: result6,
  message: "Test 6 No pasado ",
});
if (result6 === "casoFueraDeRango".charAt(99)) console.log("Test 6 pasado");
