// array filter buscar en un array los elementos que cumplan determinadas condiciones determinadas por una 
//funcion que pasa en cada un de los elementos de un array, retornando un array con los elementos que cumplan 
// los requisitos.
/**
 * @function filterArray
 * @description Filtra los elementos de un array según una condición especificada en una función de callback. Replica el comportamiento del método Array.prototype.filter().
 * @param {Array} array - El array a filtrar.
 * @param {Function} callback - La función que se ejecuta para cada elemento del array. Debe devolver `true` para los elementos que deben incluirse en el resultado.
 * @returns {Array} - Un nuevo array con los elementos que cumplieron la condición del callback.
 */

function filterArray (array, callback) {
    let result = []
    for (let i = 0; i < array.length; i++) {
        if (callback(array[i]) === true) {
            result.push(array[i]);
        }
    }
    return result
}

function isElementLongEnough (value) {
    for (let i = 0; i < value.length; i++){
    if(value.length > 5) {return true
    } else {
        return false
    }
}  
}
function arraysAreEqual(arr1, arr2) {
  if (arr1.length !== arr2.length) {
      return false;
  }

  for (let i = 0; i < arr1.length; i++) {
      if (arr1[i] !== arr2[i]) {
          return false;
      }
  }

  return true;
}

let array1 = ['gol', 'pelota','fluminense','delantero']
let result1 = filterArray(array1, isElementLongEnough);
let result2 = array1.filter(isElementLongEnough);
console.assert(arraysAreEqual(result1, result2), "Test 1 No pasado");
