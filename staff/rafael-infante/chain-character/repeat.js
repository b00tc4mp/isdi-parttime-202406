/* string.prototype.repeat() */

const ChainCharacters = require("./constructor");

function repeat(number) {
  let newPhrase = '';

  for (let i = 0; i < number; i++){
      newPhrase += this.value
  }
  return new ChainCharacters(newPhrase)
}

module.exports = repeat;