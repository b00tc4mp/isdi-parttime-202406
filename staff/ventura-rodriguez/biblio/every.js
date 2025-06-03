/**
 * Checks if all elements in the Biblio instance pass the provided test function.
 *
 * @param {function} callback - The callback function to test each element against.
 * @returns {boolean} True if all elements pass the test, false otherwise.
 */
function every(callback) {
  let result = true;

  let i = 0;
  while (i < this.length && result) {
    if (!callback(this[i])) result = false;
    i++;
  }

  return result;
}

module.exports = every;
