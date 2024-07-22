//for the purposes of this class assume we are working in UTF 8
//limit scope of this exercise to spanish and english characters. 
//option 1 is find and map the relevant ascii
//option 2 is find and map UFT-8
//option 3 map too strings with spanish/english alphabet in lower and uppper case


//Esta función toma los valores de un string en letras mayúsculas y las convierte en minúsculas
//Tenemos que correr y asignar valores si el valor de oldString[i] es igual a valor de upperCase[]
// string[i]

new function toLowerCase(string) {
    let lowerCase = ["a", "á", "b", "c", "d", "e", "é", "f", "g", "h", "i", "í", "j", "k", "l", "m", "n", "ñ", "o", "ó", "p", "q", "r", "s", "t", "u", "ú", "v", "w", "x", "y", "z"];
    let upperCase = ["A", "Á", "B", "C", "D", "E", "É", "F", "G", "H", "I", "Í", "J", "K", "L", "M", "N", "Ñ", "O", "Ó", "P", "Q", "R", "S", "T", "U", "Ú", "V", "W", "X", "Y", "Z"];
    let newString = [];

    for (let i = 0; i < upperCase.length; i++) {

        for (let j = 0; j < string.length; j++) {
            if (upperCase[i + j] === string[j]) {

                newString[j] = lowerCase[i];

            }
        }

    }

}

let oldString = "THIS IS A STRING WITH UPPERCASE";

console.log(toLowerCase(oldString));





