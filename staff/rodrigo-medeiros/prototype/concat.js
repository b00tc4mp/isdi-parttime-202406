/**
 * Concatena todos los argumentos proporcionados en una sola cadena.
 *
 * @param {...string} args - Los strings que se desean concatenar.
 * @returns {string} - Una nueva cadena resultante de la concatenación de todos los argumentos.
 */

function concat (...args) {
    let result = this.value
    for (let i = 0; i < args.length; i++) {
        result += args[i] 
    }  
return result
}
module.exports = concat