function pop() {

    // need to store the last element of the array before modifying the original array
    let result = this[this.length - 1]

    // shorten the original array by one unit - thus, eliminating the last element
    this.length--

    return result

}

module.exports = pop