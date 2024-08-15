function indexOf(array, searchElement, fromIndex = 0) {
  if (!(array instanceof Array)) return undefined;

  let result = -1;
  let i = fromIndex;

  do {
    if (searchElement === array[i]) result = i;
    i++;
  } while (i < array.length && result === -1);

  return result;
}

{
  const noArray = "foo";
  const result1 = indexOf(noArray, 3);
  console.assert(result1 === undefined, {
    result: result1,
    message: "Test 1 no pasado",
  });

  const array2 = ["ant", "bison", "camel", "duck", "bison"];
  const result2 = indexOf(array2, "bison");
  console.assert(result2 === array2.indexOf("bison"), {
    result: result2,
    message: "Test 2 no pasado",
  });

  const array3 = ["ant", "bison", "camel", "duck", "bison"];
  const result3 = indexOf(array3, "bison", 2);
  console.assert(result3 === array3.indexOf("bison", 2), {
    result: result3,
    message: "Test 3 no pasado",
  });

  const array4 = ["ant", "bison", "camel", "duck", "bison"];
  const result4 = indexOf(array3, "giraffe");
  console.assert(result4 === array4.indexOf("giraffe"), {
    result: result4,
    message: "Test 4 no pasado",
  });
}
