function slice(array, start = 0, end = array.length) {

    // This method returns a shallow copy of a portion of an array into a new array object 
    // selected from start to end (end not included) where start and end represent the index of items in that array. 
    // The original array WILL NOT be modified.

    let newArray = []

    // Handle negative start index
    if (start < 0) start = Math.max(start + array.length, 0)

    // Handle negative end index
    if (end < 0) end += array.length

    // Ensure end does not exceed array length
    end = Math.min(end, array.length)

    // Return an empty array if start is greater than or equal to end
    // In contrast to fill method - where the original array was returned when start exceeded end
    if (start >= end) return newArray

    for (let i = start; i < end; i++) {
        newArray[newArray.length] = array[i]
    }

    return newArray
}



function arrayIsEqual(arr1, arr2) {
    if (typeof arr1 !== 'object' || typeof arr2 !== 'object') {
        throw TypeError('Both input parameters need to be arrays')
    }
    if (arr1.length !== arr2.length) return false;
    let result = true;
    let i = 0;
    while (i < arr1.length) {
      if (arr1[i] !== arr2[i]) {
          return false;
      }
      i++;
    }
    return result;
}



const array1 = [1, 2, 3, 4, 5, 6, 7, 8]
const result1 = slice(array1)
console.assert(arrayIsEqual(result1, array1.slice()), {
    result: array1,
    message: "Test 1 no pasado",
});

const array2 = [-1, -2, -3, -4, -5, -6, -7, -8]
const result2 = slice(array2, 2)
console.assert(arrayIsEqual(result2, array2.slice(2)), {
    result: array2,
    message: "Test 2 no pasado",
});

const array3 = [0, 0, 0, 0, 0, 0, 0]
const result3 = slice(array3, 2, 4)
console.assert(arrayIsEqual(result3, array3.slice(2, 4)), {
    result: array3,
    message: "Test 3 no pasado",
});

const array4 = [0, 0, 0, 0, 0, 0, 0]
const result4 =  slice(array4, -4, -2)
console.assert(arrayIsEqual(result4, array4.slice(-4, -2)), {
    result: array4,
    message: "Test 4 no pasado",
});

const array5 = [0, 0, 0, 0, 0, 0, 0]
const result5 =  slice(array5, -2, -4)
console.assert(arrayIsEqual(result5, array5.slice(-2, -4)), {
    result: array5,
    message: "Test 5 no pasado",
});

const array6 = [0, 0, 0, 0, 0, 0, 0]
const result6 =  slice(array6, 10, -2)
console.assert(arrayIsEqual(result6, array6.slice(10, -2)), {
    result: array6,
    message: "Test 6 no pasado",
});

const array7 = [false, true, false, true, false, true]
const result7 = slice(array7, 2, 18)
console.assert(arrayIsEqual(result7, array7.slice(2, 18)), {
    result: array7,
    message: "Test 7 no pasado",
});

