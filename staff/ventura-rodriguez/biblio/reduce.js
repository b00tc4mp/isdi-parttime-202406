/**
 * Reduces the elements of the Biblio instance to a single value.
 *
 * @param {function} callbackFn - The callback function to apply to each element.
 * @param {*} initialValue - The initial value of the accumulator.
 * @returns {*} The reduced value.
 */
function reduce(callbackFn, initialValue = 0) {
  let accumulator = initialValue;

  for (let i = 0; i < this.length; i++) {
    accumulator = callbackFn(accumulator, this[i]);
  }

  return accumulator;
}

module.exports = reduce;
