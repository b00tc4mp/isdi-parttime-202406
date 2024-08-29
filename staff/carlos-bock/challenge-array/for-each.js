//terminiar sección de TDD
// pasa funcion sobre un array
// no modifica el array 
// no develvue array


//Función primarea
function forEach(array,callBack) {
  if (!(array instanceof Array)) return undefined;
    
  for (let i = 0; i < array.length; i++) {
        callBack(array[i],i,array);    
    }
}

///////////////////////////////////////////////////////////////////////////////////////

//función de comparación para arrays
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

///////////////////////////////////////////////////////////////////////////////////////

const array1 = [1,2,3];
const result1 = [];
forEach(array1,(element, index, array) =>
  result1.push({ element, index, array })
);
console.assert(
  result1.length === array1.length &&
  result1[0].element === array1[0] &&
  result1[0].index === 0 &&
  arrayIsEqual(result1[0].array, array1) &&
  result1[1].element === array1[1] &&
  result1[1].index === 1 &&
  arrayIsEqual(result1[1].array, array1) &&
  result1[2].element === array1[2] &&
  result1[2].index === 2 &&
  arrayIsEqual(result1[2].array, array1),
  {
    result: result1,
    message: "Test 1 No pasado",
  }
);

const array2 = ["a" , "b", "c"];
const result2 = [];
forEach(array2, (element,index, array) =>
  result2.push({ element, index, array })
);
console.assert(
  result2.length === array2.length &&
    result2[0].element === array2[0] &&
    result2[0].index === 0 &&
    arrayIsEqual(result2[0].array, array2) &&
    result2[1].element === array2[1] &&
    result2[1].index === 1 &&
    arrayIsEqual(result2[0].array, array2) &&
    result2[2].element === array2[2] &&
    result2[2].index === 2 &&
    arrayIsEqual(result2[2].array, array2), 
    {
      result: result2,
      message: "Test 2 No pasado",
    }
);