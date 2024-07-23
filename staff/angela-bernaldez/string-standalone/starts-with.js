//str.startsWith(searchString, startPosition)
//Version stand alone!
function startsWith(string, searchString, startPosition = 0) {

    if (typeof searchString !== 'string') return false
    else if (searchString === '') return true     
    
    let result = true 

    for (let i = 0; i < searchString.length; i++) {
        if (string[startPosition + i] !== searchString[i]) { 
            result = false
            break 
        }
    }
    return result   
}



const result1 = startsWith("Hello world, this is me", "Hello");
console.assert(result1 === "Hello world, this is me".startsWith("Hello"), {
  result: result1,
  message: "Test 1 No pasado ",
});

const result2 = startsWith("Hello world, this is me", "world", 6);
console.assert(result2 === "Hello world, this is me".startsWith("world", 6), {
  result: result2,
  message: "Test 2 No pasado ",
});

const result3 = startsWith("Hello world, this is me", "world", 10);
console.assert(result3 === "Hello world, this is me".endsWith("world", 10), {
  result: result3,
  message: "Test 3 No pasado ",
});

const result4 = startsWith("My name is Angela", undefined);
console.assert(result4 === "My name is Angela".startsWith(undefined), {
  result: result4,
  message: "Test 4 No pasado ",
});

const result5 = startsWith("My name is Angela", "");
console.assert(result5 === "My name is Angela".startsWith(""), {
  result: result5,
  message: "Test 5 No pasado ",
});

const result6 = startsWith("My name is Angela", null);
console.assert(result6 === "My name is Angela".startsWith(null), {
  result: result6,
  message: "Test 6 No pasado ",
});


