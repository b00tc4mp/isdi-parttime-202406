/**
 * Removes the first element from the Biblio instance and returns it.
 *
 * @returns {*} The removed element, or undefined if the Biblio instance is empty.
 */
function shift() {
  const element = this[0];
  for (let i = 1; i < this.length; i++) this[i - 1] = this[i];
  delete this[this.length - 1];
  this.length = this.length - 1;
  return element;
}

module.exports = shift;
