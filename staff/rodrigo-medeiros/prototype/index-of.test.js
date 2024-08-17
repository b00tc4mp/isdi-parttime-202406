const ChainCharacters = require(".");

const result1 = new ChainCharacters("Hello").indexOf("H",0);
console.assert(result1 === "Hello".indexOf("H",0), {
  result: result1,
  message: "Test 1 No pasado ",
});
const result2 = new ChainCharacters("Hola").indexOf("Ho", 0);
console.assert(result2 === "Hola".indexOf("Ho",0), {
  result: result2,
  message: "Test 2 No pasado ",
});

const result3 = new ChainCharacters("casoSinIndice").indexOf(null, '');
console.assert(result3 === "casoSinIndice".indexOf(null, ''), {
  result: result3,
  message: "Test 3 No pasado ",
});

const result4 = new ChainCharacters("world").indexOf("wr", 99);
console.assert(result4 === "world".indexOf("wr",99), {
  result: result4,
  message: "Test 4 No pasado ",
});

const result5 = new ChainCharacters("world").indexOf("rld", 4);
console.assert(result5 === "world".indexOf("rld", 4), {
  result: result5,
  message: "Test 5 No pasado ",
});
const result6 = new ChainCharacters("oooo").indexOf("oo", 2);
console.assert(result6 === "oooo".indexOf("oo", 2), {
  result: result6,
  message: "Test 6 No pasado ",
});