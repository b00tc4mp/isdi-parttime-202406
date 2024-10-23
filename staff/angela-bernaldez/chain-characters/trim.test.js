const ChainCharacters = require(".")

const result1 = new ChainCharacters(" hello wooooorld     ").trim();
console.assert(result1.value === " hello wooooorld     ".trim(), {
  result: result1.value,
  message: "Test 1 No pasado",
});

const result2 = new ChainCharacters("         HOLA").trim();
console.assert(result2.value === "         HOLA".trim(), {
  result: result2.value,
  message: "Test 2 No pasado",
});

const result3 = new ChainCharacters("ADIOS        ").trim();
console.assert(result3.value === "ADIOS        ".trim(), {
  result: result3.value,
  message: "Test 3 No pasado",
});