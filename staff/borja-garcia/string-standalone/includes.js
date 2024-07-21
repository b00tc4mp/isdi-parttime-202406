function includes(string, searchString){
    if (searchString === null) return false;

    let result = false;

    for (let i = 0; i < string.length; i++) {
        const characterOfString = string[i];

        if (characterOfString === searchString[0]) result = true;
    }
    return result;
}

const result1 = includes('Hello', 'H');
console.assert(result1 === 'Hello'.includes('H'), {
    result: result1,
    message: 'Test 1 no pasado',
});

const result2 = includes('Hola', 'Ho');
console.assert(result2 === 'Hola'.includes('Ho'), {
    result: result2,
    message: 'Test 2 no pasado',
});

const result3 = includes('casoSinIndice', null);
console.assert(result3 === 'casoSinIndice'.includes(null), {
    result: result3,
    message: 'Test 3 no pasado',
});

const result4 = includes('world', 'wr');
console.assert(result4 === 'world'.includes('wr'), {
    result: result4,
    message: 'Test 4 no pasado',
});