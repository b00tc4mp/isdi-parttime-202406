
function shift () {
    if (this.length === 0) return undefined; 

    const firstElement = this[0]; 
    for (let i = 1; i < this.length; i++) {
        this[i - 1] = this[i];
    }
    delete this[this.length - 1]; 
    this.length = this.length - 1;
    return firstElement; 
}

module.exports = shift
