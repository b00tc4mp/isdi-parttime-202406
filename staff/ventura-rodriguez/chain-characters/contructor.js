/**
 * Creates an instance of `ChainCharacter`, representing a string-like object with a `length` property.
 *
 * The `ChainCharacter` constructor calculates the length of the input string and assigns it
 * to the `length` property of the instance. The original string is stored in the `value` property.
 *
 * @constructor
 * @param {string} value - The string value to be stored in the `ChainCharacter` instance.
 * @property {number} length - The length of the string `value`.
 * @property {string} value - The original string passed to the constructor.
 */
function ChainCharacters(value) {
  let _length = 0;
  while (value[_length]) _length++;

  this.length = _length;
  this.value = value;
}

module.exports = ChainCharacters;
