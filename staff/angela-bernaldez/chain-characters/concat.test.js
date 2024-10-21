const ChainCharacters = require(".")

const result1 = new ChainCharacters("Hello").concat("world");
console.assert(result1.value === "Hello".concat("world"), {
  result: result1.value,
  message: "Test 1 No pasado ",
});

const result2 = new ChainCharacters("Hello").concat(" ", "world");
console.assert(result2.value === "Hello".concat(" ", "world"), {
  result: result2.value,
  message: "Test 2 No pasado ",
});

const result3 = new ChainCharacters("My").concat(" ", "name", " ", "is", " ", "Angela");
console.assert(result3.value === "My".concat(" ", "name", " ", "is", " ", "Angela"), {
  result: result3.value,
  message: "Test 3 No pasado ",
});

const result4 = new ChainCharacters("2023").concat(718);
console.assert(result4.value === "2023".concat(718), {
  result: result4.value,
  message: "Test 4 No pasado ",
});

const result5 = new ChainCharacters("2023").concat(undefined);
console.assert(result5.value === "2023".concat(undefined), {
  result: result5.value,
  message: "Test 5 No pasado ",
});

const result6 = new ChainCharacters("2023").concat(null);
console.assert(result6.value === "2023".concat(null), {
  result: result6.value,
  message: "Test 6 No pasado ",
});