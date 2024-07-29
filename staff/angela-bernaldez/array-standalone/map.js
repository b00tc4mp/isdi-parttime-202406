function map(array, callback) {

    if (typeof callback !== 'function') {
        throw new TypeError('Second argument of map needs to be a function');
    }

    let newArray = []

    for (let i = 0; i < array.length; i++) {
        newArray[i] = callback(array[i])
    }

    return newArray
}



const array1 = [1, 2, 3];
const result1 = map(array1, x => x * 2);
console.assert(JSON.stringify(result1) === JSON.stringify([2, 4, 6]), {
    result: result1,
    message: "Test 1 no pasado",
});

const result2 = map(array1, x => x /2);
console.assert(JSON.stringify(result2) === JSON.stringify([0.5, 1, 1.5]), {
    result: result2,
    message: "Test 2 no pasado",
});

const result3 = map(array1, x => x /2);
console.assert(JSON.stringify(result3) === JSON.stringify([0.5, 1, 1.5]), {
    result: result3,
    message: "Test 3 no pasado",
});

const array2 = [-5,-4,-3,-2,-1,0]
const result4 = map(array2, x => Math.abs(x));
console.assert(JSON.stringify(result4) === JSON.stringify([5,4,3,2,1,0]), {
    result: result4,
    message: "Test 4 no pasado",
});

// const result5 = map(array1, "hello");
// This ensures that function gives an error when a function is not passed as second argument





