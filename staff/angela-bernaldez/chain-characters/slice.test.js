const ChainCharacters = require(".")

const paragraph = "Quiero la reina no un cuatro de copas"
const result1 = new ChainCharacters(paragraph).slice(10);
console.assert(result1 === paragraph.slice(10), {
  result: result1,
  message: "Test 1 No pasado ",
});

const result2 = new ChainCharacters("This is a test").slice(10, 12);
console.assert(result2 === "This is a test".slice(10, 12), {
  result: result2,
  message: "Test 2 No pasado ",
});

const result3 = new ChainCharacters("This is a test").slice(12, 10);
console.assert(result3 === "This is a test".slice(12, 10), {
  result: result3,
  message: "Test 3 No pasado ",
});

const result4 = new ChainCharacters(paragraph).slice(-10, -2);
console.assert(result4 === paragraph.slice(-10, -2), {
  result: result4,
  message: "Test 4 No pasado ",
});

const result5 = new ChainCharacters(paragraph).slice(10, 10);
console.assert(result5 === paragraph.slice(10, 10), {
  result: result5,
  message: "Test 5 No pasado ",
});

const result6 = new ChainCharacters(paragraph).slice(-1, -10);
console.assert(result6 === paragraph.slice(-1, -10), {
  result: result6,
  message: "Test 6 No pasado ",
});

const result7 = new ChainCharacters(paragraph).slice();
console.assert(result7 === paragraph.slice(), {
  result: result7,
  message: "Test 7 No pasado ",
});