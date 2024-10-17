const Biblio = require("./constructor.js")

function slice(start = 0, end = this.length) {
    
    let newArray = new Biblio()

    start = start < 0 ? Math.max(start + this.length, 0) : start;
    end = end < 0 ? end + this.length : Math.min(end, this.length); 

    if (start >= end) return newArray

    for (let i = start; i < end; i++) {
        newArray[newArray.length] = this[i]
        newArray.length++
    }

    return newArray
}

module.exports = slice 