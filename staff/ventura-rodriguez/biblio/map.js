const Biblio = require("./contructor");

/**
 * Applies the provided callback function to each element of the Biblio instance and returns a new Biblio instance containing the results.
 *
 * @param {function} callback - The callback function to apply to each element.
 * @returns {Biblio} A new Biblio instance containing the results of the callback.
 */
function map(callback) {
  let result = new Biblio();

  for (let i = 0; i < this.length; i++) {
    result[i] = callback(this[i]);
  }

  result.length = this.length;

  return result;
}

module.exports = map;
