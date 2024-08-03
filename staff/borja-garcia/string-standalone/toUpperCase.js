function toUpperCase(cadena) {
    let mayusculas = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    let minusculas = 'abcdefghijklmnopqrstuvwxyz';
    let resultado = '';
    
    for (let i = 0; i < cadena.length; i++) {
        let encontrado = false;
        
        for (let j = 0; j < minusculas.length; j++) {
            if (cadena[i] === minusculas[j]) {
                resultado += mayusculas[j];
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

const result1 = toUpperCase("HOLA munDO!");
console.assert(result1 === "HOLA MUNDO!", {
    result: result1,
    message: 'Test 1 No pasado'
});

const result2 = toUpperCase("JavaScript ES DIVERTIDO");
console.assert(result2 === "JAVASCRIPT ES DIVERTIDO", {
    result: result2,
    message: 'Test 2 No pasado'
});

const result3 = toUpperCase("123 ABC xyz!");
console.assert(result3 === "123 ABC XYZ!", {
    result: result3,
    message: 'Test 3 No pasado'
});
