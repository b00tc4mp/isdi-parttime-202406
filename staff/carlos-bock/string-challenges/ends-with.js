// needs work

/*

    -Method passes two parameters on string a searchString and an end position
    -"The end position at which searchString is expected to be found (the index of searchString's last character plus 1). Defaults to str.length."

    -Si el indice es null devolver un resultado falso 
    -Si el parametro de indice es igual a el segundo string + 1, el resultado es cierto
    -Usar un for loop para comparar los valores

*/
function endsWith(string,ending) {

    if (typeof ending != 'string'){
        return false;
    }
    for (i = 0; i < ending.length; i++) {
        if (string[string.length-ending.length+i] !==ending[i]){
            return false;
        } 
        return true;
    }
}



const string = 'Cats are the best!';
const string2 = 'Madrid es la mejor ciudad del mundo';
    
const result1 = endsWith(string, 'best!');
console.assert(result1 === string.endsWith('best!'), {
    result: result1,
    message: "Test 1 No pasado ",
});


const result2 = endsWith(string2, 'mundo');
console.assert(result2 === string2.endsWith('mundo'), {
    result: result2,
    message: "Test 2 No pasado ",
});

//debugger
const result3 = endsWith(string2, 'test');
console.assert(result3 === string2.endsWith('test'), {
    result: result3,
    message: "Test 3 No pasado ",
});

const result4 = endsWith(string);
console.assert(result4 === string.endsWith(), {
    result: result4,
    message: "Test 4 No pasado ",
});


