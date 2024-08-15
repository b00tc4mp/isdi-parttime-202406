// Este método copia parte de un array original y lo pega en otra posición
// dentro del MISMO array sin modificar su longitud.

// Tiene 3 parámetros:
/* 
        1) Target = Dónde quieres insertar el primer elemento copiado.
        2) Start = A partir de qué elemento quieres copiarlo.
        3) End = Último elemento que va a ser copiado (éste excluido).
    
    */

// Iterar sobre el array, encontrar el Start, seguir iterando hasta encontrat el End.
// Una vez lo tenemos, ir al Target y SUBSTITUIR Target por Start y seguir substituyendo hasta End.

// Ejemplo:

// const array1 = ['a', 'b', 'c', 'd', 'e'];
// Copy to index 0 the element at index 3
//console.log(array1.copyWithin(0, 3, 4));
// Expected output: Array ["d", "b", "c", "d", "e"]

function copyWithin(arr, target, start, end) {
  if (end === undefined) {
    end === arr.length;
  }

  if (start < 0) {
    start = arr.length + start;
  }

  if (target < 0) {
    target = arr.length + target;
  }

  if (end < 0) {
    end = arr.length + end;
  } else if (end > arr.length) {
    end = arr.length;
  }

  for (let i = 0; i < arr.length; i++) {
    arr[target] = arr[start];
  }
  return arr;
}

const result1 = copyWithin(["tendria", "para", "un", "café"], 0, 2, 3);
console.assert(
  result1 === ["tendria", "para", "un", "café"].copyWithin(0, 2, 4),
  { result: result1, message: "Test 1 no pasado" }
);
