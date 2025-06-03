function splice(array, start, deleteCount = array.length, ...items) {
    // Handle negative start index
    if (start < 0) start = Math.max(start + array.length, 0)

    // Handle cases where start is greater than the array length
    if (start > array.length) start = array.length

    // Handle cases where deleteCount is negative
    deleteCount = Math.max(deleteCount, 0)

    // Calculate the end index for slicing
    let end = Math.min(start + deleteCount, array.length)

    // Create an array for removed elements
    let removedItems = [];
    for (let i = start; i < end; i++) {
        removedItems[i - start] = array[i]
    }

    // Calculate the number of elements to keep
    const keepLength = Math.max(start, array.length - deleteCount)

    // Move elements after the splicing position to their new positions
    for (let i = array.length - 1; i >= start + deleteCount; i--) {
        if (i + items.length < array.length) {
            array[i + items.length] = array[i]
        }
    }

    // Insert new items into the array
    for (let i = 0; i < items.length; i++) {
        array[start + i] = items[i]
    }

    // Remove the trailing elements that are now beyond the new length
    for (let i = keepLength + items.length; i < array.length; i++) {
        array[i] = undefined
    }

    // Adjust the length of the array
    array.length = keepLength + items.length

    return removedItems
}



function arrayIsEqual(arr1, arr2) {
    if (typeof arr1 !== 'object' || typeof arr2 !== 'object') {
        throw TypeError('Both input parameters need to be arrays')
    }
    if (arr1.length !== arr2.length) return false
    for (let i = 0; i < arr1.length; i++) {
        if (arr1[i] !== arr2[i]) {
            return false
        }
    }
    return true
}



const array1 = [1, 2, 3, 4, 5]
const result1 = splice(array1, 2, 2, 'a', 'b')
const splicedArray1 = [1, 2, 3, 4, 5]
const expectedRemoved1 = splicedArray1.splice(2, 2, 'a', 'b')
console.assert(arrayIsEqual(array1, splicedArray1) && arrayIsEqual(result1, expectedRemoved1), {
    result: result1,
    message: "Test 1 failed",
});

const array2 = [1, 2, 3, 4, 5]
const result2 = splice(array2, -2, 4, 'a', 'b')
const splicedArray2 = [1, 2, 3, 4, 5]
const expectedRemoved2 = splicedArray2.splice(-2, 4, 'a', 'b')
console.assert(arrayIsEqual(array2, splicedArray2) && arrayIsEqual(result2, expectedRemoved2), {
    result: result2,
    message: "Test 2 failed",
});

const array3 = [1, 2, 3, 4, 5]
const result3 = splice(array3, 5, 0, 'a', 'b')
const splicedArray3 = [1, 2, 3, 4, 5]
const expectedRemoved3 = splicedArray3.splice(5, 0, 'a', 'b')
console.assert(arrayIsEqual(array3, splicedArray3) && arrayIsEqual(result3, expectedRemoved3), {
    result: result3,
    message: "Test 3 failed",
});

const array4 = [1, 2, 3, 4, 5]
const result4 = splice(array4, 0, 10, 'a', 'b')
const splicedArray4 = [1, 2, 3, 4, 5]
const expectedRemoved4 = splicedArray4.splice(0, 10, 'a', 'b')
console.assert(arrayIsEqual(array4, splicedArray4) && arrayIsEqual(result4, expectedRemoved4), {
    result: result4,
    message: "Test 4 failed",
});

