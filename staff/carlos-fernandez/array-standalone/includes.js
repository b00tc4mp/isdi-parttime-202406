/* Devuelve true o false en función de si se encuentra un determinado elemento dentro del array */

/* Este método distingue entre mayúsculas y minúsculas. 

Parámetros a usar:
    1. array: el array que le vamos a pasar.
    2. valueToFind: el valor que queremos encontrar dentro del array.
    3. fromIndex (opcional): posición en la matriz desde la que se debe empezar a buscar.
    
CASOS ESPECIALES
    Si fromIndex < 0, fromIndex será = a array.length+fromIndex.
    Si fromIndex >= array.length: devuelve FALSE.
    Si (array.length + (-fromIndex)) < 0: fromIndex = 0.
    El valor por defecto de fromIndex = 0.

Devuelve un booleano: TRUE (se valueToFind se encuentra) or FALSE (valueToFind no se encuentra). 

Iterar el array en busca del valueToFind desde la posición fromIndex y devolver true o false. */

function includes(array, valueToFind, fromIndex = 0) {
  if (fromIndex < 0) fromIndex += array.length;
  if (fromIndex >= array.length) return false;
  if (array.length + fromIndex < 0) fromIndex = 0;

  for (let i = fromIndex; i < array.length; i++) {
    if (array[i] === valueToFind) return true;
  }
  return false;
}

const array1 = [1, 2, 3, 4, 5];
const result1 = includes([1, 2, 3, 4, 5], 3);
console.assert(result1 === array1.includes(3), {
  result: result1,
  message: "Test 1 no pasado",
});

const array2 = [1, 2, 3, 4, 5];
const result2 = includes(array2, 6);
console.assert(result2 === array2.includes(6), {
  result: result2,
  message:
    "Test 2 no pasado: El valor 6 no debería estar presente en el array.",
});

const array3 = [1, 2, 3, 4, 5];
const result3 = includes(array3, 2, 2);
console.assert(result3 === array3.includes(2, 2), {
  result: result3,
  message:
    "Test 3 no pasado: El valor 2 no debería ser encontrado desde el índice 2.",
});

const array4 = [1, 2, 3, 4, 5];
const result4 = includes(array4, 4, -2);
console.assert(result4 === array4.includes(4, -2), {
  result: result4,
  message:
    "Test 4 no pasado: El valor 4 debería ser encontrado desde el índice -2.",
});

const array5 = [1, 2, 3, 4, 5];
const result5 = includes(array5, 1, 10);
console.assert(result5 === array5.includes(1, 10), {
  result: result5,
  message:
    "Test 5 no pasado: El valor 1 no debería ser encontrado desde un índice fuera de los límites.",
});
