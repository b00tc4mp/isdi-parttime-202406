const ChainCharacters = require("./contructor.js");

const result1 = new ChainCharacters("hello world");
console.assert(result1.value === "hello world" && result1.length === 11, {
  result: result1,
  message: "Test 1 No pasado",
});

const result2 = new ChainCharacters("happy coding");
console.assert(result2.value === "happy coding" && result2.length === 12, {
  result: result2,
  message: "Test 2 No pasado",
});
