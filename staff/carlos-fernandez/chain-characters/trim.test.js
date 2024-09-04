const ChainCharacters = require(".");

let result1 = new ChainCharacters(" AAAaaAAa   ").trim();
console.assert(result1.value === " AAAaaAAa   ".trim(), {
  result: result1,
  message: "Test 1 no pasado",
});

let result2 = new ChainCharacters(" aaa").trim();
console.assert(result2.value === " aaa".trim(), {
  result: result2,
  message: "Test 2 no pasado",
});

let result3 = new ChainCharacters("aaa ").trim();
console.assert(result3.value === " aaa".trim(), {
  result: result3,
  message: "Test 3 no pasado",
});
