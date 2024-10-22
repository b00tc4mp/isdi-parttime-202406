const Biblio = require("./constructor.js")

function indexOf(searchElement, fromIndex = 0) {

    if (!(this instanceof Biblio)) {
        throw new TypeError('The provided object needs to have been created with Biblio constructor')
    }

    // handle negative cases
    if (fromIndex < 0) fromIndex = Math.max(fromIndex + this.length, 0)

    // handle fromIndex being outside array.length 
    if (fromIndex > this.length) return -1

    for (let i = fromIndex; i < this.length; i++) {
        if (this[i] === searchElement) return i
    }
    
    return -1
}

module.exports = indexOf