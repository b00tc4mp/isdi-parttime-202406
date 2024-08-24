function shift(array) {

    // This method removes the first element from an array and returns that removed element. 
    // This method changes the length of the array.

    if (!(array instanceof Array)) {
        throw new TypeError('The provided value is not an array')
    }

    // need to store the first element of the array before modifying the original array
    let result = array[0]

    // move all elements one position to the left - by looping over the original array
    for (let i = 0; i < array.length - 1 ; i++) array[i] = array[i + 1]

    // then remove the last element, thus, reducing the length of the array by one unit
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



// need to check that first element has been removed from original array
// and that function returns the removed element

const array1 = ['banana', 'apple', 'watermelon', 'plum']
const shiftArray1 = array1.slice()
const result1 = shift(array1)
const shiftResult1 = shiftArray1.shift()
console.assert(arrayIsEqual(array1, shiftArray1) && result1 === shiftResult1, {
    result: result1,
    message: "Test 1 no pasado",
});

const array2 = ['lion']
const shiftArray2 = [...array2]
const result2 = shift(array2)
const shiftResult2 = shiftArray2.shift()
console.assert(arrayIsEqual(array2, shiftArray2) && result2 === shiftResult2, {
    result: result2,
    message: "Test 2 no pasado",
});

const array3 = [null, undefined, true, false, 0, 1]
const shiftArray3 = array3.slice()
const result3 = shift(array3)
const shiftResult3 = shiftArray3.shift()
console.assert(arrayIsEqual(array3, shiftArray3) && result3 === shiftResult3, {
    result: result3,
    message: "Test 3 no pasado",
});

