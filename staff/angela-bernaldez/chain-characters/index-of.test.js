const ChainCharacters = require(".")

const paragraph = "I think Ruth's dog is cuter than your dog!";
const result1 = new ChainCharacters(paragraph).indexOf("dog");
console.assert(result1 === paragraph.indexOf("dog"), {
  result: result1,
  message: "Test 1 No pasado ",
});

const result2 = new ChainCharacters(paragraph).indexOf("dog", 15);
console.assert(result2 === paragraph.indexOf("dog", 15), {
  result: result2,
  message: "Test 2 No pasado ",
});

const result3 = new ChainCharacters(paragraph).indexOf("dog", 40);
console.assert(result3 === paragraph.indexOf("dog", 40), {
  result: result3,
  message: "Test 3 No pasado ",
});

const result4 = new ChainCharacters(paragraph).indexOf(null);
console.assert(result4 === paragraph.indexOf(null), {
  result: result4,
  message: "Test 4 No pasado ",
});

const result5 = new ChainCharacters(paragraph).indexOf(undefined);
console.assert(result5 === paragraph.indexOf(undefined), {
  result: result5,
  message: "Test 5 No pasado ",
});