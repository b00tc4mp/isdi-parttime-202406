const ChainCharacters = require(".");

const result1 = new ChainCharacters("a").concat("b");
console.assert(result1.value === "a".concat("b"), {
  result: result1,
  message: "Test 1 no pasado",
});

const result2 = new ChainCharacters("a").concat("b", "c");
console.assert(result2.value === "a".concat("b", "c"), {
  result: result2,
  message: "Test 2 no pasado",
});

const result3 = new ChainCharacters("a").concat("b", "c", "d", "e");
console.assert(result3.value === "a".concat("b", "c", "d", "e"), {
  result: result3,
  message: "Test 3 no pasado",
});
