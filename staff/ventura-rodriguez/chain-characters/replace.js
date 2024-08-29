const ChainCharacters = require("./contructor");

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
