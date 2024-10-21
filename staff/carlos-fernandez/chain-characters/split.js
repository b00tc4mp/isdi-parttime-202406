const ChainCharacters = require("./constructor.js");

function split(separator, limit = undefined) {
  let result = [];
  let currentSegment = "";
  // counter = contador de elementos del array. Cuando counter > limit-1, significa que hemos llegado al límite de elementos
  let counter = 0;
  let i = 0;

  while ((i < this.length) | (counter > limit - 1)) {
    if (separator === "") {
      result[result.length] = this.value[i];
    }
    if (this.value[i] === separator) {
      result[result.length] = currentSegment;
      currentSegment = "";
      counter++;

      if (limit !== undefined && counter > limit - 1) {
        break;
      }
    } else {
      currentSegment += this.value[i];
    }
    i++;
  }

  // Add the last segment if it hasn't exceeded the limit
  if (limit === undefined || counter < limit) {
    result[result.length] = currentSegment;
  }

  return new ChainCharacters(result);
}

module.exports = split;
