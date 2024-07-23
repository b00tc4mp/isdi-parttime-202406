function at(arr, index) {
    if (index === null) return arr[0];

    let result;

    for (let i = 0; i < arr.length; i++) {
        const character = arr[i];

        if (i === index) result = character;
        else if (index < 0 && i === arr.length + index) result = character;

    }
    return result;
}


const result1 = at(['No', 'oigo', 'nah'], 1)
console.assert(result1 === ['No', 'oigo', 'nah'].at(1), {result: result1, message: 'Test 1 no pasado'});

const result2 = at(['Pa', 'hacerme', 'el', 'xulo'], -1)
console.assert(result2 === ['Pa', 'hacerme', 'el', 'xulo'].at(-1), {result: result2, message: 'Test 2 no pasado'});

const result3 = at(['No', 'oigo', 'nah'], null)
console.assert(result3 === ['No', 'oigo', 'nah'].at(null), {result: result3, message: 'Test 3 no pasado'});