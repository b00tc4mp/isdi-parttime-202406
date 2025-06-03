function concat(array) {
  if (!(array instanceof Array)) return undefined;

  const result = [...array];

  for (let i = 1; i < arguments.length; i++) {
    let element = arguments[i];
    if (!(element instanceof Array)) element = [element];
    for (let j = 0; j < element.length; j++) result[result.length] = element[j];
  }

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

  const result1 = concat([1, 2], [3, 4]);
  console.assert(arrayIsEqual(result1, [1, 2].concat([3, 4])), {
    result: result1,
    message: "Test 1 No pasado",
  });

  const result2 = concat([1, 2], "foo");
  console.assert(arrayIsEqual(result2, [1, 2].concat("foo")), {
    result: result2,
    message: "Test 2 No pasado",
  });

  const result3 = concat([1, 2], [3, 4], [5, 6], Infinity);
  console.assert(
    arrayIsEqual(result3, [1, 2].concat([3, 4], [5, 6], Infinity)),
    {
      result: result3,
      message: "Test 3 No pasado",
    }
  );

  const noArray = "foo";
  const result4 = concat(noArray, [1, 2]);
  console.assert(result4 === undefined, {
    result: result4,
    message: "Test 4 No pasado",
  });
}
