/**
 * Creates an instance of `Biblio`, representing an array-like object with a `length` property.
 *
 * The `Biblio` constructor calculates the length based on the number of arguments passed
 * and assigns each argument to the instance as array-like properties.
 *
 * @constructor
 * @param {...*} value - Any number of values to be stored in the `Biblio` instance as array-like properties.
 * @property {number} length - The number of arguments passed to the constructor.
 */
function Biblio() {
    let _length = 0;
    while (arguments[_length] !== undefined) _length++;
    this.length = _length;
  
    for (let i = 0; i < arguments.length; i++) {
      this[i] = arguments[i];
    }
  }
  
  module.exports = Biblio;
  