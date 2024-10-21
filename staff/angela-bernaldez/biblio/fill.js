function fill(value, start = 0, end = this.length) {

    start = start < 0 ? Math.max(start + this.length, 0) : start;
    end = end < 0 ? end + this.length : Math.min(end, this.length);

    // Return the original array if start is greater than or equal to end
    if (start >= end) return this

    // loop through array to change corresponding elements according to start and end if provided 
    // otherwise, change the whole array
    for (let i = start; i < end; i++) {
        this[i] = value
    }

    return this
}

module.exports = fill 