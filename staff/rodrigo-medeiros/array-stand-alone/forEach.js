function ForEach(array, callback) {
  if (!(array instanceof Array)) return undefined;

  for (let i = 0; i < array.length; i++) {
    callback(array[i], i, array);
  }
}

const numbers = [1, 2, 3, 4, 5];
const results = [];

ForEach(numbers, function (element) {
  if (typeof element === "number") {
    results.push(element * 2);
  } else {
    results.push(element); // Si no es un número, lo dejamos igual
  }
});

console.assert(
  results.length === 5,
  "El array de resultados debe tener 5 elementos"
);
console.assert(results[0] === 2, "El primer elemento debe ser 2");
console.assert(results[1] === 4, "El segundo elemento debe ser 4");
console.assert(results[2] === 6, "El tercer elemento debe ser 6");
console.assert(results[3] === 8, "El cuarto elemento debe ser 8");
console.assert(results[4] === 10, "El quinto elemento debe ser 10");

console.log("Resultados:", results); // Imprime: Resultados: [2, 4, 6, 8, 10]
