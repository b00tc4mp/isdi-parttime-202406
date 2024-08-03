function includes(string, searchString){
    if (searchString === null || searchString.length === 0) return false;

    const strLength = string.length;
    const searchLength = searchString.length;

    // Verificamos que la búsqueda sea más pequeña que el String
    if (searchLength > strLength) return false;

    for (let i = 0; i <= strLength - searchLength; i++) {
        let found = true;

        // Verifica si la subcadena de `string` de longitud igual a `searchString` coincide
        for (let j = 0; j < searchLength; j++) {
            if (string[i + j] !== searchString[j]) {
                found = false;
                break;
            }
        }

        if (found) return true;
    }

    return false;
}
const result1 = includes('Hello', 'H');
console.assert(result1 === 'Hello'.includes('H'), {
    result: result1,
    message: 'Test 1 no pasado',
});

const result2 = includes('Hola', 'Ho');
console.assert(result2 === 'Hola'.includes('Ho'), {
    result: result2,
    message: 'Test 2 no pasado',
});

const result3 = includes('casoSinIndice', null);
console.assert(result3 === 'casoSinIndice'.includes(null), {
    result: result3,
    message: 'Test 3 no pasado',
});

const result4 = includes('Esto sí', 'Que no coincide');
console.assert(result4 === false, {
    result: result4,
    message: 'Test 4 no pasado',
});