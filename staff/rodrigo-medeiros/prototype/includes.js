/**
 * Verifica si la cadena actual incluye la subcadena especificada.
 *
 * @param {string} searchString - La subcadena que se va a buscar dentro de la cadena actual.
 * @returns {boolean} - Devuelve `true` si la subcadena se encuentra dentro de la cadena actual, de lo contrario, devuelve `false`.
 */
function includes (searchString) {
    if (searchString === null) return false
    let result = false

    for (let i = 0; i < this.length; i++) {
      let countingMatches = 0
    for (let j = 0; j < searchString.length; j++) { 
     if (this.value[i + j] === searchString[j]) countingMatches++
    }
     if (countingMatches === searchString.length) result = true
    }
    return result
    }
module.exports = includes