function findLast(array, callback) {

    // This method iterates the array in reverse order 
    // returns the value of the first element that satisfies the provided testing function. 
    // If no elements satisfy the testing function, undefined is returned

    if (!(array instanceof Array)) {
        throw new TypeError('The provided value is not an array')
    }

    if (typeof callback !== 'function') {
        throw TypeError('Second argument of map needs to be a function')
    }
    
    let lastFound = undefined 

    let i = array.length - 1
    while (i > 0 && lastFound === undefined) {
        if (callback(array[i])) return array[i]
        i--
    }

    return lastFound 
}



const array1 = [1, 2, 3, 4, 5, 6, 7, 8]
const isEven = (currentValue) => currentValue % 2 === 0 
const result1 = findLast(array1, isEven)

console.assert(result1 === array1.findLast(isEven), {
result: result1,
message: "Test 1 no pasado",
});

const isNegative = (currentValue) => currentValue < 0
const result2 = findLast(array1, isNegative)
console.assert(result2 === array1.findLast(isNegative), {
result: result2,
message: "Test 2 no pasado",
});

const array2 = [1, 5, 9, 10, 15, 20]
const isMultipleOfTen = (currentValue) => currentValue % 10 === 0 
const result3 = findLast(array2, isMultipleOfTen)
console.assert(result3 === array2.findLast(isMultipleOfTen), {
result: result3,
message: "Test 3 no pasado",
});

const array3 = [2001, 1908, 1901, 1950, 2005, 2007, 2019, 2024, 1999]
const isFromTwentiethCentury = (currentValue) => (currentValue >= 1900) && (currentValue < 2000)
const result4 = findLast(array3, isFromTwentiethCentury)
console.assert(result4 === array3.findLast(isFromTwentiethCentury), {
result: result4,
message: "Test 4 no pasado",
});