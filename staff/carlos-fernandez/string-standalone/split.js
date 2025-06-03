function arraysEqual(arr1, arr2) {
    if (arr1.length !== arr2.length) return false;
    for (let i = 0; i < arr1.length; i++) {
        if (arr1[i] !== arr2[i]) return false;
    }
    return true;
}

function split(str, separator, limit) {
   
    if (separator === '') {
        return str.split(''); // Usar el método incorporado para manejar este caso específico.
    }

    let newArray = [];
    let newString = "";
    let i = 0;
    
    while (i < str.length) {
        let match = true;

        // Comprobar si el separador coincide
        for (let j = 0; j < separator.length ; j++) {
            if (str[i + j] !== separator[j]) {
                match = false;
                break;
            }
        }

        // Si encontramos una coincidencia
        if (match) {
            newArray[newArray.length] = newString;
            newString = "";
            i += separator.length; // Saltar la longitud del separador
        } else {
            newString += str[i];
            i++;
        }
    }

    // Añadir la última parte
    newArray[newArray.length] = newString;

    return newArray;
}

const result1 = split('Deep house techno', 'De');
const expected1 = 'Deep house techno'.split('De');
console.assert(arraysEqual(result1, expected1), { result: result1, message: 'Test 1 no pasado' });

const result2 = split('El detectiu Conan', '');
const expected2 = 'El detectiu Conan'.split('');
console.assert(arraysEqual(result2, expected2), { result: result2, message: 'Test 2 no pasado' });

const result3 = split('Shinoshuke Nohara', ' ');
const expected3 = 'Shinosuke Nohara'.split(' ');
console.assert(arraysEqual(result2, expected2), { result: result2, message: 'Test 2 no pasado' });

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// EXPLICACION DEL CÓDIGO 

/*
    Esta función agarra el string y lo corta en cuanto encuentra una coincidencia con separator. 
    Además, lo corta en tantas partes como index haya.

    Para ello, hay que:
        1) Crear una array vacía.
        2) Iterar el string. Si NO coincide con separator, añadirlo a esta nueva array creada anteriormente en forma de string. 
        3) Toda coincidencia entre string y separator no puede aparecer en la nueva array. 
        4) Lo que venga detrás de esa coincidencia, añadirlo a una nueva string dentro de la array anteriormente creada. 
        5) El tercer parámetro de esta función (limit) nos indicará en cuántas strings queremos separar la array. Si le hemos dicho que nos separe el 
           string por espacios (' ') y le hemos puesto el límite en 2, nos devolverá las 2 primeras palabras. Si le hemos dicho que nos separe el string
           por carácteres ('') con limit =2, nos devolverá los 2 primeros carácteres. 

        Si limit = null: devolverá un array con único string.
        Si separator no existe: devolverá un array con único string.
        Si limit = 0: devolverá un array vacío.
        Si limit > que los posibles cortes, limit será igual al máximo de cortes que se puedan hacer. 

        EJEMPLO: 

        'Si saben como me pongo pa que me invitan'.split(' ', 25)
        El límite es 9, porque al separarlo por espacios, sólo se puede separar en 9 palabras. Al darle un limit = 25, como máximo lo separará en 9.
        
*/

// str = string sobre la que trabajaremos
// separator = string sobre la que vamos a separar la main string
// limit = límite de strings que va a devolver en el array
