// El método forEach() ejecuta la función indicada una vez por cada elemento del array.

function forEach(array, callback) {
  for (let i = 0; i < array.length; i++) {
      const element = array[i];
      callback(element, i, array);  // Pasamos los tres argumentos al callback
  }
  // No es necesario retornar nada
}

function arrayIsEqual(arr1, arr2) {
if (arr1.length !== arr2.length) return false;
for (let i = 0; i < arr1.length; i++) {
  if (arr1[i] !== arr2[i]) return false;
}
return true;
}

// TEST 1
let result1 = [];
let result2 = [];

forEach([1, 2, 3], (element) => {
result1.push(element +1);
});

[1, 2, 3].forEach((element) => result2.push(element +1))

console.assert(
arrayIsEqual(result1, result2),
{ result: result1, message: "Test 1 no pasado" }
);

if (arrayIsEqual) console.log("Test 1 pasado.")


// TEST 2
let indices1 = [];
let indices2 = [];

forEach(["a", "b", "c"], (element, index) => {
indices1.push(index);
});

["a", "b", "c"].forEach((element, index) => {
indices2.push(index);
});

console.assert(
arrayIsEqual(indices1, indices2),
{ result: indices1, message: "Test 2 no pasado" }
);

if (arrayIsEqual) console.log("Test 2 pasado.")

// TEST 3

let arraysUsed1 = [];
let arraysUsed2 = [];

const originalArray = [10, 20, 30];
forEach(originalArray, (element, index, array) => {
arraysUsed1.push(array);
});

originalArray.forEach((element, index, array) => {
arraysUsed2.push(array);
});

console.assert(
arrayIsEqual(arraysUsed1, arraysUsed2),
{ result: arraysUsed1, message: "Test 3 no pasado" }
);
if (arrayIsEqual) console.log("Test 3 pasado.")