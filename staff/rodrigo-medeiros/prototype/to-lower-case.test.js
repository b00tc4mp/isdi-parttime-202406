const ChainCharacters = require(".");
const result1 = new ChainCharacters('HELLO WORLD').toLowerCase(this);
console.assert(result1 === "HELLO WORLD".toLowerCase(), {
  result: result1,
  message: "Test 1 No pasado"});

const result2 = new ChainCharacters('HELLO world!').toLowerCase(this);
console.assert(result2 === "HELLO world!".toLowerCase(), {
  result: result2,
  message: "Test 2 No pasado"});

const result3 = new ChainCharacters('hello WORLD').toLowerCase(this);
console.assert(result3 === "hello WORLD".toLowerCase(), {
  result: result3,
  message: "Test 3 No pasado"});
