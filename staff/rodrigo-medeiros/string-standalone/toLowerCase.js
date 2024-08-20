
function toLowerCase (string) {
    const minusculas = 'abcdefghijklmnopqrstuvwxyz'
    const maiusculas = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
    let result = ''
    for (let i = 0; i < string.length; i++) {
       let encontrado = false
        for(let j = 0; j < minusculas.length; j++) {
        if (string[i] === maiusculas[j]) {
            encontrado = true;
            result += minusculas[j];
            break
        
        }
       
     }
        if (!encontrado) {
            result += string[i]
        }
    }
     return result;   
}

const result1 = toLowerCase('HELLO WORLD');
console.assert(result1 === "HELLO WORLD".toLowerCase(), {
  result: result1,
  message: "Test 1 No pasado"});

const result2 = toLowerCase('HELLO world!');
console.assert(result2 === "HELLO world!".toLowerCase(), {
  result: result2,
  message: "Test 2 No pasado"});

const result3 = toLowerCase('hello WORLD');
console.assert(result3 === "hello WORLD".toLowerCase(), {
  result: result3,
  message: "Test 3 No pasado"});