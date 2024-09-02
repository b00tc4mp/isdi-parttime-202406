// posiblemente pegar el código original 
//si es numero o null meter toda la frase en un array
//split 
// se resive un string y un patron
// recorrer candena
// si se encuentra patron ignoramos ese patron y creamos un array nuevo que tenga 
// meter en arrary caracter que esta antes y despues 
// toma paremtro y parte un string en un array a base de ese parametro

// "hola que tal" --> split("l")["ho", " a que tap"]
// "hola" --> hola.length = 4 ; hola[hola.length - 1] = "a"

const ChainCharacters = require("./constructor");

function split(pattern) {
    const newArray = [];
    let tempString = new ChainCharacters("");
    

    for (let i = 0; i < this.length; i++) {
        
        if (pattern === ""){
            newArray[i] = this.value[i] //para separar por caracteres
            tempString.value = ""; 
        }

        else if (i === this.length -1 && this.value[this.length-1] !== pattern  ){
            tempString.value += this.value[i];
            newArray[newArray.length] = tempString.value;
        }
        
        else if (pattern === this.value[i] || i === this.length -1  ){ 
            newArray[newArray.length] = tempString.value;
            tempString.value = ""; 
        }

        else {
            tempString += this.value[i];
            //si no toca dividir, ir construyendo tempString
        }
    }
    
    return newArray;
}

module.exports = split;