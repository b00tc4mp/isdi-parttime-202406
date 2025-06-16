
function fill(array, starter = 0, finisher = array.length, filler) {
  let llenito = []; // Inicializar el nuevo array vacío

  for (let i = 0; i < array.length; i++) {
    if (i >= starter && i < finisher) {
      llenito.push(filler); // Llenamos con filler si está en el rango
    } else {
      llenito.push(array[i]); // Si no está en el rango, mantenemos el valor original
    }
  }

  return llenito; // Devolvemos el nuevo array
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

// Pruebas
const array1 = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const result1 = fill(array1, 2, 4, 0);
console.assert(arraysAreEqual(result1, array1.fill(0, 2, 4)), "Test 1 No pasado");

const array2 = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const result2 = fill(array2, 0, 2, 4);
console.assert(arraysAreEqual(result2, array2.fill(4, 0, 2)), "Test 2 No pasado");

const array3 = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const result3 = fill(array3, 3, 6, 8);
console.assert(arraysAreEqual(result3, array3.fill(8, 3, 6)), "Test 3 No pasado");