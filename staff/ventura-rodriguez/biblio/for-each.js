/**
 * Calls the provided callback function once for each element in the Biblio instance.
 *
 * @param {function} callback - The callback function to execute for each element.
 * @returns {void}
 */
function forEach(callback) {
  for (let i = 0; i < this.length; i++) callback(this[i], i, this);
}

module.exports = forEach;
