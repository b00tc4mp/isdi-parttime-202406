// el ejercicio consiste en recoger cada caractere de la string y verificar si es igual a algun caractere de la string minuscula, si así es
// debemos cambiar ese caractere por su equivalente en la string maiusculas para asi convertir minusculos en maiusculas, si no fuera un caractere
// minusculo debemos mantener el caractere

function toUpperCase(string) {
  const minusculas = "abcdefghijklmnopqrstuvwxyz";
  const maiusculas = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  let result = "";

  for (let i = 0; i < string.length; i++) {
    let encontrado = false;

    for (let j = 0; j < maiusculas.length; j++) {
      if (string[i] === minusculas[j]) {
        encontrado = true;
        result += maiusculas[j];
        break;
      }
    }
    if (!encontrado) {
      result += string[i];
    }
  }
  return result;
}
const result1 = toUpperCase("hello world");
console.assert(result1 === "hello world".toUpperCase(), {
  result: result1,
  message: "Test 1 No pasado",
});

const result2 = toUpperCase("HELLO world!");
console.assert(result2 === "HELLO world!".toUpperCase(), {
  result: result2,
  message: "Test 2 No pasado",
});

const result3 = toUpperCase("hello WORLD");
console.assert(result3 === "hello WORLD".toUpperCase(), {
  result: result3,
  message: "Test 3 No pasado",
});
