const ChainCharacters = require(".");

const result1 = new ChainCharacters("Hello").includes("H");
console.assert(result1 === "Hello".includes("H"), {
  result: result1,
  message: "Test 1 No pasado ",
});
if (result1 === "Hello".includes("H")) console.log("Test 1 pasado");

const result2 = new ChainCharacters("Hola").includes("Ho");
console.assert(result2 === "Hola".includes("Ho"), {
  result: result2,
  message: "Test 2 No pasado ",
});
if (result2 === "Hola".includes("Ho")) console.log("Test 2 pasado");

const result3 = new ChainCharacters("casoSinIndice").includes(null);
console.assert(result3 === "casoSinIndice".includes(null), {
  result: result3,
  message: "Test 3 No pasado ",
});
if (result3 === "casoSinIndice".includes(null)) console.log("Test 3 pasado");

const result4 = new ChainCharacters("world").includes("wr");
console.assert(result4 === "world".includes("wr"), {
  result: result4,
  message: "Test 4 No pasado ",
});
if (result4 === "world".includes("wr")) console.log("Test 4 pasado");

const result5 = new ChainCharacters("world").includes("rld");
console.assert(result5 === "world".includes("rld"), {
  result: result5,
  message: "Test 5 No pasado ",
});
if (result5 === "world".includes("rld")) console.log("Test 5 pasado");

const result6 = new ChainCharacters("world").includes("wod");
console.assert(result6 === "world".includes("wod"), {
  result: result6,
  message: "Test 6 No pasado ",
});
if (result6 === "world".includes("wod")) console.log("Test 6 pasado");

const result7 = new ChainCharacters("wu").includes("wod");
console.assert(result7 === "wu".includes("wod"), {
  result: result7,
  message: "Test 7 No pasado ",
});
if (result7 === "wu".includes("wod")) console.log("Test 7 pasado");
