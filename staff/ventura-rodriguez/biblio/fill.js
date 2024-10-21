/**
 * Fills all elements of the Biblio instance with the specified value.
 *
 * @param {*} value - The value to fill the elements with.
 * @param {number} _start - The index to start filling from.
 * @param {number} _end - The index to stop filling at (exclusive).
 * @returns {Biblio} The modified Biblio instance.
 */
function fill(value, _start = 0, _end = this.length) {
  const start = _start >= 0 ? _start : this.length + _start;
  const end = _end >= 0 ? _end : this.length + _end;

  for (let i = start; i < end; i++) this[i] = value;

  return this;
}

module.exports = fill;
