// crea un array modificado
// recibe dos parametros: un array y un callback que modifica cada elemento de ese array
// en un nuevo array. Recorremos cada elemento de ese array y le aplicamos un esquema de implementacion
// pasandole el valor recorrido y se lo añadimos

function map(array, callback) {

  const newArray = [];

  for (let i = 0; i < array.length; i++) {
   newArray[i] = callback(array[i])
  }
  return newArray
}

function double (value) {
  return value * 2
}
function half (value) {
  return value / 2
}
function squared (value) {
  return value ** 2
}

function arrayIsEqual(arr1, arr2) {
  if (arr1.length !== arr2.length) return false;
  let result = true;
  let i = 0;
  while (i < arr1.length || result === false) {
    if (arr1[i] !== arr2[i]) {
      result = false;
    }
    i++;
  }
  return result;
}
//TDD
const array1 = [1, 4, 9, 16];

const result1 = map(array1, double)
console.assert(arrayIsEqual(result1, array1.map(value => value * 2)), {result: result1, message: "Test 1 No pasado "})

const result2 = map(array1, half)
console.assert(arrayIsEqual(result2, array1.map(half)), {result: result2, message: "Test 2 No pasado "})

const result3 = map(array1, squared)
console.assert(arrayIsEqual(result3, array1.map(squared)), {result: result3, message: "Test 3 No pasado "})