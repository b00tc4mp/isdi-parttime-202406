const ChainCharacters = require(".");

const result1 = new ChainCharacters("Pikachu").endsWith("u");
console.assert(result1 === "Pikachu".endsWith("u"), {
  result: result1,
  message: "Test 1 no pasado",
});

const result2 = new ChainCharacters("Ash Ketchum").endsWith("Ketchum");
console.assert(result2 === "Ash Ketchum".endsWith("Ketchum"), {
  result: result2,
  message: "Test 2 no pasado",
});

const result3 = new ChainCharacters("Prof Oak").endsWith("m");
console.assert(result3 === "Prof Oak".endsWith("m"), {
  result: result3,
  message: "Test 3 no pasado",
});
