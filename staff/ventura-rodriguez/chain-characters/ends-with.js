/**
 * Checks if the current value ends with the specified substring.
 *
 * @param {string} searchString - The substring to search for.
 * @param {number} [endPosition=this.length] - The position within the current value to start searching.
 * @returns {boolean} True if the current value ends with the substring, false otherwise.
 */
function endsWith(searchString, endPosition = this.length) {
  let subsString = "";

  for (let i = 0; i < searchString.length; i++) {
    subsString += this.value[endPosition - searchString.length + i];
  }

  return subsString === searchString;
}

module.exports = endsWith;
