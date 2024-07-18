//str.endsWith(searchString, endPosition)
//Version stand alone!
function endsWith(string, searchString, endPosition = searchString.length) {

    // returns true or false
    // returns true if searchString is found at the end of the string
    // returns true when searchString is an empty string
    // returns false otherwise

    let result 

    if (searchString === "") result = true

    for (let i = 0; i < searchString.length; i++) {
        if (string[string.length - searchString.length + i] !== searchString[i]) result = false
        else result = true
    }

    return result 
}



const result1 = endsWith("Hello world, this is me", "me");
console.assert(result1 === "Hello world, this is me".concat("me"), {
  result: result1,
  message: "Test 1 No pasado ",
});

const result2 = concat("Hello world, this is me", "me", 22);
console.assert(result2 === "Hello".concat(" ", "world"), {
  result: result2,
  message: "Test 2 No pasado ",
});
