
const ChainCharacters = require("./");

//const oldString = "    Este es un string    ";

const result1 = new ChainCharacters("    Este es un string    ").trim();
console.assert(result1.value === "    Este es un string    ".trim(),{
  result: result1,
  message: "Test 1 No pasado ",
});