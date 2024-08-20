// method modifies array 
// pushes new items into the end of the array
// returns updated array length

function push(array,...items) {
    const tempArray =[];

    for (let i = 0; i < items.length; i++) {
        tempArray[i] = items [i];
        array[array.length] = tempArray[i];
    }
    return array.length;
}



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


const array1 = ["this", "array", "has", 5, "items"];
const result1 = push(array1,"no", "more");
const testArray1 = ["this", "array", "has", 5, "items"];
const testResult1 = testArray1.push("no","more");
console.assert(arrayIsEqual(array1,testArray1) && result1 === testResult1, {
    result: result1,
    message: "Test 1 no pasado",
});

const array2 = [1,2,3,4,5,6];
const result2 = push(array2, 7, 8);
const testArray2 = [1,2,3,4,5,6];
const testResult2 = testArray2.push(7, 8);
console.assert(arrayIsEqual(array2,testArray2) && result2 === testResult2, {
    result: result2,
    message: "Test 2 no pasado",
});
//completado