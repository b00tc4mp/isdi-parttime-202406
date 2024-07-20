//str.includes(searchString)
//Version stand alone
debugger
function includes (string, searchString) {
    if (searchString === null) return false
    let result = false
    
    for (let i = 0; i < string.length; i++) {
      let countingMatches = 0
    for (let j = 0; j < searchString.length; j++) { 
     if (string[i + j] === searchString[j]) countingMatches++
    }
     if (countingMatches === searchString.length) result = true
    }
    return result
    }
const result1 = includes("Hello", "H");
console.assert(result1 === "Hello".includes("H"), {
  result: result1,
  message: "Test 1 No pasado ",
});

const result2 = includes("Hola", "Ho");
console.assert(result2 === "Hola".includes("Ho"), {
  result: result2,
  message: "Test 2 No pasado ",
});

const result3 = includes("casoSinIndice", null);
console.assert(result3 === "casoSinIndice".includes(null), {
  result: result3,
  message: "Test 3 No pasado ",
});
const result4 = includes("world", "wr");
console.assert(result4 === "world".includes("wr"), {
  result: result4,
  message: "Test 4 No pasado ",
});

const result5 = includes("world", "rld");
console.assert(result5 === "world".includes("rld"), {
  result: result5,
  message: "Test 5 No pasado ",
});

const result6 = includes("world", "wod");
console.assert(result6 === "world".includes("wod"), {
  result: result6,
  message: "Test 6 No pasado ",
});

const result7 = includes("world", "wu");
console.assert(result7 === "wu".includes("wod"), {
  result: result7,
  message: "Test 7 No pasado ",
});

const result8 = includes("oooo", "oo");
console.assert(result8 === "oooo".includes("oo"), {
  result: result8,
  message: "Test 8 No pasado ",
});