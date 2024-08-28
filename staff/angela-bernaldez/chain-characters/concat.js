const ChainCharacters = require("./constructor.js")

function concat(...strs) {

    // strs arguments are the parameters to pass to the concat method 
    // those parameters are specific to the method
    // and do not need to be passed to ChainCharacters when instanciating a new object (only value is needed)

    let result = this.value
    for (let i=0; i < strs.length; i++) {
        result += strs[i]
    }

    return new ChainCharacters(result)
}

module.exports = concat



