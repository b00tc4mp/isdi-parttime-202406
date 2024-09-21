const ChainCharacters = require("./contructor");

/**
 * Extracts a substring from the current value starting at the specified index.
 *
 * @param {number} start - The index to start extracting from.
 * @returns {ChainCharacters} A new ChainCharacters instance with the extracted substring.
 */
function slice(start) {
  let result = "";

  for (let i = start; i < this.length; i++) {
    result += this.value[i];
  }

  return new ChainCharacters(result);
}

module.exports = slice;
