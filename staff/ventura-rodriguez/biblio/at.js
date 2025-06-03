/**
 * Retrieves the element at the specified index in the Biblio instance.
 *
 * @param {number} _index - The index of the element to retrieve.
 * @returns {*} The element at the specified index, or undefined if the index is out of bounds.   

 */
function at(_index) {
  if (!(typeof _index === "number")) return this[0];
  if (this.length < Math.abs(_index)) return undefined;

  const index = _index >= 0 ? _index : this.length + _index;

  return this[index];
}

module.exports = at;
