// Espera 1 parámetro obligatorio start y un parámetro opcional deleteCount
// también puede esperar detrás de el parámetro deleteCount tantos parámetros como quieras
// que se pondrán en el array después de eliminar la cantidad de posiciones establecidas en deleteCount

// Esta función retorna los elementos eliminados de mi array original en un nuevo array

// Esta función modifica el array original

// recorriendo el array hasta la posición de start y te cargas lo que está después

const splice = (array, start) => {
  const result = [];

  for (let i = 0; i < array.length; i++) {
    if (i >= start) result[result.length] = array[i];
  }

  array.length = start;

  return result;
};

{
  function arrayIsEqual(arr1, arr2) {
    if (arr1.length !== arr2.length) return false;
    let result = true;
    let i = 0;
    while (i < arr1.length || result === false) {
      if (arr1[i] !== arr2[i]) {
        result = false;
      }
      i++;
    }
    return result;
  }

  const array1 = [1, 2, 3, 4, 5, 6, 7, 8];
  const result1 = splice(array1, 4);

  console.assert(arrayIsEqual(array1, [1, 2, 3, 4]), {
    result: array1,
    message: "Test 1.1 no pasado",
  });
  console.assert(arrayIsEqual(result1, [5, 6, 7, 8]), {
    result: result1,
    message: "Test 1.2 no pasado",
  });
}
