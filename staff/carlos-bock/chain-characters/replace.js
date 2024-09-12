// metodo toma el primer paratro y lo reemplaza por el segundo en el string. 
//me imagino que queremos recorrer el string para buscar el primer prametro
//luego querré crear un nuevo string que contiene lo que venía tanto antes como después del parametro
//usar dos loops para recorrer y encontrar valores. 
//string[antes de parametro] + parametro + string después de parametro
//si parametro === a string[i] entonces newString = string[string.length-index] + parametro + string[segunda mitad]
//resolver primero string al principio 

const ChainCharacters = require("./constructor");

function replace(oldPhrase, newPhrase) { //removed string parameter
    const oldString = this.value;
    let result = false;
    let newString ="";

    if (newPhrase === null || newPhrase === "number" ) return undefined; //need to return undefined


    for (let i = 0; i < oldString.length; i++) {
            let solution = true;

         for (let j = 0; j < oldPhrase.length; j++) {
            if (this.value[i + j] !== oldPhrase[j]){   
               solution = false;
               break;                
            } 

        }

        if (solution &&= !result) {
            newString += newPhrase;
            i += oldPhrase.length - 1;
            result = true;
        } else {
            newString += this.value[i];
        }
    }

    return new ChainCharacters(newString);
}

module.exports = replace;