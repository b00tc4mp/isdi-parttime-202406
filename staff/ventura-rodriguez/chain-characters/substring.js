function substring(indexStart) {
  let result = "";
  for (let i = indexStart; i < this.length; i++) {
    result += this.value[i];
  }
  return result;
}

module.exports = substring;
