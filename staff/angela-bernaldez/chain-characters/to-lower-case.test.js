const ChainCharacters = require(".")

const result1 = new ChainCharacters("AnGeLA").toLowerCase();
console.assert(result1 === "AnGeLA".toLowerCase(), {
  result: result1,
  message: "Test 1 No pasado",
});

const result2 = new ChainCharacters("all lowercase").toLowerCase();
console.assert(result2 === "all lowercase".toLowerCase(), {
  result: result2,
  message: "Test 2 No pasado",
});

const result3 = new ChainCharacters("AuuuAAAAA").toLowerCase();
console.assert(result3 === "AuuuAAAAA".toLowerCase(), {
  result: result3,
  message: "Test 3 No pasado",
});

const result4 = new ChainCharacters("HELLO world this Is A TesT").toLowerCase();
console.assert(result4 === "HELLO world this Is A TesT".toLowerCase(), {
  result: result4,
  message: "Test 4 No pasado",
});