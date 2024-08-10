function concat() {
  let result = "";
<<<<<<< Updated upstream

=======
>>>>>>> Stashed changes
  for (let i = 0; i < arguments.length; i++) {
    result += arguments[i];
  }

  return result;
}

{
<<<<<<< Updated upstream
  const result1 = concat("que", "tal");
  console.assert(result1 === "quetal".concat(), {
=======
  const result1 = concat("a", "b");
  console.assert(result1 === "a".concat("b"), {
>>>>>>> Stashed changes
    result: result1,
    message: "Test 1 no pasado",
  });

<<<<<<< Updated upstream
  const result2 = concat(1, 2, 3);
  console.assert(result2 === "123".concat(), {
    result: result2,
    message: "Test 2 no pasado",
  });
=======
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
>>>>>>> Stashed changes
}
