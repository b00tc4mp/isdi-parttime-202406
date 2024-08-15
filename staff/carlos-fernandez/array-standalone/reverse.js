function reverse(array) {
  let newArray = [];
  let counter = 0;

  for (let i = array.length - 1; i >= 0; i--) {
    newArray[counter] = array[i];
    counter++;
  }
  return newArray;
}

reverse(array);

function arraysEqual(arr1, arr2) {
  if (arr1.length !== arr2.length) return false;
  for (let i = 0; i < arr1.length; i++) {
    if (arr1[i] !== arr2[i]) return false;
  }
  return true;
}

const result1 = reverse([1, 2, 3, 4, 5]);
const expected1 = "Deep house techno".split("De");
console.assert(arraysEqual(result1, expected1), {
  result: result1,
  message: "Test 1 no pasado",
});

const result2 = reverse("El detectiu Conan", "");
const expected2 = "El detectiu Conan".split("");
console.assert(arraysEqual(result2, expected2), {
  result: result2,
  message: "Test 2 no pasado",
});

const result3 = reverse("Shinoshuke Nohara", " ");
const expected3 = "Shinosuke Nohara".split(" ");
console.assert(arraysEqual(result2, expected2), {
  result: result2,
  message: "Test 2 no pasado",
});
