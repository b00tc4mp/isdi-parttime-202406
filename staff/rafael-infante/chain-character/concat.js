const ChainCharacters = require("./constructor");

function concat() {
  let concatString = this.value
  for (let i = 0; i < arguments.length; i++){
    concatString += arguments[i];
  }
  return new ChainCharacters(concatString)
}

module.exports = concat;