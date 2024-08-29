/* 
    -Method passes a second string and an index, the index tells one what part of the string to start at, 
        the index defaults to zero if not given as a parameter. 
    -If index is null defaults to zero 
    -Pasar tres parametros el string original, la comparación y el indice
    -Comparar cada cáracter de newString a esa posición en string para ver si son equivalentes
*/


function startWith(string, newString, index = 0) {

    let result = false;
    let counter = 0;
    if (typeof index === "null") {
        index = 0;
    }

    if (typeof index === 'number') {
        for (let i = 0; i < newString.length; i++) {
            if (string[index + i] === newString[i]) {
                counter++;
                if (counter === newString.length) {
                    result = true;
                }
            }
        }

        return result;
    }

}



const string = "This is a long string";

const result1 = startWith(string, "This", 0);
console.assert(result1 === string.startsWith("This", 0), {
    result: result1,
    message: "Test 1 No pasado ",
});

const result2 = startWith(string, "hola");
console.assert(result2 === string.startsWith("hola"), {
    result: result2,
    message: "Test 2 No pasado ",
});

const result3 = startWith(string, "is", 5);
console.assert(result3 === string.startsWith("is", 5), {
    result: result3,
    message: "Test 3 No pasado ",
});
