function replace(str, pattern, replacement) {
    let newString = "";
    let found = false;

    for (let i = 0; i < str.length; i++) {
        let match = true;

        for (let j = 0; j < pattern.length; j++) {
            if (str[i + j] !== pattern[j]) {
                match = false;
                break;
            }
        }

        if (match && !found) {
            newString += replacement;
            i += pattern.length - 1; // Saltar la longitud del patrón
            found = true;
        } else {
            newString += str[i];
        }
    }

    return newString;
}

// Ejemplo de uso:
const result = replace('Hola que tal', 'tal', 'mal');
console.log(result); // "Hola que mal"

// Pruebas
let result1 = replace('Pedro! Pedro! Pedro!', 'Pedro', 'Juan');
console.assert(result1 === 'Juan! Pedro! Pedro!', { result: result1, message: 'Test 1 no pasado.' });

let result2 = replace('Esta es una prueba', 'una', 'la');
console.assert(result2 === 'Esta es la prueba', { result: result2, message: 'Test 2 no pasado.' });

let result3 = replace('Nada que ver', 'ver', 'hacer');
console.assert(result3 === 'Nada que hacer', { result: result3, message: 'Test 3 no pasado.' });
