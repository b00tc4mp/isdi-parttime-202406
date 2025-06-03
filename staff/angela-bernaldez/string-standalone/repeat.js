//str.repeat(count)
//Version stand alone!
function repeat(string, count) {

    if (count < 0 || count == Infinity) {
        throw new RangeError(`Invalid count value: ${count}`);
    }

    count = Math.floor(count)

    let result = ''
    for (let i=0; i < count; i++) {
        result += string
    }
    return result   
}



const result1 = repeat("Hello", 2);
console.assert(result1 === "Hello".repeat(2), {
  result: result1,
  message: "Test 1 No pasado ",
});

const result2 = repeat("Hello", 4);
console.assert(result2 === "Hello".repeat(4), {
  result: result2,
  message: "Test 2 No pasado ",
});

const result3 = repeat("Hello", 2.5);
console.assert(result3 === "Hello".repeat(2.5), {
  result: result3,
  message: "Test 3 No pasado ",
});

const result4 = repeat("Hello", null);
console.assert(result4 === "Hello".repeat(null), {
  result: result4,
  message: "Test 4 No pasado ",
});

const result5 = repeat("Hello", -4);
console.assert(result5 === "Hello".repeat(-4), {
  result: result5,
  message: "Test 5 No pasado ",
});

