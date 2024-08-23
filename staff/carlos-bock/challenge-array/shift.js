// pasa un array 
// quita el primer elemento
// modifica array
// devuelve el valor que se quito


function shift(array) {
    const shiftedValue = array[0];
    let counter = 0;
    for (let i = 1; i < array.length; i++) {
        array[counter]=array[i];
        counter++;
    }
    array.length = array.length-1;
    return shiftedValue;
}



//función de comparación de arrays
function arrayIsEqual(arr1, arr2) {
    if (arr1.length !== arr2.length) return false;
    let result = true;
    let i = 0;
    while (i < arr1.length && result === false) {
      if (arr1[i] !== arr2[i]) {
        result = false;
      }
      i++;
    }
    return result;
  }

//tdd
const array1 = ["kakashi", "mario", "link", "solidsnake"];
const result1 = shift(array1);
const testArray1 = ["kakashi", "mario", "link", "solidsnake"];
const testResult1 = testArray1.shift();
console.assert(arrayIsEqual(array1, testArray1) && result1 === testResult1,
{
    message: "Test 1 no pasado",
});

const array2 = [0,1,2,3,4,5,6];
const result2 = shift(array2);
const testArray2 = [0,1,2,3,4,5,6];
const testResult2 = testArray2.shift();
console.assert(arrayIsEqual(array2, testArray2) && result2 === testResult2,
{
    message: "Test 2 no pasado",
});

// completado