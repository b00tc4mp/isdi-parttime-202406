function copyWithin(array, target, start, end = array.length) {
    // Handle negative target index
    if (target < 0) target = Math.max(target + array.length, 0)

    // Handle negative start index
    if (start < 0) start = Math.max(start + array.length, 0)

    // Handle negative end index
    if (end < 0) end += array.length

    // Ensure indices are within bounds
    if (target >= array.length || start >= array.length) return array
    end = Math.min(end, array.length)
    
    // Calculate the number of elements to copy
    const lengthToCopy = Math.min(end - start, array.length - target)
    
    // Perform the copy operation
    for (let i = 0; i < lengthToCopy; i++) {
        array[target + i] = array[start + i]
    }

    return array;
}

function arrayIsEqual(arr1, arr2) {
    if (arr1.length !== arr2.length) return false;
    for (let i = 0; i < arr1.length; i++) {
        if (arr1[i] !== arr2[i]) return false;
    }
    return true;
}

// Testing
const array1 = ['a', 'b', 'c', 'd', 'e']
const expected1 = ['a', 'b', 'c', 'd', 'e'].copyWithin(0, 3, 4);
const result1 = copyWithin(array1, 0, 3, 4)
console.assert(arrayIsEqual(array1, expected1), {
    result: array1,
    message: "Test 1 failed",
});

const array2 = ['a', 'b', 'c', 'd', 'e']
const expected2 = ['a', 'b', 'c', 'd', 'e'].copyWithin(1, 3);
const result2 = copyWithin(array2, 1, 3)
console.assert(arrayIsEqual(array2, expected2), {
    result: array2,
    message: "Test 2 failed",
});

const array3 = ['a', 'b', 'c', 'd', 'e']
const expected3 = ['a', 'b', 'c', 'd', 'e'].copyWithin(-1, 3)
const result3 = copyWithin(array3, -1, 3)
console.assert(arrayIsEqual(array3, expected3), {
    result: array3,
    message: "Test 3 failed",
});

const array4 = ['a', 'b', 'c', 'd', 'e']
const expected4 = ['a', 'b', 'c', 'd', 'e'].copyWithin(10, 2, 3)
const result4 = copyWithin(array4, 10, 2, 3)
console.assert(arrayIsEqual(array4, expected4), {
    result: array4,
    message: "Test 4 failed",
});

const array5 = ['a', 'b', 'c', 'd', 'e']
const expected5 = ['a', 'b', 'c', 'd', 'e'].copyWithin(0, 3, 7)
const result5 = copyWithin(array5, 0, 3, 7)
console.assert(arrayIsEqual(array5, expected5), {
    result: array5,
    message: "Test 5 failed",
});