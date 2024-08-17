
function repeat(timesRepeated) {
    if (timesRepeated == Infinity) throw new RangeError;
    timesRepeated = Math.floor(timesRepeated)
    if (timesRepeated < 0) return new RangeError
    if (timesRepeated === 0) return '';
    let resultString =''
    for (let i = 0; i < timesRepeated; i++) {

    resultString += this.value 

}
return resultString;
}
module.exports = repeat