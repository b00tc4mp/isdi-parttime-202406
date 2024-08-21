// versión 2 del slice array
function slice(array,...index) {
    const newArray = [];
    let [number1, number2] = index;
    let counter = 0;

    if (number1 === undefined) {
      number1 = 0;
    }

    if (number2 === undefined) {
      number2 = array.length;
    }

    if (number1 < 0) {
      number1 = array1.length + number1;
    }

    if (number2 < 0) {
      number2 = array1.length + number2;
    }

    for (let i = number1; i < number2; i++) {
        newArray[counter] = array[i];  
        counter++;   
    }
    return newArray;
}


//función de comparación de arrays
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

// sección tdd
const array1 = [0,1,2,3,4,5,6,7]
const result1 = slice(array1,2)
const testArray1 = [0,1,2,3,4,5,6,7]
const testResult1 = testArray1.slice(2)
console.assert(arrayIsEqual(result1,testResult1),{
    result: 1,
    message: "Test 1 No Pasado",
});

const array2 = [0,1,2,3,4,5,6,7]
const result2 = slice(array2,-2)
const testArray2 = [0,1,2,3,4,5,6,7]
const testResult2 = testArray2.slice(-2)
console.assert(arrayIsEqual(result2,testResult2),{
    result: 2,
    message: "Test 2 No Pasado",
});

const array3 = [0,1,2,3,4,5,6,7]
const result3 = slice(array3,1,5)
const testArray3 = [0,1,2,3,4,5,6,7]
const testResult3 = testArray3.slice(1,5)
console.assert(arrayIsEqual(result3,testResult3),{
    result: 3,
    message: "Test 3 No Pasado",
});

//completado
