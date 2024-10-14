function findLastInArray(array, callback) {
  let result = "";
  for (let i = array.length - 1; i >= 0; i--) {
    if (callback(array[i]) === true) {
      result += array[i];
      return result;
    }
  }
  return undefined; // Si no se encuentra ningún elemento
}

function isElementLongEnough(value) {
  for (let i = 0; i < value.length; i++) {
    if (value.length > 5) {
      return true;
    } else {
      return false;
    }
  }
}

let array1 = ["gol", "pelota", "fluminense", "delantero"];
let result1 = findLastInArray(array1, isElementLongEnough);
let result2 = array1.findLast(isElementLongEnough);
console.assert(result1 === result2, {
  result: result1,
  message: "Test 1 No pasado ",
});
