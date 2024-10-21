const Biblio = require("./constructor.js")

function shift() {

    // need to store the first element of the array before modifying the original array
    let result = this[0]

    // move all elements one position to the left - by looping over the original array
    for (let i = 0; i < this.length - 1 ; i++) this[i] = this[i + 1]

    // then remove the last element, thus, reducing the length of the array by one unit
    this.length--

    return result 
}

module.exports = shift