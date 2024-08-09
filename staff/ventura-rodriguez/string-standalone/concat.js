function concat() {
  let result = "";

  for (let i = 0; i < arguments.length; i++) {
    result += arguments[i];
  }

  return result;
}

{
  const result1 = concat("que", "tal");
  console.assert(result1 === "quetal".concat(), {
    result: result1,
    message: "Test 1 no pasado",
  });

  const result2 = concat(1, 2, 3);
  console.assert(result2 === "123".concat(), {
    result: result2,
    message: "Test 2 no pasado",
  });
}
