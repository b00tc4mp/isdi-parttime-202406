/* Cambia el contenido de un array eliminando elementos existentes y/o agregando nuevos elementos.

Parámetros:
    1) Start: índice donde se comienza a cambiar el array.
    2) DeleteCount__opcional__: indica el número de elementos a eliminar.
    3) ...item: son los items a añadir al array

Valor devuelto:
    - Un array que contiene los elementos eliminados.
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
  if (deleteCount === undefined || deleteCount > array.length - start) {
    deleteCount = array.length - start;
  }
  if (deleteCount < 0) deleteCount = 0;

  const element = [];

  // Copiar los elementos a eliminar en el array `element`
  for (let i = start; i < start + deleteCount; i++) {
    element[element.length] = array[i];
  }

  // Desplazar los elementos restantes a la izquierda para cubrir el hueco
  for (let i = start + deleteCount; i < array.length; i++) {
    array[i - deleteCount] = array[i];
  }

  // Ajustar la longitud del array después de eliminar los elementos
  array.length = array.length - deleteCount;

  // Desplazar los elementos hacia la derecha para hacer espacio para los nuevos elementos
  for (let i = array.length - 1; i >= start; i--) {
    array[i + item.length] = array[i];
  }

  // Insertar los nuevos elementos
  for (let i = 0; i < item.length; i++) {
    array[start + i] = item[i];
  }

  return element;
}

// EXPLICACIÓN DEL CÓDIGO

/*
Eliminar Elementos:

  - Primero, eliminamos los elementos según start y deleteCount copiándolos en un nuevo array llamado element.
  - Luego, desplazamos los elementos que vienen después de deleteCount hacia la izquierda para cubrir el hueco.

Ajuste de Longitud:

  - Ajustamos la longitud del array original para reflejar la eliminación.

Desplazamiento de Elementos:

  - Antes de insertar nuevos elementos, desplazamos los elementos existentes a la derecha para hacer espacio.

Inserción de Nuevos Elementos:

  - Insertamos los nuevos elementos (...item) en la posición correcta.*/
