function map(array, callback) {

    // This method creates a new array populated with the results
    // of calling a provided function on every element in the calling array.

    // callback is a function to execute for each element in the array. 
    // Its return value is added as a single element in the new array. 

    if (!(array instanceof Array)) {
        throw new TypeError('The provided value is not an array')
    }

    if (typeof callback !== 'function') {
        throw TypeError('Second argument of map needs to be a function')
    }

    let newArray = []

    for (let i = 0; i < array.length; i++) {
        newArray[i] = callback(array[i])
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



const array1 = [1, 2, 3];
const result1 = map(array1, x => x * 2);
console.assert(arrayIsEqual(result1, [2, 4, 6]), {
    result: result1,
    message: "Test 1 no pasado",
});

const result2 = map(array1, x => x /2);
console.assert(arrayIsEqual(result2, [0.5, 1, 1.5]), {
    result: result2,
    message: "Test 2 no pasado",
});

const array2 = [-5,-4,-3,-2,-1,0]
const result3 = map(array2, x => Math.abs(x));
console.assert(arrayIsEqual(result3, [5, 4, 3, 2, 1, 0]), {
    result: result3,
    message: "Test 3 no pasado",
});

// const result4 = map(array1, "hello");
// This ensures that function gives an error when a function is not passed as second argument





