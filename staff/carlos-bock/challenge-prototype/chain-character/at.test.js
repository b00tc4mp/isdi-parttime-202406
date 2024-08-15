const ChainCharacter = require("./");

const result1 = new ChainCharacter("Hello").at(2);
console.assert(result1 === "Hello".at(2), {
  result: result1,
  message: "Test 1 No pasado ",
});

const result2 = new ChainCharacter("Hello").at(-1);
console.assert(result2 === "Hello".at(-1), {
  result: result2,
  message: "Test 2 No pasado ",
});

const result3 = new ChainCharacter("casoSinIndice").at(null);
console.assert(result3 === "casoSinIndice".at(null), {
  result: result3,
  message: "Test 3 No pasado ",
});
