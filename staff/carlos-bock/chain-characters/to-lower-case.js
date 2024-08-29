// done  

//for the purposes of this class assume we are working in UTF 8
//limit scope of this exercise to spanish and english characters. 
//option 1 is find and map the relevant ascii
//option 2 is find and map UFT-8
//option 3 map too strings with spanish/english alphabet in lower and uppper case


//Esta función toma los valores de un string en letras mayúsculas y las convierte en minúsculas
//Tenemos que correr y asignar valores si el valor de oldString[i] es igual a valor de upperCase[]
// string[i]

function toLowerCase(string) {
    const lowerCase = "aábcdeéfghiíjklmnñoópqrstuúvwxyz ";
    const upperCase = "AÁBCDEÉFGHIÍJKLMNÑOÓPQRSTUÚVWXYZ ";
    let newString = "";

    for (let i = 0; i < string.length; i++) {
        for (let j = 0; j < upperCase.length; j++) {
            if (string[i] === lowerCase[j]) {
                newString +=lowerCase[j];
            }
            else if(string[i] === upperCase[j]) {
                newString += lowerCase[j];
            }
        }

    }
    return newString;
}

const oldString = "THIS IS A STRING WITH UPPERCASE";
const oldString2 = "This Is a Test";


const result1 = toLowerCase(oldString);
console.assert(result1 === oldString.toLowerCase(),{
  result: result1,
  message: "Test 1 No pasado ",
});

const result2 = toLowerCase(oldString2);
console.assert(result2 === oldString2.toLowerCase(), {
  result: result2,
  message: "Test 2 No pasado ",
});


