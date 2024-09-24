/**
 * Removes and returns the last element from the Biblio instance.
 *
 * @returns {*} The removed element, or undefined if the Biblio instance is empty.
 */
function pop() {
  if (this.length === 0) return undefined;

  let result = this[this.length - 1];
  delete this[this.length - 1];
  this.length = this.length - 1;

  return result;
}

module.exports = pop;
