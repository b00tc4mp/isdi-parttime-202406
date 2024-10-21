// String.prototype.endsWith()

// Saber cuál es el índice de la letra que se encuentra en última posición y ver si coincide.
// iterar string y sacar carácteres empezando por el último (endPosition.length -1) y en el momento que no coincida o que se acabe
// la longitud del endPosition, sacar el resultado.

function endsWith(searchString, endPosition = this.length) {
  let subsString = "";

  for (let i = 0; i < searchString.length; i++) {
    subsString += this.value[endPosition - searchString.length + i];
  }

  return subsString === searchString;
}

module.exports = endsWith;
