function slice(string, start, end) {
    let resultado = '';
    if (start < 0) {
        start = string.length + start;
    }
    if (end < 0) {
        end = string.length + end;
    }
    if (start > string.length) {
        start = string.length;
    }
    if (end > string.length) {
        end = string.length;
    }

    if(end < start) {
        end = start;
    }
    
    for (let i = start; i < end; i++) {
        resultado += string[i];
    }
    return resultado;
}

const result1 = slice('Hello world!', 3, 6);
console.assert (result1 === 'lo ', {
    result: result1,
    message: 'Test 1 no superado'
});

const result2 = slice('Cuando la vida te da limones, hazte un cubata', 20, 45);
console.assert(result2 === ' limones, hazte un cubata', {
    result: result2,
    message: 'Test 2 no superado'
});

const result3 = slice('No es que no quiera, es que no me apetece', -25, -8);
console.assert(result3 === 'era, es que no me', {
    result: result3,
    message: 'Test 3 No superado'
});

const result4 = slice('Tú ereh Ramón, cabeza`e huevo', -4, -36);
console.assert(result4 === '', {
    result: result4,
    message: 'Test 4 no superado'
});