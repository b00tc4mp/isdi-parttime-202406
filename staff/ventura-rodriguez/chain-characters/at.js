const ChainCharacters = require("./contructor");

/**
 * Retrieves the character at the specified index from the `value` array.
 *
 * If `index` is `null`, the function returns the first character of the `value` array.
 * If `index` is positive, it returns the character at that position.
 * If `index` is negative, it returns the character at that position counting from the end.
 *
 * @function at
 * @param {number|null} index - The position of the character to retrieve. If `null`, returns the first character.
 * @returns {string} - The character at the specified index.
 */
function at(index) {
  if (index === null) return new ChainCharacters(this.value[0]);

  let result;

  for (let i = 0; i < this.length; i++) {
    const character = this.value[i];

    if (i === index) result = character;
    else if (index < 0 && i === this.length + index) result = character;
  }
  return new ChainCharacters(result);
}

module.exports = at;
