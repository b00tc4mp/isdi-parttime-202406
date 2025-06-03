//done

//remueve espacios en blanco del string que estan en los extremos
//correr string para econtrar espacio 
//crear nuevo string que ignora los espacios al principio y al final 
//Si character nos es espacio guardarlo
//retornar nuevo string

function trim(string){
    let newString = "";
    let index = 0;
    let lastIndex = 0
    for (let i = 0; i < string.length; i++) {
        if (string[i] !== " ") {
            index = i;
            break;
            //newString += string[i];            
        }
    }
    
    for (let i = string.length-1; i > 0; i--) {
        if (string[i] !== " ") {
            lastIndex = i;
            break;
        }
    }

    for (let i = index; i <= lastIndex; i++) {
        newString += string[i];
    }
    
    return newString;
}


const oldString = "    Este es un string    ";

const result1 = trim(oldString);
console.assert(result1 === oldString.trim(),{
  result: result1,
  message: "Test 1 No pasado ",
});