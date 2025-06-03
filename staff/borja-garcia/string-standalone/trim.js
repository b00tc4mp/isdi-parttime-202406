function trim(cadena) {
    let inicio = 0;
    let fin = cadena.length - 1;

    while (inicio <= fin && cadena[inicio] === ' ') {
        inicio++;
    }

    while (fin >= inicio && cadena[fin] === ' ') {
        fin--;
    }

    if (inicio > fin) {
        return '';
    }

    let resultado = '';
    for (let i = inicio; i <= fin; i++) {
        resultado += cadena[i];
    }

    return resultado;
}


const result1 = trim('   Hello World!   ');
console.assert(result1 === 'Hello World!', {
    result: result1,
    message: 'Test 1 no pasado'
});

const result2 = trim('   Me gusta la fruta   ');
console.assert(result2 === 'Me gusta la fruta', {
    result: result2,
    message: 'Test 3 no pasado'
});

const result3 = trim('   Y voló. Y yo volé de él.   ');
console.assert(result3 === 'Y voló. Y yo volé de él.', {
    result: result3,
    message: 'Test 3 no pasado'
});