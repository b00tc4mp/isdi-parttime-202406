//str.concat(str1,...,strN) 
//Version stand alone!
function concat(...strs) {
    let result = ""
    for (let i=0; i < strs.length; i++) {
        result += strs[i]
    }
    return result 
}



const result1 = concat("Hello", "world");
console.assert(result1 === "Hello".concat("world"), {
  result: result1,
  message: "Test 1 No pasado ",
});

const result2 = concat("Hello", " ", "world");
console.assert(result2 === "Hello".concat(" ", "world"), {
  result: result2,
  message: "Test 2 No pasado ",
});

const result3 = concat("My", " ", "name", " ", "is", " ", "Angela");
console.assert(result3 === "My".concat(" ", "name", " ", "is", " ", "Angela"), {
  result: result3,
  message: "Test 3 No pasado ",
});

const result4 = concat("2023", 718);
console.assert(result4 === "2023".concat(718), {
  result: result4,
  message: "Test 4 No pasado ",
});

const result5 = concat("2023", undefined);
console.assert(result5 === "2023".concat(undefined), {
  result: result5,
  message: "Test 5 No pasado ",
});

const result6 = concat("2023", null);
console.assert(result6 === "2023".concat(null), {
  result: result6,
  message: "Test 6 No pasado ",
});