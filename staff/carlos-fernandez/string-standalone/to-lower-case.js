function toLowerCase(str) {
    // Definir las letras mayúsculas y minúsculas manualmente
    let upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    let lowerCase = "abcdefghijklmnopqrstuvwxyz";
    
    // Inicializar una nueva cadena vacía para almacenar el resultado
    let newStr = "";
   
    // Recorrer cada carácter de la cadena de entrada
    for (let i = 0; i < str.length; i++) {
        let found = false;
        
        // Buscar la correspondencia de la letra mayúscula en el alfabeto definido
        for (let j = 0; j < upperCase.length; j++) {
            if (str[i] === upperCase[j]) {
                newStr += lowerCase[j];
                found = true;
                break;
            }
        }
        
        // Si no es una letra mayúscula, agregar el carácter tal cual
        
        if (!found) {
            newStr += str[i];
        }
    }
    
    // Devolver la nueva cadena con todas las mayúsculas convertidas a minúsculas
    return newStr;
}

const result1 = toLowerCase("AgüIta freskiTa");
console.assert(result1 === "AgüIta freskiTa".toLowerCase(), { result: result1, message: "Test 1 No pasado ",});

const result2 = toLowerCase("DEMON slayer");
console.assert(result2 === "DEMON slayer".toLowerCase(), { result: result1, message: "Test 1 No pasado ",});

const result3 = toLowerCase("JavasCripT ES DiveRtido");
console.assert(result3 === "JavasCripT ES DiveRtido".toLowerCase(), { result: result1, message: "Test 1 No pasado ",});