function pop(array) {
  if (!(array instanceof Array)) return undefined;

  let result = array[array.length - 1];
  array.length = array.length - 1;

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
  const result1 = pop(noArray);
  console.assert(result1 === undefined, {
    result: result1,
    message: "Test 1 no pasado",
  });

  const array2 = ["ant", "bison", "camel", "duck", "bison"];
  const result2 = pop(array2);
  const popArray2 = ["ant", "bison", "camel", "duck", "bison"];
  const popResult2 = popArray2.pop();
  console.assert(arrayIsEqual(array2, popArray2) && result2 === popResult2, {
    message: "Test 2 no pasado",
  });

  const array3 = [1, 2, 3, 4, 5, 6, 7, 8];
  const result3 = pop(array3);
  const popArray3 = [1, 2, 3, 4, 5, 6, 7, 8];
  const popResult3 = popArray3.pop();
  console.assert(arrayIsEqual(array3, popArray3) && result3 === popResult3, {
    message: "Test 3 no pasado",
  });
}
