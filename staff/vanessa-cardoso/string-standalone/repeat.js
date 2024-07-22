function repeat(string, value) {

    //verificar se "value é numero
    //repetir a "string" o numero de vezes que value receber como argumento.


    let result = value
    if (value < 0 || value === null) {
        result = false;
    }
    else if (value > 0) {
        result = value;
    }

    let repeat = '';
    for (let i = 0; i < value; i++) {
        repeat += string;
    }
    return repeat;
}


const repeatResult1 = repeat("Hello", 3);
console.assert(repeatResult1 === "HelloHelloHello", {result: repeatResult1, message: "Test 1 no pasado"});

const repeatResult2 = repeat("Hola", 2);
console.assert(repeatResult2 === "HolaHola", {result: repeatResult2, message: "Test 2 no pasado"});

const repeatResult3 = repeat("casoSinIndice", null);
console.assert(repeatResult3 === "", {result: repeatResult3, message: "Test 3 no pasado"});

