/**
 * Reverses the order of elements in the Biblio instance.
 *
 * @returns {Biblio} The modified Biblio instance.
 */
function reverse() {
  for (let i = 0; i < Math.floor(this.length / 2); i++) {
    const elementSaved = this[this.length - 1 - i];
    this[this.length - 1 - i] = this[i];
    this[i] = elementSaved;
  }

  return this;
}

module.exports = reverse;
