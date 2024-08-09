function trim(string) {
  let result = "";
  let firstPosition = 0;
  let lastPosition = string.length - 1;

  while (string[firstPosition] === " ") firstPosition++;
  while (string[lastPosition] === " ") lastPosition--;

  for (let i = firstPosition; i <= lastPosition; i++) result += string[i];

  return result;
}

{
  const result1 = trim("   belen   ");
  console.assert(result1 === "   belen   ".trim(), {
    result: result1,
    message: "Test 1 no pasado",
  });

  const result2 = trim("   no     se");
  console.assert(result2 === "   no     se".trim(), {
    result: result2,
    message: "Test 2 no pasado",
  });

  const result3 = trim("Hola como estás?");
  console.assert(result3 === "Hola como estás?".trim(), {
    result: result3,
    message: "Test 3 no pasado",
  });
}
