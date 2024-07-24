// é usado para concatenar 2 ou mais strgings, 
//devolvendo uma nova string sem alterar as originais.
//uso do parametros rest `...args` (permite que la funcion un número 
//indefinido de argumentos como un array.

function concat(...args) {
    let newconcat = "";

    for (let i = 0; i < args.length; i++) {
        newconcat += args[i]; 
        }

    return newconcat;
    

}

const result1 = concat("Buenos", "dia!");
console.assert(result1 === "Buenos".concat("dia!"), {result: result1, message: "Test 1 No pasado."});

const result2 = concat("Tudo", " ", "bem?");
console.assert(result2 === "Tudo".concat( " ", "bem?"), {result: result2, message: "Test 2 No pasado."});

const result3 = concat("Tenho", "2 ", "hermanas");
console.assert(result3 === "Tenho".concat(  "2 ", "hermanas"), {result: result3, message: "Test 3 No pasado."});


