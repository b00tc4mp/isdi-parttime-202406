const Biblio = require("./constructor.js");

function every(callback) {
  // Verificamos si el argumento proporcionado es un array
  if (!(this instanceof Array)) return undefined;

  // Establecemos resultado como true
  let result = true;

  let i = 0;
  while (i < this.length && result) {
    // Determinamos cada elemento del array por separado
    const element = this[i];

    // Si el resultado de aplicar la función al elemento es false, establecemos el resultado como false.
    if (!callback(element)) result = false;

    i++;
  }
  return result;
}

module.exports = every;
