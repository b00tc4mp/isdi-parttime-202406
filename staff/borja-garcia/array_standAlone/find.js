function find(array, callback) {

    // This method returns the first element in the provided array that satisfies the provided testing function. 
    // If no values satisfy the testing function, undefined is returned.

    // callback should return a truthy value to indicate the element passes the test, and a falsy value otherwise.

    if (!(array instanceof Array)) {
        throw new TypeError('The provided value is not an array')
    }

    if (typeof callback !== 'function') {
        throw TypeError('Second argument of map needs to be a function')
    }
    
    let found = undefined 

    let i = 0 
    while (i < array.length && found === undefined) {
        if (callback(array[i])) return array[i]
        i++
    }

    return found 
}



const array1 = [1, 2, 3, 4, 5, 6, 7, 8]
const isEven = (currentValue) => currentValue % 2 === 0 
const result1 = find(array1, isEven)
console.assert(result1 === array1.find(isEven), {
    result: result1,
    message: "Test 1 no pasado",
});

const isNegative = (currentValue) => currentValue < 0
const result2 = find(array1, isNegative)
console.assert(result2 === array1.find(isNegative), {
    result: result2,
    message: "Test 2 no pasado",
});

const array2 = [1, 5, 9, 10, 15, 20]
const isMultipleOfTen = (currentValue) => currentValue % 10 === 0 
const result3 = find(array2, isMultipleOfTen)
console.assert(result3 === array2.find(isMultipleOfTen), {
    result: result3,
    message: "Test 3 no pasado",
});

const array3 = [2001, 2005, 2007, 2019, 2024, 1999]
const isFromTwentiethCentury = (currentValue) => (currentValue >= 1900) && (currentValue < 2000)
const result4 = find(array3, isFromTwentiethCentury)
console.assert(result4 === array3.find(isFromTwentiethCentury), {
    result: result4,
    message: "Test 4 no pasado",
});