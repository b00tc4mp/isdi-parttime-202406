//str.repeat(count)
//Version stand alone!
function repeat(count) {

    if (count < 0 || count == Infinity) {
        throw new RangeError(`Invalid count value: ${count}`);
    }

    count = Math.floor(count)

    let result = ''
    for (let i = 0; i < count; i++) {
        result += this.value
    }

    this.value = result
    this.length = this.value.length

    return result   
}

module.exports = repeat




