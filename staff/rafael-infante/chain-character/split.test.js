const ChainCharacters = require(".");

function arrayIsEqual(arr1, arr2) {
  if (arr1.length !== arr2.length) return false;
  let result = true;
  let i = 0;
  while (i < arr1.length || result === false) {
      if (arr1[i] !== arr2[i]) {
          result = false
      }
      i++
  }
  return result
}

const result1 = new ChainCharacters('hello world').split('')
console.assert(arrayIsEqual(result1, ['h', 'e', 'l', 'l', 'o', ' ', 'w', 'o', 'r', 'l', 'd']), {result: result1, message: "Test 1 No pasado "})
if(arrayIsEqual(result1, ['h', 'e', 'l', 'l', 'o', ' ', 'w', 'o', 'r', 'l', 'd'])) console.log("Test 1 Pasado");

const result2 = new ChainCharacters('hello,world,').split(',')
console.assert(arrayIsEqual(result2, ['hello', 'world']), {result: result2, message: "Test 2 No pasado "})
if(arrayIsEqual(result2, ['hello', 'world'])) console.log("Test 2 Pasado");

const result3 = new ChainCharacters('hello-world-').split('-')
console.assert(arrayIsEqual(result3, ['hello', 'world']), {result: result3, message: "Test 3 No pasado "})
if (arrayIsEqual(result3, ['hello', 'world'])) console.log("Test 3 pasado");