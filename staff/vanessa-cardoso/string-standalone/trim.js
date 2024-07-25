// Função para remover espaços do início e do fim da string
//Encontrar o índice do primeiro caractere não espaço em branco
//// Encontrar o índice do último caractere não espaço em branco

const result1 = trim('El perro negro');
console.assert(result1 === trim('Elperronegro') , {
    result: result1,
    message: 'Test 1 No pasado'
});

const result2 = trim('Pala bra');
console.assert(result2 === trim('Palabra') , {
    result: result2,
    message: 'Test 2 No pasado'
});

const result3 = trim('     Holaaa       ');
console.assert(result3 === trim('Holaaa') , {
    result: result3,
    message: 'Test 3 No pasado'
});