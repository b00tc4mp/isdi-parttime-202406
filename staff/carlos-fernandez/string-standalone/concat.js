// standalone version 
// str.concat()

function concat(...string) {

    let result = ''
    for (let i=0; i < string.length; i++) {
        result += string[i]
    }
    return result 
};

const result1 = concat('Emisario ', 'gorgonita');
console.assert(result1 === 'Emisario '.concat('gorgonita'), { result: result1, message: 'Test 1 no pasado' });

const result2 = concat('Ash ', 'Ketchum');
console.assert(result2 === 'Ash '.concat('Ketchum'), { result: result2, message: 'Test 2 no pasado' });

const result3 = concat('Pueblo', 'Paleta');
console.assert(result3 === 'Pueblo'.concat('Paleta'), { result: result3, message: 'Test 3 no pasado' });