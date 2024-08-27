function concat() {
  let concatString = this.value
  for (let i = 0; i < arguments.length; i++){
    concatString += arguments[i];
  }
  return concatString
}

module.exports = concat;