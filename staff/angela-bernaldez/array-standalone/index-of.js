function indexOf(array, searchElement, fromIndex = 0) {

    // This method returns the first index at which a given element can be found in the array, 
    // or -1 if it is not present.

    // Negative index counts back from the end of the array — if -array.length <= fromIndex < 0, fromIndex + array.length is used. Note, the array is still searched from front to back in this case.
    // If fromIndex < -array.length or fromIndex is omitted, 0 is used, causing the entire array to be searched.
    // If fromIndex >= array.length, the array is not searched and -1 is returned.

    if (!(array instanceof Array)) {
        throw new TypeError('The provided value is not an array')
    }

    // handle negative cases
    if (fromIndex < 0) fromIndex = Math.max(fromIndex + array.length, 0)

    // handle fromIndex being outside array.length 
    if (fromIndex > array.length) return -1

    for (let i = fromIndex; i < array.length; i++) {
        console.log(array[i])
        if (array[i] === searchElement) return i
    }
    
    return -1
}



const array1 = [1, 2, 3, 4, 5, 6, 7, 8]
const result1 = indexOf(array1, 7)

console.assert(result1 === array1.indexOf(7), {
result: result1,
message: "Test 1 no pasado",
});

const array2 = [true, true, true, false, true, false]
const result2 = indexOf(array2, true)

console.assert(result2 === array2.indexOf(true), {
result: result2,
message: "Test 2 no pasado",
});

const result3 = indexOf(array2, true, 3)

console.assert(result3 === array2.indexOf(true, 3), {
result: result3,
message: "Test 3 no pasado",
});

const array3 = [true, false, null, undefined, 'hello', 1998]
const result4 = indexOf(array3, null)

console.assert(result4 === array3.indexOf(null), {
result: result4,
message: "Test 4 no pasado",
});

const result5 = indexOf(array3, undefined)

console.assert(result5 === array3.indexOf(undefined), {
result: result5,
message: "Test 5 no pasado",
});

const result6 = indexOf(array3, undefined, 4)

console.assert(result6 === array3.indexOf(undefined, 4), {
result: result6,
message: "Test 6 no pasado",
});