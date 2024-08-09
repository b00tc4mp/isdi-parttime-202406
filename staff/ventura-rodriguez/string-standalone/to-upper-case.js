function toUpperCase(string) {
  let result = "";
  const converter = [
    ["a", "A"],
    ["á", "Á"],
    ["b", "B"],
    ["c", "C"],
    ["d", "D"],
    ["e", "E"],
    ["f", "F"],
    ["g", "G"],
    ["h", "H"],
    ["i", "I"],
    ["j", "J"],
    ["k", "K"],
    ["l", "L"],
    ["m", "M"],
    ["n", "N"],
    ["o", "O"],
    ["p", "P"],
    ["q", "Q"],
    ["r", "R"],
    ["s", "S"],
    ["t", "T"],
    ["u", "U"],
    ["v", "V"],
    ["w", "W"],
    ["x", "X"],
    ["y", "Y"],
    ["z", "Z"],
  ];

  for (let i = 0; i < string.length; i++) {
    const character = string[i];

    for (let j = 0; j < converter.length; j++) {
      const value = converter[j];
      if (character === value[0]) {
        result += value[1];
      }
    }
    if (result.length !== i + 1) {
      result += character;
    }
  }

  return result;
}

{
  const result1 = toUpperCase("¡Me siento bieN, porque eL sofá Es Nuevo!");
  console.assert(
    result1 === "¡Me siento bieN, porque eL sofá Es Nuevo!".toUpperCase(),
    {
      result: result1,
      message: "Test 1 no pasado",
    }
  );

  const result2 = toUpperCase("12344ABCDeee");
  console.assert(result2 === "12344ABCDeee".toUpperCase(), {
    result: result2,
    message: "Test 2 no pasado",
  });

  const result3 = toUpperCase("null vaLue");
  console.assert(result3 === "null vaLue".toUpperCase(), {
    result: result3,
    message: "Test 3 no pasado",
  });
}
