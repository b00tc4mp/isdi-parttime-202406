// Elmina el último elemento de un array y lo devuelve. Cambia la longitud del array.
// Si el array está vacío, devuelve undefined.

/* Ir a la última posición del array, eliminar ese valor y devolverlo. Además
   cambiará la longitud del array ya que ahora tiene un valor menos. */

function pop(array) {
  // Verificamos si el array está vacío
  if (array.length === 0) return undefined;

  // Accedemos al último elemento del array y lo guardamos para devolverlo.
  const element = array[array.length - 1];

  // Acortamos la longitud del array, eliminando así la última posición.
  array.length = array.length - 1;

  // Devolvemos el elemento eliminado.
  return element;
}

// Hacemos TDD para comprobar tanto el elemento eliminado como la longitud del array.
const array1 = [1, 2, 3, 4, 5];
const popped1 = pop(array1);
console.assert(popped1 === 5, {
  result: popped1,
  message: "Test 1 no pasado",
});
console.assert(array1.length === 4 && array1[3] === 4, {
  result: array1,
  message: "Test 1 no pasado",
});

const array2 = ["single"];
const popped2 = pop(array2);
console.assert(popped2 === "single", {
  result: popped2,
  message: "Test 2 no pasado",
});
console.assert(array2.length === 0, {
  result: array2,
  message: "Test 2 no pasado",
});

const array3 = [];
const popped3 = pop(array3);
console.assert(popped3 === undefined, {
  result: popped3,
  message: "Test 3 no pasado",
});
console.assert(array3.length === 0, {
  result: array3,
  message: "Test 3 no pasado",
});
