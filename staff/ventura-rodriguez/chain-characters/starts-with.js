function startsWith(searchString) {
  let result = true;
  for (let i = 0; i < searchString.length; i++) {
    if (this.value[i] !== searchString[i]) {
      result = false;
    }
  }
  return result;
}

module.exports = startsWith;
