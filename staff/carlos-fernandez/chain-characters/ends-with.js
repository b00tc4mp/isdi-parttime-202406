// String.prototype.endsWith()

// Saber cuál es el índice de la letra que se encuentra en última posición y ver si coincide.
// iterar string y sacar carácteres empezando por el último (endPosition.length -1) y en el momento que no coincida o que se acabe
// la longitud del endPosition, sacar el resultado. 

function endsWith(string, endPosition) {
    let result = true;
    if (endPosition === null) return false;
    let j = endPosition.length - 1;
    
    for (let i = string.length - 1; j >= 0; i--) {
        if (endPosition[j] !== string[i]) {
            result = false;
            break;
        }
        j--
    }
    return result;
}

    
// Pruebas
const result1 = endsWith('Pikachu', 'u');
console.assert(result1 === 'Pikachu'.endsWith('u'), { result: result1, message: 'Test 1 no pasado' });

const result2 = endsWith('Ash Ketchum', 'Ketchum');
console.assert(result2 === 'Ash Ketchum'.endsWith('Ketchum'), { result: result2, message: 'Test 2 no pasado' });

const result3 = endsWith('Prof Oak', null);
console.assert(result3 === 'Prof Oak'.endsWith(null), { result: result3, message: 'Test 3 no pasado'});