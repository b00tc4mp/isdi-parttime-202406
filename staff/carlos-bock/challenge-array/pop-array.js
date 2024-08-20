//done add asserts 
//removes last element from array returns modified array 
//stores poped element 
//loop through array and save values minus the last element
//set array equal to temparray

function pop(array){
    let popped = array[array.length-1];

    array.length = array.length-1;  
    return popped;
}


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

const array1 = ["this", "array", "has", 5, "items"];
const result1 = pop(array1);
const testArray1 = ["this", "array", "has", 5, "items"];
const testResult1 = testArray1.pop();
console.assert(arrayIsEqual(array1,testArray1) && result1 === testResult1, {
    message: "Test 1 no pasado"
})

const array2 = [1,2,3,4,5];
const result2 = pop(array2);
const testArray2 = [1,2,3,4,5];;
const testResult2 = testArray2.pop();
console.assert(arrayIsEqual(array2,testArray2) && result2 === testResult2, {
    message: "Test 2 no pasado"
})

//completado 