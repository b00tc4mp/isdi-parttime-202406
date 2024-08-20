const ChainCharacters = require(".");

const result1 = new ChainCharacters("Hola, mundo!").replace(
  "mundo",
  "hijos del soul"
);
console.assert(result1 === "Hola, hijos del soul!", {
  result: result1,
  message: "Test 1 No pasado",
});

const result2 = new ChainCharacters(
  "Change My Mind: Pineapple Belongs on Pizza"
).replace("Change My Mind", "Convince Me");
console.assert(result2 === "Convince Me: Pineapple Belongs on Pizza", {
  result: result2,
  message: "Test 2 not passed",
});

const result3 = new ChainCharacters(
  "Why You Always Lying? Stop Lying!"
).replace("Why You Always Lying", "Stop Lying");
console.assert(result3 === "Stop Lying? Stop Lying!", {
  result: result3,
  message: "Test 3 not passed",
});
