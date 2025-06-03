function reduce(array, callback, initialValue = undefined) {

    // This method executes a user-supplied "reducer" callback function on each element of the array, in order,
    // passing in the return value from the calculation on the preceding element. 
    // The final result of running the reducer across all elements of the array is a single value.

    // The first time that the callback is run there is no "return value of the previous calculation". 
    // If supplied, an initial value may be used in its place. 
    // Otherwise the array element at index 0 is used as the initial value 
    // and iteration starts from the next element (index 1 instead of index 0).

    if (!(array instanceof Array)) {
        throw new TypeError('The provided value is not an array');
    }

    if (typeof callback !== 'function') {
        throw TypeError('Second argument of map needs to be a function');
    }

    let accumulator
    let start 

    if (typeof initialValue !== 'undefined') {
        accumulator = initialValue
        start = 0
    } else {
        accumulator = array[0]
        start = 1
    }

    for (let i = start; i < array.length; i++) {
        accumulator = callback(accumulator, array[i])
    }

    return accumulator
}



const array1 = [1, 2, 3, 4, 5, 6, 7, 8];
const result1 = reduce(
    array1,
    (accumulator, currentValue) => accumulator + currentValue);
const reduceResult1 = array1.reduce((accumulator, currentValue) => accumulator + currentValue)
console.assert(result1 === reduceResult1, {
    result: result1,
    message: "Test 1 no pasado",
});

const result2 = reduce(
    array1,
    (accumulator, currentValue) => accumulator + currentValue,
    10);
const reduceResult2 = array1.reduce((accumulator, currentValue) => accumulator + currentValue, 10)
console.assert(result2 === reduceResult2, {
    result: result2,
    message: "Test 2 no pasado",
});

const result3 = reduce(
    array1,
    (accumulator, currentValue) => accumulator * currentValue);
const reduceResult3 = array1.reduce((accumulator, currentValue) => accumulator * currentValue)
console.assert(result3 === reduceResult3, {
    result: result3,
    message: "Test 3 no pasado",
});

// to better understand how accumulator works, let's try with a value of accumulator of 0
// it's not the same not having an accumulator (which will be taken as the first element of the array)
// than having it set to 0 
// unless the first element of the array was 0 - in which case both results would be the same
const result4 = reduce(
    array1,
    (accumulator, currentValue) => accumulator * currentValue,
    0);
const reduceResult4 = array1.reduce((accumulator, currentValue) => accumulator * currentValue, 0)
console.assert(result4 === reduceResult4, {
    result: result4,
    message: "Test 4 no pasado",
});
// result4 is 0 because accumulator is set to 0 and the operation to perform is a multiplication

const result5 = reduce(
    array1,
    (accumulator, currentValue) => accumulator * currentValue,
    10);
const reduceResult5 = array1.reduce((accumulator, currentValue) => accumulator * currentValue, 10)
console.assert(result5 === reduceResult5, {
    result: result5,
    message: "Test 5 no pasado",
});