

const ChainCharacters = require("./");

const string1 = "Madrid es la mejor ciudad del mundo."

const result1 = new ChainCharacters(string1).slice(1, 3 );
console.assert(result1.value === string1.slice(1, 3),{
  result: result1,
  message: "Test 1 No pasado ",
});