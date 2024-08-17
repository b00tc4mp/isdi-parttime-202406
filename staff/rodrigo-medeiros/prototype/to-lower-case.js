/**
 * Convierte todos los caracteres de la cadena actual a minúsculas.
 *
 * @returns {string} - Una nueva cadena con todos los caracteres en minúsculas.
 */
debugger
function toLowerCase () {
    const minusculas = 'abcdefghijklmnopqrstuvwxyz'
    const maiusculas = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
    let result = ''
    for (let i = 0; i < this.length; i++) {
       let encontrado = false
        for(let j = 0; j < minusculas.length; j++) {
        if (this.value[i] === maiusculas[j]) {
            encontrado = true;
            result += minusculas[j];
            break

        }

     }
        if (!encontrado) {
            result += this.value[i]
        }
    }
     return result;   
}
module.exports = toLowerCase