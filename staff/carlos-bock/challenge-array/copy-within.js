// transfiere una copia plana de una sección a otra dentro del mismo array
// no mondifica .length y devuelve array original. 
// se "perdie el valor que esta siendo reemplazado"

function copyWithin(array,...indexes){
    let i = 0;
    let length = indexes.length-1

    while (i<length) {
        array[indexes[i]] = array[indexes[i+1]] 
        i++;
    }
    return array;
}


// función de comparación 
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
const array1 = [1,2,3,4,5,6,7];
const result1 = copyWithin(array1,0,5,6);
const testArray1 = [1,2,3,4,5,6,7];
const testResult1 = testArray1.copyWithin(0,5,6);
console.assert(arrayIsEqual(result1,testResult1),{
  result: result1,
  message: "Test 1 no pasado",
});

const array2 = [1,2,3,4,5,6,7];
const result2 = copyWithin(array1,0,5,6);
const testArray2 = [1,2,3,4,5,6,7];
const testResult2 = testArray2.copyWithin(0,5,6);
console.assert(arrayIsEqual(result2,testResult2),{
  result: result1,
  message: "Test 1 no pasado",
});

//add functionality for -indexes
//and a type check