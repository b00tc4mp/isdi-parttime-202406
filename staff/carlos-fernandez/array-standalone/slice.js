// Slice devuelve una copia de una parte del array original. El original no se modifica.
/* Parámetros:
    1) array: el array el cual crearemos una copia 
    2) start: posición desde la que empezaremos a copiar
    3) end: posición final (excluida) de la copia **opcional** 

    Pasos:
    1) Crear un nuevo array vacío.
    2) Recorrer el array desde start hasta end.
    3) Añadir al array vacío cada elemento que coincida con las posiciones comprendidas entre start y end.
    4) Retornar el nuevo array creado.

    Condiciones:
    1) Si start no existe: start = 0;
    2) start > array.length: devuelve un array vacío;
    3) start < 0: se desplaza desde el final del array (array.length + start);
    4) end < 0: se desplaza desde el final del array (array.length + end);
    5) Si end no existe: end = array.length;
    6) end > array.length: end = array.length */

function slice(array, start = 0, end) {
  // Condiciones
  if (start > array.length) return [];
  if (start < 0) start = array.length + start;
  if (end < 0) end = array.length + end;
  if (end === undefined || end > array.length) end = array.length;

  let newArray = [];

  for (let i = start; i < end; i++) {
    newArray += array[i];
  }
  return newArray;
}

// Función de comparación para arrays
function arraysEqual(arr1, arr2) {
  if (arr1.length !== arr2.length) return false;
  for (let i = 0; i < arr1.length; i++) {
    if (arr1[i] !== arr2[i]) return false;
  }
  return true;
}

// Test 1: Caso básico, sin start ni end, debería devolver una copia completa del array
const arr1 = [1, 2, 3, 4, 5];
const result1 = slice(arr1);
const expected1 = arr1.slice();
console.assert(arraysEqual(result1, expected1), {
  result: result1,
  message: "Test 1 no pasado: Debería devolver una copia completa del array.",
});

// Test 2: Caso con start positivo, debería devolver desde el índice de start hasta el final
const arr2 = [1, 2, 3, 4, 5];
const result2 = slice(arr2, 2);
const expected2 = arr2.slice(2);
console.assert(arraysEqual(result2, expected2), {
  result: result2,
  message:
    "Test 2 no pasado: Debería devolver desde el índice de start hasta el final.",
});

// Test 3: Caso con start y end positivos, debería devolver desde start hasta end - 1
const arr3 = [1, 2, 3, 4, 5];
const result3 = slice(arr3, 1, 4);
const expected3 = arr3.slice(1, 4);
console.assert(arraysEqual(result3, expected3), {
  result: result3,
  message: "Test 3 no pasado: Debería devolver desde start hasta end - 1.",
});

// Test 4: Caso con start negativo, debería contar desde el final del array
const arr4 = [1, 2, 3, 4, 5];
const result4 = slice(arr4, -2);
const expected4 = arr4.slice(-2);
console.assert(arraysEqual(result4, expected4), {
  result: result4,
  message:
    "Test 4 no pasado: Debería contar desde el final del array para start negativo.",
});

// Test 5: Caso con end negativo, debería contar desde el final del array hasta end - 1
const arr5 = [1, 2, 3, 4, 5];
const result5 = slice(arr5, 1, -1);
const expected5 = arr5.slice(1, -1);
console.assert(arraysEqual(result5, expected5), {
  result: result5,
  message:
    "Test 5 no pasado: Debería contar desde el final del array para end negativo.",
});
