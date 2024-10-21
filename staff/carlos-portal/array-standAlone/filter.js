
function isEven(num) {
    return num % 2 === 0;
}
function filter(array, callback) {
    let result = [];
    for (let i = 0; i < array.length; i++) {
        if (callback(array[i])) {
            result.push(array[i]);
        }
    }
    return result;
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
  
  const array1 = [1, 2, "g", 4, "j"];
  const result1 = filter(array1, (item) => typeof item === "number");
  console.assert(
    arrayIsEqual(
      result1,
      array1.filter((item) => typeof item === "number")
    ),
    {
      result: result1,
      message: "Test 1 No pasado",
    }
  );
  
  const array2 = [10, 20, "a", 40, -1];
  const result2 = filter(array2, (item) => typeof item === "number");
  console.assert(
    arrayIsEqual(
      result2,
      array2.filter((item) => typeof item === "number")
    ),
    {
      result: result2,
      message: "Test 2 No pasado",
    }
  );
  
  const array3 = ["Alboroto", 10, 2, "l"];
  const result3 = filter(array3, (item) => typeof item === "string");
  console.assert(
    arrayIsEqual(
      result3,
      array3.filter((item) => typeof item === "string")
    ),
    {
      result: result3,
      message: "Test 3 No pasado",
    }
  );