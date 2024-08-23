const ChainCharacters = require(".");

const result1 = new ChainCharacters("Hello, my name is Carl").indexOf("l");
console.assert(result1 === "Hello, my name is Carl".indexOf("l"), {
  result: result1,
  message: "Test 1 No pasado ",
});
if (result1 === "Hello, my name is Carl".indexOf("l"))
  console.log("Test 1 pasado");

const result2 = new ChainCharacters("Hello, my name is Carl").indexOf("ly");
console.assert(result2 === "Hello, my name is Carl".indexOf("ly"), {
  result: result2,
  message: "Test 2 No pasado ",
});
if (result2 === "Hello, my name is Carl".indexOf("ly"))
  console.log("Test 2 pasado");

const result3 = new ChainCharacters(
  "Lamine Yamal cada dia te quiero más"
).indexOf("");
console.assert(result3 === "Lamine Yamal cada dia te quiero más".indexOf(""), {
  result: result3,
  message: "Test 3 No pasado ",
});
if (result3 === "Lamine Yamal cada dia te quiero más".indexOf(""))
  console.log("Test 3 pasado");

const result4 = new ChainCharacters("Chiquito de la calzada").indexOf(null);
console.assert(result4 === "Chiquito de la calzada".indexOf(null), {
  result: result4,
  message: "Test 4 No pasado ",
});
if (result4 === "Chiquito de la calzada".indexOf(null))
  console.log("Test 4 pasado");

const result5 = new ChainCharacters("Nadie sabe nada").indexOf("Espectáculo");
console.assert(result5 === "Nadie sabe nada".indexOf("Espectáculo"), {
  result: result5,
  message: "Test 5 No pasado ",
});
if (result5 === "Nadie sabe nada".indexOf("Espectáculo"))
  console.log("Test 5 pasado");
