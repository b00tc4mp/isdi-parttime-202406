function reverse(array) {
  let counter = 0;
  let newArray = [];
  for (let i = array.length - 1; i >= 0; i--) {
    newArray[counter] = array[i];
    counter++;
  }

  for (let i = 0; i < newArray.length; i++) {
    array[i] = newArray[i];
  }
  return array;
}

function arraysEqual(arr1, arr2) {
  if (arr1.length !== arr2.length) return false;
  for (let i = 0; i < arr1.length; i++) {
    if (arr1[i] !== arr2[i]) return false;
  }
  return true;
}
//debugger
const result1 = reverse([1, 2, 3, 4, 5]);
const expected1 = [5, 4, 3, 2, 1];
console.assert(arraysEqual(result1, expected1), {
  result: result1,
  message: "Test 1 no pasado",
});

const result2 = reverse(["tomato", "paprika", "carrot"]);
const expected2 = ["carrot", "paprika", "tomato"];
console.assert(arraysEqual(result2, expected2), {
  result: result2,
  message: "Test 2 no pasado",
});

const result3 = reverse([1, 2, " ", undefined]);
const expected3 = [undefined, " ", 2, 1];
console.assert(arraysEqual(result3, expected3), {
  result: result3,
  message: "Test 3 no pasado",
});
