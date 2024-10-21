const ChainCharacters = require(".");

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

debugger;
const result1 = new ChainCharacters("Angela,26 años").split(",");
console.assert(arrayIsEqual(result1, ["Angela", "26 años"]), {
  result: result1,
  message: "Test 1 No pasado",
});

debugger;
const result2 = new ChainCharacters("Monday,Tuesday,Wednesday,Thursday").split(
  ","
);
console.assert(
  arrayIsEqual(result2, ["Monday", "Tuesday", "Wednesday", "Thursday"]),
  {
    result: result2,
    message: "Test 2 No pasado",
  }
);

debugger;
const result3 = new ChainCharacters("Monday,Tuesday,Wednesday,Thursday").split(
  ",",
  2
);
console.assert(arrayIsEqual(result3, ["Monday", "Tuesday"]), {
  result: result3,
  message: "Test 3 No pasado",
});

debugger;
const result4 = new ChainCharacters("1 2 3 4 5 6").split(" ", 3);
console.assert(arrayIsEqual(result4, ["1", "2", "3"]), {
  result: result4,
  message: "Test 4 No pasado",
});

debugger;
const result5 = new ChainCharacters("2024-07-20").split("-", 3);
console.assert(arrayIsEqual(result5, ["2024", "07", "20"]), {
  result: result5,
  message: "Test 5 No pasado",
});

debugger;
const result6 = new ChainCharacters("2024-07-20").split(" ", 3);
console.assert(result6[0] === "2024-07-20", {
  result: result6,
  message: "Test 6 No pasado",
});
