function map(array, callback) {
  if (!(array instanceof Array)) return undefined;

  let result = [];

  for (let i = 0; i < array.length; i++) {
      result[i] = callback(array[i]);
  }

  return result;
}

function arrayIsEqual(arr1, arr2) {
  if (arr1.length !== arr2.length) return false;
  for (let i = 0; i < arr1.length; i++) {
      if (arr1[i] !== arr2[i]) return false;
  }
  return true;
}

// Pruebas 
const noArray = "foo";
const result1 = map(noArray, (item) => item.length);
console.assert(result1 === undefined, {
  result: result1,
  message: "Test 1 Fallido:",
});


const array2 = [1, 2, 3, 4, 5, 6, 7, 8];
const result2 = map(array2, (item) => item * 2);
console.assert(arrayIsEqual(result2, array2.map((item) => item * 2)), {
  result: result2,
  message: "Test 2 Fallido: ",
});


const array3 = [1, 2, 3, 4, 5, 6, 7, 8];
const result3 = map(array3, (item) => item % 2);
console.assert(arrayIsEqual(result3, array3.map((item) => item % 2)), {
  result: result3,
  message: "Test 3 Fallido:",
});
