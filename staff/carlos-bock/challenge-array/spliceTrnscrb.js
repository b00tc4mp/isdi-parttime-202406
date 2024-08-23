//trancripción de splice

const splice = (array, start, deleteCount) => {
    const result = [];

    const laps = deleteCount ?? array.length - start;

    for (let i =  0; i< laps; i++) {
        result[result.length] = array[i + start];
    }
    if (deleteCount !== undefined) {
        for (let i= 0; i< deleteCount; i++) {
            array[start + i] = array[array.length - deleteCount + i];
        }
    }

    array.length = deleteCount == undefined ? start : array.length - deleteCount;
    
    return result;
};

{
    function arrayIsEqual(arr1, arr2) {||
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
  
    const array1 = [1, 2, 3, 4, 5, 6, 7, 8];
    const result1 = splice(array1, 4);
  
    console.assert(arrayIsEqual(array1, [1, 2, 3, 4]), {
      result: array1,
      message: "Test 1.1 no pasado",
    });
    console.assert(arrayIsEqual(result1, [5, 6, 7, 8]), {
      result: result1,
      message: "Test 1.2 no pasado",
    });
  }