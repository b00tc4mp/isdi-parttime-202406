const ChainCharacters = require(".")

const result1 = new ChainCharacters("Hello world, this is me").endsWith("me");
console.assert(result1 === "Hello world, this is me".endsWith("me"), {
  result: result1,
  message: "Test 1 No pasado ",
});

const result2 = new ChainCharacters("Hello world, this is me").endsWith("world", 11);
console.assert(result2 === "Hello world, this is me".endsWith("world", 11), {
  result: result2,
  message: "Test 2 No pasado ",
});

const result3 = new ChainCharacters("Hello world, this is me").endsWith("world", 14);
console.assert(result3 === "Hello world, this is me".endsWith("world", 14), {
  result: result3,
  message: "Test 3 No pasado ",
});

const result4 = new ChainCharacters("My name is Angela").endsWith(undefined);
console.assert(result4 === "My name is Angela".endsWith(undefined), {
  result: result4,
  message: "Test 4 No pasado ",
});

const result5 = new ChainCharacters("My name is Angela").endsWith("");
console.assert(result5 === "My name is Angela".endsWith(""), {
  result: result5,
  message: "Test 5 No pasado ",
});

const result6 = new ChainCharacters("My name is Angela").endsWith(null);
console.assert(result6 === "My name is Angela".endsWith(null), {
  result: result6,
  message: "Test 6 No pasado ",
});