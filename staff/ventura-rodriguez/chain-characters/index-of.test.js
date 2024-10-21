const ChainCharacters = require(".");

const result1 = new ChainCharacters("This is a beautiful world").indexOf("w");
console.assert(result1 === "This is a beautiful world".indexOf("w"), {
  result: result1,
  message: "Test 1 no pasado",
});

const result2 = new ChainCharacters("Maybe the world ends tomorrow").indexOf(
  "o"
);
console.assert(result2 === "Maybe the world ends tomorrow".indexOf("o"), {
  result: result2,
  message: "Test 2 no pasado",
});

const result3 = new ChainCharacters("This is a beautiful world").indexOf(
  "beautiful"
);
console.assert(result3 === "This is a beautiful world".indexOf("beautiful"), {
  result: result3,
  message: "Test 3 no pasado",
});

const result4 = new ChainCharacters("This is a beautiful world").indexOf("X");
console.assert(result4 === "This is a beautiful world".indexOf("X"), {
  result: result4,
  message: "Test 4 no pasado",
});
