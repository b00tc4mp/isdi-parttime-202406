const ChainCharacters = require("./contructor");

function repeat(count) {
  let result = "";

  for (let i = 0; i < count; i++) {
    result += this.value;
  }

  return new ChainCharacters(result);
}

module.exports = repeat;
