// Devuelve el ÍNDICE del PRIMER ELEMENTO de un array que cumpla con la función aportada.
// De no ser así, devuelve -1.

function find(array, callback) {
  let result = -1;
  let i = 0;
  while (i < array.length && result === -1) {
    if (callback(array[i])) result = i;
    i++;
  }
  return result;
}

const array1 = [1, 2, 3, 4, 5];
const result1 = find(array1, (element) => element > 4);
console.assert(result1 === array1.findIndex((element) => element > 4), {
  result: result1,
  message: "Test 1 No pasado",
});

const array2 = ["a", 20, "a", 40, -1];
const result2 = find(array2, (item) => typeof item === "number");
console.assert(
  result2 === array2.findIndex((item) => typeof item === "number"),
  {
    result: result2,
    message: "Test 2 No pasado",
  }
);

const array3 = [1, 2, 3, 4, 5];
const result3 = find(array3, (item) => typeof item !== "number");
console.assert(
  result3 === array3.findIndex((item) => typeof item !== "number"),
  {
    result: result3,
    message: "Test 3 No pasado",
  }
);
