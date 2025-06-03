/**
 * Checks if the current value starts with the specified substring.
 *
 * @param {string} searchString - The substring to search for.
 * @returns {boolean} True if the current value starts with the substring, false otherwise.
 */
function startsWith(searchString) {
  let result = true;
  for (let i = 0; i < searchString.length; i++) {
    if (this.value[i] !== searchString[i]) {
      result = false;
    }
  }
  return result;
}

module.exports = startsWith;
