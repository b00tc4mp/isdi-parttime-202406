const ChainCharacters = require("./constructor");

//str.at(indice)
//Version stand alone
function at(index) {
  // Separo cada uno de mis carácteres y les pongo un numero en orden de izquierda a derecha
  // Separo cada uno de mis carácteres y les pongo un número en orden en negativo de derecha a izquierda
  // Con el valor que me pasan por index, macheo el index con el numero que le he puesto a cada uno
  // de mis carácteeres y devulevo el caracter matcheado

  let result = "";

  if (
    (index === null || typeof index === "string") &&
    typeof this.value === "string"
  ) {
    return this.value[0];
  }
  if (index > this.length) return undefined;

  for (let i = 0; i < this.length; i++) {
    const character = this.value[i];

    if (index === i) {
      result = character;
    } else if (index < 0 && i === this.length + index) {
      result = character;
    }
  }
  return new ChainCharacters(result);
}

module.exports = at;
