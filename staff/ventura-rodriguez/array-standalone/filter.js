function filter(array, callback) {
  if (!(array instanceof Array)) return undefined;

  let result = [];

  for (let i = 0; i < array.length; i++) {
    const element = array[i];
    if (callback(element)) result[result.length] = element;
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

  const noArray = "foo";
  const result1 = filter(noArray, (item) => typeof item === "number");
  console.assert(result1 === undefined, {
    result: result1,
    message: "Test 1 No pasado",
  });

  const array2 = [1, 2, 3, 4, 5, 6, 7, 8];
  const result2 = filter(array2, (item) => typeof item === "number");
  console.assert(
    arrayIsEqual(
      result2,
      array2.filter((item) => typeof item === "number")
    ),
    {
      result: result2,
      message: "Test 2 No pasado",
    }
  );

  const array3 = [1, 2, 3, 4, 5, "a", 7, "b"];
  const result3 = filter(array3, (item) => typeof item === "string");
  console.assert(
    arrayIsEqual(
      result3,
      array3.filter((item) => typeof item === "string")
    ),
    {
      result: result3,
      message: "Test 3 No pasado",
    }
  );
}
