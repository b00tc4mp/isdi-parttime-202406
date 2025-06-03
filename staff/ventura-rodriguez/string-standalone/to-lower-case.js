function toLowerCase(string) {
  let result = "";
  const converter = [
    ["A", "a"],
    ["B", "b"],
    ["C", "c"],
    ["D", "d"],
    ["E", "e"],
    ["F", "f"],
    ["G", "g"],
    ["H", "h"],
    ["I", "i"],
    ["J", "j"],
    ["K", "k"],
    ["L", "l"],
    ["M", "m"],
    ["N", "n"],
    ["O", "o"],
    ["P", "p"],
    ["Q", "q"],
    ["R", "r"],
    ["S", "s"],
    ["T", "t"],
    ["U", "u"],
    ["V", "v"],
    ["W", "w"],
    ["X", "x"],
    ["Y", "y"],
    ["Z", "z"],
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
  const result1 = toLowerCase("¡Me siento bieN, porque eL sofá Es Nuevo!");
  console.assert(
    result1 === "¡Me siento bieN, porque eL sofá Es Nuevo!".toLowerCase(),
    {
      result: result1,
      message: "Test 1 no pasado",
    }
  );

  const result2 = toLowerCase("12344ABCDeee");
  console.assert(result2 === "12344ABCDeee".toLowerCase(), {
    result: result2,
    message: "Test 2 no pasado",
  });

  const result3 = toLowerCase("null vaLue");
  console.assert(result3 === "null vaLue".toLowerCase(), {
    result: result3,
    message: "Test 3 no pasado",
  });
}
