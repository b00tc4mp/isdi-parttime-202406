function pop(array) {
    // This method removes the last element from an array and returns that element. 
    // and changes the length of the array.

    if (!(array instanceof Array)) {
        throw new TypeError('The provided value is not an array')
    }

    // need to store the last element of the array before modifying the original array
    let result = array[array.length - 1]

    // shorten the original array by one unit - thus, eliminating the last element
    array.length--

    return result

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



// need to check that last element has been removed from original array
// and that function returns the removed element

const array1 = ['banana', 'apple', 'watermelon', 'plum']
const popArray1 = array1.slice()
const result1 = pop(array1)
const popResult1 = popArray1.pop()

console.assert(arrayIsEqual(array1, popArray1) && result1 === popResult1, {
    result: result1,
    message: "Test 1 no pasado",
});

const array2 = ['lion']
const popArray2 = [...array2]
const result2 = pop(array2)
const popResult2 = popArray2.pop()

console.assert(arrayIsEqual(array2, popArray2) && result2 === popResult2, {
    result: result2,
    message: "Test 2 no pasado",
});

const array3 = [null, undefined, true, false, 0, 1]
const popArray3 = array3.slice()
const result3 = pop(array3)
const popResult3 = popArray3.pop()

console.assert(arrayIsEqual(array3, popArray3) && result3 === popResult3, {
    result: result3,
    message: "Test 3 no pasado",
});