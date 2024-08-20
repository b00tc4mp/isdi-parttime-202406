function push(array) {
  if (!(array instanceof Array)) return undefined;

  for (let i = 1; i < arguments.length; i++) {
    array[array.length] = arguments[i];
  }

  let result = array.length;

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
  const result1 = push(noArray);
  console.assert(result1 === undefined, {
    result: result1,
    message: "Test 1 no pasado",
  });

  const array2 = ["ant", "bison", "camel", "duck", "bison"];
  const result2 = push(array2, "snake");
  const pushArray2 = ["ant", "bison", "camel", "duck", "bison"];
  const pushResult2 = pushArray2.push("snake");
  console.assert(arrayIsEqual(array2, pushArray2) && result2 === pushResult2, {
    result: result2,
    message: "Test 2 no pasado",
  });

  const array3 = [1, 2, 3, 4, 5, 6, 7, 8];
  const result3 = push(array3, 9, 10);
  const pushArray3 = [1, 2, 3, 4, 5, 6, 7, 8];
  const pushResult3 = pushArray3.push(9, 10);
  console.assert(arrayIsEqual(array3, pushArray3) && result3 === pushResult3, {
    result: result3,
    message: "Test 3 no pasado",
  });
}
