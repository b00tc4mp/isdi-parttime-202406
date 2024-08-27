//str.concat(str1,...,strN) 
//Version stand alone!
function concat(...strs) {

    // strs arguments are the parameters to pass to the concat method 
    // those parameters are specific to the method
    // and do not need to be passed to ChainCharacters when instanciating a new object (only value is needed)

    for (let i=0; i < strs.length; i++) {
        this.value += strs[i]
    }

    // update length property as it has changed after modifying the value 
    this.length = this.value.length 

    return this.value 
}

module.exports = concat



