function endsWith(searchString, endPosition = this.length) {
  let subsString = "";

  for (let i = 0; i < searchString.length; i++) {
    subsString += this.value[endPosition - searchString.length + i];
  }

  return subsString === searchString;
}

module.exports = endsWith;
