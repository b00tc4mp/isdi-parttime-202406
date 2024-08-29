//str.at(indice)
//Version stand alone

// correr para buscar caracter igual a indice
// guardar caracter en un variable 
// devolver variable
// si el indice es negativo guardar en segundo variable 
// devolver caracter guardado en variable 

const chainCharacters = require("./constructor.js")

function at(index) {
    
    let result;
  
    if (index === null) {
      return this.value[0];
    }
  
    if (index >= 0) {
      for (let i = 0; i < this.length; i++) {
        const characterValue = this.value[i];
        if (index === i) {
          result = characterValue;
          return result;
        }
  
      }
    } else {
      result = this.value[this.length + index]
      return result;
    }
  }
  
  module.exports = at;
  