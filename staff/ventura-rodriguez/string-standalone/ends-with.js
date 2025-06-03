function endsWith(string, searchString, endPosition = string.length) {
  let subsString = "";

  for (let i = 0; i < searchString.length; i++) {
    subsString += string[endPosition - searchString.length + i];
  }

  return subsString === searchString;
}

{
  const result1 = endsWith("Cats are the best!", "best!");
  console.assert(result1 === "Cats are the best!".endsWith("best!"), {
    result: result1,
    message: "Test 1 no pasado",
  });

  const result2 = endsWith("Cats are the best!", "best", 17);
  console.assert(result2 === "Cats are the best!".endsWith("best", 17), {
    result: result2,
    message: "Test 2 no pasado",
  });

  const result3 = endsWith("Cats are the best!", "best");
  console.assert(result3 === "Cats are the best!".endsWith("best"), {
    result: result3,
    message: "Test 3 no pasado",
  });
}
