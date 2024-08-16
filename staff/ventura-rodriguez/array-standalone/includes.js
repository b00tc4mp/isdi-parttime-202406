function includes(array, searchElement, fromIndex = 0) {
  if (!(array instanceof Array)) return undefined;

  let result = false;
  let i = fromIndex;
  do {
    if (array[i] === searchElement) result = true;
    i++;
  } while (i < array.length && !result);

  return result;
}

{
  const noArray = "foo";
  const result1 = includes(noArray, 0);
  console.assert(result1 === undefined, {
    result: result1,
    message: "Test 1 no pasado",
  });

  const array2 = [1, 2, 3, 4, 5, 6, 7, 8];
  const result2 = includes(array2, 4);
  console.assert(result2 === array2.includes(4), {
    result: result2,
    message: "Test 2 no pasado",
  });

  const array3 = [1, 2, 3, 4, 5, "a", 7, 8];
  const result3 = includes(array3, 3, 5);
  console.assert(result3 === array3.includes(3, 5), {
    result: result3,
    message: "Test 3 no pasado",
  });

  const array4 = [1, 2, 3, 4, 5, "a", 7, 8];
  const result4 = includes(array3, NaN);
  console.assert(result4 === array4.includes(NaN), {
    result: result4,
    message: "Test 4 no pasado",
  });
}
