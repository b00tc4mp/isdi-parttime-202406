const ChainCharacters = require(".")

const result1 = new ChainCharacters(" hello wooooorld     ").trim();
console.assert(result1 === " hello wooooorld     ".trim(), {
  result: result1,
  message: "Test 1 No pasado",
});

const result2 = new ChainCharacters("         HOLA").trim();
console.assert(result2 === "         HOLA".trim(), {
  result: result2,
  message: "Test 2 No pasado",
});

const result3 = new ChainCharacters("ADIOS        ").trim();
console.assert(result3 === "ADIOS        ".trim(), {
  result: result3,
  message: "Test 3 No pasado",
});