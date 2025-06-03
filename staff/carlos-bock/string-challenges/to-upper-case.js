// done

//for the purposes of this class assume we are working in UTF 8
//limit scope of this exercise to spanish and english characters. 
//option 1 is find and map the relevant ascii
//option 2 is find and map UFT-8
//option 3 map too strings with spanish/english alphabet in lower and uppper case


//Esta función toma los valores de un string en letras minúsculas y las convierte en mayúsculas
//Tenemos que correr y asignar valores si el valor de oldString[i] es igual a valor de upperCase[]
// string[i]

function toUpperCase(string) {
    const lowerCase = "aábcdeéfghiíjklmnñoópqrstuúvwxyz.,- ";
    const upperCase = "AÁBCDEÉFGHIÍJKLMNÑOÓPQRSTUÚVWXYZ.,- ";
    let newString = "";

    for (let i = 0; i < string.length; i++) {
        for (let j = 0; j < upperCase.length; j++) {
            if (string[i] === lowerCase[j]) {
                newString +=upperCase[j];
            }
            else if (string[i] === upperCase[j]) {
                newString += upperCase[j];
            }
        }

    }
    return newString;
}

const oldString = "this is a lower case string";
const oldString2 = "This Is a Test";


const result1 = toUpperCase(oldString);
console.assert(result1 === oldString.toUpperCase(),{
  result: result1,
  message: "Test 1 No pasado ",
});

const result2 = toUpperCase(oldString2);
console.assert(result2 === oldString2.toUpperCase(), {
  result: result2,
  message: "Test 2 No pasado ",
});




