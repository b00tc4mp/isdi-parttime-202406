// este metodo copia parte del array delimitado por una posicion de inicio, otra de fin, y un punto de
// start donde se empieza a reemplazar el array original sin modificar su length.
function arrayCopyWithin(array, start, inicialPosition, endPosition = 0) {
  let cutArray = [];
  if (endPosition > array.length) {
    endPosition = array.length;
  }
  if (endPosition < -array.length) {
    endPosition = array.length;
  }
  if (inicialPosition >= array.length) {
    return array;
  }
  if (start >= array.length) {
    return array;
  }
  if (start < 0) {
    start = start + array.length;
  }
  if (start < -array.length) {
    start === 0;
  }
  if (inicialPosition < 0) {
    inicialPosition = inicialPosition + array.length;
  }

  if (endPosition > 0) {
    if (start + endPosition - inicialPosition <= array.length)
      for (let i = 0; i < endPosition - inicialPosition; i++) {
        cutArray[i] = array[inicialPosition + i];
      }
  }
  if (start + endPosition - inicialPosition > array.length) {
    for (let i = 0; i < array.length - start; i++) {
      cutArray[i] = array[inicialPosition + i];
    }
  }
  if (endPosition === 0) {
    if (array.length - inicialPosition < array.length - start) {
      let laps = array.length - inicialPosition;
      for (let i = 0; i < laps; i++) {
        cutArray[i] = array[inicialPosition + i];
      }
    }
    if (array.length - inicialPosition >= array.length - start) {
      let laps = array.length - start;
      for (let i = 0; i < laps; i++) {
        cutArray[i] = array[inicialPosition + i];
      }
    }
  }

  for (let k = 0; k < cutArray.length; k++) {
    array[start + k] = cutArray[k];
  }
  return array;
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
const array1 = [1, 2, 3, 4, 5, 6, 7, 8];
const result1 = arrayCopyWithin(array1, 4, 5, 6);
console.assert(arrayIsEqual(array1, [1, 2, 3, 4, 6, 6, 7, 8]), {
  result: array1,
  message: "Test 1.1 no pasado",
});

const array2 = ["a", "b", "c", "d", "e", "f", "g", "h"];
const result2 = arrayCopyWithin(array2, 4, 2);

console.assert(arrayIsEqual(array2, ["a", "b", "c", "d", "c", "d", "e", "f"]), {
  result: array2,
  message: "Test 2.1 no pasado",
});

const array3 = ["a", "b", "c", "d", "e", "f", "g", "h"];
const result3 = arrayCopyWithin(array3, 4, -2, 8);

console.assert(arrayIsEqual(array3, ["a", "b", "c", "d", "g", "h", "g", "h"]), {
  result: array3,
  message: "Test 3.1 no pasado",
});
const array4 = ["a", "b", "c", "d", "e", "f", "g", "h"];
const result4 = arrayCopyWithin(array4, -3, -2, 15);

console.assert(arrayIsEqual(array4, ["a", "b", "c", "d", "e", "g", "h", "h"]), {
  result: array4,
  message: "Test 4.1 no pasado",
});
