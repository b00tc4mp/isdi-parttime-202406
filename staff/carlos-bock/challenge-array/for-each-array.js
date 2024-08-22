//terminiar sección de TDD
// pasa funcion sobre un array
// no modifica el array 
// no develvue array


//Función primarea
function forEach(array,callBack) {
    
    for (let i = 0; i < array.length; i++) {
        callBack(array[i],result);    
    }
}

///////////////////////////////////////////////////////////////////////////////////////

//función de callback
function ifEvenAdd(value,array) {
    
    if(value % 2 === 0) {
        array.push(value); // cargar metodo usar otro código
    } 
}

///////////////////////////////////////////////////////////////////////////////////////

//función de comparación para arrays
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

///////////////////////////////////////////////////////////////////////////////////////

const array1 = [1,2,3,4,5];
const result1 = [];

const testResult1 = at(array1, 3);

debugger 
forEach(array1, ifEvenAdd);



  console.assert(arrayIsEqual(array1, [1, 2, 3, 4]), {
    result: array1,
    message: "Test 1.1 no pasado",
  });