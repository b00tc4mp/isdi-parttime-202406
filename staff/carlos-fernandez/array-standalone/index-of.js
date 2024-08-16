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
