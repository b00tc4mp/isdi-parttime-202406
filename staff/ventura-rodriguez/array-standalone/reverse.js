function reverse(array) {
  if (!(array instanceof Array)) return undefined;

  for (let i = 0; i < Math.floor(array.length / 2); i++) {
    const elementSaved = array[array.length - 1 - i];
    array[array.length - 1 - i] = array[i];
    array[i] = elementSaved;
  }

  return array;
}

{
  const noArray = "foo";
  const result1 = reverse(noArray);
  console.assert(result1 === undefined, {
    result: result1,
    message: "Test 1 No pasado",
  });

  const array2 = [1, 2, 3, 4, 5];
  const result2 = reverse(array2);
  const reverseArray2 = [1, 2, 3, 4, 5];
  const reverseResult2 = reverseArray2.reverse();
  console.assert(
    array2 === result2 &&
      array2[0] === reverseResult2[0] &&
      array2[1] === reverseResult2[1] &&
      array2[2] === reverseResult2[2] &&
      array2[3] === reverseResult2[3] &&
      array2[4] === reverseResult2[4],
    {
      result: result2,
      message: "Test 2 No pasado",
    }
  );
}
