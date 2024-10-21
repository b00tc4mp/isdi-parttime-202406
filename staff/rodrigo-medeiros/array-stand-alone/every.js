/* array every 
en esta funcion debemos testar si todos os elementos de un array cumple con los requisitos 
de una funcion que va a pasar para atestar si los ementos cumplen con los requisitos de la 
funcion test, en caso positivo, lanza un true si no retorna false.
*/
/**
 * @function myEvery
 * @description Replica el comportamiento del método Array.prototype.every(). Verifica si todos los elementos de un array cumplen con una condición especificada por un callback.
 * @param {Array} array - El array a ser evaluado.
 * @param {Function} callback - La función que se ejecuta para cada elemento del array. Debe devolver `true` o `false`.
 * @returns {boolean} - `true` si todos los elementos del array cumplen con la condición del callback, `false` en caso contrario.
 */
function myEvery (array, callback) {
    let result = true
    for (let i = 0; i < array.length; i++) {
        if (callback(array[i]) === false) {
            
            return result = false;
        }
    }
    return result
}
const isBigEnough = (value) => value > 5;

// tdd

const array1 = [10, 20, 30, 40, 50];
const result1 = myEvery(array1, isBigEnough);
const result2 = array1.every(isBigEnough)
console.assert(result1 === result2,{
  result: result1,
  message: "Test 1 no pasado",
    });

const array2 = [3, 10, 20, 30, 40, 50];
const result3 = myEvery(array2, isBigEnough);
const result4 = array2.every(isBigEnough)
console.assert(result3 === result4,{
  result: result3,
  message: "Test 1 no pasado",
    });
