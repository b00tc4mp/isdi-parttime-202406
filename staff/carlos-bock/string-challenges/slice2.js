//versión 2 tiene en cuenta las variaciones de parametros
//igual faltaran casos raros como por ejemplo, null, o si los valores se salen del los limites del string.

//metodo acepta tanto un parametro como dos para el indice. 
//si hay un parametro de indice crea un nuevo string con ese valor y el resto de la cadena
//si hay dos parametros usa el primer indice hasta llegar al segundo para crear el nuevo string
//si los indices sone negativos se cuentan desde el final del string original. 
//devolver string nuevo. 

function slice(string,...index) {
    let newString = "";
    let [number1, number2] = index;

    if (number1 === undefined) {
      number1 = 0;
    }

    if (number2 === undefined) {
      number2 = string.length;
    }

    if (number1 < 0) {
      number1 = string1.length + number1;
    }

    if (number2 < 0) {
      number2 = string1.length + number2;
    }

    for (let i = number1; i < number2; i++) {
            newString += string[i];       
    }
    return newString;
}



const string1 = "Madrid es la mejor ciudad del mundo."



const result1 = slice(string1, 1);
console.assert(result1 === string1.slice(1),{
  result: result1,
  message: "Test 1 No pasado ",
});

const result2 = slice(string1, 1, 3 );
console.assert(result2 === string1.slice(1, 3),{
  result: result2,
  message: "Test 2 No pasado ",
});

const result3 = slice(string1, -3, -1 );
console.assert(result3 === string1.slice(-3, -1),{
  result: result3,
  message: "Test 3 No pasado ",
});