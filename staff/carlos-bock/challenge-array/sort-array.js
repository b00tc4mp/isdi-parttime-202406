//toma un array sortea en orden alfabetico
//no modifica array original
//si array es de numeros sortea numericamente por los digitos individuales y no por el valor absoluto de número


function sort(originalArray) {
    let condition = true;
    const array = [];

    for (let i = 0; i < array.length; i++) {
       
        if (condition !== true) {
        for (let j = 0; j < array.length; j++) {
            condition = false;
          if(array[i+j] >= array[i+j+1]){
              let tempElement = array[i+j];
              array[i+j] = array[i+j+1];
              array[i+j+1] = tempElement;
              condition = true
                }
            /*if(array[i+j] <= array[i+j-1]){
              let tempElement = array[i+j];
              array[i+j] = array[i+j-1];
              array[i+j-1] = tempElement;
              
                }*/
            if(array[array.length-j] <= array[array.length-j-1]){
                let tempElement = array[array.length-j-1];
                array[array.length-j-1] = array[array.length-j];
                array[array.length-j] = tempElement;
                condition = true
            }
        }
        }
    }
    return array;
}

////////////// función de comparación
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

//TDD
const array1 = [3, 1, 4, 9, 10, 0, 30, 4]
const result1 = sort(array1);
const testArray1 = [3, 1, 4, 9, 10, 0, 30, 4]
const testResult1 = array1.sort();
// añadir el console.assert aquí

debugger
const array2= ["a", "x", "d", "z", "g","b", "c"]
const result2 = sort(array2);
const testArray2= ["a", "x", "d", "z", "g","b", "c"]
const testResult2 = array2.sort();
console.assert(arrayIsEqual(array2,testArray2) && result2 === testResult2, {
    result: result2,
    message: "Test 2 no ha pasado",
});
