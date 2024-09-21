/**
 * Checks if the current value includes the specified substring.
 *
 * @param {string} searchString - The substring to search for.
 * @returns {boolean} True if the current value includes the substring, false otherwise.
 */
function includes(searchString) {
  if (searchString === null) return false;

  let result = false;

  for (let i = 0; i < this.length; i++) {
    let substring = "";

    for (let j = 0; j < searchString.length; j++) {
      substring += this.value[i + j];
    }

    if (substring === searchString) result = true;
  }

  return result;
}

module.exports = includes;
