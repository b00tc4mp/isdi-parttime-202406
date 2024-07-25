/*tenemos que passar uma string (1a frase) fragmento que 
usaremos se hace parte de la string y tambien podemos pasar un numero que indique la posicion
de la string.
*/

const string = "Carlos va a comprar pan";
const startingString = "Curl";


function startsWith(string, startingString, num){
    let result = true;
    
    for(let i = 0; i < startingString.length; ++i) {
        if( startingString[i] !== string[i]){
            result = false 
            
        }
            // el caracter del string en posicion i sea distinto que el caracter del startingString en posicion i --> si son distintos sabes que string NO empieza por startingString
    }

    return result
}



const result1 = startsWith('El gato es azul', 'El');
console.assert(result1 === true, {
    result: result1,
    message: 'Test 1 No pasado'
});

const result2 = startsWith('El gato es azul', 'gato');
console.assert(result2 === false, {
    result: result2,
    message: 'Test 2 No pasado'
});

const result3 = startsWith('El gato es azul', 'eL GaTO es AzUL' );
console.assert(result3 === false, {
    result: result3,
    message: 'Test 3 no pasado'
});
