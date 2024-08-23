// String.prototype.endsWith()

// Saber cuál es el índice de la letra que se encuentra en última posición y ver si coincide.
// iterar string y sacar carácteres empezando por el último (endPosition.length -1) y en el momento que no coincida o que se acabe
// la longitud del endPosition, sacar el resultado.

function endsWith(endPosition) {
  let result = true;
  if (endPosition === null) return false;
  let j = endPosition.length - 1;

  for (let i = this.length - 1; j >= 0; i--) {
    if (endPosition[j] !== this.value[i]) {
      result = false;
      break;
    }
    j--;
  }
  return result;
}

module.exports = endsWith;
