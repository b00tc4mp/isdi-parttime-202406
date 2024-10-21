const ChainCharacters = require(".");

const result1 = new ChainCharacters("El gato es azul").startsWith("El");
console.assert(result1 === true, {
  result: result1,
  message: "Test 1 No pasado",
});

const result2 = new ChainCharacters("El gato es azul").startsWith("gato");
console.assert(result2 === false, {
  result: result2,
  message: "Test 2 No pasado",
});

const result3 = new ChainCharacters("El gato es azul").startsWith(
  "eL GaTO es AzUL"
);
console.assert(result3 === false, {
  result: result3,
  message: "Test 3 no pasado",
});

const result4 = new ChainCharacters(2134).startsWith(21);
console.assert(result4 === true, {
  result: result4,
  message: "Test 4 No pasado",
});

const result5 = new ChainCharacters(true).startsWith("tr");
console.assert(result5 === true, {
  result: result5,
  message: "Test 5 No pasado",
});
