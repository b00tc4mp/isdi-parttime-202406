//ends with 

// me da una palabra y unos caracteres con los que supongo que acabará esta palabra y tengo 
// que comprobar que así sea

// deberia comprobar entonces que ambos terminan igual y también que el patron esta incluido en la palabra


function termina(string, endsw) {
    // Comprobamos si endsw es mas largo que la misma palabra lo cual no tendria sentido 
    // también incluyo los casos en el que alguno de los valores no es valido 
    if (endsw.length > string.length || endsw == null || string == undefined) {
        return false;
    }

    // Iterar desde el final de string comparando con endsw
    for (let i = 0; i < endsw.length; i++) {
        if (string[string.length - 1 - i] !== endsw[endsw.length - 1 - i]) {
            return false;
        }
    }
    
    //Si todo funciona
    return true;
}
 

//Tests
let result1 = termina('console log', 'log');
console.assert(result1 === 'console log'.termina('log'), { result: result1, message: 'Test 1 no pasado' });
let result2 = termina('javascript', 'script');
console.assert(result2 === 'javascript'.termina('script'), { result: result2, message: 'Test 2 no pasado' });
let result3 = termina('abcde', 'f');
console.assert(result3 === 'abcde'.termina('e'), { result: result3, message: 'Test 3 no pasado' });

let result4 = termina('console log', 'console');
console.assert(result4 === 'console log'.termina('console'), { result: result4, message: 'Test 4 no pasado' });
let result5 = termina('javascript', 'script');
console.assert(result5 === 'javascript'.termina('java'), { result: result5, message: 'Test 5 no pasado' });
let result6 = termina('abcde', 'f');
console.assert(result6 === 'abcde'.termina('z'), { result: result6, message: 'Test 6 no pasado' });

