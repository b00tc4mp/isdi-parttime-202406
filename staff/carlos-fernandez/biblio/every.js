const Biblio = require("./constructor.js");

function every(callback) {
  // Establecemos resultado como true
  let result = true;

  let i = 0;
  while (i < this.length && result) {
    // Si el resultado de aplicar la función al elemento es false, establecemos el resultado como false.
    if (!callback(this[i])) result = false;

    i++;
  }
  return result;
}

module.exports = every;
