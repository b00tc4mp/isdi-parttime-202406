//retorna el index del primer elemento encontrado dentro de un array que cumple con
//determinados requisitos establecidos en una funcion.
/**
 * @function findIndexInArray
 * @description Busca y devuelve el índice del primer elemento en un array que cumpla con la condición especificada por una función de callback. Replica el comportamiento del método Array.prototype.findIndex().
 * @param {Array} array - El array en el que se buscará.
 * @param {Function} callback - La función que se ejecuta para cada elemento del array. Debe devolver `true` para el elemento cuyo índice se desea encontrar.
 * @returns {number|undefined} - El índice del primer elemento que cumpla con la condición del callback, o `-1` si no se encuentra ningún elemento.
 */


function findIndexInArray (array, callback) {
    let indexCounter = ''
    for (let i = 0; i < array.length; i++) {
        if (callback(array[i]) === true) {
            indexCounter = i
            return indexCounter
        }
    }
     return -1; // Si no se encuentra ningún elemento
}

function isElementLongEnough (value) {
    for (let i = 0; i < value.length; i++){
    if(value.length > 7) {return true
    } else {
        return false
    }
}  
}

let array1 = ['gol', 'pelota','fluminense','delantero']
let result1 = findIndexInArray(array1, isElementLongEnough);
let result2 = array1.findIndex(isElementLongEnough);
console.assert(result1 === result2, {result: result1, message: "Test 1 No pasado "});