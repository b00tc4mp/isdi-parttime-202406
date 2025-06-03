function split(string, separator = 0, limit = Infinity) {
  const result = [];
  let currentSegment = "";

  for (let i = 0; i < string.length && result.length <= limit - 1; i++) {
    let subString = "";

    for (let j = 0; j < separator.length; j++) {
      subString = string[i + j];
    }

    if (subString === separator) {
      i = i + separator.length - 1;
      result[result.length] = currentSegment;
      currentSegment = "";
    } else {
      currentSegment += string[i];
    }
  }

  if (currentSegment !== "" && result.length <= limit - 1)
    result[result.length] = currentSegment;

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

  const result1 = split("Angela,26 años", ",");
  console.assert(arrayIsEqual(result1, ["Angela", "26 años"]), {
    result: result1,
    message: "Test 1 No pasado",
  });

  const result2 = split("Monday,Tuesday,Wednesday,Thursday", ",");
  console.assert(
    arrayIsEqual(result2, ["Monday", "Tuesday", "Wednesday", "Thursday"]),
    {
      result: result2,
      message: "Test 2 No pasado",
    }
  );

  const result3 = split("Monday,Tuesday,Wednesday,Thursday", ",", 2);
  console.assert(arrayIsEqual(result3, ["Monday", "Tuesday"]), {
    result: result3,
    message: "Test 3 No pasado",
  });

  const result4 = split("1 2 3 4 5 6", " ", 3);
  console.assert(arrayIsEqual(result4, ["1", "2", "3"]), {
    result: result4,
    message: "Test 4 No pasado",
  });

  const result5 = split("2024-07-20", "-", 3);
  console.assert(arrayIsEqual(result5, ["2024", "07", "20"]), {
    result: result5,
    message: "Test 5 No pasado",
  });

  const result6 = split("2024-07-20", " ", 3);
  console.assert(result6[0] === "2024-07-20", {
    result: result6,
    message: "Test 6 No pasado",
  });
}
