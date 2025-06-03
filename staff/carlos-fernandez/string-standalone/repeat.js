function repeat(str, num) {

    let result = "";
    
    if ( num === null || typeof num !== 'number' || num < 0) return result
    
    for ( let i = 0; i < num; i++ ) {
        result += str;
    }
    return result;
};

const result1 = repeat('Pedro! ', 3);
console.assert(result1 === 'Pedro! '.repeat(3), {result: result1, message: 'Test 1 no pasado.'});

const result2 = repeat('Pim pam toma Lacasitos', null);
console.assert(result2 === 'Pim pam toma Lacasitos'.repeat(null), {result: result2, message: 'Test 2 no pasado.'});

const result3 = repeat('Pedro! ', -3);
console.assert(result3 === '', {result: result3, message: 'Test 3 no pasado.'});

const result4 = repeat('Pedro! ', 'historias');
console.assert(result4 === 'Pedro! '.repeat('historias'), {result: result4, message: 'Test 4 no pasado.'});