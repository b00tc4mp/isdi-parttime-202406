const ChainCharacters = require("./contructor");

/**
 * Concatenates the current value with the provided arguments.
 *
 * @param {...string} args - The strings to concatenate.
 * @returns {ChainCharacters} A new ChainCharacters instance with the concatenated value.
 */
function concat() {
  let result = this.value;
  for (let i = 0; i < arguments.length; i++) {
    result += arguments[i];
  }

  return new ChainCharacters(result);
}

module.exports = concat;
