
const ChainCharacters = require("./");

const oldString = "this is a lower case string";
const oldString2 = "This Is a Test";


const result1 = new ChainCharacters(oldString).toUpperCase();
console.assert(result1.value === oldString.toUpperCase(),{ 
  result: result1, 
  message: "Test 1 No pasado ",
});

const result2 = new ChainCharacters(oldString2).toUpperCase();
console.assert(result2.value === oldString2.toUpperCase(), {
  result: result2,
  message: "Test 2 No pasado ",
});



