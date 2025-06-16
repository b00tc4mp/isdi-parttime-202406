// metodo de array fill consiste en sustituir algunos elementos de un array por otro a partir de una determinada posicion inicial
//hasta una posicion final.
/**
 * @function fillArray
 * @description Llena los elementos de un array con un valor especificado desde un índice inicial hasta un índice final. Replica el comportamiento del método Array.prototype.fill().
 * @param {Array} array - El array a modificar.
 * @param {*} fillElement - El elemento con el cual se llenarán los índices especificados.
 * @param {number} start - El índice inicial (inclusivo) desde el cual comenzar a llenar.
 * @param {number} end - El índice final (exclusivo) hasta el cual llenar.
 * @returns {Array} - Un nuevo array con los elementos llenados según los parámetros especificados.
 */
function fillArray (array, fillElement, start, end) {
    if (start <= -array.length) start === 0;
    if (start >= array.length) return array;
    if (start < 0) start = start + array.length;
    if (end < -array.length) end === 0;
    if (end > array.length) end = array.length;
    if (end <= start) return array;
    if (end < 0) end = end + array.length;
    
    let result = [];
    //constuyendo el array desde el principio
    for (let i = 0; i < start; i++) {
        result.push(array[i]);
        } 
    //llenando los elementos que deben ser modificados
    for (let y = 0; y < end - start; y++) {
        result.push(fillElement);
    }
    //llenando los elementos del final del array
    for (let z = 0; z < array.length - end; z++) {
        result.push(array[end + z]);
    }
    return result;

}

function arraysAreEqual(arr1, arr2) {
  if (arr1.length !== arr2.length) {
      return false;
  }

  for (let i = 0; i < arr1.length; i++) {
      if (arr1[i] !== arr2[i]) {
          return false;
      }
  }

  return true;
}

let array1 = [1, 2, 3, 4, 5]
let result1 = fillArray(array1, 10, 2, 4);
let result2 = array1.fill(10, 2, 4);
console.assert(arraysAreEqual(result1, result2), "Test 1 No pasado");

let array2 = [6, 7, 8, 9, 10, 11, 12]
let result3 = fillArray(array2, 20, -4, -1);
let result4 = array2.fill(20, -4, -1);
console.assert(arraysAreEqual(result3, result4), "Test 1 No pasado");

let array3 = [50, 60, 70, 'a', 'b', 'c']
let result5 = fillArray(array3, 10, -12, -13);
let result6 = array3.fill(10, 0, -2);
console.assert(arraysAreEqual(result5, result6), "Test 1 No pasado");