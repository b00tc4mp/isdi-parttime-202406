function repeat(string, repNum){
    let strFinal = '';
    
    for (let i = 0; i < repNum; i++){
        strFinal += string;
    }
    return strFinal;
}

const result1 = repeat('abc', 3);
    console.assert(result1 === 'abcabcabc', {
    result: result1,
    message: 'Test 1 no pasado',
    });

const result2 = repeat(2);
    console.assert(result2 === '', {
    result: result2,
    message: 'Test 2 no pasado',
    });

const result3 = repeat (false, 3);
    console.assert(result3 !== 'null' || result3 !== 'false', {
        result: result3,
        message: 'Test 3 no pasado'
    });