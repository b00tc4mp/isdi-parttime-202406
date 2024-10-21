/**
 * Finds the index of the first element in the Biblio instance that passes the provided test function.
 *
 * @param {function} callback - The callback function to test each element against.
 * @returns {number} The index of the first element that passes the test, or -1 if no element passes the test.
 */
function findIndex(callback) {
  let foundIndex = -1;

  let i = 0;
  do {
    if (callback(this[i])) foundIndex = i;
    else i++;
  } while (foundIndex < 0 && i < this.length);

  return foundIndex;
}

module.exports = findIndex;
