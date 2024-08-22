function reduce(array, callback, initialValue = 0) {
  if (!(array instanceof Array)) return undefined;

  let accumulator = initialValue;

  for (let i = 0; i < array.length; i++) {
    accumulator = callback(accumulator, array[i]);
  }
  return accumulator;
}

function arrayIsEqual(arr1, arr2) {
  if (arr1.length !== arr2.length) return false;
  for (let i = 0; i < arr1.length; i++) {
    if (arr1[i] !== arr2[i]) return false;
  }
  return true;
}

// TEST 1
const array1 = [1, 2, 3, 4, 5];
const result1 = reduce(array1, (acc, curr) => acc + curr, 0); // Suma total
const expected1 = array1.reduce((acc, curr) => acc + curr, 0); // Método nativo

console.assert(result1 === expected1, {
  result: result1,
  expected: expected1,
  message: "Test 1 no pasado: Sumar elementos",
});
if (result1 === expected1) console.log("Test 1 pasado");

// TEST 2
const array2 = ["Hola", " ", "mundo", "!"];
const result2 = reduce(array2, (acc, curr) => acc + curr, ""); // Concatenar strings
const expected2 = array2.reduce((acc, curr) => acc + curr, ""); // Método nativo

console.assert(result2 === expected2, {
  result: result2,
  expected: expected2,
  message: "Test 2 no pasado: Concatenar strings",
});

if (result2 === expected2) console.log("Test 2 pasado");

// TEST 3
const array3 = [{ age: 10 }, { age: 20 }, { age: 30 }];
const result3 = reduce(array3, (acc, curr) => acc + curr.age, 0); // Suma de las edades
const expected3 = array3.reduce((acc, curr) => acc + curr.age, 0); // Método nativo

console.assert(result3 === expected3, {
  result: result3,
  expected: expected3,
  message: "Test 3 no pasado: Sumar valores de objetos",
});

if (result3 === expected3) console.log("Test 3 pasado");

// TEST 4
const array4 = [];
const result4 = reduce(array4, (acc, curr) => acc + curr, 100); // Debería devolver el valor inicial
const expected4 = array4.reduce((acc, curr) => acc + curr, 100); // Método nativo

console.assert(result4 === expected4, {
  result: result4,
  expected: expected4,
  message: "Test 4 no pasado: Array vacío con valor inicial",
});

if (result4 === expected4) console.log("Test 4 pasado");
