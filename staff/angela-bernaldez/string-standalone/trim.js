//str.trim()
//Version stand alone!
function trim(string) {

    // The trim() method of String values removes whitespace from both ends of this string 
    // and returns a new string, without modifying the original string.

    let result = ''

    // initialize start and end positions for looping

    let start = 0 
    let end = string.length - 1

    // identify where the start and end positions are 

    while (start <= end && string[start] === " ") start++

    while (end >= start && string[end] === " ") end--

    for (let i = start; i <= end; i++) {
        result += string[i]
    }
    return result;
}



const result1 = toUpperCase(" hello wooooorld     ");
console.assert(result1 === " hello wooooorld     ".toUpperCase(), {
  result: result1,
  message: "Test 1 No pasado",
});

const result2 = toUpperCase("         HOLA");
console.assert(result2 === "         HOLA".toUpperCase(), {
  result: result2,
  message: "Test 2 No pasado",
});

const result3 = toUpperCase( "ADIOS        ");
console.assert(result3 === "ADIOS        ".toUpperCase(), {
  result: result3,
  message: "Test 3 No pasado",
});