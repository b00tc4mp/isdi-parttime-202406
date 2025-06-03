const ChainCharacters = require(".")

const paragraph = "Se me da fatal construir metodos de string"
const result1 = new ChainCharacters(paragraph).replace("fatal", "genial");
console.assert(result1.value === paragraph.replace("fatal", "genial"), {
  result: result1.value,
  message: "Test 1 No pasado ",
});

const result2 = new ChainCharacters(paragraph).replace("fatal", "mucho peor");
console.assert(result2.value === paragraph.replace("fatal", "mucho peor"), {
  result: result2.value,
  message: "Test 2 No pasado ",
});