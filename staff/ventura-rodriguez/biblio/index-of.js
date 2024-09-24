/**
 * Finds the index of the first occurrence of the specified element in the Biblio instance.
 *
 * @param {*} searchElement - The element to search for.
 * @param {number} [fromIndex=0] - The index to start searching from.
 * @returns {number} The index of the first occurrence of the element, or -1 if not found.
 */
function indexOf(searchElement, fromIndex = 0) {
  let result = -1;
  let i = fromIndex;

  do {
    if (searchElement === this[i]) result = i;
    i++;
  } while (i < this.length && result === -1);

  return result;
}

module.exports = indexOf;
