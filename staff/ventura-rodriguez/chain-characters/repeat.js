const ChainCharacters = require("./contructor");

/**
 * Repeats the current value a specified number of times.
 *
 * @param {number} count - The number of times to repeat the value.
 * @returns {ChainCharacters} A new ChainCharacters instance with the repeated value.
 */
function repeat(count) {
  let result = "";

  for (let i = 0; i < count; i++) {
    result += this.value;
  }

  return new ChainCharacters(result);
}

module.exports = repeat;
