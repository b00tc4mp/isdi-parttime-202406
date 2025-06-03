const ChainCharacters = require(".")

const result1 = new ChainCharacters("Hello world, this is me");
console.assert(result1.length === "Hello world, this is me".length, {
  result: result1.length,
  message: "Test 1.1 No pasado ",
});
console.assert(result1.value === "Hello world, this is me", {
    result: result1.value,
    message: "Test 1.2 No pasado ",
  });

const result2 = new ChainCharacters("Trabaja duro en silencio y deja que tu existo haga todo el ruido");
console.assert(result2.length === "Trabaja duro en silencio y deja que tu existo haga todo el ruido".length, {
result: result2.length,
message: "Test 2.1 No pasado ",
});
console.assert(result2.value === "Trabaja duro en silencio y deja que tu existo haga todo el ruido", {
    result: result2.value,
    message: "Test 2.2 No pasado ",
});

