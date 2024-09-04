/*
    -Method passes two parameters on string a searchString and an end position
    -"The end position at which searchString is expected to be found (the index of searchString's last character plus 1). Defaults to str.length."
    -Si el indice es null devolver un resultado falso 
    -Si el parametro de indice es igual a el segundo string + 1, el resultado es cierto
    -Usar un for loop para comparar los valores
*/
//const ChainCharacters = require("./constructor");

function endsWith(ending) {

    if (typeof ending != 'string'){
        return false;
    }
    for (i = 0; i < ending.length; i++) {
        if (this.value[this.length-ending.length+i] !==ending[i]){
            return false;
        } 
        return true;
    }
}

module.exports = endsWith
