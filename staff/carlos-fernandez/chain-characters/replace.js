const ChainCharacters = require("./constructor");

function replace(pattern, replacement) {
  let newString = "";
  let found = false;

  for (let i = 0; i < this.length; i++) {
    let match = true;

    for (let j = 0; j < pattern.length; j++) {
      if (this.value[i + j] !== pattern[j]) {
        match = false;
        break;
      }
    }

    if (match && !found) {
      newString += replacement;
      i += pattern.length - 1; // Saltar la longitud del patrón
      found = true;
    } else {
      newString += this.value[i];
    }
  }

  return new ChainCharacters(newString);
}
module.exports = replace;
