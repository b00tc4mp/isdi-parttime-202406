const ChainCharacters = require(".");
debugger

const result1 = new ChainCharacters("hello world").toUpperCase(this);
console.assert(result1 === "hello world".toUpperCase(), {
  result: result1,
  message: "Test 1 No pasado",
});

const result2 = new ChainCharacters("HELLO world!").toUpperCase(this);
console.assert(result2 === "HELLO world!".toUpperCase(), {
  result: result2,
  message: "Test 2 No pasado",
});

const result3 = new ChainCharacters("hello WORLD").toUpperCase(this);
console.assert(result3 === "hello WORLD".toUpperCase(), {
  result: result3,
  message: "Test 3 No pasado",
});