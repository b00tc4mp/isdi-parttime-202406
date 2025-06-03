// metodo toma el primer paratro y lo reemplaza por el segundo en el string. 
//me imagino que queremos recorrer el string para buscar el primer prametro
//luego querré crear un nuevo string que contiene lo que venía tanto antes como después del parametro
//usar dos loops para recorrer y encontrar valores. 
//string[antes de parametro] + parametro + string después de parametro
//si parametro === a string[i] entonces newString = string[string.length-index] + parametro + string[segunda mitad]
//resolver primero string al principio 


function replace(string, oldPhrase, newPhrase) {
    const oldString = string;
    let result = false;
    let newString ="";

    if (newPhrase === null || newPhrase === "number" ) return undefined; //need to return undefined


    for (let i = 0; i < oldString.length; i++) {
            let solution = true;

         for (let j = 0; j < oldPhrase.length; j++) {
            if (string[i + j] !== oldPhrase[j]){   
               solution = false;
               break;                
            } 

        }

        if (solution &&= !result) {
            newString += newPhrase;
            i += oldPhrase.length - 1;
            result = true;
        } else {
            newString += string[i];
        }
    }

    return newString;
}

const aString = "My favorite color is blue";
const oldWord = "blue";
const newWord = "red";

const stringB = "Cual es el mejor bootcamp";
const pregunta = "Cual";
const respuesta = "ISDI";

const result1 = replace(aString, oldWord, newWord);
console.assert(result1 === aString.replace(oldWord, newWord),{
  result: result1,
  message: "Test 1 No pasado ",
});

const result2 = replace(stringB, pregunta, respuesta);
console.assert(result2 === stringB.replace(pregunta, respuesta),{
  result: result2,
  message: "Test 1 No pasado ",
});