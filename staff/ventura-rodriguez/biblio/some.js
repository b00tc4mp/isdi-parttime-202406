/**
 * Checks if at least one element in the Biblio instance passes the provided test function.
 *
 * @param {function} callback - The callback function to test each element against.
 * @returns {boolean} True if at least one element passes the test, false otherwise.
 */
function some(callback) {
  let result = false;
  let i = 0;
  while (i < this.length && !result) {
    if (callback(this[i])) result = true;
    i++;
  }

  return result;
}

module.exports = some;
