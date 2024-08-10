function charAt(string, index) {
  if (index === null) {
    index = 0;
      console.log('Me pilla fatal que me pases cosas vacías o sin sentido')
}
  else if (index < 0 || index >= string.length) {
    return '';

  }
  return string[index];
}

const test=4;

const result1 = charAt("Hello", 2);
console.assert(result1 === "Hello".charAt(2), {result: result1, message: "Test 1 No pasado"});

const result2 = charAt("Hola", 2);
console.assert(result2 === "Hola".charAt(2), {result: result2, message: "Test 2 No pasado"});

const result3 = charAt("casoSinIndice", null);
console.assert(result3 === "casoSinIndice".charAt(null), {result: result3, message: "Test 3 No pasado"});
