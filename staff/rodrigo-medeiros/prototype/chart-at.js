/**
 * Devuelve el carácter en la posición especificada dentro de la cadena en la que se llama la función.
 * 
 * @function
 * @name charAt
 * @param {number} index - La posición del carácter a devolver.
 * @returns {string} El carácter en la posición especificada, o una cadena vacía si el índice está fuera de rango.
 * @this {string} La cadena a la que se aplica la función.
 */
//str.charAt(indice)
//Version stand alone
function charAt(index) {
     let result = this.value[index]

   if (typeof index !== 'number') {
    result = this.value[0]
    }
   else if (index >= this.length) {
    result = "";
   }
    return result
  }
  module.exports = charAt;