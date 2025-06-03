//str.toLowerCase()
//Version stand alone!
function toLowerCase(string) {

    if (typeof string !== 'string') throw new SyntaxError('Invalid or unexpected token')

    const uppercase = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const lowercase = 'abcdefghijklmnopqrstuvwxyz';

    let result = ''

    for (let i = 0; i < string.length; i++) {
        let found = false
        for (let j = 0; j < uppercase.length; j++) {
            if (string[i] === uppercase[j]) {
                // change that character from uppercase to lowercase
                result += lowercase[j]
                found = true
                break 
            } 
        }
        if (!found) result += string[i]
    }

    return result;
}



const result1 = toLowerCase("AnGeLA");
console.assert(result1 === "AnGeLA".toLowerCase(), {
  result: result1,
  message: "Test 1 No pasado",
});

const result2 = toLowerCase("all lowercase");
console.assert(result2 === "all lowercase".toLowerCase(), {
  result: result2,
  message: "Test 2 No pasado",
});

const result3 = toLowerCase("AuuuAAAAA");
console.assert(result3 === "AuuuAAAAA".toLowerCase(), {
  result: result3,
  message: "Test 3 No pasado",
});

const result4 = toLowerCase("HELLO world this Is A TesT");
console.assert(result4 === "HELLO world this Is A TesT".toLowerCase(), {
  result: result4,
  message: "Test 4 No pasado",
});


