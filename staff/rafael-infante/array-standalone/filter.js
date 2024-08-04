function filter(arr, callback) {
  const newArr = [];

  for (let i = 0; i < arr.length; i++) {
    if (callback(arr[i])) {
      newArr.push(arr[i]);
    }
  }
  return newArr;
}

function greaterThanFive(value) {
  return value > 5;
}

function arrayIsEqual(arr1, arr2) {
  if (arr1.length !== arr2.length) return false;
  let result = true;
  let i = 0;
  while (i < arr1.length && result) {
    if (arr1[i] !== arr2[i]) {
      result = false;
    }
    i++;
  }
  return result;
}

const array1 = [1, 2, 3, 4, 5, 6, 7, 8];
const result1 = filter(array1, greaterThanFive);

console.assert(arrayIsEqual(result1, array1.filter(elem => elem > 5)), {result: result1, message: "Test 1.1 no pasado"});
if (arrayIsEqual(result1, array1.filter(elem => elem > 5))) console.log('Test 1 pasado')