/**
 * Verifica si una cadena termina con la subcadena especificada.
 *
 * @param {string} string - La cadena principal que se va a verificar.
 * @param {string} endString - La subcadena que se espera al final de la cadena principal.
 * @returns {boolean} - Devuelve `true` si la cadena principal termina con la subcadena especificada, de lo contrario, devuelve `false`.
 */


function endsWith(endString) {


  if (endString === null) return false;

  let result = false;
  for (let i = 0; i < endString.length; i++) {
    if (this.value[this.length - endString.length + i] === endString[i]) {
      result = true;
    } else {
      false;
      break;
    }
  }
  return result;
}
module.exports = endsWith