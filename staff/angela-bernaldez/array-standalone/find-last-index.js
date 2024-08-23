function findLastIndex(array, callback) {

    // This method iterates the array in reverse order 
    // and returns the index of the first element that satisfies the provided testing function. 
    // If no elements satisfy the testing function, -1 is returned.

    if (!(array instanceof Array)) {
        throw new TypeError('The provided value is not an array')
    }

    if (typeof callback !== 'function') {
        throw TypeError('Second argument of map needs to be a function')
    }
    
    let lastIndex = -1 

    let i = array.length - 1 
    while (i > 0 && lastIndex === -1) {
        if (callback(array[i])) return i
        i--
    }

    return lastIndex 
}



const array1 = [1, 2, 3, 4, 5, 6, 7, 8, 17, 7, 25]
const isEven = (currentValue) => currentValue % 2 === 0 
const result1 = findLastIndex(array1, isEven)

console.assert(result1 === array1.findLastIndex(isEven), {
result: result1,
message: "Test 1 no pasado",
});

const isNegative = (currentValue) => currentValue < 0
const result2 = findLastIndex(array1, isNegative)
console.assert(result2 === array1.findLastIndex(isNegative), {
result: result2,
message: "Test 2 no pasado",
});

const array2 = [1, 5, 9, 10, 15, 20, 58, 69, 100, 103, 24]
const isMultipleOfTen = (currentValue) => currentValue % 10 === 0 
const result3 = findLastIndex(array2, isMultipleOfTen)
console.assert(result3 === array2.findLastIndex(isMultipleOfTen), {
result: result3,
message: "Test 3 no pasado",
});

const array3 = [2001, 2005, 2007, 2019, 2024, 1999, 2002, 1998, 2004]
const isFromTwentiethCentury = (currentValue) => (currentValue >= 1900) && (currentValue < 2000)
const result4 = findLastIndex(array3, isFromTwentiethCentury)
console.assert(result4 === array3.findLastIndex(isFromTwentiethCentury), {
result: result4,
message: "Test 4 no pasado",
});