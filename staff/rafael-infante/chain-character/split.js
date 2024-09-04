const ChainCharacters = require(".");

function split(pattern) {
  let newArray = [];
  let elementOfArray = '';

  for (let i = 0; i < this.length; i++) {
  
    if (pattern === '') {
      newArray[i] = this.value[i]; // separo por caracteres

    } else if (this.value[i] === pattern) {
      newArray[newArray.length] = elementOfArray;
      elementOfArray = '';

    } else {
      elementOfArray += this.value[i];
    }
  }
  return newArray
}

module.exports = split;