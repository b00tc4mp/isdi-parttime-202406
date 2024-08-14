/**
 * Retrieves the character at the specified index from the string-like object.
 *
 * If the `index` is not a number, the function returns the first character.
 * If the `index` is out of bounds (greater than or equal to the length of the string), the function returns an empty string.
 *
 * @function charAt
 * @param {number} index - The position of the character to retrieve. If not a number, returns the first character.
 * @returns {string} - The character at the specified index, or the first character if `index` is not a number,
 *                     or an empty string if `index` is out of bounds.
 */
function charAt(index) {
  let result = this.value[index];

  if (typeof index !== "number") {
    result = this.value[0];
  } else if (index >= this.length) {
    result = "";
  }

  return result;
}

module.exports = charAt;
