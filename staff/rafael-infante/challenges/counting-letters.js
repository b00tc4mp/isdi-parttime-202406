// Crea una funcion llamada 'countingLetters' que admita un parámetro de tipo
// string y te devuelva el largo de la palabra. Ej: 'hola' ==> 4.
// NO CHAT GPT - mirar que es TDD

function countingLetters(value) {
  var result = value.length;
  return result;
}
var result1 = countingLetters("hola");
console.assert(result1 === 4, { result: result1, message: "Test 1 no pasado" });
var result2 = countingLetters("belen");
console.assert(result2 === 5, { result: result2, message: "Test 2 no pasado" });
var result3 = countingLetters("foo");
console.assert(typeof result3 === "number" && result3 === 3, {
  result: result3,
  message: "Test 3 no pasado",
});

// Le he agregado '&& result3 === 3' al último console.assert()