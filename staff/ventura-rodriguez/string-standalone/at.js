//str.at(indice)
//Version stand alone
function at(string, index) {
  if (index === null) return string[0];

  let result;

  for (let i = 0; i < string.length; i++) {
    const character = string[i];

    if (i === index) result = character;
    else if (index < 0 && i === string.length + index) result = character;
  }
  return result;
}

const result1 = at("Hello", 2);
console.assert(result1 === "Hello".at(2), {
  result: result1,
  message: "Test 1 No pasado ",
});

const result2 = at("Hola", -1);
console.assert(result2 === "Hola".at(-1), {
  result: result2,
  message: "Test 2 No pasado ",
});

const result3 = at("casoSinIndice", null);
console.assert(result3 === "casoSinIndice".at(null), {
  result: result3,
  message: "Test 3 No pasado ",
});
