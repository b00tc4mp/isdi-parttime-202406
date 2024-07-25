/*
endsWith permite verificar se uma string termina ou não com 
determinados caracteres.
*/

const string = "Mi perro se llama Dom"
const endsWithString = "Dom"

function endsWith(string, endsWithString){

    let result = true;
    let startIndex = string.length - endsWithString.length; //encontra um indece para começar a comparar

    for(let i = 0; i < endsWithString.length; ++i) {
        
        if(endsWithString[i] !== string[startIndex + i]) { //string[startIndex + i] indica onde deve começar a comparar 
            result = false
        }
    }

    return result
} 


const result1 = endsWith('El perro negro', 'negro');
console.assert(result1 === true, {
    result: result1,
    message: 'Test 1 No pasado'
});

const result2 = endsWith('Pan con tomate', 'Tomate');
console.assert(result2 === false, {
    result: result2,
    message: 'Test 2 No pasado'
});

const result3 = endsWith('Cafe con sacarina', 'con' );
console.assert(result3 === false, {
    result: result3,
    message: 'Test 3 no pasado'
});

const result4 = endsWith('Pan con tomate', 'ate');
console.assert(result4 === true, {
    result: result4,
    message: 'Test 3 No pasado'
});