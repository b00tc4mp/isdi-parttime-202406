const ChainCharacters = require(".")

const result1 = new ChainCharacters("AnGeLA").toUpperCase();
console.assert(result1.value === "AnGeLA".toUpperCase(), {
  result: result1.value,
  message: "Test 1 No pasado",
});

const result2 = new ChainCharacters("all lowercase").toUpperCase();
console.assert(result2.value === "all lowercase".toUpperCase(), {
  result: result2.value,
  message: "Test 2 No pasado",
});

const result3 = new ChainCharacters("AuuuAAAAA").toUpperCase();
console.assert(result3.value === "AuuuAAAAA".toUpperCase(), {
  result: result3.value,
  message: "Test 3 No pasado",
});

const result4 = new ChainCharacters("HELLO woRlD 1111").toUpperCase();
console.assert(result4.value === "HELLO woRlD 1111".toUpperCase(), {
  result: result4.value,
  message: "Test 4 No pasado",
});