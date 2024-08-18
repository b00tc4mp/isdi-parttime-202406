const ChainCharacters = require(".")

const result1 = new ChainCharacters("Hello").repeat(1);
console.assert(result1 === 'Hello'.repeat(1), {
  result: result1,
  message: "Test 1 No pasado ",
});
const result2 = new ChainCharacters("Hello").repeat(2);
console.assert(result2 === "Hello".repeat(2), {
    result: result2,
  message: "Test 2 No pasado ",
});

const result3 = new ChainCharacters("casoSinIndice").repeat(2);
console.assert(result3 === "casoSinIndice".repeat(2), {
  result: result3,
  message: "Test 3 No pasado ",
});
