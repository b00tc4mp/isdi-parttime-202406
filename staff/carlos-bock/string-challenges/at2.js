//transcribing at code by hand

function at(string, index) {

    let result;

    if (index === null) {
        return [0];
    }

    if (index >= 0) {
        for (let i = 0; i < string.length; i++) {
            const characterValue = string[i];
            if (index === i) {
                result = characterValue;
                return result;
            }

        }
    } else {
        result = string[string.length + index]
        return result;
    }
}

const result1 = at("Hello", 2);
console.assert(result1 === "Hello".at(2), {
    result: result1,
    message; "Test 1 No pasado ",
})