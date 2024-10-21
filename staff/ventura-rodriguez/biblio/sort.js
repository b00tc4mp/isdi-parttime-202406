/**
 * Sorts the elements of the Biblio instance in ascending order, optionally using a comparison function.
 *
 * @param {function?} callback - The comparison function to use for sorting.
 * @returns {Biblio} The modified Biblio instance.
 */
function sort(callback) {
  for (let i = 1; i < this.length; i++) {
    const a = this[i - 1];
    const b = this[i];
    if (
      (!!callback && callback(a, b) > 0) ||
      (!callback && String(b) < String(a))
    ) {
      const elementSaved = this[i - 1];
      this[i - 1] = this[i];
      this[i] = elementSaved;
      i = 0;
    }
  }
  return this;
}

module.exports = sort;
