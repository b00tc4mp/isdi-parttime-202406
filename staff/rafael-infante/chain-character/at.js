//str.at(indice)

const ChainCharacters = require("./constructor");

//Version stand alone
function at(index) {
  
  if (index === null) return this.value[0]

  let result;

  for (let i = 0; i < this.length; i++) {
    let character = this.value[i];
    let characterNegative = this.value[this.length + index]

    if (index === i) {
      result = character
      
    } else if (index < 0) {
      result = characterNegative
    }
  }
  return new ChainCharacters(result);
}

module.exports = at;