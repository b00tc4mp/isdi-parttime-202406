const Biblio = require("./constructor.js")

function includes(value, fromIndex = 0) {

    if (!(this instanceof Biblio)) {
        throw new TypeError('The provided object needs to have been created with Biblio constructor')
    }

    let included = false

    // check fromIndex value
    if (fromIndex >= this.length) return included

    // negative cases 
    if (fromIndex < 0) fromIndex += this.length

    // when fromIndex < -array.length
    fromIndex = Math.max(fromIndex, 0)

    for (let i = fromIndex; i < this.length; i++) {
        if (this[i] === value) return true
    }

    return included
}
  
module.exports = includes;