/* The indexOf() method of Array instances returns the first index at which a 
 given element can be found in the array, or -1 if it is not present. */

/* Recorremos el array hasta encontrar el parámetro que le hemos pasado y devuelve el indice de este.*/

function indexOf(array, searchElement, fromIndex = 0) {
  if (fromIndex < 0) {
    fromIndex += array.length;
  }

  if (fromIndex < -array.length) {
    fromIndex = 0;
  }

  if (fromIndex >= array.length) {
    return -1;
  }

  for (let i = fromIndex; i < array.length; i++) {
    if (array[i] === searchElement) return i;
  }
  return -1;
}

const array1 = [1, 2, 3, 4, 5];
const result1 = indexOf(array1, 2, 0);
console.assert(result1 === array1.indexOf(2, 0), {
  result: result1,
  message: "Test 1 No pasado",
});

const array2 = ["Como", "estan", "los", "máquinas"];
const result2 = indexOf(array2, "máquinas", 2);
console.assert(result2 === array2.indexOf("máquinas", 2), {
  result: result2,
  message: "Test 2 No pasado",
});

const array3 = ["lo", 3, "primero", 2, "todo"];
const result3 = indexOf(array3, 2, -1);
console.assert(result3 === array3.indexOf(2, -1), {
  result: result3,
  message: "Test 3 No pasado",
});
