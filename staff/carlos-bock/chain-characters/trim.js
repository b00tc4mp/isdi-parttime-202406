//done

//remueve espacios en blanco del string que estan en los extremos
//correr string para econtrar espacio 
//crear nuevo string que ignora los espacios al principio y al final 
//Si character nos es espacio guardarlo
//retornar nuevo string

const ChainCharacters = require("./constructor");

function trim(){
    let newString = "";
    let index = 0;
    let lastIndex = 0
    for (let i = 0; i < this.length; i++) {
        if (this.value[i] !== " ") {
            index = i;
            break;
            //newString += string[i];            
        }
    }
    
    for (let i = this.length-1; i > 0; i--) {
        if (this.value[i] !== " ") {
            lastIndex = i;
            break;
        }
    }

    for (let i = index; i <= lastIndex; i++) {
        newString += this.value[i];
    }
    
    return new ChainCharacters(newString);
}

module.exports = trim;