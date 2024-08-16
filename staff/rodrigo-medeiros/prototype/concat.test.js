const ChainCharacters = require(".");
const result1 = new ChainCharacters("Buenos ").concat("dias!");
console.assert(result1 === "Buenos ".concat("dias!"), {result: result1, message: "Test 1 No pasado."});
const result2 = new ChainCharacters("Tudo ").concat(" ","bem?");
console.assert(result2 === "Tudo ".concat(" ","bem?"), {result: result2, message: "Test 2 No pasado."});
const result3 = new ChainCharacters("Tenho ").concat("2 ","hermanos");
console.assert(result3 === "Tenho ".concat("2 ","hermanos"), {result: result3, message: "Test 3 No pasado."});