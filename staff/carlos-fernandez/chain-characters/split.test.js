const ChainCharacters = require(".");

function arraysEqual(arr1, arr2) {
  if (arr1.length !== arr2.length) return false;
  for (let i = 0; i < arr1.length; i++) {
    if (arr1[i] !== arr2[i]) return false;
  }
  return true;
}

const result1 = new ChainCharacters("Deep house techno").split("De");
const expected1 = "Deep house techno".split("De");
console.assert(arraysEqual(result1, expected1), {
  result: result1,
  message: "Test 1 no pasado",
});
console.log(result1);

const result2 = new ChainCharacters("El detectiu Conan").split("");
const expected2 = "El detectiu Conan".split("");
console.assert(arraysEqual(result2, expected2), {
  result: result2,
  message: "Test 2 no pasado",
});

const result3 = new ChainCharacters("Shinosuke Nohara").split(" ");
const expected3 = "Shinosuke Nohara".split(" ");
console.assert(arraysEqual(result3, expected3), {
  result: result3,
  message: "Test 3 no pasado",
});
