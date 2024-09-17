function every(array, callback) {
  if (!(array instanceof Array)) return undefined;

  let result = true;

  for (let i = 0; i < array.length; i++) {
    const element = array[i];
    if (!callback(element)) result = false;
  }

  return result;
}

{
  const noArray = "foo";
  const result1 = every(noArray, (item) => typeof item === "number");
  console.assert(result1 === undefined, {
    result: result1,
    message: "Test 1 No pasado",
  });

  const array2 = [1, 2, 3, 4, 5, 6, 7, 8];
  const result2 = every(array2, (item) => typeof item === "number");
  console.assert(result2 === array2.every((item) => typeof item === "number"), {
    result: result2,
    message: "Test 2 No pasado",
  });

  const array3 = [1, 2, 3, 4, 5, "a", 7, 8];
  const result3 = every(array3, (item) => typeof item === "number");
  console.assert(result3 === array3.every((item) => typeof item === "number"), {
    result: result3,
    message: "Test 3 No pasado",
  });
}
