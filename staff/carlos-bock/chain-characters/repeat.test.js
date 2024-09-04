
const ChainCharacters = require("./");

const string1= "Hola! "

const result1 = new ChainCharacters(string1).repeat(3);
console.assert(result1.value === string1.repeat(3),{
  result: result1,
  message: "Test 1 No pasado ",
});