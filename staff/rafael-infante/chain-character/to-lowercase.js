const ChainCharacters = require("./constructor");

function toLowerCase() {
    
  const mayusculas = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
  const minusculas = 'abcdefghijklmnopqrstuvwxyz'
  let inLowers = ''
      
      for (let i = 0; i < this.length; i++) {
          for (let j = 0; j < mayusculas.length; j++){
              if (this.value[i] === mayusculas[j] || minusculas.indexOf(this.value[i]) === j){
              inLowers += minusculas[j];
                  break
              } 
          }
          
      }
      return new ChainCharacters(inLowers)
  }

  module.exports = toLowerCase;