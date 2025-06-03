const ChainCharacters = require(".");

let result1 = new ChainCharacters("Juan! Pedro! Pedro!").replace(
  "Juan!",
  "Pedro!"
);
console.assert(result1.value === "Pedro! Pedro! Pedro!", {
  result: result1,
  message: "Test 1 no pasado.",
});
if (result1 === "Pedro! Pedro! Pedro!") console.log("Test 1 pasado");

let result2 = new ChainCharacters("Esta es una prueba").replace("una", "la");
console.assert(result2.value === "Esta es la prueba", {
  result: result2,
  message: "Test 2 no pasado.",
});
if (result2 === "Esta es la prueba") console.log("Test 2 pasado");

let result3 = new ChainCharacters("Nada que hacer").replace("Mucho", "Nada");
console.assert(result3.value === "Nada que hacer", {
  result: result3,
  message: "Test 3 no pasado.",
});
if (result3 === "Nada que hacer") console.log("Test 3 pasado");
