// Devuelve el ÍNDICE del PRIMER ELEMENTO de un array que cumpla con la función aportada.
// De no ser así, devuelve -1.
const Biblio = require("./constructor.js");

function find(callback) {
  let result = undefined;
  let i = 0;
  while (i < this.length && result === undefined) {
    if (callback(this[i])) result = this[i];
    i++;
  }
  return result;
}

module.exports = find;
