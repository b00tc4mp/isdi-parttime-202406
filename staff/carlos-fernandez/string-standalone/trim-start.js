// string.trimStart()
// Version standalone

function trimStart(input) {

    let string = String(input);
    let newInput = "";
    let startTrimming = false;

    for (let i = 0; i < string.length; i++) {

        if (!startTrimming && string[i] !== " ") {
            startTrimming = true;
        }
        
        if (startTrimming) {
            newInput += string[i];
        }
    }

    return newInput;
}

let result1 = trimStart(' Siuu');
console.assert(result1 === ' Siuu'.trimStart(), {result: result1, message: 'Test 1 no pasado.'});

let result2 = trimStart('  Las manzanas como se acuestan para tener más manzanas?       ');
console.assert(result2 === '  Las manzanas como se acuestan para tener más manzanas?       '.trimStart(), {result: result2, message: 'Test 2 no pasado.'});

let result3 = trimStart(9);
console.assert(result3 === '9'.trimStart(), {result: result3, message: 'Test 3 no pasado.'});

// Este método elimina los espacios que haya al inicio de la string.

/* Hay que saber en qué posición se encuentra la primera letra del string y hacer una nueva 
string con el contenido que aparece a partir de esa posición.*/

// EXPLICACIÓN DEL CÓDIGO

        // Hacemos que cualquier input se convierta en string. 

        // Encuentra el primer carácter que no sea un espacio.

        /* Si startTrimming es lo contrario al ya declarado (si se inicializa en false, lo pasamos a true) y 
        ADEMÁS el indexado de string NO es un carácter VACÍO: startTrimming será true. */

        /*El primer if no se cumplirá, porque string[i] sí es un carácter vacío. Por lo tanto volverà al inicio y el loop
        dará otra vuelta. Siendo startTrimming = false aún. */

        /* Que startTrimming sea true, significa que el carácter encontrado es una letra o un número, por lo tanto lo podemos
        añadir a la newString*/ 
        // Una vez que empiezas a recortar, añade todos los caracteres a la nueva cadena

