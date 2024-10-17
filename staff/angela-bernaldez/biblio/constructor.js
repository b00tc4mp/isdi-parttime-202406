function Biblio(array) {

    let _length = 0 

    while (arguments[_length] !== undefined) _length++
    this.length = _length

    for (let i = 0; i < arguments.length; i++) {
        this[i] = arguments[i]
    }
}

module.exports = Biblio 