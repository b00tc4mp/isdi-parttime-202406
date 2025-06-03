function startsWith(word, wordStart) {
    let match = false;
    word = word.toString();
    wordStart = wordStart.toString();
    let finalWord = '';
    
    const wordLength = word.length;
    const wordStartLength = wordStart.length;
      
    if (wordStartLength > wordLength) {
        return false;
    }

    for (i = 0; i < wordStart.length; i++) {
        finalWord += word[i];
    }

    if (wordStart === finalWord){
        match = true;
    }

    return match;
            
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

const result4 = startsWith(2134, 21);
console.assert(result4 === true, {
    result: result4,
    message: 'Test 4 No pasado'
});

const result5 = startsWith(true, 'tr');
console.assert(result5 === true, {
    result: result5,
    message: 'Test 4 No pasado'
});