function repeat(str, times) {
    // Validar los argumentos
    if (typeof str !== "string" || typeof times !== "number" || times < 0) {
        return ""; // TDD
    }

    let resultado = ""; 
    let i = 0; // Inicializar contador
    while (i < times) {
        resultado += str; // Agregar la cadena original al resultado
        i++;
    }
    return resultado; // Devolver el resultado final
}



const result1 = repeat('iajbsñfouuboùdshbfhòhas`dfhòisdf', 4000);
    console.assert(result1 === 'iajbsñfouuboùdshbfhòhas`dfhòisdf'.repeat(4000), {
    result: result1,
    message: 'Test 1 no pasado',
    });

const result2 = repeat(2);// estos ejemplos se los tomé prestados a borja
    console.assert(result2 === '', {
    result: result2,
    message: 'Test 2 no pasado',
    });

const result3 = repeat (false, 3);
    console.assert(result3 !== 'null' || result3 !== 'false', {
        result: result3,
        message: 'Test 3 no pasado'
    });