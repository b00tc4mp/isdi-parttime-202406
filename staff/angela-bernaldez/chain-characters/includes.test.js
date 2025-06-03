const ChainCharacters = require(".")

const result1 = new ChainCharacters("Hello").includes("H");
console.assert(result1 === "Hello".includes("H"), {
result: result1,
message: "Test 1 No pasado ",
});

const result2 = new ChainCharacters("Hola").includes("Ho");
console.assert(result2 === "Hola".includes("Ho"), {
result: result2,
message: "Test 2 No pasado ",
});

const result3 = new ChainCharacters("casoSinIndice").includes(null);
console.assert(result3 === "casoSinIndice".includes(null), {
result: result3,
message: "Test 3 No pasado ",
});

const result4 = new ChainCharacters("world").includes("wr");
console.assert(result4 === "world".includes("wr"), {
result: result4,
message: "Test 4 No pasado ",
});

const result5 = new ChainCharacters("world").includes("rld");
console.assert(result5 === "world".includes("rld"), {
result: result5,
message: "Test 5 No pasado ",
});

const result6 = new ChainCharacters("world").includes("wod");
console.assert(result6 === "world".includes("wod"), {
result: result6,
message: "Test 6 No pasado ",
});

const result7 = new ChainCharacters("world").includes("wu");
console.assert(result7 === "world".includes("wu"), {
result: result7,
message: "Test 7 No pasado ",
});