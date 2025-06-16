    function splice(array, start, deleteCount, ...item) {
        if (start > array.length) start = array.length;
        if (start < 0) start = array.length + start;
       
        if (deleteCount === undefined || deleteCount > array.length - start) {
          deleteCount = array.length - start;
        }
        if (deleteCount < 0) deleteCount = 0;
      
        const element = [];
      
        for (let i = start; i < start + deleteCount; i++) {
          element[element.length] = array[i];
        }
        for (let i = start + deleteCount; i < array.length; i++) {
          array[i - deleteCount] = array[i];
        }
      
        array.length = array.length - deleteCount;
      
        for (let i = array.length - 1; i >= start; i--) {
          array[i + item.length] = array[i];
        }
      
        for (let i = 0; i < item.length; i++) {
          array[start + i] = item[i];
        }
      
        return element;
      }
      
function arrayIsEqual(arr1, arr2) {
    if (typeof arr1 !== 'object' || typeof arr2 !== 'object') {
        throw TypeError('Both input parameters need to be arrays')
    }
    if (arr1.length !== arr2.length) return false
    for (let i = 0; i < arr1.length; i++) {
        if (arr1[i] !== arr2[i]) {
            return false
        }
    }
    return true
}



const array1 = [1, 2, 3, 4, 5]
const result1 = splice(array1, 2, 2, 'a', 'b')
const splicedArray1 = [1, 2, 3, 4, 5]
const expectedRemoved1 = splicedArray1.splice(2, 2, 'a', 'b')
console.assert(arrayIsEqual(array1, splicedArray1) && arrayIsEqual(result1, expectedRemoved1), {
    result: result1,
    message: "Test 1 failed",
});

const array2 = [1, 2, 3, 4, 5]
const result2 = splice(array2, -2, 4, 'a', 'b')
const splicedArray2 = [1, 2, 3, 4, 5]
const expectedRemoved2 = splicedArray2.splice(-2, 4, 'a', 'b')
console.assert(arrayIsEqual(array2, splicedArray2) && arrayIsEqual(result2, expectedRemoved2), {
    result: result2,
    message: "Test 2 failed",
});

const array3 = [1, 2, 3, 4, 5]
const result3 = splice(array3, 5, 0, 'a', 'b')
const splicedArray3 = [1, 2, 3, 4, 5]
const expectedRemoved3 = splicedArray3.splice(5, 0, 'a', 'b')
console.assert(arrayIsEqual(array3, splicedArray3) && arrayIsEqual(result3, expectedRemoved3), {
    result: result3,
    message: "Test 3 failed",
});
      