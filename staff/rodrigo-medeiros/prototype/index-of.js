/**
 * Busca la primera aparición de una subcadena dentro de la cadena principal y devuelve su índice.
 *
 * @param {string} searchString - La subcadena que se va a buscar dentro de la cadena principal.
 * @param {number} [startPosition=0] - La posición inicial desde donde comenzar la búsqueda. Si no se proporciona, se inicia desde el principio de la cadena.
 * @returns {number} - El índice de la primera aparición de `searchString` en la cadena principal. Devuelve `-1` si `searchString` no se encuentra o si hay parámetros inválidos.
 */


function indexOf(searchString, startPosition) {
    if (typeof startPosition !== 'number') return -1;
    if (typeof searchString !== 'string') return -1
    if (startPosition < 0) {startPosition = 0};
    if (startPosition > this.length - searchString.length) return -1
     let countMatches = 0
    for (let i = 0; i <= this.length - searchString.length;i++) {
        let result = false
        for (let j = 0; j < searchString.length; j++) {
            if (this.value[i + j] === searchString[j]) {
                countMatches++

            }}
        if (countMatches === searchString.length) return startPosition
        if (countMatches = 0) return -1;
        } 
    }
module.exports = indexOf