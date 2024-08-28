const ChainCharacters = require(".")

const result1 = new ChainCharacters("AnGeLA").toLowerCase();
console.assert(result1.value === "AnGeLA".toLowerCase(), {
  result: result1.value,
  message: "Test 1 No pasado",
});

const result2 = new ChainCharacters("all lowercase").toLowerCase();
console.assert(result2.value === "all lowercase".toLowerCase(), {
  result: result2.value,
  message: "Test 2 No pasado",
});

const result3 = new ChainCharacters("AuuuAAAAA").toLowerCase();
console.assert(result3.value === "AuuuAAAAA".toLowerCase(), {
  result: result3.value,
  message: "Test 3 No pasado",
});

const result4 = new ChainCharacters("HELLO world this Is A TesT").toLowerCase();
console.assert(result4.value === "HELLO world this Is A TesT".toLowerCase(), {
  result: result4.value,
  message: "Test 4 No pasado",
});