const ChainCharacters = require(".")

const result1 = new ChainCharacters("Hello world, this is me").startsWith("Hello");
console.assert(result1 === "Hello world, this is me".startsWith("Hello"), {
  result: result1,
  message: "Test 1 No pasado ",
});

const result2 = new ChainCharacters("Hello world, this is me").startsWith("world", 6);
console.assert(result2 === "Hello world, this is me".startsWith("world", 6), {
  result: result2,
  message: "Test 2 No pasado ",
});

const result3 = new ChainCharacters("Hello world, this is me").startsWith("world", 10);
console.assert(result3 === "Hello world, this is me".endsWith("world", 10), {
  result: result3,
  message: "Test 3 No pasado ",
});

const result4 = new ChainCharacters("My name is Angela").startsWith(undefined);
console.assert(result4 === "My name is Angela".startsWith(undefined), {
  result: result4,
  message: "Test 4 No pasado ",
});

const result5 = new ChainCharacters("My name is Angela").startsWith("");
console.assert(result5 === "My name is Angela".startsWith(""), {
  result: result5,
  message: "Test 5 No pasado ",
});

const result6 = new ChainCharacters("My name is Angela").startsWith(null);
console.assert(result6 === "My name is Angela".startsWith(null), {
  result: result6,
  message: "Test 6 No pasado ",
});