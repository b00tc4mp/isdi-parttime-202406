function fill(array, value, _start = 0, _end = array.length) {
  if (!(array instanceof Array)) return undefined;

  const start = _start >= 0 ? _start : array.length + _start;
  const end = _end >= 0 ? _end : array.length + _end;

  const result = [...array];

  for (let i = start; i < end; i++) result[i] = value;

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
  const result1 = fill(noArray, 0, 3, 4);
  console.assert(result1 === undefined, {
    result: result1,
    message: "Test 1 No pasado",
  });

  const array2 = [1, 2, 3, 4, 5, 6, 7, 8];
  const result2 = fill(array2, 0, 2, 4);
  console.assert(arrayIsEqual(result2, array2.fill(0, 2, 4)), {
    result: result2,
    message: "Test 2 No pasado",
  });

  const array3 = [1, 2, 3, 4, 5, 6, 7, 8];
  const result3 = fill(array3, 5, 1);
  console.assert(arrayIsEqual(result3, array3.fill(5, 1)), {
    result: result3,
    message: "Test 3 No pasado",
  });

  const array4 = [1, 2, 3, 4, 5, 6, 7, 8];
  const result4 = fill(array4, 6);
  console.assert(arrayIsEqual(result4, array4.fill(6)), {
    result: result4,
    message: "Test 4 No pasado",
  });

  const array5 = [1, 2, 3, 4, 5, 6, 7, 8];
  const result5 = fill(array5, 4, -3, -2);
  console.assert(arrayIsEqual(result5, array5.fill(4, -3, -2)), {
    result: result5,
    message: "Test 5 No pasado",
  });
}
