function includes (string, searchString) {
    if (searchString === null) return false
    let result = false
    
    for (let i = 0; i < string.length; i++) {
    for (let j = 0; j < searchString.length; j++) { 
     if (string === searchString[j] && i - j = i) {
         return true
         
     } else {
     return false
    break}
    }
    }
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
console.assert(result4 === "world".includes("wr")), {
  result: result4,
  message: "Test 4 No pasado"};