const ChainCharacters = require(".");

const result1 = new ChainCharacters("Cats are the best!").endsWith("best!");
console.assert(result1 === "Cats are the best!".endsWith("best!"), {
  result: result1,
  message: "Test 1 no pasado",
});

const result2 = new ChainCharacters("Cats are the best!").endsWith("best", 17);
console.assert(result2 === "Cats are the best!".endsWith("best", 17), {
  result: result2,
  message: "Test 2 no pasado",
});

const result3 = new ChainCharacters("Cats are the best!").endsWith("best");
console.assert(result3 === "Cats are the best!".endsWith("best"), {
  result: result3,
  message: "Test 3 no pasado",
});
