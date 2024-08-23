// toma tres parametros
// elemento de reemplazo, y el primer y último indice
// si solo hay un parametro reemplaza todo
// si hay dos elementos el primero el reemplazo y el segundo es el indice de comienzo
// devuelve array modificado 

function fill(array,newElement,...index){

    if (typeof index.length === 0) {
        for (let i = 0; i < array.length; i++) {
            array[i] = newElement;
        };
    } else if (typeof index[0] === "number") {
        let i = index[0];

        while (i < array.length) {
            array[i] = newElement;
        }
    } else if (index.length === 2){
        let i = index[0];
        let end = index[1];

        while (i < end){
            array[i] = newElement;
        }
    }
    return array;
};


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
const result1 = fill(array1, 9);
const testArray1 = [1,2,3,4,5,6,7];
const testResult1 = testArray1.fill(9);
console.assert(arrayIsEqual(result1, testResult1.fill(9)), {
    result: result1,
    message: "Test 1 No pasado",
})

const array2 = [1,2,3,4,5,6,7];
const result2 = fill(array2, 9);
const testArray2 = [1,2,3,4,5,6,7];
const testResult2 = testArray2.fill(9);
console.assert(arrayIsEqual(result2, testResult2.fill(9,2)), {
    result: result2,
    message: "Test 2 No pasado",
})

const array3 = [1,2,3,4,5,6,7];
const result3 = fill(array3, 9);
const testArray3 = [1,2,3,4,5,6,7];
const testResult3 = testArray3.fill(9);
console.assert(arrayIsEqual(result3, testResult3.fill(9,2,5)), {
    result: result3,
    message: "Test 3 No pasado",
})

//completado 
//añadir casos "edge" y para elementos indefinidos;