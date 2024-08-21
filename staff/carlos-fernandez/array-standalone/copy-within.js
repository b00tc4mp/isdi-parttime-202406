// Este método copia parte de un array original y lo pega en otra posición
// dentro del MISMO array sin modificar su longitud.

// Tiene 3 parámetros:
/* 
        1) Target = Dónde quieres insertar el primer elemento copiado.
        2) Start = A partir de qué elemento quieres copiarlo.
        3) End = Último elemento que va a ser copiado (éste excluido).
    
    */

// Iterar sobre el array, encontrar el Start, seguir iterando hasta encontrat el End.
// Una vez lo tenemos, ir al Target y SUBSTITUIR Target por Start y seguir substituyendo hasta End.

// Ejemplo:

// const array1 = ['a', 'b', 'c', 'd', 'e'];
// Copy to index 0 the element at index 3
//console.log(array1.copyWithin(0, 3, 4));
// Expected output: Array ["d", "b", "c", "d", "e"]

function copyWithin(arr, target, start, end) {
  let counter = 0;
  let arrTemp = [];

  // Guardamos los elementos que luego necesitaremos para copiar en otra parte del array, en un array temporal.
  for (let i = start; i < end; i++) {
    arrTemp[arrTemp.length] = arr[i];
  }

  /* Recorremos el array temporal y lo copiamos en el array original.*/
  for (let i = 0; i < arrTemp.length; i++) {
    arr[target + i] = arrTemp[counter];
    counter++;
  }
  return arr;
}
const arr1 = [1, 2, 3, 4, 5, 6];
const arr2 = [1, 2, 3, 4, 5, 6];

const result1 = copyWithin(arr1, 2, 0, 3);
arr2.copyWithin(2, 0, 3);

console.assert(arrayIsEqual(result1, arr2), {
  result: result1,
  message: "Test 1 no pasado.",
});

const arr3 = [7, 8, 9, 10, 11, 12];
const arr4 = [7, 8, 9, 10, 11, 12];

const result2 = copyWithin(arr3, 3, 1, 4);
arr4.copyWithin(3, 1, 4);

console.assert(arrayIsEqual(result2, arr4), {
  result: result2,
  message: "Test 2 no pasado.",
});

const arr5 = [20, 21, 22, 23, 24, 25];
const arr6 = [20, 21, 22, 23, 24, 25];

const result3 = copyWithin(arr5, 0, 3, 6);
arr6.copyWithin(0, 3, 6);

console.assert(arrayIsEqual(result3, arr6), {
  result: result3,
  message: "Test 3 no pasado.",
});

const arr7 = [30, 31, 32, 33, 34, 35];
const arr8 = [30, 31, 32, 33, 34, 35];

const result4 = copyWithin(arr7, 1, 4, 6);
arr8.copyWithin(1, 4, 6);

console.assert(arrayIsEqual(result4, arr8), {
  result: result4,
  message: "Test 4 no pasado.",
});
