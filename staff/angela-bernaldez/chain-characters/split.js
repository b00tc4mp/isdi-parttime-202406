//str.split(separator, limit)
//Version stand alone!
function split(separator, limit = undefined) {

    let result = []
    let currentSegment = ''
    let segmentCount = 0 
    let resultLength = 0 
    let i = 0 

    while (i < this.length | segmentCount > limit - 1) {
        if (this.value[i] === separator) {
            result[resultLength] = currentSegment;
            resultLength++;
            // clear currentSegment
            currentSegment = ''
            segmentCount++
            if (limit !== undefined && segmentCount > limit - 1) {
                break;
            }
        } else {
            currentSegment += this.value[i]
        }
        i++
    }

    // Add the last segment if it hasn't exceeded the limit
    if (limit === undefined || segmentCount < limit) {
        result[resultLength] = currentSegment;
    }

    this.value = result
    this.length = this.value.length

    return result;
}

module.exports = split




