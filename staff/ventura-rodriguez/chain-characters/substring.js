const ChainCharacters = require("./contructor");

function substring(indexStart) {
  let result = "";
  for (let i = indexStart; i < this.length; i++) {
    result += this.value[i];
  }
  return new ChainCharacters(result);
}

module.exports = substring;
