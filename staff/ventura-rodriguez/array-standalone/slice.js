function slice(array, _start = 0, _end = array.length) {
  if (!(array instanceof Array)) return undefined;

  const start = _start >= 0 ? _start : array.length + _start;
  const end = _end >= 0 ? _end : array.length + _end;

  const result = [];

  for (let index = start; index < end; index++)
    result[result.length] = array[index];

  return result;
}

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

  const noArray = "foo";
  const result1 = slice(noArray);
  console.assert(result1 === undefined, {
    result: result1,
    message: "Test 1 No pasado",
  });

  const animals = ["ant", "bison", "camel", "duck", "elephant"];

  const result2 = slice(animals, 2);
  console.assert(arrayIsEqual(result2, animals.slice(2)), {
    result: result2,
    message: "Test 2 No pasado",
  });

  const result3 = slice(animals, 2, 4);
  console.assert(arrayIsEqual(result3, animals.slice(2, 4)), {
    result: result3,
    message: "Test 3 No pasado",
  });

  const result4 = slice(animals, 1, 5);
  console.assert(arrayIsEqual(result4, animals.slice(1, 5)), {
    result: result4,
    message: "Test 4 No pasado",
  });

  const result5 = slice(animals, -2);
  console.assert(arrayIsEqual(result5, animals.slice(-2)), {
    result: result5,
    message: "Test 5 No pasado",
  });

  const result6 = slice(animals, 2, -1);
  console.assert(arrayIsEqual(result6, animals.slice(2, -1)), {
    result: result6,
    message: "Test 6 No pasado",
  });
}
