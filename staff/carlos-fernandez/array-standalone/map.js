function map(array, callback) {
  const newArray = [];
  for (let i = 0; i < array.length; i++) {
    newArray[i] = callback(array[i]);
  }
  return newArray;
}

// Función para comparar arrays elemento por elemento
function arrayIsEqual(arr1, arr2) {
  if (arr1.length !== arr2.length) return false;
  for (let i = 0; i < arr1.length; i++) {
    if (arr1[i] !== arr2[i]) return false;
  }
  return true;
}

// Tests
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

  // Test 1: Map with double function
  const result1 = map(array1, double);
  console.assert(arrayIsEqual(result1, [1, 4, 9, 16].map(double)), {
    result: result1,
    message: "Test 1 No pasado ",
  });

  // Test 2: Map with half function
  const result2 = map(array1, half);
  console.assert(arrayIsEqual(result2, [1, 4, 9, 16].map(half)), {
    result: result2,
    message: "Test 2 No pasado ",
  });

  // Test 3: Map with squared function
  const result3 = map(array1, squared);
  console.assert(arrayIsEqual(result3, [1, 4, 9, 16].map(squared)), {
    result: result3,
    message: "Test 3 No pasado ",
  });
}
