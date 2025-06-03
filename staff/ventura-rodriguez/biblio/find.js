/**
 * Finds the first element in the Biblio instance that passes the provided test function.
 *
 * @param {function} callback - The callback function to test each element against.
 * @returns {*} The first element that passes the test, or undefined if no element passes the test.
 */
function find(callback) {
  let foundIndex = -1;

  let i = 0;
  do {
    if (callback(this[i])) foundIndex = i;
    else i++;
  } while (foundIndex < 0 && i < this.length);

  return this[foundIndex];
}

module.exports = find;
