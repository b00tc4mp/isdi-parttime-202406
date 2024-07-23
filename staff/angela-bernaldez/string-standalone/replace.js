//str.replace(pattern, replacement)
//Version stand alone!
function replace(string, pattern, replacement) {

    if (typeof pattern !== 'string') {
        throw new Error('Pattern must be a string');
    }

    let result = ''
  
    let i = 0
    let found = false

    while (i < string.length) {

        // Compare the current segment with the pattern
        let j = 0;
        while (j < pattern.length && i + j < string.length && string[i + j] === pattern[j]) {
            j++;
        }
        // If patter is found, it is replaced and index is adjusted
        if (j === pattern.length) {
            result += replacement;
            i += pattern.length;
            found = true;
        } else {
            // If pattern not found, current segment is added to the result
            result += string[i];
            i++;
        }
    }  
    return result 
}



const paragraph = "Se me da fatal construir metodos de string"
const result1 = replace(paragraph, "fatal", "genial");
console.assert(result1 === paragraph.replace("fatal", "genial"), {
  result: result1,
  message: "Test 1 No pasado ",
});

const result2 = replace(paragraph, "fatal", "mucho peor");
console.assert(result2 === paragraph.replace("fatal", "mucho peor"), {
  result: result2,
  message: "Test 2 No pasado ",
});


