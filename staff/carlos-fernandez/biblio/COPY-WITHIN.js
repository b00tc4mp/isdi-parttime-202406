const Biblio = require("./constructor.js");

function copyWithin(target, start, end) {
  let arrTemp = [];

  // Guardamos los elementos que luego necesitaremos para copiar en otra parte del array, en un array temporal.
  let i = start;
  while (i < end) {
    arrTemp[arrTemp.length] = this[i];
    i++;
  }

  /* Recorremos el array temporal y lo copiamos en el array original.*/
  let j = 0;
  while (j < arrTemp.length) {
    this[target + j] = arrTemp[j];
    j++;
  }

  return this.value;
}

module.exports = copyWithin;
