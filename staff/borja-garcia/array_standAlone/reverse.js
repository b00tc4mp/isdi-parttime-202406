function reverse(array) {
    
    // This method reverses an array in place and returns the reference to the same array
    // IT CHANGES THE ORIGINAL ARRAY!!! - NO COPY IS MADE
    // The first array element now becoming the last, and the last array element becoming the first. 
    // In other words, elements order in the array will be turned towards the direction opposite to that previously stated.

    // the original method does not create a copy of the original array in order to reverse it
    // so storing all values an auxiliary array even if it´s not returned it´s not correct
    // as it will use more memory 

    if (!(array instanceof Array)) {
        throw new TypeError('The provided value is not an array')
    }

    let start = 0 
    let end = array.length - 1

    while (start < end) {
        let temp = array[start]
        array[start] = array[end]
        array[end] = temp 

        // increment start and decrease end to move towards the middle and cover all elements
        start++
        end--
    }

    return array
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
const result1 = reverse(array1)
console.assert(arrayIsEqual(array1, [1, 2, 3, 4, 5, 6, 7, 8].reverse()), {
    result: array1,
    message: "Test 1 no pasado",
});

const array2 = [null, undefined, true, false]
const result2 = reverse(array2)
console.assert(arrayIsEqual(array2, [null, undefined, true, false].reverse()), {
    result: array2,
    message: "Test 2 no pasado",
});