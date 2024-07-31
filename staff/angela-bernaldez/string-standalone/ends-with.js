//str.endsWith(searchString, endPosition)
//Version stand alone!
function endsWith(string, searchString, endPosition = string.length) {

    if (typeof searchString !== 'string') return false
    else if (searchString === "") return true     
    
    let result = true 

    for (let i = 0; i < searchString.length; i++) {
        if (string[endPosition - searchString.length + i] !== searchString[i]) { 
            result = false
            break 
        }
    }
    return result   
}


 
const result1 = endsWith("Hello world, this is me", "me");
console.assert(result1 === "Hello world, this is me".endsWith("me"), {
  result: result1,
  message: "Test 1 No pasado ",
});

const result2 = endsWith("Hello world, this is me", "world", 11);
console.assert(result2 === "Hello world, this is me".endsWith("world", 11), {
  result: result2,
  message: "Test 2 No pasado ",
});

const result3 = endsWith("Hello world, this is me", "world", 14);
console.assert(result3 === "Hello world, this is me".endsWith("world", 14), {
  result: result3,
  message: "Test 3 No pasado ",
});

const result4 = endsWith("My name is Angela", undefined);
console.assert(result4 === "My name is Angela".endsWith(undefined), {
  result: result4,
  message: "Test 4 No pasado ",
});

const result5 = endsWith("My name is Angela", "");
console.assert(result5 === "My name is Angela".endsWith(""), {
  result: result5,
  message: "Test 5 No pasado ",
});

const result6 = endsWith("My name is Angela", null);
console.assert(result6 === "My name is Angela".endsWith(null), {
  result: result6,
  message: "Test 6 No pasado ",
});
