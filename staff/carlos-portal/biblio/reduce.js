const Biblio = require("./constructor.js");

function reduce(callbackFn, initialValue = 0) {
  let accumulator = initialValue;

  for (let i = 0; i < this.length; i++) {
    accumulator = callbackFn(accumulator, this[i]);
  }

  return accumulator;
}

module.exports = reduce;
