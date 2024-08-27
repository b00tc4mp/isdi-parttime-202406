const ChainCharacters = require(".");

const result1 = new ChainCharacters("AgüIta freskiTa").toLowerCase();
console.assert(result1 === "AgüIta freskiTa".toLowerCase(), {
  result: result1,
  message: "Test 1 No pasado ",
});

const result2 = new ChainCharacters("DEMON slayer").toLowerCase();
console.assert(result2 === "DEMON slayer".toLowerCase(), {
  result: result1,
  message: "Test 1 No pasado ",
});

const result3 = new ChainCharacters("JavasCripT ES DiveRtido").toLowerCase();
console.assert(result3 === "JavasCripT ES DiveRtido".toLowerCase(), {
  result: result1,
  message: "Test 1 No pasado ",
});
