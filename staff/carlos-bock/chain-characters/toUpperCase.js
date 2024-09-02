// done

//for the purposes of this class assume we are working in UTF 8
//limit scope of this exercise to spanish and english characters. 
//option 1 is find and map the relevant ascii
//option 2 is find and map UFT-8
//option 3 map too strings with spanish/english alphabet in lower and uppper case


//Esta función toma los valores de un string en letras minúsculas y las convierte en mayúsculas
//Tenemos que correr y asignar valores si el valor de oldString[i] es igual a valor de upperCase[]
// string[i]

const ChainCharacters = require("./constructor");

function toUpperCase() {
    const lowerCase = "aábcdeéfghiíjklmnñoópqrstuúvwxyz.,- ";
    const upperCase = "AÁBCDEÉFGHIÍJKLMNÑOÓPQRSTUÚVWXYZ.,- ";
    let newString = "";

    for (let i = 0; i < this.length; i++) {
        for (let j = 0; j < upperCase.length; j++) {
            if (this.value[i] === lowerCase[j]) {
                newString +=upperCase[j];
            }
            else if (this.value[i] === upperCase[j]) {
                newString += upperCase[j];
            }
        }

    }
    return new ChainCharacters(newString);
}

module.exports = toUpperCase;