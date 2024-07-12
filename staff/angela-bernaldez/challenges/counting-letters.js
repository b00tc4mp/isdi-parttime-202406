function countingLetters(value) {
    var result;
  
    return result;
  }
  
  var result1 = countingLetters("hola");
  console.assert(result1 === 4, { result: result1, message: "Test 1 no pasado" });
  
  var result2 = countingLetters("belen");
  console.assert(result2 === 5, { result: result2, message: "Test 2 no pasado" });
  
  var result3 = countingLetters("foo");
  console.assert(typeof result3 === "number", {
    result: result3,
    message: "Test 3 no pasado",
  });