const Biblio = require("./constructor.js");

function includes(valueToFind, fromIndex = 0) {
  if (fromIndex < 0) fromIndex += this.length;
  if (fromIndex >= this.length) return false;
  if (this.length + fromIndex < 0) fromIndex = 0;

  let result = false;
  let i = fromIndex;

  while (i < this.length && result === false) {
    if (this[i] === valueToFind) result = true;

    i++;
  }
  return result;
}

module.exports = includes;
