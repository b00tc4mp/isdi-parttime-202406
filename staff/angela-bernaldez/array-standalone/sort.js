function sort(array, callback) {

    // This method sorts the elements of an array in place 
    // and returns the reference to the same array, now sorted - the original array is MODIFIED

    // The default sort order is ascending,
    // if callback is not provided, the elements are converted into strings 
    // and their UTF-16 sequences are compared 
    // this may provide undesired results when comparing numbers...
    // a callback function (compare function) that takes two arguments (a,b) is needed, and should return:
    // positive value if a should go before b
    // negative value if b should go before a 
    // 0 if they are considered the same 

    if (typeof callback !== 'function') {
        callback = (a, b) => {
            // Convertir a strings y comparar usando la comparación predeterminada de strings
            if (String(a) < String(b)) return -1;
            if (String(a) > String(b)) return 1;
            return 0;
        };
    }

    let swapped = true
    while (swapped) { 
        swapped = false;
        for (let i = 0; i < array.length - 1; i++) {
            let a = array[i];
            let b = array[i + 1];
            
            if (callback(a, b) > 0) { 
                array[i] = b;
                array[i + 1] = a;
                swapped = true; // indicate that some elements have been swapped
            }
        }
    } // Continue until no swaps need to be made

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



const array1 = [10, 3, 2, 8, 7, 5]
const ascendingOrder = (a,b) => a - b
const resut1 = array1.sort(ascendingOrder)
console.assert(arrayIsEqual(array1, [10, 3, 2, 8, 7, 5].sort(ascendingOrder)), {
    result: array1,
    message: "Test 1 no pasado",
});

const array2 = [1, 1, 8, 7, 5, 2, 3]
const resut2 = array2.sort(ascendingOrder)
console.assert(arrayIsEqual(array2, [1, 1, 8, 7, 5, 2, 3].sort(ascendingOrder)), {
    result: array2,
    message: "Test 2 no pasado",
});

const array3 = ['banana', 'mango', 'watermelon', 'apple', 'grapes']
const resut3 = array3.sort()
console.assert(arrayIsEqual(array3, ['banana', 'mango', 'watermelon', 'apple', 'grapes'].sort()), {
    result: array3,
    message: "Test 3 no pasado",
});

// let's try to order according to element length
const array4 = ['banana', 'mango', 'watermelon', 'apple', 'grapes']
const ascendingLength = (a,b) => a.length - b.length
const resut4 = array4.sort(ascendingLength)
console.assert(arrayIsEqual(array4, ['banana', 'mango', 'watermelon', 'apple', 'grapes'].sort(ascendingLength)), {
    result: array4,
    message: "Test 4 no pasado",
});
