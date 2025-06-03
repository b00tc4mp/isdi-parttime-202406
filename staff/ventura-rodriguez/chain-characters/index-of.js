/**
 * Finds the index of the first occurrence of the specified substring within the current value.
 *
 * @param {string} searchTerm - The substring to search for.
 * @returns {number} The index of the first occurrence of the substring, or -1 if not found.
 */
function indexOf(searchTerm) {
  for (let i = 0; i < this.length; i++) {
    let subString = "";
    for (let j = 0; j < searchTerm.length; j++) {
      subString += this.value[j + i];
    }
    if (searchTerm === subString) {
      return i;
    }
  }

  return -1;
}

module.exports = indexOf;
