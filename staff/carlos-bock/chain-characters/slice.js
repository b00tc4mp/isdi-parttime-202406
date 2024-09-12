//Version 1, caso basico
//metodo acepta tanto un parametro como dos para el indice. 
//si hay un parametro de indice crea un nuevo string con ese valor y el resto de la cadena
//si hay dos parametros usa el primer indice hasta llegar al segundo para crear el nuevo string
//si los indices sone negativos se cuentan desde el final del string original. 

const ChainCharacters = require("./constructor");

function slice(index1, index2) {
  let newString = "";

  for (let i = index1; i < index2; i++) {
          newString += this.value[i]; 
      }
  return new ChainCharacters(newString);
}

module.exports = slice