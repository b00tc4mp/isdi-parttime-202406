const Biblio = require("./constructor");

function map(callback) {
  const newArray = [];
  for (let i = 0; i < this.length; i++) {
    newArray[i] = callback(this[i]);
  }
  return newArray;
}

module.exports = map;
