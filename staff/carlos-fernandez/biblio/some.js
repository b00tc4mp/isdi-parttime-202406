const Biblio = require("./constructor");

function some(callback) {
  let result = false;

  let i = 0;

  while (i < this.length) {
    const element = this[i];
    if (callback(element)) result = true;
    i++;
  }
  return result;
}

module.exports = some;
