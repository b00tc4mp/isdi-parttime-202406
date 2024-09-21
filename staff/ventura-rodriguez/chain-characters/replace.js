const ChainCharacters = require("./contructor");

/**
 * Replaces all occurrences of a specified substring with another string.
 *
 * @param {string} strSearch - The substring to search for.
 * @param {string} strRepWith - The string to replace the substring with.
 * @returns {ChainCharacters} A new ChainCharacters instance with the replaced occurrences.
 */
function replace(strSearch, strRepWith) {
  let strFinal = "";
  let valorEncontrado = false;

  for (let i = 0; i < this.length; i++) {
    let match = true;
    for (let j = 0; j < strSearch.length; j++) {
      if (this.value[i + j] !== strSearch[j]) {
        match = false;
        break;
      }
    }
    if (!valorEncontrado && match) {
      strFinal += strRepWith;
      i += strSearch.length - 1;
      valorEncontrado = true;
    } else {
      strFinal += this.value[i];
    }
  }
  return new ChainCharacters(strFinal);
}

module.exports = replace;
