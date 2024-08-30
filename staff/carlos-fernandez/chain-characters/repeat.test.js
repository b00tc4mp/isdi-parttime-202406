const ChainCharacters = require(".");

const result1 = new ChainCharacters("Pedro! ").repeat(3);
console.assert(result1.value === "Pedro! ".repeat(3), {
  result: result1,
  message: "Test 1 no pasado.",
});

const result2 = new ChainCharacters("Pim pam toma Lacasitos").repeat(null);
console.assert(result2 === "Pim pam toma Lacasitos".repeat(null), {
  result: result2,
  message: "Test 2 no pasado.",
});

const result3 = new ChainCharacters("Pedro! ").repeat("historias");
console.assert(result3 === "Pedro! ".repeat("historias"), {
  result: result3,
  message: "Test 3 no pasado.",
});
