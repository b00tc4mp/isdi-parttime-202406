function trim() {
    let start = 0;
    let end = this.length - 1;
    let llena = "";
    while (start < this.length && this.value[start] === " ") {
        start++;
    }
    while (end >= 0 && this.value[end] === " ") {
        end--;
    }
    for (let i = start; i <= end; i++) {
        llena += this.value[i];
    }

    return llena;
}

module.exports = trim