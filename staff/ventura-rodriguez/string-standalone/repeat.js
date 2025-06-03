function repeat(string, count) {
  let result = "";

  for (let i = 0; i < count; i++) {
    result += string;
  }

  return result;
}

{
  const result1 = repeat("a", 3);
  console.assert(result1 === "a".repeat(3), {
    result: result1,
    message: "Test 1 No pasado",
  });

  const result2 = repeat("Hello", 5);
  console.assert(result2 === "Hello".repeat(5), {
    result: result2,
    message: "Test 2 No pasado",
  });
}
