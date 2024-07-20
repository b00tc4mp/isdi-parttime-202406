function convertirMayusculasAMinusculas(cadena) {
    let mayusculas = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    let minusculas = 'abcdefghijklmnopqrstuvwxyz';
    let resultado = '';
    
    for (let i = 0; i < cadena.length; i++) {
        let encontrado = false;
        
        for (let j = 0; j < mayusculas.length; j++) {
            if (cadena[i] === mayusculas[j]) {
                resultado += minusculas[j];
                encontrado = true;
                break;
            }
        }
        
        if (!encontrado) {
            resultado += cadena[i];
        }
    }
    
    return resultado;
}

const result1 = convertirMayusculasAMinusculas("HOLA munDO!");
console.assert(result1 === "hola mundo!", {
    result: result1,
    message: 'Test 1 No pasado'
});

const result2 = convertirMayusculasAMinusculas("JavaScript ES DIVERTIDO");
console.assert(result2 === "javascript es divertido", {
    result: result2,
    message: 'Test 2 No pasado'
});

const result3 = convertirMayusculasAMinusculas("123 ABC xyz!");
console.assert(result3 === "123 abc xyz!", {
    result: result3,
    message: 'Test 3 No pasado'
});
