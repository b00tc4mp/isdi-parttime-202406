// tenemos un array que deseamos cortar e dividir en otro array, esta funcion depende de un array,
//un punto de partida, un contador que utilizamos para definir el intervalo de corte y um array que podemos
// introduzir donde haya salido el array definido en el intervalo de corte entonces
//quando llegamos a la posicion de start empezamos a cortar y guardamos, cortamos hasta donde dice el contador y devolvemos
//recogemos y guardamos el final del array y despues introducimos el array nuevo en la posicion donde quitamos el array
//del intervalo, entonces al final introducimos el final del array original.
const spliceArray = (array, start, deleteCount = 0, arrayRepuesto = []) => {
  // arrayInicio y arrayEnd no sirvem para nada ahora mismo, o lo usas o lo eliminas
  // falta mofificar el array original solo para dejar los valores que se quedan
  let resultArray = [];
  let arrayDelete = [];

  //debemos ahora recortar el array inicial
  for (let i = 0; i < start; i++) {
    resultArray.push(array[i]);
  }
  //debemos ahora remover el array a ser retirado si deleteCount > 0
  if (deleteCount > 0) {
    for (let j = 0; j < deleteCount; j++) {
      arrayDelete.push(array[start + j]);
    }
  }
  if (deleteCount === 0) {
    for (let l = 0; l < array.length - start; l++) {
      arrayDelete.push(array[start + l]);
    }
  }
  //debemos agregar el array repuesto a la cadena
  for (let z = 0; z < arrayRepuesto.length; z++) {
    resultArray.push(arrayRepuesto[z]);
  }
  //debemos ahora guardar el restante del array que esta despues de la posicion start + deleteCount para agregar al final
  if (deleteCount > 0) {
    for (let k = 0; k < array.length - start - deleteCount; k++) {
      resultArray.push(array[start + deleteCount + k]);
    }
  }
  //ahora que tenemos el inicio (arrayInicio), medio (arrayRepuesto) y fin podemos juntar todo e devolver el
  //resultado
  array.length = resultArray.length;
  for (let i = 0; i < resultArray.length; i++) {
    array[i] = resultArray[i];
  }
  return arrayDelete;
};
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
debugger;
const array1 = [1, 2, 3, 4, 5, 6, 7, 8];
const result1 = spliceArray(array1, 4);

console.assert(arrayIsEqual(array1, [1, 2, 3, 4])),
  {
    result: array1,
    message: "Test 1.1 no pasado",
  };
console.assert(arrayIsEqual(result1, [5, 6, 7, 8]), {
  result: result1,
  message: "Test 1.2 no pasado",
});

const array2 = ["a", "b", "c", "d", "e", "f", "g", "h"];
const result2 = spliceArray(array2, 4, 2);

console.assert(arrayIsEqual(array2, ["a", "b", "c", "d", "g", "h"]), {
  result: array2,
  message: "Test 2.1 no pasado",
});
console.assert(arrayIsEqual(result2, ["e", "f"]), {
  result: result2,
  message: "Test 2.2 no pasado",
});

const array3 = ["a", "b", "c", "d", "e", "f", "g", "h"];
const result3 = spliceArray(array3, 4, 2, [1, 2]);

console.assert(arrayIsEqual(array3, ["a", "b", "c", "d", 1, 2, "g", "h"]), {
  result: array3,
  message: "Test 3.1 no pasado",
});
console.assert(arrayIsEqual(result3, ["e", "f"]), {
  result: result3,
  message: "Test 3.2 no pasado",
});
