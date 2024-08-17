/* Cambia el contenido de un array eliminando elementos existentes y/o agregando nuevos elementos.

Parámetros:
    1) Start: índice donde se comienza a cambiar el array.
    2) DeleteCount__opcional__: indica el número de elementos a eliminar.
    3) ...item: son los items a añadir al array

Valor devuelto:
    - Un array que contiene los elementos eliminadoss
    - Si no se ha eliminado ningún elemento, devuelve un array vacío.

Condicionales:
    - start > array.length ==> start = array.length 
    - start < 0 ==> start = array.length - start
    - deleteCount = undefined ==> todos los elementos desde start hasta el final del array serán eliminados.
    - deleteCount > array.length - start (mayor que los elementos que quedan en el array) ==> todos los elementos desde start hasta el final del array serán eliminados.
    - deleteCount <= 0 ==> no se elimina nada. En ese caso, se debe añadir un item para añadir.
    - item = undefined ==> el método no añade nada. simplemente elimina.

Pasos:
    1) Recorrer el array desde la posición start.
    2) Eliminar, desde la posición start, tantos elementos como diga deleteCount.
    3) Añadir, en caso necesario, los elementos indicados en el parámetro item, en el mismo orden que aparecen.
    4) Devolver los elementos eliminados y modificar el array original. 
 */

function splice(array, start, deleteCount, ...item) {
  if (start > array.length) start = array.length;
  if (start < 0) start = array.length + start;
  if ((deleteCount = undefined || deleteCount > array.length - start))
    deleteCount = array.length;
  if (deleteCount < 0) deleteCount = 0;

  const element = [];
  let index = 0;
  for (let i = start; i < array.length; i++) {
    array.length = array.length + 1;
    array[start] = item;
    array[index] = array[index + 1];
    index++;
  }
  return element;
}
const arr = ["ratón", "teclado", "monitor", "altavoces"];
splice(arr, 0, 0, "alfombrilla");
console.log(arr);
