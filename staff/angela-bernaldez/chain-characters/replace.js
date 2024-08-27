//str.replace(pattern, replacement)
//Version stand alone!
function replace(pattern, replacement) {

    if (typeof pattern !== 'string') {
        throw new Error('Pattern must be a string');
    }

    let result = ''
  
    let i = 0
    let found = false

    while (i < this.length) {

        // Compare the current segment with the pattern
        let j = 0;
        while (j < pattern.length && i + j < this.length && this.value[i + j] === pattern[j]) {
            j++;
        }
        // If patter is found, it is replaced and index is adjusted
        if (j === pattern.length) {
            result += replacement;
            i += pattern.length;
            found = true;
        } else {
            // If pattern not found, current segment is added to the result
            result += this.value[i];
            i++;
        }
    }  

    this.value = result
    this.length = this.value.length

    return result 
}

module.exports = replace




