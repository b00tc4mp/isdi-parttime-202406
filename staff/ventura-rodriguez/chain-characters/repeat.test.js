const ChainCharacters = require(".");

const result1 = new ChainCharacters("a").repeat(3);
console.assert(result1.value === "a".repeat(3), {
  result: result1,
  message: "Test 1 No pasado",
});

const result2 = new ChainCharacters("Hello").repeat(5);
console.assert(result2.value === "Hello".repeat(5), {
  result: result2,
  message: "Test 2 No pasado",
});
