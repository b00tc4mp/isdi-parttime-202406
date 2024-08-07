
//si es numero o null meter toda la frase en un array
//split 
// se resive un string y un patron
// recorrer candena
// si se encuentra patron ignoramos ese patron y creamos un array nuevo que tenga 
// meter en arrary caracter que esta antes y despues 
// toma paremtro y parte un string en un array a base de ese parametro

// "hola que tal" --> split("l")["ho", " a que tap"]
// "hola" --> hola.length = 4 ; hola[hola.length - 1] = "a"


function split(string, pattern) {
    const newArray = [];
    let tempString = "";

    for (let i = 0; i < string.length; i++) {
        
        if (pattern === ""){
            newArray[i] = string[i]; //para separar por caracteres
            tempString = ""; 
        }

        else if (i === string.length -1 && string[string.length-1] !== pattern  ){
            tempString += string[i];
            newArray[newArray.length] = tempString;
        }
        
        else if (pattern === string[i] || i === string.length -1  ){ 
            newArray[newArray.length] = tempString;
            tempString = ""; 
        }

        else {
            tempString += string[i];
            //si no toca dividir, ir construyendo tempString
        }
    }
    
    return newArray;
}

function compare(array1, array2) {
    let result = true;
    let i = 0;
    if (array1.length !== array2.length) return false;
    while (i < array1.length) {
        if (array1[i] !== array2[i]) {
            result = false;
        }
        i++;
    }
    return result;
}

const str = 'Esta es una oración que tiene que estar split.';
const pattern = "";
const pattern2 = " ";
const pattern3 = "q";
const pattern4 = "e";

const result1 = split(str, pattern);
const result2 = split(str, pattern2);
const result3 = split(str, pattern3);
const result4 = split(str, pattern4);

console.assert(compare(result1, str.split(pattern)),{
  result: result1,
  message: "Test 1 No pasado ",
});


console.assert(compare(result2, str.split(pattern2)),{
    result: result2,
    message: "Test 2 No pasado ",
  });

console.assert(compare(result3, str.split(pattern3)),{
    result: result3,
    message: "Test 3 No pasado ",
  });

console.assert(compare(result4, str.split(pattern4)),{
    result: result4,
    message: "Test 3 No pasado ",
  });