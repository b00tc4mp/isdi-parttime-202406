function repeat(string, count) {
  let result = "";

  for (let i = 0; i < count; i++) {
    result += string;
  }

  return result;
}

{
  const result1 = repeat("b", 3);
  console.assert(result1 === "b".repeat(3), {
    result: result1,
    message: "Test 1 no pasado",
  });

  const result2 = repeat("nose", 2);
  console.assert(result2 === "nose".repeat(2), {
    result: result2,
    message: "Test 2 no pasado",
  });
}
