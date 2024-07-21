function indexOf(string, subString) {
    if (subString === '') return 0;  

    const stringLength = string.length;
    const subStringLength = subString.length;

    for (let i = 0; i <= stringLength - subStringLength; i++) {
        if (string.subString(i, i + subStringLength) === subString) {
            return i;
        }
    }

    return -1;
}

const result1 ? indexOf('hello', 'll');
console.assert(result1 === 'hello'.indexOf('ll'), {
    result: result1,
    message: 'Test 1 no pasado',
});

const result2 = indexOf('hello', 'world');
console.assert(result2 === 'hello'.indexOf('world'), {
    result: result2,
    message: 'Test 2 no pasado', 
});

const result3 = indexOf('abc', '');
console.assert(result3=== 'abc'.indexOf(''), {
    result: result3,
    message: 'Test 3 no pasado',
});