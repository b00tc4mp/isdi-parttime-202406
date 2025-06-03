// Este método devuelve el array ordenado. Si no se le pasa una función
// comparativa, ordenará según Unicode. Convertirá los números a string
// y los ordenará.

function sort(array, callback) {
  // 1. Comprobación de si el argumento es un array.
  if (!(array instanceof Array)) return undefined;

  // 2. Bucle principal de ordenamiento.
  // Cada vez acortamos más la longitud a recorrer porque con cada pasada el elemento más grande se coloca
  // al final del array.
  for (let i = 0; i < array.length - 1; i++) {
    for (let j = 0; j < array.length - i - 1; j++) {
      const a = array[j];
      const b = array[j + 1];

      // 3. Lógica de comparación.
      // Si hay un callback, se usa para comparar; si no, se hace una comparación lexicográfica.
      if (
        (!!callback && callback(a, b) > 0) ||
        (!callback && String(a) > String(b))
      ) {
        // 4. Intercambio de valores si la comparación lo indica.
        const temp = array[j];
        array[j] = array[j + 1];
        array[j + 1] = temp;
      }
    }
  }

  // 5. Devuelve el array ordenado.
  return array;
}

{
  const array = [3, 1, 4, 2];
  const result = sort(array);

  // Verificamos que el array esté ordenado en orden ascendente.
  console.assert(result[0] === 1, {
    result,
    message: "Test 1 no pasado en posición 0",
  });
  console.assert(result[1] === 2, {
    result,
    message: "Test 1 no pasado en posición 1",
  });
  console.assert(result[2] === 3, {
    result,
    message: "Test 1 no pasado en posición 2",
  });
  console.assert(result[3] === 4, {
    result,
    message: "Test 1 no pasado en posición 3",
  });
}

{
  const array = ["d", "a", "c", "b"];
  const result = sort(array);

  // Verificamos que las letras estén ordenadas alfabéticamente.
  console.assert(result[0] === "a", {
    result,
    message: "Test 2 no pasado en posición 0",
  });
  console.assert(result[1] === "b", {
    result,
    message: "Test 2 no pasado en posición 1",
  });
  console.assert(result[2] === "c", {
    result,
    message: "Test 2 no pasado en posición 2",
  });
  console.assert(result[3] === "d", {
    result,
    message: "Test 2 no pasado en posición 3",
  });
}

{
  const array = [3, 1, 4, 2];
  const result = sort(array, (a, b) => b - a);

  // Verificamos que el array esté ordenado en orden descendente.
  console.assert(result[0] === 4, {
    result,
    message: "Test 3 no pasado en posición 0",
  });
  console.assert(result[1] === 3, {
    result,
    message: "Test 3 no pasado en posición 1",
  });
  console.assert(result[2] === 2, {
    result,
    message: "Test 3 no pasado en posición 2",
  });
  console.assert(result[3] === 1, {
    result,
    message: "Test 3 no pasado en posición 3",
  });
}

{
  const array = [];
  const result = sort(array);

  // Verificamos que el resultado sea un array vacío.
  console.assert(result.length === 0, {
    result,
    message: "Test 4 no pasado, el array no está vacío",
  });
}

{
  const array = [100, "10", "2", 20];
  const result = sort(array);

  // Verificamos que el array esté ordenado lexicográficamente.
  console.assert(result[0] === "10", {
    result,
    message: "Test 5 no pasado en posición 0",
  });
  console.assert(result[1] === 100, {
    result,
    message: "Test 5 no pasado en posición 1",
  });
  console.assert(result[2] === "2", {
    result,
    message: "Test 5 no pasado en posición 2",
  });
  console.assert(result[3] === 20, {
    result,
    message: "Test 5 no pasado en posición 3",
  });
}
