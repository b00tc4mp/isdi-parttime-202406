/**
 * Adds one or more elements to the end of the Biblio instance and returns the new length.
 *
 * @param {...*} elements - The elements to add.
 * @returns {number} The new length of the Biblio instance.
 */
function push() {
  for (let i = 0; i < arguments.length; i++) {
    this[this.length] = arguments[i];
    this.length += 1;
  }

  let result = this.length;

  return result;
}

module.exports = push;
