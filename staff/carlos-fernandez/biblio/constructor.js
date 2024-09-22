/**
 *Creates an instance of 'Biblio', representing a array-like object with a length property.
 *
 *The 'Biblio' constructor calculates the length of the input array and assings it to the 'length' property
 *of the instance. The original array is stored in the 'value' property.
 *
 *@constructor
 *@param {array} value - the array value to be stored in the 'Biblio' instance.
 *@property {number} length - the length of the array 'value'.
 *@property {array} value - the original array passed to teh constructor.
 */

function Biblio() {
  let _length = 0;
  while (arguments[_length]) _length++;

  this.length = _length;

  for (let i = 0; i < arguments.length; i++) this[i] = arguments[i];
}

module.exports = Biblio;
