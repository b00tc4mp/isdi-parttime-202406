
const ChainCharacters = require("./");

function compare(arr1, arr2) {
  if (arr1.length !== arr2.length) return false;
  let result = true;
  let i = 0;
  while (i < arr1.length && result === false) {
    if (arr1[i] !== arr2[i]) {
      result = false;
    }
    i++;
  }
  return result;
}

const str = 'Esta es una oración que tiene que estar split.';
const pattern = "";
const pattern2 = " ";
const pattern3 = "q";
const pattern4 = "e";


const result1 = new ChainCharacters(str).split(pattern);
console.assert(compare(result1, str.split(pattern)),{
    result: result1,
  message: "Test 1 No pasado ",
});

const result2 = new ChainCharacters(str).split(pattern2);
console.assert(compare(result2, str.split(pattern2)),{
    result: result2,
    message: "Test 2 No pasado ",
  });

const result3 = new ChainCharacters(str).split(pattern3)
console.assert(compare(result3, str.split(pattern3)),{
    result: result3,
    message: "Test 3 No pasado ",
  });

const result4 = new  ChainCharacters(str).split(pattern4)
console.assert(compare(result4, str.split(pattern4)),{
    result: result4,
    message: "Test 3 No pasado ",
  });
  