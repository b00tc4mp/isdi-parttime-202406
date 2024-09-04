/* 
    -Method passes a second string and an index, the index tells one what part of the string to start at, 
        the index defaults to zero if not given as a parameter. 
    -If index is null defaults to zero 
    -Pasar tres parametros el string original, la comparación y el indice
    -Comparar cada cáracter de newString a esa posición en string para ver si son equivalentes
*/

const ChainCharacters = require("./constructor");

function startsWith(newString, index = 0) {

    let result = false;
    let counter = 0;
    if (typeof index === "null") {
        index = 0;
    }

    if (typeof index === 'number') {
        for (let i = 0; i < newString.length; i++) {
            if (this.value[index + i] === newString[i]) {
                counter++;
                if (counter === newString.length) {
                    result = true;
                }
            }
        }

        return result;
    }

}

module.exports = startsWith;