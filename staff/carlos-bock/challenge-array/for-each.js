//crear función que aplica otra función a todos los valores del array
//crear función simple de prueba
const array=["Los", "gatos", "son", "guay"];
const result= [];

function forEach(array, callBackFunction){
    //haz algo
}


/////////////////////////////////////////////////////////////


function test(element){
    //result[result.length]= element
    if (element.length>3){
    result[result.length] = element; 
    }
}

///////////////////////////////////////////////////////////

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
  /////////////////////////////////////////////////////////////////
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