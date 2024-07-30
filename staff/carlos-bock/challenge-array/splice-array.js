const splice = (array, start, deleteCount) => {
    const result = [];
  
    const laps = deleteCount ?? array.length - start;
  
    for (let i = 0; i < laps; i++) {
      result[result.length] = array[i + start];
    }
  
    if (deleteCount === undefined) array.length = start;
    else {
      // otra cosa...
    }
  
    return result;
  };
  
  {
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
    const result1 = splice(array1, 4);
  
    console.assert(arrayIsEqual(array1, [1, 2, 3, 4]), {
      result: array1,
      message: "Test 1.1 no pasado",
    });
    console.assert(arrayIsEqual(result1, [5, 6, 7, 8]), {
      result: result1,
      message: "Test 1.2 no pasado",
    });
  
    const array2 = ["a", "b", "c", "d", "e", "f", "g", "h"];
    const result2 = splice(array2, 4, 2);
  
    console.assert(arrayIsEqual(array2, ["a", "b", "c", "d", "g", "h"]), {
      result: array2,
      message: "Test 2.1 no pasado",
    });
    console.assert(arrayIsEqual(result2, ["e", "f"]), {
      result: result2,
      message: "Test 2.2 no pasado",
    });
  }