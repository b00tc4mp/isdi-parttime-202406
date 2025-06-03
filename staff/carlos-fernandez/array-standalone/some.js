/* Retorna TRUE si en el array se encuentra un elemento que cumple con la función pasada. 

Parámetros:
    1) Array
    2) Callback

Pasos: 
    0) Establecer el resultado por defecto como false.
    1) Recorrer el array
    2) Si algún elemento cumple con la Callback, devolver true.
*/

function some(array, callback) {
  let result = false;

  let i = 0;

  while (i < array.length) {
    const element = array[i];
    if (callback(element)) result = true;
    i++;
  }
  return result;
}

// TESTS
const arr1 = [1, 2, 3, 4, 5, 6];
const result1 = some(arr1, (element) => element % 2 === 0);
console.assert(result1 === arr1.some((element) => element % 2 === 0), {
  result: result1,
  message: "Test 1 no pasado",
});

const arr2 = [1, 3, 5, 7];
const result2 = some(arr2, (element) => element % 2 === 0);
console.assert(result2 === arr2.some((element) => element % 2 === 0), {
  result: result2,
  message: "Test 2 no pasado",
});

const arr3 = [1, 3, 5, 7];
const result3 = some(arr3, (element) => element * 2);
console.assert(result3 === arr3.some((element) => element * 2), {
  result: result3,
  message: "Test 3 no pasado",
});

const arr4 = [1, 3, 5, 7];
const result4 = some(arr4, (element) => typeof element === "number");
console.assert(
  result4 === arr4.some((element) => typeof element === "number"),
  {
    result: result4,
    message: "Test 4 no pasado",
  }
);
