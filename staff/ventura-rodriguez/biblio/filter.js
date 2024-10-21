const Biblio = require("./contructor");

/**
 * Filters the elements of the Biblio instance based on the provided callback function.
 *
 * @param {function} callback - The callback function to test each element against.
 * @returns {Biblio} A new Biblio instance containing the elements that passed the test.
 */
function filter(callback) {
  let result = new Biblio();

  for (let i = 0; i < this.length; i++) {
    const element = this[i];
    if (callback(element)) {
      result[result.length] = element;
      result.length += 1;
    }
  }

  return result;
}
module.exports = filter;
