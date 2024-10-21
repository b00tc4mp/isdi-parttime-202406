function split( pattern, cortes) {
    if (this === null || this === undefined) {
        return "Error: La cadena no puede ser nula o indefinida.";
    }
    
    const str = this.toString(); // Convertir el objeto a una cadena de texto
    if (pattern === undefined || pattern === null) {
        let array = [];
        let index = 0;
        for (let a = 0; a < str.length; a++) {
            array[index] = str[a];
            index++;
        }
        return array;
    }

    if (cortes === undefined || cortes === null || cortes === 0) {
        let array = [];
        array[0] = str; // Si no hay cortes, devolvemos la cadena completa en un array
        return array;
    }

    let array = [];
    let tempString = "";
    let i = 0;
    let j = 0;
    let patternFound = "";
    let index = 0;

    while (i < str.length) {
        if (pattern[j] === str[i]) {
            patternFound += str[i];
            j++;
            if (j === pattern.length) {
                array[index] = tempString;
                index++;
                tempString = "";
                patternFound = "";
                j = 0;
                i++;
                continue;
            }
        } else {
            if (patternFound.length > 0) {
                tempString += patternFound;
                patternFound = "";
                j = 0;
            }
            tempString += str[i];
        }
        i++;
    }

    tempString += patternFound; // Añadir el patrón encontrado si está al final
    array[index] = tempString;  // Añadir la última parte de la cadena

    if (cortes > 0) {
        let result = [];
        for (let x = 0; x < cortes && x < index + 1; x++) {
            result[x] = array[x];
        }
        return result;
    }

    return array;
};

module.exports = split