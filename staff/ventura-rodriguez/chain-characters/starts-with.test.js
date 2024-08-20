const ChainCharacters = require(".");

const result1 = new ChainCharacters("Hola mundo").startsWith("Hola");
console.assert(result1 === "Hola mundo".startsWith("Hola"), {
  result: result1,
  message: "Test 1 no pasado",
});

const result2 = new ChainCharacters("Test the function").startsWith("Test");
console.assert(result2 === "Test the function".startsWith("Test"), {
  result: result2,
  message: "Test 2 no pasado",
});

const result3 = new ChainCharacters("Test the function").startsWith("Hola");
console.assert(result3 === "Test the function".startsWith("Hola"), {
  result: result3,
  message: "Test 3 no pasado",
});
