function split(string, splicer, limit = Infinity) {
    let holder = [];        // Array para almacenar las partes
    let actPart = '';       // Variable para acumular caracteres
    let partCount = 0;      // Contador de partes

    for (let i = 0; i < string.length; i++) {
        // Verificar el separador
        if (string[i] === splicer) {
            // Solo agrega actPart a holder si no está vacío
            if (actPart.length > 0) {
                // Crear un nuevo array para `holder` con el tamaño necesario
                let newHolder = new Array(holder.length + 1);
                
                // Copiar los elementos de `holder` al nuevo array
                for (let j = 0; j < holder.length; j++) {
                    newHolder[j] = holder[j];
                }
                // Añadir `actPart` al nuevo array
                newHolder[holder.length] = actPart;
                
                holder = newHolder; // Actualizar `holder` al nuevo array
                actPart = ''; // Reiniciar actPart para la siguiente parte

                partCount++;
                // Verificar si alcanzamos el límite
                if (partCount >= limit - 1) {
                    break;
                }
            }
        } else {
            actPart += string[i]; // Acumula el carácter actual en actPart
        }
    }

    // Agregar la última parte solo si no está vacía al acabar el bucle
    if (actPart.length > 0) {
        // Crear un nuevo array para `holder` con el tamaño necesario
        let newHolder = new Array(holder.length + 1);
        
        // Copiar los elementos de `holder` al nuevo array
        for (let j = 0; j < holder.length; j++) {
            newHolder[j] = holder[j];
        }
        // Añadir `actPart` al nuevo array
        newHolder[holder.length] = actPart;
        
        holder = newHolder; // Actualizar `holder` al nuevo array
    }

    return holder;
}


const result1 = split('apple,banana,orange', ',');
console.assert(result1[0] === 'apple' && result1[1] === 'banana' && result1[2] === 'orange', {
    result: result1,
    message: 'Test 1 No superado',
});

const result2 = split(',Inicio,medio,fin,', ',');
console.assert(result2[0] === 'Inicio' && result2[1] === 'medio' && result2[2] === 'fin' && result2.length === 3, {
    result: result2,
    message: 'Test 2 no superado',
});

const result3 = split('sinSeparadores ni nada por el estilo', ',');
console.assert(result3[0] === 'sinSeparadores ni nada por el estilo' && result3.length === 1, {
    result: result3,
    message: 'Test 3 no superado',
});