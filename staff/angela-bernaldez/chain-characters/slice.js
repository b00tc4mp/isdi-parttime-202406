//str.slice(indexStart, indexEnd)
//Version stand alone!
function slice(indexStart, indexEnd = this.length) {

    let result = ''

    if (indexStart === undefined) indexStart = 0

    if (indexStart < 0) indexStart = Math.max(0, this.length + indexStart)
    if (indexEnd < 0) indexEnd = Math.max(0, this.length + indexEnd)

    if (indexStart > this.length) indexStart = this.length
    if (indexEnd > this.length) indexEnd = this.length
    if (indexStart > indexEnd) return ""


    for (let i = indexStart; i < indexEnd; i++) {
        result += this.value[i]
    }

    this.value = result
    this.length = this.value.length

    return result 
}

module.exports = slice






