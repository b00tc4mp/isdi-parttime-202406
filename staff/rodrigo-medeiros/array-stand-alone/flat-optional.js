function flatArray(array, depth = 1) {
  if (!(array instanceof Array)) return undefined;

  const result = [];

  for (i = 0; i < array.length; i++) {
    if (array[i] instanceof Array && depth) {
      const flatagain = flatArray(array[i], depth - 1);
      for (let j = 0; j < flatagain.length; j++)
        result[result.length] = flatagain[j];
    } else result[result.length] = array[i];
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

  debugger;
  const notArray = "foo";
  const result1 = flatArray(notArray, 0);
  console.assert(result1 === undefined, {
    result: result1,
    message: "Test 1 No pasado",
  });

  const array2 = [0, 1, "fluminense", ["hola", 4]];
  const result2 = flatArray(array2);
  console.assert(arrayIsEqual(result2, array2.flat()), {
    result: result2,
    message: "Test 2 No pasado",
  });

  const array3 = [0, 1, [2, ["libertadores", ["2023", 3]]]];
  const result3 = flatArray(array3);
  console.assert(arrayIsEqual(result3, array3.flat()), {
    result: result3,
    message: "Test 3 No pasado",
  });

  const array4 = ["fluminense", "campeon", [1, ["libertadores", ["2023", 2]]]];
  const result4 = flatArray(array4, 2);
  console.assert(arrayIsEqual(result4, array4.flat(2)), {
    result: result4,
    message: "Test 4 No pasado",
  });

  const array5 = [0, 1, [2, [3, [4, "fluminense"]]]];
  const result5 = flat(array5, Infinity);
  console.assert(arrayIsEqual(result5, array5.flat(Infinity)), {
    result: result5,
    message: "Test 5 No pasado",
  });
}
