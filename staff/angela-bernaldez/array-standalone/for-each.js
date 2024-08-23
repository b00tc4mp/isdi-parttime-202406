function forEach(array, callback) {

    // This method executes a provided function once for each array element.
    // This method does not return a new array, it modifies the original array instead

    if (!(array instanceof Array)) {
        throw new TypeError('The provided value is not an array')
    }

    if (typeof callback !== 'function') {
        throw TypeError('Second argument of map needs to be a function')
    }
    
    let i = 0
    while (i < array.length) {
        // need to update each array position with the new value - result of executing the provided function on that element
        array[i] = callback(array[i])
        i++
    }
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



const numbers = [1, 11, 21, 31, 41, 51]
const nearestMultipleOfTen = (currentValue) => Math.round(currentValue/10)*10

const result1 = forEach(numbers, nearestMultipleOfTen)
console.assert(arrayIsEqual(numbers, [0, 10, 20, 30, 40, 50]), {
    result: result1,
    message: "Test 1 no pasado",
});

const items = ['apple', 'banana', 'strawberries', 'cherries']
const itemsCapitalized = (currentItem) => currentItem.toUpperCase()

const result2 = forEach(items, itemsCapitalized)
console.assert(arrayIsEqual(items, ['APPLE', 'BANANA', 'STRAWBERRIES', 'CHERRIES']), {
    result: result2,
    message: "Test 2 no pasado",
});

