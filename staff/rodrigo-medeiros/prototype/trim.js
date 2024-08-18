/**
 * Elimina los espacios en blanco del principio y del final de la cadena actual.
 *
 * La función recorre la cadena desde el inicio y el final, identificando los primeros y últimos caracteres
 * que no son espacios en blanco. Luego, construye una nueva cadena excluyendo esos espacios en blanco.
 *
 * @returns {string} - Una nueva cadena sin los espacios en blanco al inicio y al final.
 */
function trim() {
    let start = 0;
    let end = this.length - 1;

    // Debemos encontrar el primer carácter no espacio desde el principio
    while (start <= end && this.value[start] === ' ') {
        start++;
    }

    // Encontrando el primer carácter no espacio desde el final
    while (end >= start && this.value[end] === ' ') {
        end--;
    }

    // Construir la cadena resultante
    let result = '';
    for (let i = start; i <= end; i++) {
        result += this.value[i];
    }

    return result;
}
module.exports = trim
