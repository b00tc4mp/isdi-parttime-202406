function startsWith(string, searchString) {
  let result = true;
  for (let i = 0; i < searchString.length; i++) {
    if (string[i] !== searchString[i]) {
      result = false;
    }
  }
  return result;
}

{
  const result1 = startsWith("Hola mundo", "Hola");
  console.assert(result1 === "Hola mundo".startsWith("Hola"), {
    result: result1,
    message: "Test 1 no pasado",
  });

  const result2 = startsWith("Test the function", "Test");
  console.assert(result2 === "Test the function".startsWith("Test"), {
    result: result2,
    message: "Test 2 no pasado",
  });

  const result3 = startsWith("Test the function", "Hola");
  console.assert(result3 === "Test the function".startsWith("Hola"), {
    result: result3,
    message: "Test 3 no pasado",
  });
}
