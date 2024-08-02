debugger
function repeatString (string, timesRepeated) {
    if (timesRepeated == Infinity) throw new RangeError;
    timesRepeated = Math.floor(timesRepeated)
    if (timesRepeated < 0) return new RangeError
    if (timesRepeated === 0) return '';
     let resultString = ''

    for (let i = 0; i < timesRepeated; i++) {

    resultString += string 
        
}
return resultString;
}

const result1 = repeatString("Hello", 1);
console.assert(result1 === 'Hello'.repeat(1), {
  result: result1,
  message: "Test 1 No pasado ",
});
const result2 = repeatString("Hello", 2);
console.assert(result2 === "Hello".repeat(2), {
    result: result2,
  message: "Test 2 No pasado ",
});

const result3 = repeatString("casoSinIndice", 2);
console.assert(result3 === "casoSinIndice".repeat(2), {
  result: result3,
  message: "Test 3 No pasado ",
});

