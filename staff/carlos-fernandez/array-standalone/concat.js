function concat(...arrays) {
    let newArr = [];

    for (let i = 0; i < arrays.length; i++) {
        for (let j = 0; j < arrays[i].length; j++) {
            newArr.push(arrays[i][j]);
        }
    }

    return newArr;
}

function arraysEqual(arr1, arr2) {
    if (arr1.length !== arr2.length) return false;
    for (let i = 0; i < arr1.length; i++) {
        if (arr1[i] !== arr2[i]) return false;
    }
    return true;
}

const result1 = concat(['Willyrex', ' sácate'], ['una ', 'M.O.A.B.']);
console.assert(arraysEqual(result1, ['Willyrex', ' sácate'].concat(['una ', 'M.O.A.B.'])), { result: result1, message: 'Test 1 no pasado' });

const result2 = concat(['Damon ', 'Salvatore'], ['cárgate ', 'a ', 'Matt']);
console.assert(arraysEqual(result2, ['Damon ', 'Salvatore'].concat(['cárgate ', 'a ', 'Matt'])), { result: result2, message: 'Test 2 no pasado' });

const result3 = concat(['Walter ', 'White '], [' Saul', 'Goodman']);
console.assert(arraysEqual(result3, ['Walter ', 'White '].concat([' Saul', 'Goodman'])), { result: result3, message: 'Test 3 no pasado' });
