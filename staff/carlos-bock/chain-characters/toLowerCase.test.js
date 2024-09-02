
const ChainCharacters = require("./");

const oldString = "THIS IS A STRING WITH UPPERCASE";
const oldString2 = "This Is a Test";


const result1 = new ChainCharacters(oldString).toLowerCase();
console.assert(result1.value === oldString.toLowerCase(),{
  result: result1,
  message: "Test 1 No pasado ",
});

const result2 = new ChainCharacters(oldString2).toLowerCase();
console.assert(result2.value === oldString2.toLowerCase(), {
  result: result2,
  message: "Test 2 No pasado ",
});


