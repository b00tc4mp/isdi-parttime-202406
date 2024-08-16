function at(array, _index) {
  if (!(array instanceof Array)) return undefined;
  if (!(typeof _index === "number")) return array[0];
  if (array.length < Math.abs(_index)) return undefined;

  const index = _index >= 0 ? _index : array.length + _index;

  return array[index];
}

{
  const array1 = [1, 2, 3, 4, 5, 6, 7, 8];
  const result1 = at(array1, 3);
  console.assert(result1 === array1.at(3), {
    result: result1,
    message: "Test 1 No pasado",
  });

  const array2 = [1, 2, 3, 4, 5, 6, 7, 8];
  const result2 = at(array2, -2);
  console.assert(result2 === array2.at(-2), {
    result: result2,
    message: "Test 2 No pasado",
  });

  const array3 = [1, 2, 3, 4, 5, 6, 7, 8];
  const result3 = at(array3, 20);
  console.assert(result3 === array3.at(20), {
    result: result3,
    message: "Test 3 No pasado",
  });

  const array4 = [1, 2, 3, 4, 5, 6, 7, 8];
  const result4 = at(array4, -30);
  console.assert(result4 === array4.at(-30), {
    result: result4,
    message: "Test 4 No pasado",
  });

  const noArray = "foo";
  const result5 = at(noArray, -30);
  console.assert(result5 === undefined, {
    result: result5,
    message: "Test 5 No pasado",
  });
}
