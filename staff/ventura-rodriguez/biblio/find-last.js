/**
 * Finds the last element in the Biblio instance that passes the provided test function.
 *
 * @param {function} callback - The callback function to test each element against.
 * @returns {*} The last element that passes the test, or undefined if no element passes the test.
 */
function findLast(callback) {
  let foundIndex = -1;

  let i = this.length;
  do {
    if (callback(this[i])) foundIndex = i;
    else i--;
  } while (foundIndex < 0 && i >= 0);

  return this[foundIndex];
}

module.exports = findLast;
