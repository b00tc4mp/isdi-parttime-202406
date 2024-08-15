/* Este método comprueba si a todos los elementos del array se les está aplicando la función 
que le asignemos a callback. */

function every(array, callback) {
  // Verificamos si el argumento proporcionado es un array
  if (!(array instanceof Array)) return undefined;

  // Establecemos resultado como true
  let result = true;

  // Iteramos sobre cada elemento del array
  for (let i = 0; i < array.length; i++) {
    // Determinamos cada elemento del array por separado
    const element = array[i];

    // Si el resultado de aplicar la función al elemento es false, establecemos el resultado como false.
    if (!callback(element)) {
      result = false;
      break; // Salimos del bucle al encontrar un elemento que no cumple la condición
    }
  }
  return result;
}

const array1 = [1, 2, 3, 4, 5];
const result1 = every(array1, (currentValue) => currentValue < 40);
console.assert(result1 === array1.every((currentValue) => currentValue < 40), {
  result: result1,
  message: "Test 1 No pasado",
});

const array2 = [10, 20, 30, 40, -1];
const result2 = every(array2, (currentValue) => currentValue < 40);
console.assert(result2 === array2.every((currentValue) => currentValue < 40), {
  result: result2,
  message: "Test 2 No pasado",
});

const array3 = ["Alboroto"];
const result3 = every(array3, (currentValue) => currentValue < 40);
console.assert(result3 === array3.every((currentValue) => currentValue < 40), {
  result: result3,
  message: "Test 3 No pasado",
});

/* Con este código se pretende simular el comportamiento de array.prototype.every(). Para pasar los tests, debemos
  forzar también a que el resultado del método sea false, y en ese caso, que también sea false en nuestro código, para
  así coincidir en el resultado y pasar el test. */
