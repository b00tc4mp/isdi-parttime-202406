function popArray(array) {

    if (array.length === 0) {
        return undefined; }
    let lastElement = array[array.length - 1];
    array.length = array.length - 1;
    return lastElement;
}

const array1 = [1, 2, 3, 4, 5];
const result1 = popArray(array1);
console.assert(result1 === 5, {
    result: result1,
    message: "Test 1 Fallido:"
});
console.assert(array1.length === 4, {
    result: array1.length,
    message: "Test 1 Fallido:",
});
console.assert(array1[3] === 4, {
    result: array1[3],
    message: "Test 1 Fallido:",
});

const array2 = [];
const result2 = popArray(array2);
console.assert(result2 === undefined, {
    result: result2,
    message: "Test 2 Fallido: "
});
console.assert(array2.length === 0, {
    result: array2.length,
    message: "Test 2 Fallido:",
});

const array3 = [42];
const result3 = popArray(array3);
console.assert(result3 === 42, {
    result: result3,
    message: "Test 3 Fallido:",
});
console.assert(array3.length === 0, {
    result: array3.length,
    message: "Test 3 Fallido:",
});
