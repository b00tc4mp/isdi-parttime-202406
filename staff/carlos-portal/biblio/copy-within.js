const Biblio = require("./constructor.js");

function copyWithin(target, start, end) {
  const elementsToCopy = new Biblio();

  // Guardamos los elementos que luego necesitaremos para copiar en otra parte del array, en un array temporal.
  let i = start;
  while (i < end) {
    elementsToCopy[elementsToCopy.length] = this[i];
    i++;
    elementsToCopy.length++;
  }

  /* Recorremos el array temporal y lo copiamos en el array original.*/
  let j = 0;
  while (j < elementsToCopy.length) {
    this[target + j] = elementsToCopy[j];
    j++;
  }

  return this;
}

module.exports = copyWithin;