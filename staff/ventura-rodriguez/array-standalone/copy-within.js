function copyWithin(array, _target, _start, _end = array.length) {
  if (!(array instanceof Array)) return undefined;

  const elementsToCopy = [];

  const target = _target >= 0 ? _target : array.length + _target;
  const start = _start >= 0 ? _start : array.length + _start;
  const end = _end >= 0 ? _end : array.length + _end;

  let i = 0;
  while (elementsToCopy.length < end - start) {
    elementsToCopy[i] = array[start + i];
    i++;
  }

  const result = [...array];

  for (let i = 0; i < elementsToCopy.length; i++)
    result[target + i] = elementsToCopy[i];

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
  const result1 = copyWithin(noArray, 0, 3, 4);
  console.assert(result1 === undefined, {
    result: result1,
    message: "Test 1 No pasado",
  });

  const array2 = [1, 2, 3, 4, 5, 6, 7, 8];
  const result2 = copyWithin(array2, 0, 5);
  console.assert(arrayIsEqual(result2, array2.copyWithin(0, 5)), {
    result: result2,
    message: "Test 2 No pasado",
  });

  const array3 = [1, 2, 3, 4, 5, 6, 7, 8];
  const result3 = copyWithin(array3, 0, 3, 4);
  console.assert(arrayIsEqual(result3, array3.copyWithin(0, 3, 4)), {
    result: result3,
    message: "Test 3 No pasado",
  });

  const array4 = [1, 2, 3, 4, 5, 6, 7, 8];
  const result4 = copyWithin(array4, 0, 2, 4);
  console.assert(arrayIsEqual(result4, array4.copyWithin(0, 2, 4)), {
    result: result4,
    message: "Test 4 No pasado",
  });

  const array5 = [1, 2, 3, 4, 5];
  const result5 = copyWithin(array5, -2, -3, -1);
  console.assert(arrayIsEqual(result5, array5.copyWithin(-2, -3, -1)), {
    result: result5,
    message: "Test 5 No pasado",
  });
}
