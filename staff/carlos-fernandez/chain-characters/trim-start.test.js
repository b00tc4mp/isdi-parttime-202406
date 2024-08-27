const ChainCharacters = require(".");

let result1 = new ChainCharacters(" Siuu").trimStart();
console.assert(result1 === " Siuu".trimStart(), {
  result: result1,
  message: "Test 1 no pasado.",
});

let result2 = new ChainCharacters(
  "  Las manzanas como se acuestan para tener más manzanas?       "
).trimStart();
console.assert(
  result2 ===
    "  Las manzanas como se acuestan para tener más manzanas?       ".trimStart(),
  { result: result2, message: "Test 2 no pasado." }
);

let result3 = new ChainCharacters(9).trimStart();
console.assert(result3 === "9".trimStart(), {
  result: result3,
  message: "Test 3 no pasado.",
});
