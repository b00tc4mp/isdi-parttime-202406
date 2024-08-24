function some(array, callback) {

    // This method tests whether at least one element in the array passes the test implemented by the provided function. 
    // It returns true if, in the array, it finds an element for which the provided function returns true; 
    // otherwise it returns false. 
    // It doesn't modify the array.

    // callback should return a truthy value to indicate the element passes the test, and a falsy value otherwise.


    if (!(array instanceof Array)) {
        throw new TypeError('The provided value is not an array')
    }

    if (typeof callback !== 'function') {
        throw TypeError('Second argument of map needs to be a function')
    }
    
    let result = false

    for (let i = 0; i < array.length; i++) {
        if (callback(array[i])) return true 
    }

    return result
}



const array1 = [1, 2, 3, 4, 5, 6, 7, 8]
const isPositive = (currentValue) => currentValue >= 0
const result1 = some(array1, isPositive)
console.assert(result1 === array1.some(isPositive), {
    result: result1,
    message: "Test 1 no pasado",
});

const isNegative = (currentValue) => currentValue < 0;
const result2 = some(array1, isNegative)
console.assert(result2 === array1.some(isNegative), {
    result: result2,
    message: "Test 2 no pasado",
});

const isEven = (currentValue) => currentValue % 2 === 0 
const result3 = some(array1, isEven)
console.assert(result3 === array1.some(isEven), {
    result: result3,
    message: "Test 3 no pasado",
});

const isNumber = (currentValue) => typeof currentValue === 'number'
const result4 = some(array1, isNumber)
console.assert(result4 === array1.some(isNumber), {
    result: result4,
    message: "Test 4 no pasado",
});

const array2 = [1, 0, null, undefined, true, 'hello']
const isBoolean = (currentValue) => typeof currentValue === 'boolean'
const result5 = some(array2, isBoolean)
console.assert(result5 === array2.some(isBoolean), {
    result: result5,
    message: "Test 5 no pasado",
});

const isUndefined = (currentValue) => typeof currentValue === 'undefined'
const result6 = some(array2, isUndefined)
console.assert(result6 === array2.some(isUndefined), {
    result: result6,
    message: "Test 6 no pasado",
});

const isBigInt = (currentValue) => typeof currentValue === 'bigint'
const result7 = some(array2, isBigInt)
console.assert(result7 === array2.some(isBigInt), {
    result: result7,
    message: "Test 7 no pasado",
});