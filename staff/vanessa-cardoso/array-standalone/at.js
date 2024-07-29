/* el metodo recebe un valor inteiro y devuelve el 
elemento en esa posicion. Valores negativos 
contarán desde el último elemento del array.
*/

function at(array, index) {
    let result = "";  
    
    if (typeof index !== 'number') {
        return undefined;
    }

    if (index < 0) {
        index = array.length + index;
    } 
   
    if (index >= 0 && index < array.length) {
       result = array[index];
    }

    return result;
}

const result1 = at(['un', 'dos', 'tres'], 2);
console.assert(result1 === ['un', 'dos', 'tres'].at(2), {
    result: result1,
    message: 'Test 1 no pasado'
});

const result2 = at(['un', 'dos', 'tres'], -1);
console.assert(result2 === ['un', 'dos', 'tres'].at(-1), {
    result: result2,
    message: 'Test 2 no pasado'
});

const result3 = at(['un', 'dos', 'tres'], 3); //hace equivalencia como se el index fora negativo.
console.assert(result3 === ['un', 'dos', 'tres'].at(3), {
    result: result3,
    message: 'Test 3 no pasado'
});