// Crea un nuevo array con los rsultados de la llmada a la función indicada, apicandola a cada elemento


function map(array, callback){

    const newArray = [];

    for (let i = 0; i < array.length; i++) {
        newArray[i]= callback(array[i]);        
    }
    return newArray;
}


////////////////////////////////////////
//función de callback

function devideByTwo(value) {
    let result = 0

    if (typeof value === "number") {
        result = value/2;
        return result;
    } else {
        return "Your array is had none numerical entries";
    }
        
}

////////////////////////////////////////
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



///////////////////////////
//tdd
const array1 = [6,5,4,3,2,1]
const result1 = map(array1,devideByTwo)
const testArray1 = [6,5,4,3,2,1]
const testResult1 = testArray1.map(devideByTwo)
console.assert(arrayIsEqual(result1, testResult1), {
    result: result1,
    message: "Test 1 no pasado",
});

const array2 = [6,5,"no",3,2,1]
const result2 = map(array2,devideByTwo)
const testArray2 = [6,5,"no",3,2,1]
const testResult2 = testArray2.map(devideByTwo)
console.assert(arrayIsEqual(result2, testResult2), {
    result: result2,
    message: "Test 2 no pasado",
});

const array3 = [300,5,333,3.14,2,1]
const result3 = map(array3,devideByTwo)
const testArray3 = [300,5,333,3.14,2,1]
const testResult3 = testArray3.map(devideByTwo)
console.assert(arrayIsEqual(result3, testResult3), {
    result: result3,
    message: "Test 2 no pasado",
});