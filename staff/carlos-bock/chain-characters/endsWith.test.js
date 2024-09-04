
const ChainCharacters = require("./");

const string = 'Cats are the best!';
const string2 = 'Madrid es la mejor ciudad del mundo';
    
const result1 = new ChainCharacters(string).endsWith('best!');
console.assert(result1 === string.endsWith('best!'), {
    result: result1,
    message: "Test 1 No pasado ",
});


const result2 = new ChainCharacters(string2).endsWith('mundo');
console.assert(result2 === string2.endsWith('mundo'), {
    result: result2,
    message: "Test 2 No pasado ",
});


const result3 = new ChainCharacters(string2).endsWith('test');
console.assert(result3 === string2.endsWith('test'), {
    result: result3,
    message: "Test 3 No pasado ",
});

const result4 = new ChainCharacters(string).endsWith();
console.assert(result4 === string.endsWith(), {
    result: result4,
    message: "Test 4 No pasado ",
});


