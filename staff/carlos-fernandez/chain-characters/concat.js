// standalone version
// str.concat()
const ChainCharacters = require("./constructor");

function concat() {
  let result = this.value;
  for (let i = 0; i < arguments.length; i++) {
    result += arguments[i];
  }

  return new ChainCharacters(result);
}

module.exports = concat;
