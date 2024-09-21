/**
 * Splits the current value into an array of substrings based on the specified separator and limit.
 *
 * @param {string} separator - The separator to split on.
 * @param {number} [limit=Infinity] - The maximum number of elements to return.
 * @returns {string[]} An array of substrings.
 */
function split(separator = 0, limit = Infinity) {
  const result = [];
  let currentSegment = "";

  for (let i = 0; i < this.length && result.length <= limit - 1; i++) {
    let subString = "";

    for (let j = 0; j < separator.length; j++) {
      subString = this.value[i + j];
    }

    if (subString === separator) {
      i = i + separator.length - 1;
      result[result.length] = currentSegment;
      currentSegment = "";
    } else {
      currentSegment += this.value[i];
    }
  }

  if (currentSegment !== "" && result.length <= limit - 1)
    result[result.length] = currentSegment;

  return result;
}

module.exports = split;
