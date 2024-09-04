
const ChainCharacters = require("./");

const string = "This is a long string";

const result1 = new ChainCharacters(string).startsWith("This", 0);
console.assert(result1 === string.startsWith("This", 0), {
    result: result1,
    message: "Test 1 No pasado ",
});

const result2 = new ChainCharacters(string).startsWith("hola");
console.assert(result2 === string.startsWith("hola"), {
    result: result2,
    message: "Test 2 No pasado ",
});

const result3 = new ChainCharacters(string).startsWith("is", 5);
console.assert(result3 === string.startsWith("is", 5), {
    result: result3,
    message: "Test 3 No pasado ",
});
