const ChainCharacters = require(".")

const paragraph = "Se me da fatal construir metodos de string"
const result1 = new ChainCharacters(paragraph).replace("fatal", "genial");
console.assert(result1 === paragraph.replace("fatal", "genial"), {
  result: result1,
  message: "Test 1 No pasado ",
});

const result2 = new ChainCharacters(paragraph).replace("fatal", "mucho peor");
console.assert(result2 === paragraph.replace("fatal", "mucho peor"), {
  result: result2,
  message: "Test 2 No pasado ",
});