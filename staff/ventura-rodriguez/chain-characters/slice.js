const ChainCharacters = require("./contructor");

function slice(start) {
  let result = "";

  for (let i = start; i < this.length; i++) {
    result += this.value[i];
  }

  return new ChainCharacters(result);
}

module.exports = slice;
