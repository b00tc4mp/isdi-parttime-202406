function findIndex(array, callback) {
    
    // returns the index of the first element in an array that satisfies the provided testing function. 
    // If no elements satisfy the testing function, -1 is returned.

    if (!(array instanceof Array)) {
        throw new TypeError('The provided value is not an array')
    }

    if (typeof callback !== 'function') {
        throw TypeError('Second argument of map needs to be a function')
    }

    let index = -1

    let i = 0 
    while (i < array.length && index === -1) {
        if (callback(array[i])) return i
        i++
    }

    return index 
}



const array1 = [1, 2, 3, 4, 5, 6, 7, 8]
const isEven = (currentValue) => currentValue % 2 === 0 
const result1 = findIndex(array1, isEven)

console.assert(result1 === array1.findIndex(isEven), {
result: result1,
message: "Test 1 no pasado",
});

const isNegative = (currentValue) => currentValue < 0
const result2 = findIndex(array1, isNegative)
console.assert(result2 === array1.findIndex(isNegative), {
result: result2,
message: "Test 2 no pasado",
});

const array2 = [1, 5, 9, 10, 15, 20]
const isMultipleOfTen = (currentValue) => currentValue % 10 === 0 
const result3 = findIndex(array2, isMultipleOfTen)
console.assert(result3 === array2.findIndex(isMultipleOfTen), {
result: result3,
message: "Test 3 no pasado",
});

const array3 = [2001, 2005, 2007, 2019, 2024, 1999]
const isFromTwentiethCentury = (currentValue) => (currentValue >= 1900) && (currentValue < 2000)
const result4 = findIndex(array3, isFromTwentiethCentury)
console.assert(result4 === array3.findIndex(isFromTwentiethCentury), {
result: result4,
message: "Test 4 no pasado",
});
