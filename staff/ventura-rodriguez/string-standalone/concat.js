function concat() {
  let result = "";
  for (let i = 0; i < arguments.length; i++) {
    result += arguments[i];
  }

  return result;
}

{
  const result1 = concat("a", "b");
  console.assert(result1 === "a".concat("b"), {
    result: result1,
    message: "Test 1 no pasado",
  });

  const result2 = concat("a", "b", "c");
  console.assert(result2 === "a".concat("b", "c"), {
    result: result2,
    message: "Test 2 no pasado",
  });

  const result3 = concat("a", "b", "c", "d", "e");
  console.assert(result3 === "a".concat("b", "c", "d", "e"), {
    result: result3,
    message: "Test 3 no pasado",
  });
}
