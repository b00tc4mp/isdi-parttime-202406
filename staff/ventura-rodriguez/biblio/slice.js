const Biblio = require("./contructor");

/**
 * Extracts a portion of the Biblio instance from the specified start index to the specified end index (exclusive).
 *
 * @param {number} _start - The index to start extracting from.
 * @param {number} _end - The index to stop extracting at (exclusive).
 * @returns {Biblio} A new Biblio instance containing the extracted elements.
 */
function slice(_start = 0, _end = this.length) {
  const start = _start >= 0 ? _start : this.length + _start;
  const end = _end >= 0 ? _end : this.length + _end;

  const result = new Biblio();

  for (let index = start; index < end; index++) {
    result[result.length] = this[index];
    result.length += 1;
  }

  return result;
}

module.exports = slice;
