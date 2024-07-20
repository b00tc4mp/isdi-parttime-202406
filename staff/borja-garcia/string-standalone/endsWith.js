function endsWith(word, wordEnd) {

    word = word.toString();
    wordEnd = wordEnd.toString();
    
    const wordLength = word.length;
    const wordEndLength = wordEnd.length;
      
    if (wordEndLength > wordLength) {
        return false;
    }
    
    for (let i=0; i < wordEndLength; i++) {
        if (word[wordLength - wordEndLength + i] !== wordEnd[i]){
            return false;
        }
            
    }
    return true;
}

const result1 = endsWith('El gato es azul', 'azul');
console.assert(result1 === true, {
    result: result1,
    message: 'Test 1 No pasado'
});

const result2 = endsWith('El gato es azul', 'gato');
console.assert(result2 === false, {
    result: result2,
    message: 'Test 2 No pasado'
});

const result3 = endsWith('El gato es azul', 'eL GaTO es AzUL' );
console.assert(result3 === false, {
    result: result3,
    message: 'Test 3 no pasado'
});

const result4 = endsWith(2134, 34);
console.assert(result4 === true, {
    result: result4,
    message: 'Test 4 No pasado'
});

const result5 = endsWith(true, false);
console.assert(result5 === false, {
    result: result5,
    message: 'Test 4 No pasado'
});