function shift(array) {
  if (!(array instanceof Array)) return undefined;

  const element = array[0];
  for (let i = 1; i < array.length; i++) array[i - 1] = array[i];
  array.length = array.length - 1;
  return element;
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
  const result1 = shift(noArray);
  console.assert(result1 === undefined, {
    result: result1,
    message: "Test 1 no pasado",
  });

  const array2 = ["ant", "bison", "camel", "duck", "bison"];
  const result2 = shift(array2);
  const shiftArray2 = ["ant", "bison", "camel", "duck", "bison"];
  const shiftResult2 = shiftArray2.shift();
  console.assert(
    arrayIsEqual(array2, shiftArray2) && result2 === shiftResult2,
    {
      message: "Test 2 no pasado",
    }
  );

  const array3 = [1, 2, 3, 4, 5, 6, 7, 8];
  const result3 = shift(array3);
  const shiftArray3 = [1, 2, 3, 4, 5, 6, 7, 8];
  const shiftResult3 = shiftArray3.shift();
  console.assert(
    arrayIsEqual(array3, shiftArray3) && result3 === shiftResult3,
    {
      message: "Test 3 no pasado",
    }
  );
}
