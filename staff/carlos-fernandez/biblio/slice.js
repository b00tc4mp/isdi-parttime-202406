const Biblio = require("./constructor");

function slice(start = 0, end = this.length) {
  // Condiciones
  if (start > this.length) return [];
  if (start < 0) start = this.length + start;
  if (end < 0) end = this.length + end;
  if (end > this.length) end = this.length;

  let newArray = [];

  for (let i = start; i < end; i++) newArray[newArray.length] = this[i];
  return newArray;
}

module.exports = slice;
