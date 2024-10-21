const Biblio = require("./contructor");

/**
 * Creates a new Biblio instance with all sub-biblio elements concatenated up to the specified depth.
 *
 * @param {number} depth - The depth up to which to flatten nested biblios (default: 1).
 * @returns {Biblio} A new Biblio instance containing the flattened elements.
 */
function flat(depth = 1) {
  const result = new Biblio();

  for (let i = 0; i < this.length; i++) {
    if (this[i] instanceof Biblio && depth) {
      const res = flat.call(this[i], depth - 1);
      for (let j = 0; j < res.length; j++) {
        result[result.length] = res[j];
        result.length += 1;
      }
    } else {
      result[result.length] = this[i];
      result.length += 1;
    }
  }

  return result;
}

module.exports = flat;
