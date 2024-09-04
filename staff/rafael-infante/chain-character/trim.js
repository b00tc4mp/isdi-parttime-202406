const ChainCharacters = require("./constructor");

function trim() {
  let newWord = '';
  for (let i = 0; i < this.length; i++) {
      if (this.value[i] !== ' ') {
          newWord += this.value[i]
      }
  } 
       return new ChainCharacters(newWord)
}

module.exports = trim;