const ChainCharacters = require(".");

const result1 = new ChainCharacters("AguIta freskiTa").toUpperCase();
console.assert(result1.value === "AguIta freskiTa".toUpperCase(), {
  result: result1,
  message: "Test 1 No pasado ",
});

const result2 = new ChainCharacters("DEMON slayer").toUpperCase();
console.assert(result2.value === "DEMON slayer".toUpperCase(), {
  result: result1,
  message: "Test 1 No pasado ",
});

const result3 = new ChainCharacters("JavasCripT ES DiveRtido").toUpperCase();
console.assert(result3.value === "JavasCripT ES DiveRtido".toUpperCase(), {
  result: result1,
  message: "Test 1 No pasado ",
});
