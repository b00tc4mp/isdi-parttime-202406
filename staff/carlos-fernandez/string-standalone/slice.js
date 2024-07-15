// str.slice(start, end)
// Version standAlone


/* Este método devuelve una nueva string o array, con la parte que nosotros queramos. Empieza a iterar en el primer parámetro
y acaba en el segundo parámetro. */

/* Crear una variable vacía donde iremos introduciendo los carácteres que se encuentren en la posición indexada que marca el
segundo parámetro hasta el final. */

/* En caso de que no hubiera segundo parámetro, se iteraría hasta str.length. */



// str.slice(start, end)
// Version standAlone


/* Este método devuelve una nueva string o array, con la parte que nosotros queramos. Empieza a iterar en el primer parámetro
y acaba en el segundo parámetro. */

/* Crear una variable vacía (newString) donde iremos introduciendo los carácteres que se encuentren en la posición indexada que marca START hasta el
index que nos marca END. */

/*  1) En caso de que no hubiera segundo parámetro, se iteraría hasta str.length. 
    2) En caso que end < 0, el final sería INPUT.LENGTH + END;
    3) En caso que end > INPUT.LENGTH, end sería igual a INPUT.LENGTH;
    4) En caso que end = undefined, end sería igual a INPUT.LENGTH;
    */



function slice(input, start, end) {
    // Determinar el tipo de input para iniciar la variable newString en función de si es string o array.
    let isArray = Array.isArray(input);
    let newString = isArray ? [] : '';

    // Determinar valores por defecto y negativos para end
    if (end === undefined || end > input.length) {
        end = input.length;
    }
    if (end < 0) {
        end = input.length + end;
    }

    // Recorrer el input desde start hasta end
    for (let i = start; i < end; i++) {
        if (isArray) {
            newString.push(input[i]);
        } else {
            newString += input[i];
        }
    }
    return newString;
}



const result1 = slice('A quien no le va a gustar un imperio romano del siglo I', 26, 55);
console.assert(result1 === 'A quien no le va a gustar un imperio romano del siglo I'.slice(26), {result: result1, message: 'Test 1 no pasado.'});

const result2 = slice('Pim pam toma lacasitos', 13,);
console.assert(result2 === 'Pim pam toma lacasitos'.slice(13), {result: result2, message: 'Test 2 no pasado.'});

const result3 = slice(['Cuidao', 'con', 'el', 'barro'], 0, 2);
console.assert(JSON.stringify(result3) === JSON.stringify(['Cuidao', 'con', 'el', 'barro'].slice(0, 2)), { result: result3, message: 'Test 3 no pasado.' });
