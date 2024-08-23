const ChainCharacters = require(".");

const result1 = new ChainCharacters("Emisario ").concat("gorgonita");
console.assert(result1 === "Emisario ".concat("gorgonita"), {
  result: result1,
  message: "Test 1 no pasado",
});
if (result1 === "Emisario ".concat("gorgonita")) console.log("Test 1 pasado");

const result2 = new ChainCharacters("Ash ").concat("Ketchum");
console.assert(result2 === "Ash ".concat("Ketchum"), {
  result: result2,
  message: "Test 2 no pasado",
});
if (result2 === "Ash ".concat("Ketchum")) console.log("Test 2 pasado");

const result3 = new ChainCharacters("Pueblo").concat("Ketchum");
console.assert(result3 === "Pueblo".concat("Ketchum"), {
  result: result3,
  message: "Test 3 no pasado",
});
if (result3 === "Pueblo".concat("Ketchum")) console.log("Test 3 pasado");
