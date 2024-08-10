

// tiene dos paremetros de entrada
// un parametro nos indica cuantas veces repiter el string de entrada
// devuelve string nuevo 

function repeat(string, repeatNum) {
    let newString = "";

    for (let i = 0; i < repeatNum; i++) {
        newString += string;
    }
    return newString
}

const string1= "Hola! "

const result1 = repeat(string1, 3);
console.assert(result1 === string1.repeat(3),{
  result: result1,
  message: "Test 1 No pasado ",
});