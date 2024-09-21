const ChainCharacters = require("./contructor");

/**
 * Extracts a substring from the current value starting at the specified index.
 *
 * @param {number} indexStart - The index to start extracting from.
 * @returns {ChainCharacters} A new ChainCharacters instance with the extracted substring.
 */
function substring(indexStart) {
  let result = "";
  for (let i = indexStart; i < this.length; i++) {
    result += this.value[i];
  }
  return new ChainCharacters(result);
}

module.exports = substring;
