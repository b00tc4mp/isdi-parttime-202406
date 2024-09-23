const result1 = fill([0, 1, 2, 3], 0, 1, 2);
console.assert(arraysEqual(result1, [0, 0, 2, 3]), {
  result: result1,
  message: "Test 1 no pasado",
});

const result2 = fill([1, 2, 3, 4], 5, 1, 3);
console.assert(arraysEqual(result2, [1, 5, 5, 4]), {
  result: result2,
  message: "Test 2 no pasado",
});

const result3 = fill([1, 2, 3, 4], 6, -3);
console.assert(arraysEqual(result3, [1, 6, 6, 6]), {
  result: result3,
  message: "Test 3 no pasado",
});
