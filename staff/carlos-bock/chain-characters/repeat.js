// tiene dos paremetros de entrada
// un parametro nos indica cuantas veces repiter el string de entrada
// devuelve string nuevo 

const ChainCharacters = require("./constructor");

function repeat(repeatNum) {
    let newString = "";

    for (let i = 0; i < repeatNum; i++) {
        newString += this.value;
    }
    return new ChainCharacters(newString);
}

module.exports = repeat;