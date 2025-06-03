/* The findLast() method of Array instances iterates the array in reverse order and returns 
   the value of the first element that satisfies the provided testing function. If no elements 
   satisfy the testing function, undefined is returned. */
const Biblio = require("./constructor.js");

function findLast(callback) {
  let result = undefined;
  let i = this.length - 1;

  while (i >= 0 && result === undefined) {
    const element = this[i];
    if (callback(element)) result = this[i];

    i--;
  }
  return result;
}

module.exports = findLast;
