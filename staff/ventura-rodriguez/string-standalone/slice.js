function slice(string, start) {
  let result = "";

  for (let i = start; i < string.length; i++) {
    result += string[i];
  }

  return result;
}

{
  const result1 = slice("Hola mundo", 4);
  console.assert(result1 === "Hola mundo".slice(4), {
    result: result1,
    message: "Test 1 no pasado",
  });

  const result2 = slice("que tal como estas", 10);
  console.assert(result2 === "que tal como estas".slice(10), {
    result: result2,
    message: "Test 2 no pasado",
  });
}
