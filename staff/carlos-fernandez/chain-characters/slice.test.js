const ChainCharacters = require(".");

const result1 = new ChainCharacters(
  "A quien no le va a gustar un imperio romano del siglo I"
).slice(26, 55);
console.assert(
  result1.value ===
    "A quien no le va a gustar un imperio romano del siglo I".slice(26, 55),
  { result: result1, message: "Test 1 no pasado." }
);

const result2 = new ChainCharacters("Pim pam toma lacasitos").slice(13);
console.assert(result2.value === "Pim pam toma lacasitos".slice(13), {
  result: result2,
  message: "Test 2 no pasado.",
});

const result3 = new ChainCharacters(["Cuidao", "con", "el", "barro"]).slice(
  0,
  2
);
console.assert(
  JSON.stringify(result3.value) ===
    JSON.stringify(["Cuidao", "con", "el", "barro"].slice(0, 2)),
  { result: result3, message: "Test 3 no pasado." }
);
