const ChainCharacters = require(".");

const result1 = new ChainCharacters("Emisario ").concat("gorgonita");
console.assert(result1.value === "Emisario ".concat("gorgonita"), {
  result: result1,
  message: "Test 1 no pasado",
});

const result2 = new ChainCharacters("Ash ").concat("Ketchum");
console.assert(result2.value === "Ash ".concat("Ketchum"), {
  result: result2,
  message: "Test 2 no pasado",
});

const result3 = new ChainCharacters("Pueblo").concat("Ketchum");
console.assert(result3.value === "Pueblo".concat("Ketchum"), {
  result: result3,
  message: "Test 3 no pasado",
});
