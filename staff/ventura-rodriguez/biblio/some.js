function some(array, callback) {
  if (!(array instanceof Array)) return undefined;

  let result = false;
  let i = 0;
  do {
    if (callback(array[i])) result = true;
    i++;
  } while (i < array.length);

  return result;
}

{
  const noArray = "foo";
  const result1 = some(noArray, (item) => typeof item === "number");
  console.assert(result1 === undefined, {
    result: result1,
    message: "Test 1 No pasado",
  });

  const array2 = [1, 2, 3, 4, 5, 6, 7, 8];
  const result2 = some(array2, (item) => typeof item === "string");
  console.assert(result2 === array2.some((item) => typeof item === "string"), {
    result: result2,
    message: "Test 2 No pasado",
  });

  const array3 = [1, 2, 3, 4, 5, "a", 7, 8];
  const result3 = some(array3, (item) => typeof item === "string");
  console.assert(result3 === array3.some((item) => typeof item === "string"), {
    result: result3,
    message: "Test 3 No pasado",
  });
}
