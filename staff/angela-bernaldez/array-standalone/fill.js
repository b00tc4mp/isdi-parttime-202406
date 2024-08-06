function fill(array, value, start = 0, end = array.length) {

    // The fill() method of Array instances changes all elements 
    // within a range of indices in an array to a static value. It returns the modified array.

    // Handle negative start index
    if (start < 0) start = Math.max(start + array.length, 0);
    
    // Handle negative end index
    if (end < 0) end += array.length;
    
    // Ensure end does not exceed array length
    end = Math.min(end, array.length);

    // cases where original array is returned and nothing else needs to be executed
    if (start >= array.length || end <= start) return array

    // loop through array to change corresponding elements according to start and end if provided 
    // otherwise, change the whole array
    for (let i = start; i < end; i++) {
        array[i] = value
    }

    return array
}


/*
function arrayIsEqual(arr1, arr2) {
    if (arr1.length !== arr2.length) return false;
    let result = true;
    let i = 0;
    while (i < arr1.length || result === false) {
      if (arr1[i] !== arr2[i]) {
        result = false;
      }
      i++;
    }
    return result;
  }
*/


const array1 = [1, 2, 3, 4, 5, 6, 7, 8]
const result1 = fill(array1, 0)


console.assert(arrayIsEqual(array1, [1, 2, 3, 4, 5, 6, 7, 8].fill(0)), {
result: result1,
message: "Test 1 no pasado",
});

/*
const array2 = [1, 2, 3, 4, 5, 6, 7, 8]
const result2 = fill(array1, 0, 1, 5)

console.assert(arrayIsEqual(array1, [1, 2, 3, 4, 5, 6, 7, 8].fill(0, 1, 5)), {
result: result2,
message: "Test 2 no pasado",
});
*/
