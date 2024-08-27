const ChainCharacters = require(".")

const result1 = new ChainCharacters("AnGeLA").toUpperCase();
console.assert(result1 === "AnGeLA".toUpperCase(), {
  result: result1,
  message: "Test 1 No pasado",
});

const result2 = new ChainCharacters("all lowercase").toUpperCase();
console.assert(result2 === "all lowercase".toUpperCase(), {
  result: result2,
  message: "Test 2 No pasado",
});

const result3 = new ChainCharacters("AuuuAAAAA").toUpperCase();
console.assert(result3 === "AuuuAAAAA".toUpperCase(), {
  result: result3,
  message: "Test 3 No pasado",
});

const result4 = new ChainCharacters("HELLO woRlD 1111").toUpperCase();
console.assert(result4 === "HELLO woRlD 1111".toUpperCase(), {
  result: result4,
  message: "Test 4 No pasado",
});