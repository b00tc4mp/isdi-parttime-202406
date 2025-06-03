function split(str, pattern, cortes) {
    if (str === null || str === undefined) {
        return "Error: La cadena no puede ser nula o indefinida.";
    }

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
}



        const paragraph = ("Carlos, 28 años") 
        const result1 = split(paragraph, ",");
        console.assert(result1[0] === "Carlos" && result1[1] === "28 años", {
        result: result1,
        message: "Test 1 No pasado",
        });
        
        const result2 = split("Monday,Tuesday,Wednesday,Thursday", ",");
        console.assert(result2[0] === "Monday" && result2[1] === "Tuesday" && result2[2] === "Wednesday" && result2[3] === "Thursday", {
        result: result2,
        message: "Test 2 No pasado",
        });
        
        const result3 = split("Monday,Tuesday,Wednesday,Thursday", ",", 2);
        console.assert(result3[0] === "Monday" && result3[1] === "Tuesday", {
        result: result3,
        message: "Test 3 No pasado",
        });
        
        const result4 = split("1 2 3 4 5 6", " ", 3);
        console.assert(result4[0] === "1" && result4[1] === "2" && result4[2] === "3", {
        result: result4,
        message: "Test 4 No pasado",
        });
        
        const result5 = split("2024-07-20", "-", 3);
        console.assert(result5[0] === "2024" && result5[1] === "07" && result5[2] === "20" && result5[3] === undefined, {
        result: result5,
        message: "Test 5 No pasado",
        });
        
        const result6 = split("2024-07-20", " ", 3);
        console.assert(result6[0] === "2024-07-20", {
        result: result6,
        message: "Test 6 No pasado",
        });
        
        

