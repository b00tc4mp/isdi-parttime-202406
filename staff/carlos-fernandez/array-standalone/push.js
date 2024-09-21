// Este método añade los parámetros indicados al final un array, devolviendo la longitud
// del nuevo array modificado.

// Ir a la última posición del array y añadir los parámetros. Devolver array.length.

//////////////// NOTA /////////////////

/* No podemos hacer la siguiente asignación "array[array.length] = item;" porque item es igual
a un array. Con esta asignación estaríamos añadiendo un array al array original, y queremos que
se añada el valor que hay dentro de item, por eso asignamos item[i]. */

function push(array, ...item) {
  let index = array.length;
  // Recorro los items.
  for (let i = 0; i < item.length; i++) array[index + i] = item[i];
  // Asignamos la última posición del array al primer elemento de item, y así sucesivamente.

  return array.length;
}

/* Creamos 2 arrays comparativas porque de lo contrario el método standalone y el método nativo ejecutan
la misma array y cambian la longitud de la misma, haciendo imposible que la comparación entre sí
sea correcta, ya que el último código ejecutado tendrá una longitud mayor. */

// TEST 1
const arr1 = [1, 2, 3, 4, 5];
const arr2 = [1, 2, 3, 4, 5]; // Un array independiente para comparar

const result1 = push(arr1, 0); // Usas tu función custom 'push'
const expected = arr2.push(0); // Usas el método nativo de 'push'

console.assert(result1 === expected, {
  result: result1,
  message: "Test 1 no pasado",
});

// TEST 2
const arr3 = []; // Array vacío
const arr4 = []; // Un array independiente para comparar

const result2 = push(arr3, 10); // Usas tu función custom 'push'
const expected2 = arr4.push(10); // Usas el método nativo de 'push'

console.assert(result2 === expected2, {
  result: result2,
  message: "Test 2 no pasado",
});

// TEST 3
const arr5 = [1, 2, 3];
const arr6 = [1, 2, 3]; // Un array independiente para comparar

const result3 = push(arr5, 4, 5, 6); // Usas tu función custom 'push'
const expected3 = arr6.push(4, 5, 6); // Usas el método nativo de 'push'
debugger;
console.assert(result3 === expected3, {
  result: result3,
  message: "Test 3 no pasado",
});

// TEST 4
const arr7 = [1, 2];
const arr8 = [1, 2]; // Un array independiente para comparar

const result4 = push(arr7, undefined); // Usas tu función custom 'push'
const expected4 = arr8.push(undefined); // Usas el método nativo de 'push'

console.assert(result4 === expected4, {
  result: result4,
  message: "Test 4 no pasado",
});

// TEST 5
const arr9 = [3, 4];
const arr10 = [3, 4]; // Un array independiente para comparar

const result5 = push(arr9, null); // Usas tu función custom 'push'
const expected5 = arr10.push(null); // Usas el método nativo de 'push'

console.assert(result5 === expected5, {
  result: result5,
  message: "Test 5 no pasado",
});
