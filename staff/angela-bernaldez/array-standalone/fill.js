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
const result1 = fill(array1, 0)

console.assert(arrayIsEqual(array1, [1, 2, 3, 4, 5, 6, 7, 8].fill(0)), {
result: array1,
message: "Test 1 no pasado",
});

const array2 = [-1, -2, -3, -4, -5, -6, -7, -8]
const result2 = fill(array2, 10, 2, 8)

console.assert(arrayIsEqual(array2, [-1, -2, -3, -4, -5, -6, -7, -8].fill(10, 2, 8)), {
result: array2,
message: "Test 2 no pasado",
});

const array3 = [0, 0, 0, 0, 0, 0, 0]
const result3 = fill(array3, 10, -4, -2)

console.assert(arrayIsEqual(array3, [0, 0, 0, 0, 0, 0, 0].fill(10, -4, -2)), {
result: array3,
message: "Test 3 no pasado",
});

const array4 = [0, 0, 0, 0, 0, 0, 0]
const result4 =  fill(array4, 10, -2, -4)

console.assert(arrayIsEqual(array4, [0, 0, 0, 0, 0, 0, 0].fill(10, -2, -4)), {
result: array4,
message: "Test 4 no pasado",
});

const array5 = [0, 0, 0, 0, 0, 0, 0]
const result5 =  fill(array5, 10, -2, 4)

console.assert(arrayIsEqual(array5, [0, 0, 0, 0, 0, 0, 0].fill(10, -2, 4)), {
result: array5,
message: "Test 5 no pasado",
});

const array6 = [0, 0, 0, 0, 0, 0, 0]
const result6 =  fill(array6, null, 0, 18)

console.assert(arrayIsEqual(array6, [0, 0, 0, 0, 0, 0, 0].fill(null, 0, 18)), {
result: array6,
message: "Test 6 no pasado",
});

const array7 = [false, true, false, true, false, true]
const result7 =  fill(array7, true, 0, -1)

console.assert(arrayIsEqual(array7, [false, true, false, true, false, true].fill(true, 0, -1)), {
result: array7,
message: "Test 7 no pasado",
});


