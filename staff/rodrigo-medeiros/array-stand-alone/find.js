//retorna el primero elemento encontrado dentro de un array que cumple con
//determinados requisitos establecidos en una funcion.
/**
 * @function findInArray
 * @description Busca y devuelve el primer elemento en un array que cumpla con la condición especificada por una función de callback. Replica el comportamiento del método Array.prototype.find().
 * @param {Array} array - El array en el que se buscará.
 * @param {Function} callback - La función que se ejecuta para cada elemento del array. Debe devolver `true` para el elemento que se desea encontrar.
 * @returns {*} - El primer elemento que cumpla con la condición del callback, o `undefined` si no se encuentra ningún elemento.
 */
function findInArray (array, callback) {
    let result = ''
    for (let i = 0; i < array.length; i++) {
        if (callback(array[i]) === true) {
            result += array[i];
            return result
        }
    }
     return undefined; // Si no se encuentra ningún elemento
}

function isElementLongEnough (value) {
    for (let i = 0; i < value.length; i++){
    if(value.length > 5) {return true
    } else {
        return false
    }
}  
}

let array1 = ['gol', 'pelota','fluminense','delantero']
let result1 = findInArray(array1, isElementLongEnough);
let result2 = array1.find(isElementLongEnough);
console.assert(result1 === result2, {result: result1, message: "Test 1 No pasado "});