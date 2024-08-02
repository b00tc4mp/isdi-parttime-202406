function stringTrim(string) {
    let start = 0;
    let end = string.length - 1;

    // Debemos encontrar el primer carácter no espacio desde el principio
    while (start <= end && string[start] === ' ') {
        start++;
    }

    // Encontrando el primer carácter no espacio desde el final
    while (end >= start && string[end] === ' ') {
        end--;
    }

    // Construir la cadena resultante
    let result = '';
    for (let i = start; i <= end; i++) {
        result += string[i];
    }

    return result;
}

  
  const result1 = stringTrim("  dosEspacios  ")
  console.assert(result1 === "  dosEspacios  ".trim(2), {result: result1, message: "Test 1 No pasado "})