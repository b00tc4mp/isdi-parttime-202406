const ChainCharacters = require(".");

const result1 = new ChainCharacters("   belen   ").trim();
console.assert(result1 === "   belen   ".trim(), {
  result: result1,
  message: "Test 1 no pasado",
});

const result2 = new ChainCharacters("   no     se").trim();
console.assert(result2 === "   no     se".trim(), {
  result: result2,
  message: "Test 2 no pasado",
});

const result3 = new ChainCharacters("Hola como estás?").trim();
console.assert(result3 === "Hola como estás?".trim(), {
  result: result3,
  message: "Test 3 no pasado",
});
