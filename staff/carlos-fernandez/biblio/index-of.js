/* The indexOf() method of Array instances returns the first index at which a 
 given element can be found in the array, or -1 if it is not present. */

/* Recorremos el array hasta encontrar el parámetro que le hemos pasado y devuelve el indice de este.*/
const Biblio = require("./constructor.js");

function indexOf(searchElement, fromIndex = 0) {
  if (fromIndex >= this.length) return -1;

  fromIndex =
    fromIndex < 0
      ? fromIndex + this.length
      : fromIndex < -this.length
      ? 0
      : fromIndex;

  let result = -1;
  let i = fromIndex;

  while (i < this.length && result < 0) {
    if (this[i] === searchElement) result = i;

    i++;
  }
  return result;
}

module.exports = indexOf;
