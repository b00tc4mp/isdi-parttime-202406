// Elimina el primer elemento del array y lo retorna.
// Modifica la longitud del array original.

function shift(array) {
  if (array.length === 0) return undefined;

  const element = array[0];

  for (let i = 0; i < array.length; i++) {
    if (i > 0) {
      array[i - 1] = array[i];
    }
  }
  array.length = array.length - 1;
  return element;
}

const arr1 = [1, 2, 3, 4];
const arr2 = [1, 2, 3, 4];

const result1 = shift(arr1);
const expected1 = arr2.shift();
console.assert(result1 === expected1, {
  result: result1,
  message: "Test 1 no pasado",
});

const arr3 = ["a", "b", "c", "d"];
const arr4 = ["a", "b", "c", "d"];

const result2 = shift(arr3);
const expected2 = arr4.shift();
console.assert(result2 === expected2, {
  result: result2,
  message: "Test 2 no pasado",
});

const arr5 = [null, "b", "c", "d"];
const arr6 = [null, "b", "c", "d"];

const result3 = shift(arr5);
const expected3 = arr6.shift();
console.assert(result3 === expected3, {
  result: result3,
  message: "Test 1 no pasado",
});
