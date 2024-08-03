function indexOf(string, subString) {
    if (subString === '') return 0;  //Un string vacío se pasa como posición 0

    const stringLength = string.length;
    const subStringLength = subString.length;

    // Verificamos que subString sea más pequeño que string
    if (subStringLength > stringLength) return -1;

    for (let i = 0; i <= stringLength - subStringLength; i++) {
        let match = true;

        // Verificar si los caracteres de string a partir de i coinciden con subString
        for (let j = 0; j < subStringLength; j++) {
            if (string[i + j] !== subString[j]) {
                match = false;
            }
        }

        if (match) {
            return i; // La cadena existe, devuelve el índice
        }
    }

    return -1; // No se encuentra la cadena
}

const result1 = indexOf('hello', 'll');
console.assert(result1 === 'hello'.indexOf('ll'), {
    result: result1,
    message: 'Test 1 no pasado',
});

const result2 = indexOf('hello', 'world');
console.assert(result2 === 'hello'.indexOf('world'), {
    result: result2,
    message: 'Test 2 no pasado', 
});

const result3 = indexOf('abc', '');
console.assert(result3=== 'abc'.indexOf(''), {
    result: result3,
    message: 'Test 3 no pasado',
});