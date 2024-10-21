function push(array, ...elements) {

    // This method adds the specified elements to the end of an array 
    // and returns the new length of the array.

    // modifies the original array: the first input parameter

    if (!(array instanceof Array)) {
        throw new TypeError('The provided value is not an array')
    }

    for (let i = 0; i < elements.length; i++) {
        array[array.length] = elements[i]
    }

    // returns the new length
    return array.length

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



// need to check that elements have been added to the end of original array
// and that function returns the new length after adding the elements

const array1 = ['banana', 'apple', 'watermelon', 'plum']
const pushArray1 = array1.slice()
const result1 = push(array1, 'pear', 'grapes')
const pushResult1 = pushArray1.push('pear', 'grapes')
console.assert(arrayIsEqual(array1, pushArray1) && result1 === pushResult1, {
    result: result1,
    message: "Test 1 no pasado",
});

const array2 = ['banana', 'apple', 'watermelon', 'plum']
const pushArray2 = array2.slice()
const result2 = push(array2, undefined, null)
const pushResult2 = pushArray2.push(undefined, null)
console.assert(arrayIsEqual(array2, pushArray2) && result2 === pushResult2, {
    result: result2,
    message: "Test 2 no pasado",
});

const array3 = ['banana', 'apple', 'watermelon', 'plum']
const pushArray3 = array3.slice()
const result3 = push(array3)
const pushResult3 = pushArray3.push()
console.assert(arrayIsEqual(array3, pushArray3) && result3 === pushResult3, {
    result: result3,
    message: "Test 3 no pasado",
});