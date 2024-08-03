function slice(string, start = 0, end = string.length) {
    const length = string.length;

    // Ajustar start y end si son negativos o fuera de rango
    if (start < 0) start = Math.max(0, length + start);
    if (end < 0) end = Math.max(0, length + end);
    start = Math.min(length, start);
    end = Math.min(length, end);

    // Asegurarse de que start no sea mayor que end
    if (start > end) return '';

    let result = '';
    for (let i = start; i < end; i++) {
        result += string[i];
    }

    return result;
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