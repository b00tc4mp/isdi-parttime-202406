const ChainCharacters = require(".");

const paragraph = "Quasimodo, Flora";
const result1 = new ChainCharacters(paragraph).split(",");
console.assert(
  result1.value[0] === "Quasimodo" && result1.value[1] === " Flora",
  {
    result: result1.value,
    message: "Test 1 No pasado",
  }
);

const result2 = new ChainCharacters("Tini").split("");
console.assert(
  result2.value[0] === "T" &&
    result2.value[1] === "i" &&
    result2.value[2] === "n" &&
    result2.value[3] === "i",
  {
    result: result2.value,
    message: "Test 2 No pasado",
  }
);

const result3 = new ChainCharacters("1 2 3 4 5 6").split(" ", 3);
console.assert(
  result3.value[0] === "1" &&
    result3.value[1] === "2" &&
    result3.value[2] === "3",
  {
    result: result3.value,
    message: "Test 3 No pasado",
  }
);

const result4 = new ChainCharacters("2024-07-20").split("-", 3);
console.assert(
  result4.value[0] === "2024" &&
    result4.value[1] === "07" &&
    result4.value[2] === "20" &&
    result4.value[3] === undefined,
  {
    result: result4.value,
    message: "Test 4 No pasado",
  }
);

const result5 = new ChainCharacters("2024-07-20").split(" ", 3);
console.assert(result5.value[0] === "2024-07-20", {
  result: result5.value,
  message: "Test 5 No pasado",
});
