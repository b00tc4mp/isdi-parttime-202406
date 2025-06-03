const Biblio = require("./contructor");

/**
 * Copies a sequence of elements from one position to another within the Biblio instance.
 *
 * @param {number} _target - The index of the starting position of the replacement.
 * @param {number} _start - The index of the beginning of the sequence to copy.
 * @param {number} _end - The index of the end of the sequence to copy (exclusive).
 * @returns {Biblio} The modified Biblio instance.
 */
function copyWithin(_target, _start, _end = this.length) {
  const elementsToCopy = new Biblio();

  const target = _target >= 0 ? _target : this.length + _target;
  const start = _start >= 0 ? _start : this.length + _start;
  const end = _end >= 0 ? _end : this.length + _end;

  let i = 0;
  while (elementsToCopy.length < end - start) {
    elementsToCopy[i] = this[start + i];
    elementsToCopy.length += 1;
    i++;
  }

  for (let i = 0; i < elementsToCopy.length; i++)
    this[target + i] = elementsToCopy[i];

  return this;
}

module.exports = copyWithin;
