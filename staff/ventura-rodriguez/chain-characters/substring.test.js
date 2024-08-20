const ChainCharacters = require(".");

const result1 = new ChainCharacters("que tal como estas").substring(5);
console.assert(result1 === "que tal como estas".substring(5), {
  result: result1,
  message: "Test 1 no pasado",
});

const result2 = new ChainCharacters("lalala").substring(3);
console.assert(
  result2 === "lalala".substring(3),

  {
    result: result2,
    message: "Test 2 no pasado",
  }
);
