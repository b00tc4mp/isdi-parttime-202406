

const Biblio = require("./constructor.js");

function findIndex(callback) {
  let result = -1;

  let i = 0;

  while (i < this.length && result < 0) {
    const element = this[i];

    if (callback(element)) result = i;

    i++;
  }
  return result;
}

module.exports = findIndex;
