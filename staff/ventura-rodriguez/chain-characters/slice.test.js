const ChainCharacters = require(".");

const result1 = new ChainCharacters("Hola mundo").slice(4);
console.assert(result1.value === "Hola mundo".slice(4), {
  result: result1,
  message: "Test 1 no pasado",
});

const result2 = new ChainCharacters("que tal como estas").slice(10);
console.assert(result2.value === "que tal como estas".slice(10), {
  result: result2,
  message: "Test 2 no pasado",
});
