//toma un array sin modificar 
//deveulve una copia inversa

function reverse(array) {
    
    const newArray = [];
    let counter = 0
    for (let i = array.length-1; i >= 0; i--) {
        newArray[counter] = array[i];
        counter++;
    }
    return newArray;
}

const array1 = [1, 2, 3, 4, 5, 6, 7, 8];
const result1 = reverse(array1);
const testArray1 = [1, 2, 3, 4, 5, 6, 7, 8];
const testResult1 = array1.reverse();
console.assert(
    result1[0] === testResult1[0] &&
    result1[1] === testResult1[1] &&
    result1[2] === testResult1[2] &&
    result1[result1.length] === testResult1[testResult1.length],
    {
      result: result1,
      message: "Test 1 no pasado",
    });

//completado
