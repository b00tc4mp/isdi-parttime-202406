const ChainCharacters = require(".");

const result1 = new ChainCharacters(
  "¡Me siento bieN, porque eL sofá Es Nuevo!"
).toLowerCase();
console.assert(
  result1 === "¡Me siento bieN, porque eL sofá Es Nuevo!".toLowerCase(),
  {
    result: result1,
    message: "Test 1 no pasado",
  }
);

const result2 = new ChainCharacters("12344ABCDeee").toLowerCase();
console.assert(result2 === "12344ABCDeee".toLowerCase(), {
  result: result2,
  message: "Test 2 no pasado",
});

const result3 = new ChainCharacters("null vaLue").toLowerCase();
console.assert(result3 === "null vaLue".toLowerCase(), {
  result: result3,
  message: "Test 3 no pasado",
});
