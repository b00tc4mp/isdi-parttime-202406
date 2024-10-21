/**
 * Checks if the Biblio instance includes the specified element.
 *
 * @param {*} searchElement - The element to search for.
 * @param {number} [fromIndex=0] - The index to start searching from.
 * @returns {boolean} True if the element is found, false otherwise.
 */
function includes(searchElement, fromIndex = 0) {
  let result = false;
  let i = fromIndex;
  do {
    if (this[i] === searchElement) result = true;
    i++;
  } while (i < this.length && !result);

  return result;
}

module.exports = includes;
