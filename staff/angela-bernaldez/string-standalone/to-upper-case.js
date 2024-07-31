//str.toUpperCase()
//Version stand alone!
function toUpperCase(string) {

    if (typeof string !== 'string') throw new SyntaxError('Invalid or unexpected token')

    const uppercase = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const lowercase = 'abcdefghijklmnopqrstuvwxyz';

    let result = ''

    for (let i = 0; i < string.length; i++) {
        let found = false
        for (let j = 0; j < lowercase.length; j++) {
            if (string[i] ===lowercase[j]) {
                // change that character from uppercase to lowercase
                result += uppercase[j]
                found = true
                break 
            } 
        }
        if (!found) result += string[i]
    }

    return result;
}



const result1 = toUpperCase("AnGeLA");
console.assert(result1 === "AnGeLA".toUpperCase(), {
  result: result1,
  message: "Test 1 No pasado",
});

const result2 = toUpperCase("all lowercase");
console.assert(result2 === "all lowercase".toUpperCase(), {
  result: result2,
  message: "Test 2 No pasado",
});

const result3 = toUpperCase("AuuuAAAAA");
console.assert(result3 === "AuuuAAAAA".toUpperCase(), {
  result: result3,
  message: "Test 3 No pasado",
});

const result4 = toUpperCase("HELLO woRlD 1111");
console.assert(result4 === "HELLO woRlD 1111".toUpperCase(), {
  result: result4,
  message: "Test 4 No pasado",
});



