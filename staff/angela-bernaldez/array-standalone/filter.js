function filter(array, callback) {
    
    // this method creates a shallow copy of a portion of a given array, 
    // filtered down to just the elements from the given array that pass the test implemented by the provided function.

    if (typeof callback !== 'function') {
        throw TypeError('Second argument of map needs to be a function');
    }

    let newArray = []

    for (let i = 0; i < array.length; i++) {
        if (callback(array[i])) newArray[newArray.length] = array[i]
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
const isPositive = (currentValue) => currentValue >= 0
const result1 = filter(array1, isPositive)

console.assert(arrayIsEqual(result1, array1.filter(isPositive)), {
result: result1,
message: "Test 1 no pasado",
});

const array2 = [-1, -2, -3, -4, 5, 6, 7, 8]
const isNegative = (currentValue) => currentValue < 0;
const result2 = filter(array2, isNegative)
console.assert(arrayIsEqual(result2, array2.filter(isNegative)), {
result: result2,
message: "Test 2 no pasado",
});

const isEven = (currentValue) => currentValue % 2 === 0 
const result3 = filter(array1, isEven)
console.assert(arrayIsEqual(result3, array1.filter(isEven)), {
result: result3,
message: "Test 3 no pasado",
});

const isNumber = (currentValue) => typeof currentValue === 'number'
const result4 = filter(array1, isNumber)
console.assert(arrayIsEqual(result4, array1.filter(isNumber)), {
result: result4,
message: "Test 4 no pasado",
});

const array3 = [1, 0, true, 3, false, null, undefined]
const isBoolean = (currentValue) => typeof currentValue === 'boolean'
const result5 = filter(array3, isBoolean)
console.assert(arrayIsEqual(result5, array3.filter(isBoolean)), {
result: result5,
message: "Test 5 no pasado",
});