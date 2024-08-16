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

const array = [1,2,3,4,5]
console.log(reverse(array));


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
  
    const array1 = [1, 2, 3, 4, 5, 6, 7, 8];
    const result1 = reverse(array1);
  
    console.assert(arrayIsEqual(array1, [1, 2, 3, 4]), {
      result: array1,
      message: "Test 1.1 no pasado",
    });
    console.assert(arrayIsEqual(result1, [5, 6, 7, 8]), {
      result: result1,
      message: "Test 1.2 no pasado",
    });
    