function indexOf(string, searchTerm) {
  for (let i = 0; i < string.length; i++) {
    let subString = "";
    for (let j = 0; j < searchTerm.length; j++) {
      subString += string[j + i];
    }
    if (searchTerm === subString) {
      return i;
    }
  }

  return -1;
}

{
  const result1 = indexOf("This is a beautiful world", "w");
  console.assert(result1 === "This is a beautiful world".indexOf("w"), {
    result: result1,
    message: "Test 1 no pasado",
  });

  const result2 = indexOf("Maybe the world ends tomorrow", "o");
  console.assert(result2 === "Maybe the world ends tomorrow".indexOf("o"), {
    result: result2,
    message: "Test 2 no pasado",
  });

  const result3 = indexOf("This is a beautiful world", "beautiful");
  console.assert(result3 === "This is a beautiful world".indexOf("beautiful"), {
    result: result3,
    message: "Test 3 no pasado",
  });

  const result4 = indexOf("This is a beautiful world", "X");
  console.assert(result4 === "This is a beautiful world".indexOf("X"), {
    result: result4,
    message: "Test 4 no pasado",
  });
}
