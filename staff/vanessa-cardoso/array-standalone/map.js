// crea una nueva array
// uno de los parámetros es un array y el otro es un callback


// creamos una funcion en la cual recorremos uno a uno los elementos de la array que nos pasan por parametro
// y llamamos al esquema de implemetación del usuario pasandole el valor recorrido

// en este caso hay dos parámetros: array [1, 5, 6, 7] y callback, el cual tiene que ser de tipo FUNCIÓN OBLIGATORIAMENTE

function map(array, callback) {

    const newArray = [];

    for (let i = 0; i < array.length; i++) {
        newArray[i] = callback(array[i])
    }

    return newArray;


}

{
  const array1 = [1, 4, 9, 16];

  function double(value) {
    return value * 2;
  }

  function half(value) {
    return value / 2;
  }

  function squared(value) {
    return value ** 2;
  }

  const result1 = map(array1, double);
    console.log(map(array1, double))
  // console.assert(result1 === [1, 4, 9, 16].map(double), {
  //   result: result1,
  //   message: "Test 1 No pasado ",
  // });

  const result2 = map(array1, half);
    console.log(result2)
  // console.assert(result2 === [1, 4, 9, 16].map(half), {
  //   result: result2,
  //   message: "Test 2 No pasado ",
  // });

  const result3 = map(array1, squared);
    console.log(result3)
  // console.assert(result3 === [1, 4, 9, 16].map(squared), {
  //   result: result3,
  //   message: "Test 3 No pasado ",
  // });
}




