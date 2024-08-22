// método se una para unir arrays
// no cambia arrays origiinales
// devuelve nuevo array

function concat(...arrays){
    const newArray = [];

    if (typeof arrays[0] === "array" || typeof arrays[1] === null){
        return undefined
    }

    for (let j = 0; j < arrays.length; j++) {
        let k = 0;
        let length = arrays[0].length;
        if (j > 0){
            length = newArray.length+arrays[j].length;
            k = newArray.length
        }
        let counter = 0;

        while (k < length){
            newArray[k] = arrays[j][counter]
            k++;
            counter++;
        }
    }   
    return newArray;
}



//función de comparación 
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

//tdd
const array1 = [1,2,3];
const array2 =  [4,5,6];
debugger
const result1 = concat(array1, array2);
const result2= array1.concat(array2);
console.assert(arrayIsEqual(result1,result2),
{
    result: result1,
    message: "Test1 no pasado",
});

const array3 = [1,2,3];
const array4 =  [4,5,6];
const array5= [7,8,9];
const result3 = concat(array1, array2, array3);
const result4= array1.concat(array2,array3);
console.assert(arrayIsEqual(result3,result4),
{
    result: result3,
    message: "Test2 no pasado",
});

// completado













