const Biblio = require("./constructor.js")

function reverse() {

    if (!(this instanceof Biblio)) {
        throw new TypeError('The provided object needs to have been created with Biblio constructor')
    }
    
    let start = 0 
    let end = this.length - 1

    while (start < end) {
        let temp = this[start]
        this[start] = this[end]
        this[end] = temp 

        // increment start and decrease end to move towards the middle and cover all elements
        start++
        end--
    }

    return this
}

module.exports = reverse 