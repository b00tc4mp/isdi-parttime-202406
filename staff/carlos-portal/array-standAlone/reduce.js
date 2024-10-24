function reduceArray(array, callback, initialValue) {
    let accumulator;
    let starter;

    if (initialValue !== undefined) {
        accumulator = initialValue;
        starter = 0;
    } else {
        accumulator = array[0];
        starter = 1;
    }
    for (let i = starter; i < array.length; i++) {
        accumulator = callback(accumulator, array[i]);
    }
     return accumulator;
}


// Pruebas

const array1 = [1, 2, 3, 4];
const result1 = reduceArray(array1, sum, 0);
console.assert(result1 === 10, {
    result: result1,
    message: "Test 1 No pasado:",
});


const array2 = [1, 2, 3, 4];
const result2 = reduceArray(array2, product, 1);
console.assert(result2 === 24, {
    result: result2,
    message: "Test 2 No pasado:",
});


const result3 = reduceArray(array1, sum);
console.assert(result3 === 10, {
    result: result3,
    message: "Test 3 No pasado:",
});

