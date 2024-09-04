const ChainCharacters = require("./constructor");

function toUpperCase() {
    
  const mayusculas = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
  const minusculas = 'abcdefghijklmnopqrstuvwxyz'
  let inUppers = ''
      
      for (let i = 0; i < this.length; i++) {
          for (let j = 0; j < minusculas.length; j++){
              if (this.value[i] === minusculas[j] || mayusculas.indexOf(this.value[i]) === j){
              inUppers += mayusculas[j];
                  break
              } 
          }
          
      }
      return new ChainCharacters(inUppers);
  }
  
module.exports = toUpperCase;