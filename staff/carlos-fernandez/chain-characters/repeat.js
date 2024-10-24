const ChainCharacters = require("./constructor");

function repeat(num) {
  let result = "";

  if (num === null || typeof num !== "number" || num < 0) return result;

  for (let i = 0; i < num; i++) {
    result += this.value;
  }
  return new ChainCharacters(result);
}

module.exports = repeat;
